/**
 * AI Documentation Assistant — Search Version Endpoint
 *
 * GET /api/ai-assistant/search/version
 *
 * Returns the current content-addressed version of the Vectorize index.
 * Clients use this as a cache key so that:
 *   • Search responses can be cached aggressively (edge + browser +
 *     localStorage) via a `?v=<version>` query parameter.
 *   • Caches self-invalidate the moment the index is rebuilt, because the
 *     version string (a content hash) changes.
 */

import type { Env, ErrorResponse, SearchVersionResponse } from "../types";
import { getIndexVersion } from "../version";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
};

export const onRequestOptions: PagesFunction<Env> = async () =>
  new Response(null, { status: 204, headers: CORS_HEADERS });

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    // Optional `?brand=eh|wc` selects the brand-scoped KV key so each brand's
    // cache invalidates independently. Without it we return the global key.
    const url = new URL(context.request.url);
    const brandParam = url.searchParams.get("brand");
    const brand =
      brandParam === "eh" || brandParam === "wc" ? brandParam : undefined;

    const version = await getIndexVersion(context.env, brand);
    const body: SearchVersionResponse = version;
    return new Response(JSON.stringify(body), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        // Short TTL so new versions propagate within a minute, but still
        // spares the origin from a request per page view.
        "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
        ...CORS_HEADERS,
      },
    });
  } catch (error) {
    const body: ErrorResponse = {
      error: "Failed to read index version",
      code: "VERSION_ERROR",
      details: error instanceof Error ? error.message : "Unknown error",
    };
    return new Response(JSON.stringify(body), {
      status: 500,
      headers: { "Content-Type": "application/json", ...CORS_HEADERS },
    });
  }
};
