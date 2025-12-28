import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, RefreshCw, Database, Shield } from "lucide-react"

export default function ReliAPIPage() {
  return (
    <div className="noise-bg grid-bg min-h-screen">
      {/* Header */}
      <div className="border-b border-border/40 bg-background/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <Button asChild size="sm" className="rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/products/reliapi/demo">Try Demo</Link>
          </Button>
        </div>
      </div>

      {/* Hero */}
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
            <RefreshCw className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight">ReliAPI</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Reliability layer for AI APIs. Automatic retries, caching, and fallbacks. Never lose a request to rate
            limits or downtime again.
          </p>
        </div>

        {/* Visual Demo */}
        <div className="mb-16 rounded-2xl border border-border/60 bg-card/30 p-8">
          <div className="flex items-center justify-center gap-8">
            {/* Input */}
            <div className="flex-1 rounded-xl border border-border/40 bg-background/50 p-6">
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">Request</p>
              <div className="space-y-2 font-mono text-xs">
                <div className="rounded bg-muted/30 px-3 py-2 border border-border/30">POST /v1/chat/completions</div>
                <div className="rounded bg-red-500/10 px-3 py-2 border border-red-500/30 text-red-400">
                  429 Rate Limited
                </div>
              </div>
            </div>

            <ArrowRight className="h-6 w-6 text-primary flex-shrink-0" />

            {/* Output */}
            <div className="flex-1 rounded-xl border border-border/40 bg-background/50 p-6">
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                ReliAPI Response
              </p>
              <div className="space-y-2 font-mono text-xs">
                <div className="rounded bg-primary/10 px-3 py-2 border border-primary/30 text-primary">CACHE HIT ✓</div>
                <div className="rounded bg-muted/30 px-3 py-2 border border-border/30">200 OK (from cache)</div>
                <div className="text-muted-foreground mt-2">Latency: 12ms</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {[
            { icon: RefreshCw, title: "Smart Retries", desc: "Exponential backoff with jitter" },
            { icon: Database, title: "Response Cache", desc: "Semantic caching for identical prompts" },
            { icon: Shield, title: "Fallback Chains", desc: "Automatic failover to backup providers" },
          ].map((feature) => (
            <div key={feature.title} className="rounded-xl border border-border/40 bg-card/20 p-6">
              <feature.icon className="mb-3 h-5 w-5 text-primary" />
              <h3 className="mb-2 font-medium">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="rounded-2xl border border-border/60 bg-card/30 p-8 text-center">
          <h2 className="mb-2 text-xl font-semibold">Pricing</h2>
          <p className="mb-6 text-muted-foreground">Percentage of proxied costs</p>
          <div className="inline-flex items-baseline gap-1">
            <span className="text-4xl font-bold text-primary">1%</span>
            <span className="text-muted-foreground">of API spend</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Minimum $5/month, cache hits are free</p>
          <Button asChild className="mt-6 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/products/reliapi/demo">Get Started</Link>
          </Button>
        </div>

        {/* Docs Link */}
        <div className="mt-8 text-center">
          <Link href="/docs/reliapi" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Read the documentation →
          </Link>
        </div>
      </div>
    </div>
  )
}
