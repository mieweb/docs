/**
 * Semantic search over the documentation Vectorize index.
 *
 * This is the retrieval half of the RAG pipeline, exposed as a dedicated
 * endpoint so the documentation site's search modal can use true semantic
 * search instead of a client-side lunr index.
 */

import type { Env, SearchResultItem } from "./types";
import { searchSimilarChunks } from "./embeddings";

/** Maximum snippet length returned to the client (characters). */
const SNIPPET_MAX_CHARS = 240;

/**
 * Build a short, human-readable snippet from a chunk's text.
 *
 * Tries to break on a sentence boundary near the max length so the snippet
 * doesn't end mid-word. The vector store already holds cleaned text, so no
 * further sanitization is needed here.
 */
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
 * Check whether a result URL matches the requested brand.
 *
 * When vectors were indexed with brand metadata we prefer that. Otherwise we
 * fall back to URL prefixes: legacy vectors use brand-agnostic URLs like
 * `/features/…`, so we only reject URLs explicitly prefixed for the *other*
 * brand (e.g. `/wc/…` when targeting `eh`). Everything else is accepted.
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

/**
 * Run a semantic search against the Vectorize index.
 *
 * Deduplicates by URL so each document appears at most once, keeping the
 * highest-scoring chunk as the representative snippet.
 */
export async function semanticSearch(
  query: string,
  env: Env,
  limit: number,
  brand: "eh" | "wc"
): Promise<SearchResultItem[]> {
  // Ask Vectorize for a few more than we need so we have headroom after
  // brand filtering and URL de-duplication.
  const overSample = Math.min(Math.max(limit * 3, 15), 50);
  const matches = await searchSimilarChunks(query, env, overSample);

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
    });
  }

  return Array.from(byUrl.values())
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
