/**
 * AI Documentation Assistant - Cloudflare Pages Function
 *
 * POST /api/ai-assistant - Send a message to the AI assistant
 *
 * This is a Cloudflare Pages Function that handles RAG-powered Q&A
 * for Enterprise Health and WebChart documentation.
 */

import type {
  Env,
  ChatRequest,
  ChatResponse,
  ErrorResponse,
  CONFIG as ConfigType,
} from "./types";
import { CONFIG } from "./types";
import { generateRAGResponse, generateRAGResponseStream } from "./rag";

// Re-export types for Pages Functions context
interface PagesContext {
  request: Request;
  env: Env;
  params: Record<string, string>;
  waitUntil: (promise: Promise<unknown>) => void;
  passThroughOnException: () => void;
}

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
 * Handle OPTIONS preflight requests
 */
export const onRequestOptions: PagesFunction<Env> = async () => {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
};

/**
 * Handle GET requests - health check
 */
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { env } = context;
  return jsonResponse({
    status: "healthy",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
    bindings: {
      ai: !!env.AI,
      vectorize: !!env.VECTORIZE,
      vectorizeQuery: typeof env.VECTORIZE?.query,
    },
  });
};

/**
 * Handle POST requests - chat endpoint
 */
export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

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
  const currentPage = body.currentPage || null;

  // Streaming mode: either `stream: true` in body or Accept: text/event-stream.
  // Used by bluehive-hum's `lookup_knowledge` tool and any streaming chat UI.
  const wantsStream =
    body.stream === true ||
    (request.headers.get("accept") || "").includes("text/event-stream");

  if (wantsStream) {
    try {
      const stream = await generateRAGResponseStream(
        body.message,
        env,
        CONFIG,
        history,
        brand,
        currentPage
      );
      return new Response(stream, {
        status: 200,
        headers: {
          "Content-Type": "text/event-stream; charset=utf-8",
          "Cache-Control": "no-cache, no-transform",
          Connection: "keep-alive",
          "X-Accel-Buffering": "no",
          ...CORS_HEADERS,
        },
      });
    } catch (error) {
      console.error("RAG stream error:", error);
      return errorResponse(
        "Failed to start stream",
        "RAG_STREAM_ERROR",
        500,
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  }

  try {
    // Generate response using RAG
    const response: ChatResponse = await generateRAGResponse(
      body.message,
      env,
      CONFIG,
      history,
      brand,
      currentPage
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
};
