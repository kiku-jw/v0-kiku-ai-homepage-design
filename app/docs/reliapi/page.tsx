import Link from "next/link"
import { ArrowLeft, RefreshCw } from "lucide-react"

export default function ReliAPIDocsPage() {
  return (
    <div className="noise-bg grid-bg min-h-screen">
      {/* Header */}
      <div className="border-b border-border/40 bg-background/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/docs"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Docs
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
            <RefreshCw className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">ReliAPI</h1>
            <p className="text-muted-foreground">Reliability layer for AI API calls</p>
          </div>
        </div>

        {/* How it works */}
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold">How It Works</h2>
          <p className="mb-4 text-muted-foreground">Replace your OpenAI/Anthropic base URL with ReliAPI:</p>
          <pre className="rounded-xl border border-border/40 bg-background/50 p-4 font-mono text-sm overflow-x-auto">
            {`// Before
const client = new OpenAI({ baseURL: "https://api.openai.com/v1" })

// After
const client = new OpenAI({ 
  baseURL: "https://api.kikuai.dev/v1/reliapi/proxy/openai"
})`}
          </pre>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold">Features</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-border/40 bg-card/20 p-4">
              <p className="font-medium">Smart Retries</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Automatic retry with exponential backoff on 429/5xx errors.
              </p>
            </div>
            <div className="rounded-xl border border-border/40 bg-card/20 p-4">
              <p className="font-medium">Semantic Caching</p>
              <p className="mt-1 text-sm text-muted-foreground">Cache identical prompts to reduce latency and costs.</p>
            </div>
            <div className="rounded-xl border border-border/40 bg-card/20 p-4">
              <p className="font-medium">Fallback Chains</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Automatically failover to backup providers on errors.
              </p>
            </div>
          </div>
        </section>

        {/* Configuration */}
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold">Configuration</h2>
          <pre className="rounded-xl border border-border/40 bg-background/50 p-4 font-mono text-sm overflow-x-auto">
            {`// Headers for configuration
X-ReliAPI-Cache: true          // Enable caching
X-ReliAPI-Cache-TTL: 3600      // Cache TTL in seconds
X-ReliAPI-Retries: 3           // Max retry attempts
X-ReliAPI-Fallback: anthropic  // Fallback provider`}
          </pre>
        </section>

        {/* Pricing */}
        <section className="rounded-2xl border border-border/60 bg-card/30 p-6">
          <h2 className="mb-2 text-lg font-semibold">Pricing</h2>
          <p className="text-muted-foreground">1% of proxied API costs. Minimum $5/month. Cache hits are free.</p>
        </section>
      </div>
    </div>
  )
}
