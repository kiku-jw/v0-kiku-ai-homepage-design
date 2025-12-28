import Link from "next/link"
import { ArrowLeft, MessageSquare } from "lucide-react"

export default function PATASDocsPage() {
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
            <MessageSquare className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">PATAS</h1>
            <p className="text-muted-foreground">Pattern Analysis for Text Anti-Spam</p>
          </div>
        </div>

        {/* Endpoint */}
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold">Endpoint</h2>
          <code className="rounded-lg bg-muted/30 px-3 py-2 font-mono text-sm">POST /v1/patas/analyze</code>
        </section>

        {/* Request */}
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold">Request Body</h2>
          <pre className="rounded-xl border border-border/40 bg-background/50 p-4 font-mono text-sm overflow-x-auto">
            {`{
  "messages": [
    {"content": "Free V-Bucks!", "label": "spam"},
    {"content": "Hello world", "label": "ham"},
    // ... more messages
  ],
  "options": {
    "min_confidence": 0.8,
    "mode": "SAFE_AUTO" // "SAFE_AUTO" | "REVIEW_ONLY"
  }
}`}
          </pre>
        </section>

        {/* Response */}
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold">Response</h2>
          <pre className="rounded-xl border border-border/40 bg-background/50 p-4 font-mono text-sm overflow-x-auto">
            {`{
  "success": true,
  "rules": [
    {
      "action": "BLOCK",
      "pattern": "free.*v-?bucks",
      "confidence": 0.94,
      "cluster": "gaming_scam",
      "examples_matched": 23
    }
  ],
  "mode": "SAFE_AUTO",
  "credits_used": 5
}`}
          </pre>
        </section>

        {/* Modes */}
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold">Modes</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-border/40 bg-card/20 p-4">
              <p className="font-medium text-primary">SAFE_AUTO</p>
              <p className="mt-1 text-sm text-muted-foreground">
                High-confidence rules auto-block. Recommended for production.
              </p>
            </div>
            <div className="rounded-xl border border-border/40 bg-card/20 p-4">
              <p className="font-medium">REVIEW_ONLY</p>
              <p className="mt-1 text-sm text-muted-foreground">
                All matches flagged for human review. Good for testing.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="rounded-2xl border border-border/60 bg-card/30 p-6">
          <h2 className="mb-2 text-lg font-semibold">Pricing</h2>
          <p className="text-muted-foreground">$0.10 per 1,000 messages analyzed</p>
        </section>
      </div>
    </div>
  )
}
