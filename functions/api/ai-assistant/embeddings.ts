/**
 * Embedding utilities for RAG search
 */

import type { Env, VectorMetadata, VectorSearchResult, CONFIG } from "./types";

/**
 * Generate embedding vector for text using Workers AI
 */
export async function generateEmbedding(
  text: string,
  ai: Ai,
  model: string
): Promise<number[]> {
  const response = await ai.run(model as BaseAiTextEmbeddingsModels, {
    text: [text],
  });

  const embeddings = response.data;
  if (!embeddings || embeddings.length === 0) {
    throw new Error("Failed to generate embedding");
  }

  return embeddings[0] as number[];
}

/**
 * Search Vectorize for similar document chunks
 */
export async function searchSimilarChunks(
  query: string,
  env: Env,
  config: typeof CONFIG,
  topK: number = 5
): Promise<VectorSearchResult[]> {
  // Check if Vectorize binding is available (may not be in local dev)
  if (!env.VECTORIZE || typeof env.VECTORIZE.query !== "function") {
    console.warn("Vectorize binding not available - returning empty results");
    return [];
  }

  const queryEmbedding = await generateEmbedding(
    query,
    env.AI,
    config.EMBEDDING_MODEL
  );

  const results = await env.VECTORIZE.query(queryEmbedding, {
    topK,
    returnMetadata: "all",
  });

  return results.matches.map((match) => ({
    id: match.id,
    score: match.score,
    metadata: match.metadata as VectorMetadata | undefined,
  }));
}

/**
 * Build context string from search results for the LLM
 */
export function buildContext(results: VectorSearchResult[]): string {
  if (results.length === 0) {
    return "No relevant documentation found.";
  }

  const contextParts = results
    .filter((r) => r.metadata?.text)
    .map((r, i) => {
      const meta = r.metadata!;
      return `[Source ${i + 1}: ${meta.title}]\n${meta.text}`;
    });

  return contextParts.join("\n\n---\n\n");
}

/**
 * Extract sources from search results for response
 */
export function extractSources(
  results: VectorSearchResult[]
): Array<{ title: string; url: string; relevance: number }> {
  const urlMap = new Map<
    string,
    { title: string; url: string; relevance: number }
  >();

  for (const result of results) {
    if (!result.metadata) continue;

    const url = result.metadata.url;
    const existing = urlMap.get(url);

    if (!existing || result.score > existing.relevance) {
      urlMap.set(url, {
        title: result.metadata.title,
        url,
        relevance: result.score,
      });
    }
  }

  return Array.from(urlMap.values()).sort((a, b) => b.relevance - a.relevance);
}
