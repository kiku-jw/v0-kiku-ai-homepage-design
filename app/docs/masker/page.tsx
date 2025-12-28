import Link from "next/link"
import { ArrowLeft, EyeOff } from "lucide-react"

export default function MaskerDocsPage() {
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
            <EyeOff className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Masker</h1>
            <p className="text-muted-foreground">PII detection and masking API</p>
          </div>
        </div>

        {/* Endpoint */}
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold">Endpoint</h2>
          <code className="rounded-lg bg-muted/30 px-3 py-2 font-mono text-sm">POST /v1/masker/mask</code>
        </section>

        {/* Request */}
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold">Request Body</h2>
          <pre className="rounded-xl border border-border/40 bg-background/50 p-4 font-mono text-sm overflow-x-auto">
            {`{
  "text": "Contact john@acme.com or +1-555-1234",
  "options": {
    "entities": ["EMAIL", "PHONE", "NAME", "ADDRESS"],
    "format": "brackets" // "brackets" | "redact" | "hash"
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
  "masked_text": "Contact [EMAIL_1] or [PHONE_1]",
  "entities": [
    {"type": "EMAIL", "original": "john@acme.com", "masked": "[EMAIL_1]"},
    {"type": "PHONE", "original": "+1-555-1234", "masked": "[PHONE_1]"}
  ],
  "credits_used": 1
}`}
          </pre>
        </section>

        {/* Supported Entities */}
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold">Supported PII Types</h2>
          <div className="grid gap-3 md:grid-cols-3">
            {["EMAIL", "PHONE", "NAME", "ADDRESS", "SSN", "CREDIT_CARD", "IP_ADDRESS", "DATE_OF_BIRTH"].map((type) => (
              <div key={type} className="rounded-lg border border-border/30 bg-card/20 px-4 py-2 font-mono text-xs">
                {type}
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="rounded-2xl border border-border/60 bg-card/30 p-6">
          <h2 className="mb-2 text-lg font-semibold">Pricing</h2>
          <p className="text-muted-foreground">$0.001 per request. First 1,000 free each month.</p>
        </section>
      </div>
    </div>
  )
}
