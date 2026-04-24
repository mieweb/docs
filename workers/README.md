# AI Documentation Assistant & Semantic Search

RAG-powered AI assistant **and semantic search** for Enterprise Health /
WebChart documentation, built with Cloudflare Workers AI and Vectorize.

The worker powers two features:

- `/search` — semantic search over the docs (powers the ⌘K modal).
- `/chat` — full RAG-powered chat assistant (the floating AI chat button).

Both share the same embeddings, Vectorize index and retrieval pipeline.

## Architecture

```mermaid
graph LR
    subgraph "Frontend"
        SearchUI[⌘K Search Modal]
        ChatUI[FloatingAIChat Component]
    end

    subgraph "Cloudflare Workers"
        API[AI Assistant Worker]
        AI[Workers AI]
        VEC[Vectorize Index]
    end

    subgraph "Build Time"
        HUGO[Hugo Build]
        IDX[Index Script]
    end

    SearchUI -->|POST /api/ai-assistant/search| API
    ChatUI -->|POST /api/ai-assistant/chat| API
    API -->|Query| VEC
    API -->|Embed & Generate| AI
    HUGO -->|search.json| IDX
    IDX -->|Embeddings| VEC
```

## Components

### Worker (`workers/ai-assistant/`)

Cloudflare Worker that handles:

- Receiving chat messages from the frontend
- Generating embeddings for user queries using `@cf/baai/bge-base-en-v1.5`
- Querying Vectorize for relevant documentation chunks
- Generating responses using `@cf/meta/llama-3.1-8b-instruct`

### Indexing Script (`workers/scripts/`)

Build-time script that:

- Processes Hugo's search index (`public/eh/search.json`)
- Chunks documentation into optimal sizes for RAG
- Generates embeddings via Workers AI
- Uploads vectors to Cloudflare Vectorize

### Frontend (`src/components/AIDocAssistant.tsx`)

React component using `@mieweb/ui` FloatingAIChat that:

- Renders floating chat button in bottom-right corner
- Manages conversation history
- Displays AI responses with source citations

## Setup

### Prerequisites

1. Cloudflare account with Workers AI and Vectorize access
2. Wrangler CLI installed and authenticated

### 1. Create Vectorize Index

```bash
cd workers/ai-assistant
npx wrangler vectorize create docs-embeddings --dimensions=768 --metric=cosine
```

### 2. Create KV Namespace

```bash
npx wrangler kv:namespace create DOCS_CACHE
```

Update `wrangler.toml` with the returned KV namespace ID.

### 3. Install Dependencies

```bash
# Worker dependencies
cd workers/ai-assistant && npm install

# Indexing script dependencies
cd ../scripts && npm install
```

### 4. Index Documentation

After building the Hugo site:

```bash
# Dry run to preview
npm run index:docs:dry-run

# Full indexing
npm run index:docs
```

### 5. Deploy Worker

```bash
npm run worker:deploy
```

### 6. Configure Pages Worker Binding

In Cloudflare Dashboard:

1. Go to Pages > Your Project > Settings > Functions
2. Add a Worker binding:
   - Variable name: `AI_ASSISTANT`
   - Worker: `docs-ai-assistant`
3. Add route `/api/*` to the worker

Alternatively, use a custom domain pointing to the worker.

## Development

### Local Worker Development

```bash
npm run worker:dev
```

This starts a local worker at http://localhost:8787

### Testing the API

```bash
# RAG chat
curl -X POST http://localhost:8787/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "How do I schedule an appointment?", "brand": "eh"}'

# Semantic search
curl -X POST http://localhost:8787/search \
  -H "Content-Type: application/json" \
  -d '{"query": "schedule an appointment", "brand": "eh", "limit": 5}'

# Or via GET
curl 'http://localhost:8787/search?q=schedule+an+appointment&brand=eh&limit=5'
```

## Configuration

### Hugo Config (`config-eh.toml` / `config-wc.toml`)

```toml
[params.ai]
  enabled = true
  apiUrl = "/api/ai-assistant"

[params.search]
  apiUrl = "/api/ai-assistant/search"
```

### Worker Config (`wrangler.toml`)

```toml
[vars]
EMBEDDING_MODEL = "@cf/baai/bge-base-en-v1.5"
LLM_MODEL = "@cf/meta/llama-3.1-8b-instruct"
MAX_CONTEXT_CHUNKS = "5"
MAX_TOKENS = "1024"
```

## API Reference

### POST /chat

Send a message to the AI assistant (RAG-powered Q&A).

**Request:**

```json
{
  "message": "How do I create a patient chart?",
  "brand": "eh", // optional, default: "eh"
  "history": [
    // optional conversation history
    { "role": "user", "content": "..." },
    { "role": "assistant", "content": "..." }
  ]
}
```

**Response:**

```json
{
  "answer": "To create a new patient chart...",
  "sources": [
    {
      "title": "Patient Registration",
      "url": "/eh/features/patient-registration/",
      "relevance": 0.92
    }
  ]
}
```

### POST /search

Run a semantic search over the documentation. Unlike `/chat`, this endpoint
returns raw ranked results (no LLM call) and is used to power the
documentation site's ⌘K search modal.

**Request:**

```json
{
  "query": "schedule an appointment",
  "brand": "eh", // optional, default: "eh"
  "limit": 10 // optional, default: 10, max: 25
}
```

**Response:**

```json
{
  "query": "schedule an appointment",
  "results": [
    {
      "id": "eh-eh-features-scheduling-chunk-0",
      "title": "Scheduling",
      "url": "/eh/features/scheduling/",
      "section": "features",
      "snippet": "Scheduling allows you to manage appointments…",
      "score": 0.87
    }
  ]
}
```

### GET /search?q=…

Convenience GET variant of `/search`. Supported query parameters:
`q` (required), `limit`, `brand`.

### GET /health

Health check endpoint.

```json
{
  "status": "healthy",
  "timestamp": "2026-02-03T12:00:00.000Z"
}
```

## Costs

Cloudflare Workers AI pricing (as of 2025):

- **Free tier**: 10,000 neurons/day
- **Paid**: $0.011 per 1,000 neurons

Typical usage per chat message:

- Embedding generation: ~500 neurons
- LLM inference: ~2,000-5,000 neurons

Vectorize:

- **Free tier**: 5M vectors, 30M queries/month
- **Paid**: $0.01 per 1M vectors stored

## Troubleshooting

### "No relevant documentation found"

The Vectorize index may be empty or outdated. Run:

```bash
npm run index:docs
```

### CORS errors

Ensure the worker includes proper CORS headers. Check `workers/ai-assistant/src/index.ts`.

### Rate limiting

Consider adding rate limiting for production:

```typescript
// In worker
const rateLimitKey = `rate:${request.headers.get("CF-Connecting-IP")}`;
const requests = await env.DOCS_CACHE.get(rateLimitKey);
if (requests && parseInt(requests) > 100) {
  return errorResponse("Rate limited", "RATE_LIMITED", 429);
}
```
