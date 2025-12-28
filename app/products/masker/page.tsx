import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, EyeOff, Lock, Zap, Globe } from "lucide-react"

export default function MaskerPage() {
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
            <Link href="/products/masker/demo">Try Demo</Link>
          </Button>
        </div>
      </div>

      {/* Hero */}
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
            <EyeOff className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight">Masker</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            PII masking API. Automatically detect and redact emails, phone numbers, addresses, and other sensitive data
            before sending to LLMs.
          </p>
        </div>

        {/* Visual Demo */}
        <div className="mb-16 rounded-2xl border border-border/60 bg-card/30 p-8">
          <div className="flex items-center justify-center gap-8">
            {/* Input */}
            <div className="flex-1 rounded-xl border border-border/40 bg-background/50 p-6">
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">Input</p>
              <div className="rounded-lg bg-muted/30 p-4 font-mono text-sm border border-border/30">
                <p>Contact John at</p>
                <p className="text-red-400">john@acme.com</p>
                <p>or call</p>
                <p className="text-red-400">+1-555-123-4567</p>
              </div>
            </div>

            <ArrowRight className="h-6 w-6 text-primary flex-shrink-0" />

            {/* Output */}
            <div className="flex-1 rounded-xl border border-border/40 bg-background/50 p-6">
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">Output</p>
              <div className="rounded-lg bg-muted/30 p-4 font-mono text-sm border border-border/30">
                <p>Contact John at</p>
                <p className="text-primary">[EMAIL_1]</p>
                <p>or call</p>
                <p className="text-primary">[PHONE_1]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {[
            { icon: Lock, title: "GDPR Compliant", desc: "Helps meet data protection requirements" },
            { icon: Zap, title: "Fast API", desc: "Sub-100ms latency for real-time masking" },
            { icon: Globe, title: "Multi-language", desc: "Supports 20+ languages and formats" },
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
          <p className="mb-6 text-muted-foreground">Pay per API call</p>
          <div className="inline-flex items-baseline gap-1">
            <span className="text-4xl font-bold text-primary">$0.001</span>
            <span className="text-muted-foreground">/ request</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">First 1,000 requests free each month</p>
          <Button asChild className="mt-6 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/products/masker/demo">Try Masker</Link>
          </Button>
        </div>

        {/* Docs Link */}
        <div className="mt-8 text-center">
          <Link href="/docs/masker" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Read the documentation →
          </Link>
        </div>
      </div>
    </div>
  )
}
