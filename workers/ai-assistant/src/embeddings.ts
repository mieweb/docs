/**
 * Embedding utilities for generating and querying document vectors
 */

import type { Env, VectorMetadata, VectorSearchResult } from "./types";

/**
 * Generate embedding vector for text using Workers AI
 */
export async function generateEmbedding(
  text: string,
  env: Env
): Promise<number[]> {
  const response = await env.AI.run(
    env.EMBEDDING_MODEL as BaseAiTextEmbeddingsModels,
    {
      text: [text],
    }
  );

  // Workers AI returns embeddings in data array
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
  topK: number = 5
): Promise<VectorSearchResult[]> {
  // Generate embedding for the query
  const queryEmbedding = await generateEmbedding(query, env);

  // Search Vectorize index
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
  // Deduplicate by URL and keep highest relevance
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
