/**
 * RAG (Retrieval Augmented Generation) logic for the AI assistant
 */

import type { Env, ChatMessage, ChatResponse } from "./types";
import {
  searchSimilarChunks,
  buildContext,
  extractSources,
} from "./embeddings";

/**
 * System prompt for the documentation assistant
 */
const SYSTEM_PROMPT = `You are an AI assistant for medical software documentation. You help healthcare IT professionals, system administrators, and clinical staff understand and use Enterprise Health/WebChart medical software.

Your role is to:
1. Answer questions accurately based on the provided documentation context
2. Reference specific features, settings, and procedures when relevant
3. Admit when you don't have enough information to answer
4. Suggest related topics the user might want to explore

Guidelines:
- Be concise but thorough
- Use technical terminology appropriately
- When mentioning features, use proper names from the documentation
- If the context doesn't contain relevant information, say so
- Never make up features or procedures not in the documentation
- Format responses with markdown for readability`;

/**
 * Build the prompt with context for the LLM
 */
function buildPrompt(
  userMessage: string,
  context: string,
  history: ChatMessage[] = []
): string {
  let prompt = "";

  // Add conversation history if present
  if (history.length > 0) {
    prompt += "Previous conversation:\n";
    for (const msg of history.slice(-4)) {
      // Keep last 4 messages for context
      const role = msg.role === "user" ? "User" : "Assistant";
      prompt += `${role}: ${msg.content}\n`;
    }
    prompt += "\n";
  }

  prompt += `Documentation context:\n${context}\n\n`;
  prompt += `User question: ${userMessage}`;

  return prompt;
}

/**
 * Generate a response using RAG
 */
export async function generateRAGResponse(
  message: string,
  env: Env,
  history: ChatMessage[] = [],
  brand: "eh" | "wc" = "eh"
): Promise<ChatResponse> {
  const maxChunks = parseInt(env.MAX_CONTEXT_CHUNKS, 10) || 5;
  const maxTokens = parseInt(env.MAX_TOKENS, 10) || 1024;

  // Search for relevant documentation chunks
  const searchResults = await searchSimilarChunks(message, env, maxChunks);

  // Build context from search results
  const context = buildContext(searchResults);

  // Build the full prompt
  const prompt = buildPrompt(message, context, history);

  // Add brand-specific context to system prompt
  const brandName = brand === "eh" ? "Enterprise Health" : "WebChart";
  const systemPromptWithBrand = `${SYSTEM_PROMPT}\n\nYou are specifically helping with ${brandName} documentation.`;

  // Generate response using Workers AI
  const response = await env.AI.run(
    env.LLM_MODEL as BaseAiTextGenerationModels,
    {
      messages: [
        { role: "system", content: systemPromptWithBrand },
        { role: "user", content: prompt },
      ],
      max_tokens: maxTokens,
      temperature: 0.3, // Lower temperature for more factual responses
    }
  );

  // Extract the response text
  const answer =
    typeof response === "object" && "response" in response
      ? (response as { response: string }).response
      : String(response);

  // Extract sources for citation
  const sources = extractSources(searchResults);

  return {
    answer,
    sources,
  };
}

/**
 * Generate a simple response without RAG (for fallback or simple queries)
 */
export async function generateSimpleResponse(
  message: string,
  env: Env
): Promise<string> {
  const response = await env.AI.run(
    env.LLM_MODEL as BaseAiTextGenerationModels,
    {
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant for medical software documentation. Be concise and helpful.",
        },
        { role: "user", content: message },
      ],
      max_tokens: 512,
      temperature: 0.5,
    }
  );

  return typeof response === "object" && "response" in response
    ? (response as { response: string }).response
    : String(response);
}
