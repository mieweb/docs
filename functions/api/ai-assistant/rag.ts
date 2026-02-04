/**
 * RAG (Retrieval Augmented Generation) logic
 */

import type {
  Env,
  ChatMessage,
  ChatResponse,
  CONFIG,
  PageContext,
} from "./types";
import {
  searchSimilarChunks,
  buildContext,
  extractSources,
} from "./embeddings";

/**
 * System prompt for the documentation assistant
 */
const SYSTEM_PROMPT = `You are Ozwell, a friendly and helpful AI assistant for medical software documentation. You help healthcare IT professionals, system administrators, and clinical staff understand and use Enterprise Health/WebChart medical software.

Your role is to:
1. Be conversational and friendly - respond naturally to greetings and casual messages
2. Answer questions accurately based on the provided documentation context when relevant
3. Reference specific features, settings, and procedures when the user asks about them
4. Admit when you don't have enough information to answer a specific question
5. Suggest related topics the user might want to explore

Guidelines:
- For greetings (hi, hello, hey, etc.), respond warmly and ask how you can help
- For simple questions, give concise answers
- For technical questions, be thorough and reference the documentation
- Use technical terminology appropriately
- When mentioning features, use proper names from the documentation
- If documentation context is provided but not relevant to the question, ignore it
- Never make up features or procedures not in the documentation
- Format responses with markdown for readability when helpful

Remember: You're a helpful assistant first, documentation search second. Be natural!`;

/**
 * Check if a message is a simple greeting or conversational message
 */
function isGreeting(message: string): boolean {
  const greetings = [
    /^(hi|hello|hey|howdy|greetings|yo|sup)[\s!.,?]*$/i,
    /^(good\s*(morning|afternoon|evening|day))[\s!.,?]*$/i,
    /^(what'?s?\s*up|how\s*are\s*you|how'?s?\s*it\s*going)[\s!.,?]*$/i,
    /^(thanks|thank\s*you|thx)[\s!.,?]*$/i,
  ];
  return greetings.some((regex) => regex.test(message.trim()));
}

/**
 * Build the prompt with context for the LLM
 */
function buildPrompt(
  userMessage: string,
  context: string,
  history: ChatMessage[] = [],
  includeContext: boolean = true,
  currentPage: PageContext | null = null
): string {
  let prompt = "";

  // Add current page context if available
  if (currentPage) {
    prompt += `The user is currently viewing: "${currentPage.title || "Unknown page"}" (${currentPage.url})\n\n`;
  }

  if (history.length > 0) {
    prompt += "Previous conversation:\n";
    for (const msg of history.slice(-4)) {
      const role = msg.role === "user" ? "User" : "Assistant";
      prompt += `${role}: ${msg.content}\n`;
    }
    prompt += "\n";
  }

  if (includeContext && context.trim()) {
    prompt += `Documentation context (use only if relevant to the question):\n${context}\n\n`;
  }

  prompt += `User message: ${userMessage}`;

  return prompt;
}

/**
 * Generate a response using RAG
 */
export async function generateRAGResponse(
  message: string,
  env: Env,
  config: typeof CONFIG,
  history: ChatMessage[] = [],
  brand: "eh" | "wc" = "eh",
  currentPage: PageContext | null = null
): Promise<ChatResponse> {
  // Check if this is a simple greeting - skip RAG for conversational messages
  const skipRAG = isGreeting(message);

  let context = "";
  let searchResults: Awaited<ReturnType<typeof searchSimilarChunks>> = [];

  if (!skipRAG) {
    // Enhance search query with current page context if available
    const searchQuery = currentPage
      ? `${message} (related to: ${currentPage.title || currentPage.url})`
      : message;

    // Search for relevant documentation chunks
    searchResults = await searchSimilarChunks(
      searchQuery,
      env,
      config,
      config.MAX_CONTEXT_CHUNKS
    );

    // Build context from search results
    context = buildContext(searchResults);
  }

  // Build the full prompt with page context
  const prompt = buildPrompt(message, context, history, !skipRAG, currentPage);

  // Add brand-specific context to system prompt
  const brandName = brand === "eh" ? "Enterprise Health" : "WebChart";
  const systemPromptWithBrand = `${SYSTEM_PROMPT}\n\nYou are specifically helping with ${brandName} documentation.`;

  // Check if AI binding is available
  if (!env.AI) {
    throw new Error(
      "AI binding not configured. Please add an AI binding named 'AI' in Cloudflare Pages Settings > Functions > AI Bindings."
    );
  }

  // Generate response using Workers AI
  const response = await env.AI.run(
    config.LLM_MODEL as BaseAiTextGenerationModels,
    {
      messages: [
        { role: "system", content: systemPromptWithBrand },
        { role: "user", content: prompt },
      ],
      max_tokens: config.MAX_TOKENS,
      temperature: skipRAG ? 0.7 : 0.3, // Higher temperature for conversational responses
    }
  );

  // Extract the response text
  const answer =
    typeof response === "object" && "response" in response
      ? (response as { response: string }).response
      : String(response);

  // Extract sources for citation
  const sources = skipRAG ? [] : extractSources(searchResults);

  return {
    answer,
    sources,
  };
}
