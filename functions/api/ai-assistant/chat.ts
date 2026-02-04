/**
 * AI Documentation Assistant Chat Endpoint
 *
 * POST /api/ai-assistant/chat - Send a message to the AI assistant
 *
 * This is a Cloudflare Pages Function that handles RAG-powered Q&A
 * for Enterprise Health and WebChart documentation.
 *
 * Re-exports from index.ts for the /chat path.
 */

export { onRequestOptions, onRequestPost } from "./index";
