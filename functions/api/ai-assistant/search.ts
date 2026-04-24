/**
 * AI Documentation Assistant Search Endpoint
 *
 * POST /api/ai-assistant/search       - Semantic search (JSON body)
 * GET  /api/ai-assistant/search?q=... - Semantic search (query string)
 *
 * Cloudflare Pages Function that exposes the retrieval half of the RAG
 * pipeline so the documentation site's search modal can use true semantic
 * search.
 */

import type {
  Env,
  ErrorResponse,
  SearchRequest,
  SearchResponse,
  SearchResultItem,
} from "./types";
import { CONFIG } from "./types";
import { searchSimilarChunks } from "./embeddings";
import { getIndexVersion, UNVERSIONED } from "./version";

/** Maximum snippet length returned to the client (characters). */
const SNIPPET_MAX_CHARS = 240;

/** Over-sampling factor for Vectorize queries (to survive brand filtering + de-dup). */
const MIN_OVERSAMPLE = 15;
const MAX_OVERSAMPLE = 50;

/**
 * CORS headers for cross-origin requests
 */
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400",
};

function jsonResponse<T>(
  data: T,
  status = 200,
  extraHeaders: Record<string, string> = {}
): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...CORS_HEADERS,
      ...extraHeaders,
    },
  });
}

function errorResponse(
  message: string,
  code: string,
  status = 400,
  details?: string
): Response {
  const body: ErrorResponse = { error: message, code, details };
  return jsonResponse(body, status);
}

/** Build a short, human-readable snippet, breaking on a sentence/word boundary. */
function buildSnippet(text: string, maxChars = SNIPPET_MAX_CHARS): string {
  const trimmed = text.trim();
  if (trimmed.length <= maxChars) return trimmed;

  const slice = trimmed.slice(0, maxChars);
  const lastSentence = Math.max(
    slice.lastIndexOf(". "),
    slice.lastIndexOf("! "),
    slice.lastIndexOf("? ")
  );
  if (lastSentence > maxChars * 0.5) {
    return slice.slice(0, lastSentence + 1).trim();
  }
  const lastSpace = slice.lastIndexOf(" ");
  const base = lastSpace > 0 ? slice.slice(0, lastSpace) : slice;
  return `${base.trim()}…`;
}

/**
 * Prefer the explicit brand metadata when present; otherwise fall back to the
 * URL prefix so vectors indexed before the brand field was added still work.
 *
 * Legacy vectors use brand-agnostic URLs like `/features/…` (no `/eh/` or
 * `/wc/` prefix), so we only reject URLs that are explicitly prefixed for the
 * *other* brand. Anything else is accepted.
 */
function matchesBrand(
  url: string | undefined,
  resultBrand: string | undefined,
  targetBrand: "eh" | "wc"
): boolean {
  if (resultBrand) return resultBrand === targetBrand;
  if (!url) return true;
  const otherBrand = targetBrand === "eh" ? "wc" : "eh";
  const otherPrefix = `/${otherBrand}/`;
  if (url === `/${otherBrand}` || url.startsWith(otherPrefix)) return false;
  return true;
}

/** Clamp a user-supplied limit into the allowed range. */
function clampLimit(raw: unknown, fallback = 10): number {
  const n =
    typeof raw === "number"
      ? raw
      : typeof raw === "string"
        ? parseInt(raw, 10)
        : NaN;
  if (!Number.isFinite(n) || n <= 0) return fallback;
  return Math.min(Math.floor(n), 25);
}

function parseSearchInput(
  input: Partial<SearchRequest>
): { query: string; limit: number; brand: "eh" | "wc" } | Response {
  const query = typeof input.query === "string" ? input.query.trim() : "";
  if (!query) {
    return errorResponse("Query is required", "MISSING_QUERY");
  }
  if (query.length > 500) {
    return errorResponse(
      "Query too long (max 500 characters)",
      "QUERY_TOO_LONG"
    );
  }
  return {
    query,
    limit: clampLimit(input.limit),
    brand: input.brand === "wc" ? "wc" : "eh",
  };
}

async function runSemanticSearch(
  query: string,
  env: Env,
  limit: number,
  brand: "eh" | "wc"
): Promise<SearchResultItem[]> {
  const overSample = Math.min(
    Math.max(limit * 3, MIN_OVERSAMPLE),
    MAX_OVERSAMPLE
  );
  const matches = await searchSimilarChunks(query, env, CONFIG, overSample);

  // De-duplicate by URL, keeping the highest-scoring chunk per document.
  const byUrl = new Map<string, SearchResultItem>();
  for (const match of matches) {
    const meta = match.metadata;
    if (!meta?.url || !meta.title) continue;
    if (!matchesBrand(meta.url, meta.brand, brand)) continue;

    const existing = byUrl.get(meta.url);
    if (existing && existing.score >= match.score) continue;

    byUrl.set(meta.url, {
      id: match.id,
      title: meta.title,
      url: meta.url,
      section: meta.section,
      snippet: buildSnippet(meta.text ?? ""),
      score: match.score,
      anchor: meta.anchor,
      heading: meta.heading,
    });
  }

  return Array.from(byUrl.values())
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

async function runSearch(
  input: Partial<SearchRequest>,
  env: Env,
  clientVersion?: string | null
): Promise<Response> {
  const parsed = parseSearchInput(input);
  if (parsed instanceof Response) return parsed;

  try {
    // Read the current index version in parallel with the search so the
    // hot path stays fast. If KV is unavailable this returns "unversioned"
    // and long-term caching is simply disabled.
    const [results, versionInfo] = await Promise.all([
      runSemanticSearch(parsed.query, env, parsed.limit, parsed.brand),
      getIndexVersion(env, parsed.brand),
    ]);

    const body: SearchResponse = {
      query: parsed.query,
      results,
      version: versionInfo.version,
    };

    // Only enable long-lived edge/browser caching when the client explicitly
    // pinned the URL to a known version AND that version matches what we're
    // actually serving. Any mismatch (or missing `v`) gets a short TTL so
    // clients converge on the latest version quickly.
    const cacheable =
      !!clientVersion &&
      clientVersion === versionInfo.version &&
      versionInfo.version !== UNVERSIONED;

    const cacheControl = cacheable
      ? "public, max-age=31536000, immutable"
      : "public, max-age=60, stale-while-revalidate=300";

    return jsonResponse(body, 200, {
      "Cache-Control": cacheControl,
      // Helpful for debugging: expose the version on every response.
      "X-Index-Version": versionInfo.version,
    });
  } catch (error) {
    console.error("Search error:", error);
    return errorResponse(
      "Failed to execute search",
      "SEARCH_ERROR",
      500,
      error instanceof Error ? error.message : "Unknown error"
    );
  }
}

/** CORS preflight */
export const onRequestOptions: PagesFunction<Env> = async () => {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
};

/** GET /api/ai-assistant/search?q=...&brand=...&limit=...&v=... */
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url);
  const limitParam = url.searchParams.get("limit");
  return runSearch(
    {
      query: url.searchParams.get("q") ?? url.searchParams.get("query") ?? "",
      limit: limitParam ? parseInt(limitParam, 10) : undefined,
      brand: (url.searchParams.get("brand") as "eh" | "wc" | null) ?? undefined,
    },
    context.env,
    url.searchParams.get("v")
  );
};

/** POST /api/ai-assistant/search */
export const onRequestPost: PagesFunction<Env> = async (context) => {
  let body: Partial<SearchRequest>;
  try {
    body = (await context.request.json()) as Partial<SearchRequest>;
  } catch {
    return errorResponse("Invalid JSON body", "INVALID_JSON");
  }
  // POST requests are not HTTP-cacheable, so we never set a long TTL even if
  // a `version` field is supplied in the body.
  return runSearch(body, context.env);
};
