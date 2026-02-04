/**
 * Type definitions for the AI Documentation Assistant
 */

/**
 * Cloudflare Pages Function environment bindings
 */
export interface Env {
  /** Workers AI binding */
  AI: Ai;
  /** Vectorize index binding */
  VECTORIZE: VectorizeIndex;
  /** KV namespace for caching */
  DOCS_CACHE: KVNamespace;
}

/**
 * Metadata stored with vectors in Vectorize
 */
export interface VectorMetadata {
  title: string;
  url: string;
  section?: string;
  text: string;
}

/**
 * Chat message format
 */
export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

/**
 * Request body for the chat endpoint
 */
export interface ChatRequest {
  /** User's question */
  message: string;
  /** Previous conversation history (optional) */
  history?: ChatMessage[];
  /** Brand context: 'eh' for Enterprise Health, 'wc' for WebChart */
  brand?: "eh" | "wc";
}

/**
 * Response from the chat endpoint
 */
export interface ChatResponse {
  /** AI-generated answer */
  answer: string;
  /** Source documents used for context */
  sources: Array<{
    title: string;
    url: string;
    relevance: number;
  }>;
}

/**
 * Error response format
 */
export interface ErrorResponse {
  error: string;
  code: string;
  details?: string;
}

/**
 * Search result from Vectorize
 */
export interface VectorSearchResult {
  id: string;
  score: number;
  metadata?: VectorMetadata;
}

/**
 * Configuration constants
 */
export const CONFIG = {
  EMBEDDING_MODEL: "@cf/baai/bge-base-en-v1.5" as const,
  LLM_MODEL: "@cf/meta/llama-3.1-8b-instruct" as const,
  MAX_CONTEXT_CHUNKS: 5,
  MAX_TOKENS: 1024,
};
