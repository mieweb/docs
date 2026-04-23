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
  /** Brand this chunk belongs to: 'eh' (Enterprise Health) or 'wc' (WebChart) */
  brand?: "eh" | "wc";
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
 * Request body for the search endpoint
 */
export interface SearchRequest {
  /** Search query */
  query: string;
  /** Maximum number of results (default: 10, max: 25) */
  limit?: number;
  /** Brand filter: 'eh' for Enterprise Health, 'wc' for WebChart */
  brand?: "eh" | "wc";
}

/**
 * A single search result item
 */
export interface SearchResultItem {
  /** Stable identifier for the result (Vectorize chunk id) */
  id: string;
  /** Document title */
  title: string;
  /** URL path to the document */
  url: string;
  /** Section within the document (optional) */
  section?: string;
  /** Short text snippet from the matching chunk */
  snippet: string;
  /** Relevance score (higher is better, 0–1 for cosine similarity) */
  score: number;
}

/**
 * Response from the search endpoint
 */
export interface SearchResponse {
  /** Ranked search results */
  results: SearchResultItem[];
  /** Echoed query */
  query: string;
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
