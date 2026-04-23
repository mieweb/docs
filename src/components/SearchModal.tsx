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
import { Search, FileText, Hash, ArrowRight } from "lucide-react";

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
  }>;
  query: string;
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
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

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
    }
    // Cancel any in-flight request when modal closes
    if (!open && abortRef.current) {
      abortRef.current.abort();
      abortRef.current = null;
    }
  }, [open]);

  // Perform search via the worker
  const performSearch = useCallback(
    async (searchQuery: string) => {
      const trimmed = searchQuery.trim();
      if (!trimmed) {
        setResults([]);
        setErrorMessage(null);
        return;
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
        const response = await fetch(resolvedApiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: trimmed,
            brand: resolvedBrand,
            limit: 10,
          }),
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
        }));
        setResults(mapped);
        setSelectedIndex(0);
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

  // Select result
  const handleSelect = useCallback(
    (result: SearchResult) => {
      onSelect?.(result);
      onClose();
      // Navigate to the result
      window.location.href = result.url;
    },
    [onSelect, onClose]
  );

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
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
    [results, selectedIndex, onClose, handleSelect]
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
                    {result.section && (
                      <div className="text-muted-foreground flex items-center gap-1 text-xs">
                        <Hash className="h-3 w-3" />
                        {result.section}
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
              to select
            </p>
          </div>
        ) : null}
      </ModalBody>
    </Modal>
  );
}

export default SearchModal;
