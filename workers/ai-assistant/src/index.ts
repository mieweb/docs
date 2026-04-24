/**
 * AI Documentation Assistant Worker
 *
 * A Cloudflare Worker that provides RAG-powered Q&A for Enterprise Health
 * and WebChart documentation using Workers AI and Vectorize.
 */

import type {
  Env,
  ChatRequest,
  ChatResponse,
  ErrorResponse,
  SearchRequest,
  SearchResponse,
} from "./types";
import { generateRAGResponse } from "./rag";
import { semanticSearch } from "./search";

/**
 * CORS headers for cross-origin requests
 */
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400",
};

/**
 * Create a JSON response with CORS headers
 */
function jsonResponse<T>(data: T, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...CORS_HEADERS,
    },
  });
}

/**
 * Create an error response
 */
function errorResponse(
  message: string,
  code: string,
  status = 400,
  details?: string
): Response {
  const body: ErrorResponse = { error: message, code, details };
  return jsonResponse(body, status);
}

/**
 * Handle preflight OPTIONS requests
 */
function handleOptions(): Response {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}

/**
 * Handle GET requests - health check and info
 */
function handleGet(url: URL): Response {
  if (url.pathname === "/health") {
    return jsonResponse({
      status: "healthy",
      timestamp: new Date().toISOString(),
    });
  }

  return jsonResponse({
    name: "AI Documentation Assistant",
    version: "1.0.0",
    endpoints: {
      "POST /chat": "Send a message to the AI assistant",
      "POST /search": "Semantic search over the documentation",
      "GET /search?q=...": "Semantic search via query string",
      "GET /health": "Health check endpoint",
    },
  });
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

/** Parse and validate a search query + options from loose input. */
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

/**
 * Execute a search and return JSON results.
 */
async function runSearch(
  input: Partial<SearchRequest>,
  env: Env
): Promise<Response> {
  const parsed = parseSearchInput(input);
  if (parsed instanceof Response) return parsed;

  try {
    const results = await semanticSearch(
      parsed.query,
      env,
      parsed.limit,
      parsed.brand
    );
    const body: SearchResponse = { results, query: parsed.query };
    return jsonResponse(body);
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

/**
 * Handle GET /search?q=... requests.
 */
async function handleSearchGet(url: URL, env: Env): Promise<Response> {
  const limitParam = url.searchParams.get("limit");
  return runSearch(
    {
      query: url.searchParams.get("q") ?? url.searchParams.get("query") ?? "",
      limit: limitParam ? parseInt(limitParam, 10) : undefined,
      brand: (url.searchParams.get("brand") as "eh" | "wc" | null) ?? undefined,
    },
    env
  );
}

/**
 * Handle POST /search requests.
 */
async function handleSearchPost(request: Request, env: Env): Promise<Response> {
  let body: Partial<SearchRequest>;
  try {
    body = (await request.json()) as Partial<SearchRequest>;
  } catch {
    return errorResponse("Invalid JSON body", "INVALID_JSON");
  }
  return runSearch(body, env);
}

/**
 * Handle POST /chat requests
 */
async function handleChat(request: Request, env: Env): Promise<Response> {
  // Parse request body
  let body: ChatRequest;
  try {
    body = (await request.json()) as ChatRequest;
  } catch {
    return errorResponse("Invalid JSON body", "INVALID_JSON");
  }

  // Validate required fields
  if (!body.message || typeof body.message !== "string") {
    return errorResponse("Message is required", "MISSING_MESSAGE");
  }

  if (body.message.length > 2000) {
    return errorResponse(
      "Message too long (max 2000 characters)",
      "MESSAGE_TOO_LONG"
    );
  }

  // Validate optional fields
  const brand = body.brand === "wc" ? "wc" : "eh";
  const history = Array.isArray(body.history) ? body.history : [];

  try {
    // Generate response using RAG
    const response: ChatResponse = await generateRAGResponse(
      body.message,
      env,
      history,
      brand
    );

    return jsonResponse(response);
  } catch (error) {
    console.error("RAG error:", error);
    return errorResponse(
      "Failed to generate response",
      "RAG_ERROR",
      500,
      error instanceof Error ? error.message : "Unknown error"
    );
  }
}

/**
 * Main request handler
 */
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const method = request.method.toUpperCase();

    // Handle CORS preflight
    if (method === "OPTIONS") {
      return handleOptions();
    }

    // Route requests
    if (method === "GET") {
      if (url.pathname === "/search") {
        return handleSearchGet(url, env);
      }
      return handleGet(url);
    }

    if (method === "POST" && url.pathname === "/chat") {
      return handleChat(request, env);
    }

    if (method === "POST" && url.pathname === "/search") {
      return handleSearchPost(request, env);
    }

    return errorResponse("Not Found", "NOT_FOUND", 404);
  },
};
