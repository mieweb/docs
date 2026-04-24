/**
 * Index version helpers.
 *
 * The indexing script writes a content-addressed version string into the
 * DOCS_CACHE KV namespace under `index:version` whenever it successfully
 * rebuilds the Vectorize index. Search endpoints surface this version to
 * clients and use it as a cache key, so search responses can be cached
 * aggressively (edge + browser + localStorage) and automatically invalidate
 * whenever the vectordb is rebuilt with new content.
 */

import type { Env, SearchVersionResponse } from "./types";

/** Sentinel returned when no version has ever been published to KV. */
export const UNVERSIONED = "unversioned";

const KV_KEY = "index:version";

/**
 * Read the current index version from KV. If KV is unavailable or empty we
 * return the `UNVERSIONED` sentinel so callers can still function — they
 * just won't get long-lived caching.
 */
export async function getIndexVersion(
  env: Env
): Promise<SearchVersionResponse> {
  if (!env.DOCS_CACHE || typeof env.DOCS_CACHE.get !== "function") {
    return { version: UNVERSIONED };
  }

  try {
    const raw = await env.DOCS_CACHE.get(KV_KEY);
    if (!raw) return { version: UNVERSIONED };

    // Support both plain-string and JSON-wrapped payloads.
    if (raw.startsWith("{")) {
      const parsed = JSON.parse(raw) as Partial<SearchVersionResponse>;
      if (parsed.version) {
        return { version: parsed.version, builtAt: parsed.builtAt };
      }
    }
    return { version: raw.trim() };
  } catch (error) {
    console.warn("Failed to read index version from KV:", error);
    return { version: UNVERSIONED };
  }
}
