/**
 * Type definitions for the AI Assistant Worker
 */

/**
 * Document chunk stored in Vectorize
 */
export interface DocChunk {
  /** Unique identifier for the chunk */
  id: string;
  /** The text content of the chunk */
  text: string;
  /** Document title */
  title: string;
  /** URL path to the document */
  url: string;
  /** Section within the document */
  section?: string;
  /** Starting character position in original doc */
  startPos?: number;
  /** Ending character position in original doc */
  endPos?: number;
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
  /** Conversation ID for follow-ups */
  conversationId?: string;
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
 * Cloudflare Worker environment bindings
 */
export interface Env {
  /** Workers AI binding */
  AI: Ai;
  /** Vectorize index binding */
  VECTORIZE: VectorizeIndex;
  /** KV namespace for caching */
  DOCS_CACHE: KVNamespace;
  /** Environment variables */
  EMBEDDING_MODEL: string;
  LLM_MODEL: string;
  MAX_CONTEXT_CHUNKS: string;
  MAX_TOKENS: string;
}

/**
 * Search result from Vectorize
 */
export interface VectorSearchResult {
  id: string;
  score: number;
  metadata?: VectorMetadata;
}
