/**
 * AI Documentation Assistant Worker
 *
 * A Cloudflare Worker that provides RAG-powered Q&A for Enterprise Health
 * and WebChart documentation using Workers AI and Vectorize.
 */

import type { Env, ChatRequest, ChatResponse, ErrorResponse } from "./types";
import { generateRAGResponse } from "./rag";

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
      "GET /health": "Health check endpoint",
    },
  });
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
      return handleGet(url);
    }

    if (method === "POST" && url.pathname === "/chat") {
      return handleChat(request, env);
    }

    return errorResponse("Not Found", "NOT_FOUND", 404);
  },
};
