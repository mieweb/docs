/**
 * SearchModal Component
 *
 * A command-palette style search modal for the documentation site.
 * Uses @mieweb/ui Modal and Input components. Searches are performed
 * server-side via the Cloudflare Worker semantic search endpoint
 * (backed by Vectorize + Workers AI embeddings).
 */

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Modal, ModalHeader, ModalBody, Spinner, cn } from "@mieweb/ui";
import { Search, FileText, Hash, ArrowRight, Sparkles } from "lucide-react";

declare global {
  interface Window {
    SearchApiUrl?: string;
    BrandCode?: string;
  }
}

export interface SearchResult {
  id: string;
  title: string;
  url: string;
  snippet?: string;
  section?: string;
  score?: number;
  /** Slugified anchor (without `#`) for deep-linking to a section. */
  anchor?: string;
  /** Human-readable heading for the matching section. */
  heading?: string;
}

export interface SearchModalProps {
  /** Whether the modal is open */
  open: boolean;
  /** Callback when modal should close */
  onClose: () => void;
  /**
   * Worker search API URL. Defaults to `window.SearchApiUrl` or
   * `/api/ai-assistant/search`.
   */
  searchApiUrl?: string;
  /**
   * Brand to search within: `eh` (Enterprise Health) or `wc` (WebChart).
   * Defaults to `window.BrandCode` or `eh`.
   */
  brand?: "eh" | "wc";
  /** Callback when a result is selected */
  onSelect?: (result: SearchResult) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Additional class names */
  className?: string;
}

interface WorkerSearchResponse {
  results: Array<{
    id: string;
    title: string;
    url: string;
    section?: string;
    snippet: string;
    score: number;
    anchor?: string;
    heading?: string;
  }>;
  query: string;
  /** Content-addressed vectordb version (changes when the index is rebuilt). */
  version?: string;
}

/** Response from the `/search/answer` RAG endpoint. */
interface AnswerResponse {
  query: string;
  answer: string;
  sources: Array<{
    id: string;
    title: string;
    url: string;
    section?: string;
    snippet: string;
    score: number;
    anchor?: string;
    heading?: string;
  }>;
  grounded: boolean;
}

// ---------------------------------------------------------------------------
// Version-keyed cache
// ---------------------------------------------------------------------------
//
// Search responses are deterministic for a given (query, brand, limit) as
// long as the underlying Vectorize index does not change. The indexer writes
// a content hash to KV whenever it rebuilds; the `/search/version` endpoint
// surfaces that hash to the client. We use it as:
//
//   • a `?v=<version>` URL parameter so Cloudflare's edge cache and the
//     browser HTTP cache can hold the response ~forever, and
//   • a prefix on every `localStorage` key so stale entries from a previous
//     index version become unreachable (and are actively pruned on load).
//
// The upshot: a query like "patient" is embedded + queried at most once per
// (brand, index version) per browser, and at most once per (brand, index
// version) per edge POP — everything else is a cache hit.

const LS_PREFIX = "ds-search:";
const SS_VERSION_KEY = "ds-search:version";
/** Max entries to keep in localStorage (simple LRU-ish cap). */
const LS_MAX_ENTRIES = 200;

interface CachedEntry {
  ts: number;
  data: SearchResult[];
}

/** Build the localStorage key for a given search. */
function buildCacheKey(
  version: string,
  brand: string,
  query: string,
  limit: number
): string {
  const normalized = query.trim().toLowerCase().replace(/\s+/g, " ");
  return `${LS_PREFIX}${version}:${brand}:${limit}:${normalized}`;
}

/** Remove any localStorage entries whose version prefix doesn't match. */
function pruneStaleCache(currentVersion: string): void {
  if (typeof window === "undefined" || !window.localStorage) return;
  const keep = `${LS_PREFIX}${currentVersion}:`;
  const toDelete: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key) continue;
    if (key.startsWith(LS_PREFIX) && !key.startsWith(keep)) {
      toDelete.push(key);
    }
  }
  for (const key of toDelete) localStorage.removeItem(key);
}

/** Cap the cache at LS_MAX_ENTRIES, evicting the oldest entries first. */
function enforceCacheCap(currentVersion: string): void {
  if (typeof window === "undefined" || !window.localStorage) return;
  const prefix = `${LS_PREFIX}${currentVersion}:`;
  const entries: Array<{ key: string; ts: number }> = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key?.startsWith(prefix)) continue;
    try {
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      const parsed = JSON.parse(raw) as CachedEntry;
      entries.push({ key, ts: parsed.ts ?? 0 });
    } catch {
      // Corrupt entry — drop it.
      localStorage.removeItem(key);
    }
  }
  if (entries.length <= LS_MAX_ENTRIES) return;
  entries.sort((a, b) => a.ts - b.ts);
  const evict = entries.slice(0, entries.length - LS_MAX_ENTRIES);
  for (const { key } of evict) localStorage.removeItem(key);
}

function readCache(key: string): SearchResult[] | null {
  if (typeof window === "undefined" || !window.localStorage) return null;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CachedEntry;
    return Array.isArray(parsed.data) ? parsed.data : null;
  } catch {
    return null;
  }
}

function writeCache(key: string, data: SearchResult[]): void {
  if (typeof window === "undefined" || !window.localStorage) return;
  try {
    const entry: CachedEntry = { ts: Date.now(), data };
    localStorage.setItem(key, JSON.stringify(entry));
  } catch {
    // Quota exceeded (or disabled). Silently ignore — cache is best-effort.
  }
}

/**
 * Fetch the current index version, with a short-lived sessionStorage cache
 * so we don't hit the version endpoint on every keystroke.
 */
async function fetchIndexVersion(
  apiUrl: string,
  brand?: string
): Promise<string | null> {
  if (typeof window !== "undefined" && window.sessionStorage) {
    const cached = sessionStorage.getItem(SS_VERSION_KEY);
    if (cached) {
      try {
        const {
          version,
          ts,
          brand: cachedBrand,
        } = JSON.parse(cached) as {
          version: string;
          ts: number;
          brand?: string;
        };
        // Re-check every 5 minutes within the same tab, but only reuse the
        // cached value when it was fetched for the same brand.
        if (
          version &&
          cachedBrand === brand &&
          Date.now() - ts < 5 * 60 * 1000
        ) {
          return version;
        }
      } catch {
        /* fall through to refetch */
      }
    }
  }

  try {
    const base = apiUrl.endsWith("/") ? apiUrl.slice(0, -1) : apiUrl;
    const url = brand
      ? `${base}/version?brand=${encodeURIComponent(brand)}`
      : `${base}/version`;
    const res = await fetch(url, { method: "GET" });
    if (!res.ok) return null;
    const { version } = (await res.json()) as { version?: string };
    if (!version) return null;
    if (typeof window !== "undefined" && window.sessionStorage) {
      sessionStorage.setItem(
        SS_VERSION_KEY,
        JSON.stringify({ version, ts: Date.now(), brand })
      );
    }
    return version;
  } catch {
    return null;
  }
}

/** Build the deep-link URL for a result, appending `#anchor` if present. */
function buildResultHref(result: SearchResult): string {
  if (!result.anchor) return result.url;
  // If the url already has a fragment, don't clobber it.
  if (result.url.includes("#")) return result.url;
  return `${result.url}#${result.anchor}`;
}

/** Derive the `/answer` endpoint from the base search API URL. */
function buildAnswerUrl(baseApiUrl: string): string {
  const trimmed = baseApiUrl.endsWith("/")
    ? baseApiUrl.slice(0, -1)
    : baseApiUrl;
  return `${trimmed}/answer`;
}

interface AnswerState {
  status: "idle" | "loading" | "ready" | "error";
  /** The query the current answer was generated for (for staleness checks). */
  query: string;
  answer?: string;
  sources?: SearchResult[];
  grounded?: boolean;
  error?: string;
}

export function SearchModal({
  open,
  onClose,
  searchApiUrl,
  brand,
  onSelect,
  placeholder = "Search documentation...",
  className,
}: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>({
    status: "idle",
    query: "",
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const answerAbortRef = useRef<AbortController | null>(null);
  const versionRef = useRef<string | null>(null);

  const resolvedApiUrl =
    searchApiUrl ||
    (typeof window !== "undefined" ? window.SearchApiUrl : undefined) ||
    "/api/ai-assistant/search";
  const resolvedBrand: "eh" | "wc" =
    brand ??
    ((typeof window !== "undefined" ? window.BrandCode : "eh") === "wc"
      ? "wc"
      : "eh");

  // Focus input when modal opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery("");
      setResults([]);
      setErrorMessage(null);
      setSelectedIndex(0);
      setAnswerState({ status: "idle", query: "" });
      // Clear any leftover loading state from a prior session so we don't
      // flash a spinner when the modal re-opens.
      setIsLoading(false);
      // Abort any lingering in-flight request from a previous open so its
      // response can't race in and populate stale results.
      if (abortRef.current) {
        abortRef.current.abort();
        abortRef.current = null;
      }
      if (answerAbortRef.current) {
        answerAbortRef.current.abort();
        answerAbortRef.current = null;
      }

      // Kick off a version fetch as soon as the modal opens so the first
      // keystroke can already use the version-pinned cache. Safe to fire
      // in parallel with the user typing.
      void fetchIndexVersion(resolvedApiUrl, resolvedBrand).then((version) => {
        if (!version) return;
        versionRef.current = version;
        pruneStaleCache(version);
        enforceCacheCap(version);
      });
    }
    // Cancel any in-flight request when modal closes
    if (!open && abortRef.current) {
      abortRef.current.abort();
      abortRef.current = null;
    }
    if (!open && answerAbortRef.current) {
      answerAbortRef.current.abort();
      answerAbortRef.current = null;
    }
  }, [open, resolvedApiUrl, resolvedBrand]);

  // Perform search via the worker
  const performSearch = useCallback(
    async (searchQuery: string) => {
      const trimmed = searchQuery.trim();
      if (!trimmed) {
        // Abort any in-flight request so its response can't race in and
        // repopulate results after the input was cleared.
        if (abortRef.current) {
          abortRef.current.abort();
          abortRef.current = null;
        }
        setResults([]);
        setErrorMessage(null);
        setIsLoading(false);
        return;
      }

      const limit = 10;
      const version = versionRef.current;

      // Fast path: serve from localStorage when we have a known version.
      if (version) {
        const cacheKey = buildCacheKey(version, resolvedBrand, trimmed, limit);
        const cached = readCache(cacheKey);
        if (cached) {
          // Abort any in-flight request so an earlier fetch can't resolve
          // later and overwrite these cached results with stale data.
          if (abortRef.current) {
            abortRef.current.abort();
            abortRef.current = null;
          }
          setResults(cached);
          setSelectedIndex(0);
          setErrorMessage(null);
          setIsLoading(false);
          return;
        }
      }

      // Cancel any previous in-flight request
      if (abortRef.current) {
        abortRef.current.abort();
      }
      const controller = new AbortController();
      abortRef.current = controller;

      setIsLoading(true);
      setErrorMessage(null);

      try {
        // Prefer GET with a version pin so the response is HTTP-cacheable
        // (edge + browser). Fall back to an unversioned GET when the
        // version endpoint hasn't replied yet — still cacheable briefly.
        const params = new URLSearchParams({
          q: trimmed,
          brand: resolvedBrand,
          limit: String(limit),
        });
        if (version) params.set("v", version);
        const url = `${resolvedApiUrl}?${params.toString()}`;

        const response = await fetch(url, {
          method: "GET",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Search failed with status ${response.status}`);
        }

        const data = (await response.json()) as WorkerSearchResponse;

        // Only apply if this is still the latest request
        if (abortRef.current !== controller) return;

        const mapped: SearchResult[] = (data.results || []).map((r) => ({
          id: r.id,
          title: r.title,
          url: r.url,
          section: r.section,
          snippet: r.snippet,
          score: r.score,
          anchor: r.anchor,
          heading: r.heading,
        }));
        setResults(mapped);
        setSelectedIndex(0);

        // Update our known version from the response and persist the result.
        // If the server reports a newer version than what we pinned, prune
        // the old entries so we don't serve stale results on next keystroke.
        const serverVersion = data.version;
        if (serverVersion) {
          if (
            versionRef.current &&
            versionRef.current !== serverVersion &&
            typeof window !== "undefined" &&
            window.sessionStorage
          ) {
            sessionStorage.setItem(
              SS_VERSION_KEY,
              JSON.stringify({ version: serverVersion, ts: Date.now() })
            );
            pruneStaleCache(serverVersion);
          }
          versionRef.current = serverVersion;
          writeCache(
            buildCacheKey(serverVersion, resolvedBrand, trimmed, limit),
            mapped
          );
        }
      } catch (error) {
        if ((error as { name?: string })?.name === "AbortError") return;
        console.error("Search error:", error);
        setResults([]);
        setErrorMessage("Search is temporarily unavailable.");
      } finally {
        if (abortRef.current === controller) {
          abortRef.current = null;
          setIsLoading(false);
        }
      }
    },
    [resolvedApiUrl, resolvedBrand]
  );

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(query);
    }, 200);

    return () => clearTimeout(timer);
  }, [query, performSearch]);

  // Whenever the query moves away from the query the current answer was
  // generated for, drop the stale answer so we don't mislead the user.
  useEffect(() => {
    if (!answerState.query) return;
    if (query.trim() !== answerState.query) {
      if (answerAbortRef.current) {
        answerAbortRef.current.abort();
        answerAbortRef.current = null;
      }
      setAnswerState({ status: "idle", query: "" });
    }
  }, [query, answerState.query]);

  /**
   * Ask the RAG endpoint for an inline answer to the current query.
   * Triggered explicitly (button click or ⌘↩) — never on every keystroke —
   * because each call runs an LLM and costs tokens.
   */
  const askAI = useCallback(async () => {
    const trimmed = query.trim();
    if (!trimmed) return;

    if (answerAbortRef.current) answerAbortRef.current.abort();
    const controller = new AbortController();
    answerAbortRef.current = controller;

    setAnswerState({ status: "loading", query: trimmed });

    try {
      const response = await fetch(buildAnswerUrl(resolvedApiUrl), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: trimmed, brand: resolvedBrand }),
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`Answer failed with status ${response.status}`);
      }

      const data = (await response.json()) as AnswerResponse;
      if (answerAbortRef.current !== controller) return;

      setAnswerState({
        status: "ready",
        query: trimmed,
        answer: data.answer,
        grounded: data.grounded,
        sources: (data.sources || []).map((s) => ({
          id: s.id,
          title: s.title,
          url: s.url,
          section: s.section,
          snippet: s.snippet,
          score: s.score,
          anchor: s.anchor,
          heading: s.heading,
        })),
      });
    } catch (error) {
      if ((error as { name?: string })?.name === "AbortError") return;
      console.error("Ask AI error:", error);
      setAnswerState({
        status: "error",
        query: trimmed,
        error: "Couldn't generate an answer right now.",
      });
    } finally {
      if (answerAbortRef.current === controller) answerAbortRef.current = null;
    }
  }, [query, resolvedApiUrl, resolvedBrand]);

  // Select result
  const handleSelect = useCallback(
    (result: SearchResult) => {
      onSelect?.(result);
      onClose();
      // Navigate to the result, honoring any section anchor.
      window.location.href = buildResultHref(result);
    },
    [onSelect, onClose]
  );

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      // ⌘/Ctrl+Enter asks the AI even if a result is highlighted.
      if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        void askAI();
        return;
      }
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => Math.max(prev - 1, 0));
          break;
        case "Enter":
          e.preventDefault();
          if (results[selectedIndex]) {
            handleSelect(results[selectedIndex]);
          }
          break;
        case "Escape":
          e.preventDefault();
          onClose();
          break;
      }
    },
    [results, selectedIndex, onClose, handleSelect, askAI]
  );

  // Scroll selected item into view
  useEffect(() => {
    const selectedElement = resultsRef.current?.querySelector(
      `[data-index="${selectedIndex}"]`
    );
    selectedElement?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      onClose();
    }
  };

  return (
    <Modal
      open={open}
      onOpenChange={handleOpenChange}
      size="lg"
      className={cn("search-modal", className)}
    >
      <ModalHeader className="border-border border-b p-0">
        <div className="relative">
          <Search className="text-muted-foreground absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="w-full border-0 bg-transparent py-4 pr-4 pl-12 text-base focus:ring-0 focus:outline-none"
            aria-label="Search documentation"
            autoComplete="off"
            spellCheck={false}
          />
          {isLoading && (
            <Spinner
              size="sm"
              className="absolute top-1/2 right-4 -translate-y-1/2"
            />
          )}
        </div>
      </ModalHeader>
      <ModalBody className="max-h-[60vh] overflow-y-auto p-0">
        {/* Inline RAG answer card — only rendered when the user has
            explicitly asked the AI for this query. */}
        {query.trim() && answerState.query === query.trim() && (
          <AnswerCard
            state={answerState}
            onSourceClick={handleSelect}
            onRetry={askAI}
          />
        )}

        {/* Ask-AI call-to-action — shown above results once the user has
            typed a query. Hidden while an answer card for this exact
            query is already visible. */}
        {query.trim() &&
          answerState.query !== query.trim() &&
          answerState.status !== "loading" && (
            <div className="border-border border-b">
              <button
                type="button"
                onClick={() => void askAI()}
                className={cn(
                  "flex w-full items-center gap-3 px-4 py-3 text-left transition-colors",
                  "hover:bg-muted focus:bg-muted focus:outline-none"
                )}
                aria-label="Ask the AI assistant for an answer"
              >
                <Sparkles className="text-primary h-4 w-4 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="text-foreground text-sm font-medium">
                    Ask AI: &ldquo;{query.trim()}&rdquo;
                  </div>
                  <div className="text-muted-foreground text-xs">
                    Get a direct answer with citations from the docs
                  </div>
                </div>
                <kbd className="text-muted-foreground rounded border px-1.5 py-0.5 text-xs">
                  ⌘↩
                </kbd>
              </button>
            </div>
          )}

        {errorMessage ? (
          <div className="text-muted-foreground p-8 text-center">
            {errorMessage}
          </div>
        ) : results.length > 0 ? (
          <div ref={resultsRef} className="divide-border divide-y">
            {results.map((result, index) => (
              <button
                key={result.id}
                data-index={index}
                onClick={() => handleSelect(result)}
                className={cn(
                  "hover:bg-muted w-full px-4 py-3 text-left transition-colors focus:outline-none",
                  index === selectedIndex && "bg-muted"
                )}
              >
                <div className="flex items-center gap-3">
                  <FileText className="text-muted-foreground h-4 w-4 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-foreground truncate font-medium">
                      {result.title}
                    </div>
                    {(result.heading || result.section) && (
                      <div className="text-muted-foreground flex items-center gap-1 text-xs">
                        <Hash className="h-3 w-3" />
                        {result.heading || result.section}
                      </div>
                    )}
                    {result.snippet && (
                      <div className="text-muted-foreground mt-1 line-clamp-2 text-xs">
                        {result.snippet}
                      </div>
                    )}
                  </div>
                  <ArrowRight className="text-muted-foreground h-4 w-4 flex-shrink-0 opacity-0 group-hover:opacity-100" />
                </div>
              </button>
            ))}
          </div>
        ) : query && !isLoading ? (
          <div className="text-muted-foreground p-8 text-center">
            No results found for &quot;{query}&quot;
          </div>
        ) : !query ? (
          <div className="text-muted-foreground p-8 text-center">
            <p className="mb-2">Start typing to search</p>
            <p className="text-xs">
              Press{" "}
              <kbd className="rounded border px-1.5 py-0.5 text-xs">↑</kbd>{" "}
              <kbd className="rounded border px-1.5 py-0.5 text-xs">↓</kbd> to
              navigate,{" "}
              <kbd className="rounded border px-1.5 py-0.5 text-xs">Enter</kbd>{" "}
              to select,{" "}
              <kbd className="rounded border px-1.5 py-0.5 text-xs">⌘↩</kbd> to
              ask AI
            </p>
          </div>
        ) : null}
      </ModalBody>
    </Modal>
  );
}

export default SearchModal;

// ---------------------------------------------------------------------------
// AnswerCard
// ---------------------------------------------------------------------------
//
// Renders the inline RAG answer above the search results. The answer text
// arrives as plain markdown from the LLM and may contain `[1]`, `[2]` style
// citation markers. We render it as-is (pre-line whitespace) and show the
// cited sources as a compact, clickable list beneath the answer.

interface AnswerCardProps {
  state: AnswerState;
  onSourceClick: (result: SearchResult) => void;
  onRetry: () => void;
}

function AnswerCard({ state, onSourceClick, onRetry }: AnswerCardProps) {
  return (
    <div className="bg-muted/40 border-border border-b px-4 py-3">
      <div className="mb-2 flex items-center gap-2">
        <Sparkles className="text-primary h-4 w-4 flex-shrink-0" />
        <span className="text-foreground text-xs font-semibold tracking-wide uppercase">
          AI Answer
        </span>
        {state.status === "loading" && <Spinner size="sm" className="ml-1" />}
        {state.status === "ready" && state.grounded === false && (
          <span className="text-muted-foreground text-xs">
            (not covered in the docs)
          </span>
        )}
      </div>

      {state.status === "loading" && (
        <p className="text-muted-foreground text-sm">
          Reading the documentation…
        </p>
      )}

      {state.status === "error" && (
        <div className="text-sm">
          <p className="text-muted-foreground mb-2">
            {state.error ?? "Something went wrong."}
          </p>
          <button
            type="button"
            onClick={onRetry}
            className="text-primary text-xs underline-offset-2 hover:underline"
          >
            Try again
          </button>
        </div>
      )}

      {state.status === "ready" && state.answer && (
        <>
          <p className="text-foreground text-sm whitespace-pre-line">
            {state.answer}
          </p>
          {state.sources && state.sources.length > 0 && (
            <ol className="mt-3 space-y-1 text-xs">
              {state.sources.map((src, i) => (
                <li key={src.id} className="flex items-start gap-2">
                  <span className="text-muted-foreground flex-shrink-0 font-mono">
                    [{i + 1}]
                  </span>
                  <button
                    type="button"
                    onClick={() => onSourceClick(src)}
                    className="text-primary hover:underline focus:underline focus:outline-none"
                  >
                    {src.title}
                    {src.heading ? ` › ${src.heading}` : ""}
                  </button>
                </li>
              ))}
            </ol>
          )}
        </>
      )}
    </div>
  );
}
