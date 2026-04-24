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
import { createHash } from "crypto";

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
  /** Raw markdown content (with headings) — used for anchor-aware chunking. */
  rawContent?: string;
}

interface DocChunk {
  id: string;
  text: string;
  title: string;
  url: string;
  section?: string;
  brand: string;
  /** Slugified heading the chunk belongs to (for deep-link `#anchor`). */
  anchor?: string;
  /** Human-readable heading text the chunk belongs to. */
  heading?: string;
}

interface VectorRecord {
  id: string;
  values: number[];
  metadata: {
    title: string;
    url: string;
    section?: string;
    text: string;
    brand: string;
    anchor?: string;
    heading?: string;
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
function generateChunkId(url: string, index: number, brand: string): string {
  const urlHash = url
    .replace(/[^a-zA-Z0-9]/g, "-")
    .toLowerCase()
    .slice(0, 50);
  return `${brand}-${urlHash}-chunk-${index}`;
}

/**
 * Slugify a heading the same way Hugo's default `anchorize` does, so the
 * `#anchor` produced here matches the actual `id` emitted on the rendered
 * page. Hugo lowercases, replaces whitespace with `-`, and drops most
 * punctuation.
 */
function slugifyHeading(heading: string): string {
  return heading
    .toLowerCase()
    .trim()
    .replace(/[`~!@#$%^&*()+=<>?,./:;"'{}[\]|\\]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Split raw markdown into logical sections, one per `##`/`###` heading.
 *
 * The first section (before any heading) is returned with `heading` and
 * `anchor` left undefined — callers that want a fallback heading for that
 * pre-heading content should substitute the document title themselves.
 * Fenced code blocks are respected so a `#` inside a code sample isn't
 * mistaken for a heading.
 */
interface RawSection {
  heading?: string;
  anchor?: string;
  body: string;
}

function splitByHeadings(raw: string): RawSection[] {
  const sections: RawSection[] = [];
  const lines = raw.split(/\r?\n/);
  let inFence = false;
  let currentHeading: string | undefined;
  let currentAnchor: string | undefined;
  let buf: string[] = [];

  const flush = () => {
    const body = buf.join("\n").trim();
    if (body.length > 0) {
      sections.push({
        heading: currentHeading,
        anchor: currentAnchor,
        body,
      });
    }
    buf = [];
  };

  for (const line of lines) {
    // Track fenced code blocks (``` or ~~~) so `#` inside code isn't a heading.
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      buf.push(line);
      continue;
    }
    const headingMatch = !inFence
      ? /^(#{2,4})\s+(.+?)\s*#*\s*$/.exec(line)
      : null;
    if (headingMatch) {
      flush();
      currentHeading = headingMatch[2].trim();
      currentAnchor = slugifyHeading(currentHeading);
      continue;
    }
    buf.push(line);
  }
  flush();

  return sections;
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
// Versioning
// ============================================================================

/**
 * Compute a stable, content-addressed version string for the current set of
 * chunks. The version only changes when the indexed content changes, so it
 * can safely be used as an HTTP / localStorage cache key for search results.
 */
function computeIndexVersion(chunks: DocChunk[]): string {
  const hash = createHash("sha256");
  // Sort by id so ordering is deterministic regardless of input order.
  const sorted = [...chunks].sort((a, b) => a.id.localeCompare(b.id));
  for (const c of sorted) {
    hash.update(c.id);
    hash.update("\0");
    hash.update(c.text);
    hash.update("\0");
  }
  // 16 hex chars (64 bits) is plenty to detect content changes.
  return hash.digest("hex").slice(0, 16);
}

/**
 * Persist the current index version to the DOCS_CACHE KV namespace so the
 * search worker can surface it to clients and use it as a cache key.
 *
 * Requires `DOCS_CACHE_KV_ID` (KV namespace ID). If absent we skip the write
 * with a warning so local dry-ish runs still succeed — the search endpoint
 * falls back to an "unversioned" marker in that case.
 */
async function writeIndexVersion(
  version: string,
  brand: string,
  accountId?: string,
  apiToken?: string
): Promise<void> {
  const kvId = process.env.DOCS_CACHE_KV_ID;
  if (!kvId) {
    console.log(`   ⚠️  DOCS_CACHE_KV_ID not set — skipping KV version write.`);
    console.log(
      `      Set it to enable long-term edge/browser caching of search results.`
    );
    return;
  }

  const account = accountId || process.env.CLOUDFLARE_ACCOUNT_ID;
  const token = apiToken || process.env.CLOUDFLARE_API_TOKEN;
  if (!account || !token) {
    throw new Error("Missing CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_API_TOKEN");
  }

  const payload = JSON.stringify({
    version,
    brand,
    builtAt: new Date().toISOString(),
  });

  // Namespace-wide version (last writer wins across brands).
  const keys = ["index:version", `index:version:${brand}`];
  for (const key of keys) {
    const url = `https://api.cloudflare.com/client/v4/accounts/${account}/storage/kv/namespaces/${kvId}/values/${encodeURIComponent(key)}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "text/plain",
      },
      body: payload,
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(
        `KV write failed for ${key}: ${response.status} - ${error}`
      );
    }
  }

  console.log(`   ✓ Wrote index version to KV: ${version}`);
}

/**
 * Read the current index version from KV (brand-scoped). Returns null if KV
 * is not configured, the key is missing, or any error occurs. Used to decide
 * whether a re-index is actually needed.
 */
async function readIndexVersion(
  brand: string,
  accountId?: string,
  apiToken?: string
): Promise<string | null> {
  const kvId = process.env.DOCS_CACHE_KV_ID;
  if (!kvId) return null;

  const account = accountId || process.env.CLOUDFLARE_ACCOUNT_ID;
  const token = apiToken || process.env.CLOUDFLARE_API_TOKEN;
  if (!account || !token) return null;

  const key = `index:version:${brand}`;
  const url = `https://api.cloudflare.com/client/v4/accounts/${account}/storage/kv/namespaces/${kvId}/values/${encodeURIComponent(key)}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    // 404 means "never indexed" — treat as no version.
    if (response.status === 404) return null;
    if (!response.ok) return null;

    const raw = (await response.text()).trim();
    if (!raw) return null;

    // Payloads are JSON-wrapped ({ version, brand, builtAt }), but tolerate
    // plain strings too just in case.
    if (raw.startsWith("{")) {
      try {
        const parsed = JSON.parse(raw) as { version?: string };
        return parsed.version ?? null;
      } catch {
        return null;
      }
    }
    return raw;
  } catch {
    return null;
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
 * Process search index entries into document chunks.
 *
 * When the Hugo template provides `rawContent` (markdown source), chunks are
 * built per-heading so each vector carries an `anchor` that deep-links to the
 * exact section on the rendered page. When `rawContent` is missing (older
 * builds) we fall back to the pre-existing sentence-based chunker over
 * `content`.
 */
function processSearchIndex(
  entries: SearchIndexEntry[],
  brand: string
): DocChunk[] {
  const chunks: DocChunk[] = [];

  for (const entry of entries) {
    const sections: RawSection[] = entry.rawContent
      ? splitByHeadings(entry.rawContent)
      : [{ body: entry.content ?? "" }];

    let chunkIndex = 0;

    for (const section of sections) {
      const cleanedText = cleanText(section.body);
      if (cleanedText.length < CONFIG.minChunkSize) continue;

      const textChunks = chunkText(
        cleanedText,
        CONFIG.maxChunkSize,
        CONFIG.chunkOverlap
      );

      for (const text of textChunks) {
        chunks.push({
          id: generateChunkId(entry.href, chunkIndex++, brand),
          text,
          title: entry.title,
          url: entry.href,
          section: entry.section,
          brand,
          anchor: section.anchor,
          heading: section.heading,
        });
      }
    }

    // If the raw-content path produced nothing (e.g. empty doc), fall back
    // to the cleaned `content` so we never silently skip a document.
    if (
      chunkIndex === 0 &&
      entry.content &&
      entry.content.length >= CONFIG.minChunkSize
    ) {
      const cleanedText = cleanText(entry.content);
      const textChunks = chunkText(
        cleanedText,
        CONFIG.maxChunkSize,
        CONFIG.chunkOverlap
      );
      for (const text of textChunks) {
        chunks.push({
          id: generateChunkId(entry.href, chunkIndex++, brand),
          text,
          title: entry.title,
          url: entry.href,
          section: entry.section,
          brand,
        });
      }
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
          brand: chunk.brand,
          anchor: chunk.anchor,
          heading: chunk.heading,
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
  const force = args.includes("--force");
  const brandArg = args.find((a) => a === "--brand" || a === "-b");
  const brandIndex = brandArg ? args.indexOf(brandArg) + 1 : -1;
  const brand = brandIndex > 0 && args[brandIndex] ? args[brandIndex] : "eh";

  console.log("═".repeat(60));
  console.log("📄 Documentation Indexing Script");
  console.log("═".repeat(60));
  console.log(`   Brand: ${brand}`);
  console.log(`   Mode: ${dryRun ? "DRY RUN (no uploads)" : "LIVE"}`);
  console.log(`   Index: ${CONFIG.vectorizeIndex}`);
  if (force) console.log(`   Force: yes (re-index even if unchanged)`);
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
  const chunks = processSearchIndex(searchIndex, brand);

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

  // Compute the content-addressed version *before* embedding so we can skip
  // the (expensive) embedding + upload step when nothing has changed. This
  // makes it safe to run indexing on every Cloudflare Pages build — it
  // becomes a cheap no-op when the docs haven't changed.
  const newVersion = computeIndexVersion(chunks);
  if (!force) {
    const currentVersion = await readIndexVersion(brand);
    if (currentVersion && currentVersion === newVersion) {
      console.log(
        `\n⏭️  Content unchanged (version ${newVersion}). Skipping re-index.`
      );
      console.log(`   Pass --force to re-embed anyway.\n`);
      return;
    }
    if (currentVersion) {
      console.log(
        `\n🔄 Content changed: ${currentVersion} → ${newVersion}. Re-indexing...`
      );
    } else {
      console.log(
        `\n🆕 No existing version in KV. Indexing fresh (${newVersion})...`
      );
    }
  }

  // Step 3: Generate embeddings and upload
  console.log("\n🧠 Generating embeddings and indexing...");
  await indexChunks(chunks, dryRun);

  // Step 4: Publish the content-addressed version so the search endpoint
  // can use it as a long-lived cache key. We reuse `newVersion` (already
  // computed above) so the short-circuit check and the KV write always
  // agree on the version string, even if `computeIndexVersion` changes.
  console.log("\n\uD83D\uDD16 Publishing index version...");
  console.log(`   Version: ${newVersion}`);
  await writeIndexVersion(newVersion, brand);

  console.log("\n✅ Indexing complete!\n");
}

main().catch((error) => {
  console.error("\n❌ Fatal error:", error);
  process.exit(1);
});
