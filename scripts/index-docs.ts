#!/usr/bin/env tsx
/**
 * Documentation Indexing Script
 *
 * Processes Hugo-generated search index and creates vector embeddings
 * for RAG-powered documentation search.
 *
 * Usage:
 *   npm run index:docs              # Index documentation to Vectorize
 *   npm run index:docs -- --dry-run # Preview without uploading
 *   npm run index:docs -- --brand wc # Index WebChart docs
 *
 * Environment:
 *   CLOUDFLARE_ACCOUNT_ID - Your Cloudflare account ID
 *   CLOUDFLARE_API_TOKEN  - API token with Workers AI and Vectorize permissions
 */

import * as fs from "fs/promises";
import * as path from "path";

// ============================================================================
// Configuration
// ============================================================================

const CONFIG = {
  /** Maximum chunk size in characters */
  maxChunkSize: 1500,
  /** Overlap between chunks for context continuity */
  chunkOverlap: 200,
  /** Minimum chunk size (skip smaller chunks) */
  minChunkSize: 100,
  /** Vectorize index name */
  vectorizeIndex: "docs-embeddings",
  /** Embedding model */
  embeddingModel: "@cf/baai/bge-base-en-v1.5",
  /** Batch size for API calls */
  batchSize: 20,
  /** Delay between batches (ms) to avoid rate limits */
  batchDelay: 1000,
};

// ============================================================================
// Types
// ============================================================================

interface SearchIndexEntry {
  href: string;
  title: string;
  section?: string;
  content: string;
}

interface DocChunk {
  id: string;
  text: string;
  title: string;
  url: string;
  section?: string;
}

interface VectorRecord {
  id: string;
  values: number[];
  metadata: {
    title: string;
    url: string;
    section?: string;
    text: string;
  };
}

// ============================================================================
// Text Processing
// ============================================================================

/**
 * Clean and normalize text content
 */
function cleanText(text: string): string {
  return (
    text
      // Remove Hugo shortcodes
      .replace(/\{\{[%<].*?[%>]\}\}/g, "")
      // Remove HTML tags
      .replace(/<[^>]+>/g, "")
      // Remove markdown image syntax
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
      // Remove markdown link syntax but keep text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      // Remove multiple newlines
      .replace(/\n{3,}/g, "\n\n")
      // Remove excessive whitespace
      .replace(/[ \t]+/g, " ")
      // Trim
      .trim()
  );
}

/**
 * Split text into chunks with overlap
 */
function chunkText(text: string, maxSize: number, overlap: number): string[] {
  const chunks: string[] = [];
  const sentences = text.split(/(?<=[.!?])\s+/);
  let currentChunk = "";

  for (const sentence of sentences) {
    if (currentChunk.length + sentence.length > maxSize) {
      if (currentChunk.length >= CONFIG.minChunkSize) {
        chunks.push(currentChunk.trim());
      }
      // Start new chunk with overlap from previous
      const words = currentChunk.split(" ");
      const overlapWords = words.slice(-Math.floor(overlap / 5));
      currentChunk = overlapWords.join(" ") + " " + sentence;
    } else {
      currentChunk += (currentChunk ? " " : "") + sentence;
    }
  }

  // Add final chunk
  if (currentChunk.length >= CONFIG.minChunkSize) {
    chunks.push(currentChunk.trim());
  }

  return chunks;
}

/**
 * Generate a unique ID for a chunk
 */
function generateChunkId(url: string, index: number): string {
  const urlHash = url
    .replace(/[^a-zA-Z0-9]/g, "-")
    .toLowerCase()
    .slice(0, 50);
  return `${urlHash}-chunk-${index}`;
}

// ============================================================================
// Cloudflare API
// ============================================================================

async function callCloudflareAPI(
  endpoint: string,
  method: string,
  body?: unknown,
  accountId?: string,
  apiToken?: string
): Promise<unknown> {
  const account = accountId || process.env.CLOUDFLARE_ACCOUNT_ID;
  const token = apiToken || process.env.CLOUDFLARE_API_TOKEN;

  if (!account || !token) {
    throw new Error(
      "Missing CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_API_TOKEN environment variables"
    );
  }

  const url = `https://api.cloudflare.com/client/v4/accounts/${account}${endpoint}`;

  const response = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      `Cloudflare API error: ${response.status} - ${JSON.stringify(data)}`
    );
  }

  return data;
}

/**
 * Generate embeddings using Workers AI
 */
async function generateEmbeddings(
  texts: string[],
  accountId?: string,
  apiToken?: string
): Promise<number[][]> {
  const result = (await callCloudflareAPI(
    `/ai/run/${CONFIG.embeddingModel}`,
    "POST",
    { text: texts },
    accountId,
    apiToken
  )) as { result: { data: number[][] } };

  return result.result.data;
}

/**
 * Insert vectors into Vectorize
 */
async function insertVectors(
  vectors: VectorRecord[],
  accountId?: string,
  apiToken?: string
): Promise<void> {
  // Vectorize expects NDJSON format
  const ndjson = vectors.map((v) => JSON.stringify(v)).join("\n");

  const account = accountId || process.env.CLOUDFLARE_ACCOUNT_ID;
  const token = apiToken || process.env.CLOUDFLARE_API_TOKEN;

  if (!account || !token) {
    throw new Error("Missing CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_API_TOKEN");
  }

  const url = `https://api.cloudflare.com/client/v4/accounts/${account}/vectorize/v2/indexes/${CONFIG.vectorizeIndex}/insert`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-ndjson",
    },
    body: ndjson,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Vectorize insert failed: ${response.status} - ${error}`);
  }
}

// ============================================================================
// Main Processing
// ============================================================================

/**
 * Load and parse the Hugo search index
 */
async function loadSearchIndex(brand: string): Promise<SearchIndexEntry[]> {
  const indexPath = path.resolve(process.cwd(), `public/${brand}/search.json`);

  try {
    const content = await fs.readFile(indexPath, "utf-8");
    const index = JSON.parse(content) as SearchIndexEntry[];
    console.log(`📚 Loaded ${index.length} entries from search index`);
    return index;
  } catch (error) {
    console.error(`❌ Failed to load search index from ${indexPath}`);
    console.error("   Make sure to run ./build.sh first!");
    throw error;
  }
}

/**
 * Process search index entries into document chunks
 */
function processSearchIndex(entries: SearchIndexEntry[]): DocChunk[] {
  const chunks: DocChunk[] = [];

  for (const entry of entries) {
    if (!entry.content || entry.content.length < CONFIG.minChunkSize) {
      continue;
    }

    const cleanedText = cleanText(entry.content);
    const textChunks = chunkText(
      cleanedText,
      CONFIG.maxChunkSize,
      CONFIG.chunkOverlap
    );

    for (let i = 0; i < textChunks.length; i++) {
      chunks.push({
        id: generateChunkId(entry.href, i),
        text: textChunks[i],
        title: entry.title,
        url: entry.href,
        section: entry.section,
      });
    }
  }

  console.log(
    `✂️  Created ${chunks.length} chunks from ${entries.length} documents`
  );
  return chunks;
}

/**
 * Process chunks in batches and upload to Vectorize
 */
async function indexChunks(chunks: DocChunk[], dryRun: boolean): Promise<void> {
  const totalBatches = Math.ceil(chunks.length / CONFIG.batchSize);
  let processedCount = 0;
  let errorCount = 0;

  console.log(
    `\n🚀 Processing ${chunks.length} chunks in ${totalBatches} batches...\n`
  );

  for (let i = 0; i < chunks.length; i += CONFIG.batchSize) {
    const batchNum = Math.floor(i / CONFIG.batchSize) + 1;
    const batch = chunks.slice(i, i + CONFIG.batchSize);

    process.stdout.write(`   Batch ${batchNum}/${totalBatches}: `);

    if (dryRun) {
      console.log(`[DRY RUN] Would process ${batch.length} chunks`);
      processedCount += batch.length;
      continue;
    }

    try {
      // Generate embeddings for this batch
      const texts = batch.map((c) => c.text.slice(0, 512)); // Truncate for embedding
      const embeddings = await generateEmbeddings(texts);

      // Create vector records
      const vectors: VectorRecord[] = batch.map((chunk, idx) => ({
        id: chunk.id,
        values: embeddings[idx],
        metadata: {
          title: chunk.title,
          url: chunk.url,
          section: chunk.section,
          text: chunk.text.slice(0, 1000), // Store truncated text
        },
      }));

      // Insert into Vectorize
      await insertVectors(vectors);

      processedCount += batch.length;
      console.log(`✓ Indexed ${batch.length} chunks`);

      // Rate limit delay
      if (i + CONFIG.batchSize < chunks.length) {
        await new Promise((r) => setTimeout(r, CONFIG.batchDelay));
      }
    } catch (error) {
      errorCount += batch.length;
      console.log(
        `✗ Failed: ${error instanceof Error ? error.message : error}`
      );
    }
  }

  console.log(`\n📊 Results:`);
  console.log(`   ✓ Indexed: ${processedCount} chunks`);
  if (errorCount > 0) {
    console.log(`   ✗ Failed: ${errorCount} chunks`);
  }
}

// ============================================================================
// CLI Entry Point
// ============================================================================

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const brandArg = args.find((a) => a === "--brand" || a === "-b");
  const brandIndex = brandArg ? args.indexOf(brandArg) + 1 : -1;
  const brand = brandIndex > 0 && args[brandIndex] ? args[brandIndex] : "eh";

  console.log("═".repeat(60));
  console.log("📄 Documentation Indexing Script");
  console.log("═".repeat(60));
  console.log(`   Brand: ${brand}`);
  console.log(`   Mode: ${dryRun ? "DRY RUN (no uploads)" : "LIVE"}`);
  console.log(`   Index: ${CONFIG.vectorizeIndex}`);
  console.log("═".repeat(60));

  // Check for required environment variables (unless dry run)
  if (!dryRun) {
    if (!process.env.CLOUDFLARE_ACCOUNT_ID) {
      console.error("\n❌ Missing CLOUDFLARE_ACCOUNT_ID environment variable");
      console.error(
        "   Set it with: export CLOUDFLARE_ACCOUNT_ID=your-account-id\n"
      );
      process.exit(1);
    }
    if (!process.env.CLOUDFLARE_API_TOKEN) {
      console.error("\n❌ Missing CLOUDFLARE_API_TOKEN environment variable");
      console.error(
        "   Create one at: https://dash.cloudflare.com/profile/api-tokens"
      );
      console.error("   Required permissions: Workers AI, Vectorize\n");
      process.exit(1);
    }
  }

  // Step 1: Load search index
  console.log("\n📚 Loading search index...");
  const searchIndex = await loadSearchIndex(brand);

  // Step 2: Process into chunks
  console.log("\n✂️  Processing documents into chunks...");
  const chunks = processSearchIndex(searchIndex);

  if (dryRun) {
    console.log("\n📊 Dry run summary:");
    console.log(`   Total documents: ${searchIndex.length}`);
    console.log(`   Total chunks: ${chunks.length}`);
    const avgSize = Math.round(
      chunks.reduce((sum, c) => sum + c.text.length, 0) / chunks.length
    );
    console.log(`   Average chunk size: ${avgSize} chars`);
    console.log("\n📝 Sample chunks:");
    for (const chunk of chunks.slice(0, 3)) {
      console.log(`\n   [${chunk.title}] (${chunk.text.length} chars)`);
      console.log(`   ${chunk.text.slice(0, 100)}...`);
    }
    console.log("\n✅ Dry run complete! Run without --dry-run to index.\n");
    return;
  }

  // Step 3: Generate embeddings and upload
  console.log("\n🧠 Generating embeddings and indexing...");
  await indexChunks(chunks, dryRun);

  console.log("\n✅ Indexing complete!\n");
}

main().catch((error) => {
  console.error("\n❌ Fatal error:", error);
  process.exit(1);
});
