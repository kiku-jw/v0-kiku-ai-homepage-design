import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, ImageIcon, FileSpreadsheet, Zap, CheckCircle2 } from "lucide-react"

export default function Chart2CSVPage() {
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
            <Link href="/products/chart2csv/demo">Try Demo</Link>
          </Button>
        </div>
      </div>

      {/* Hero */}
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
            <ImageIcon className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight">Chart → CSV</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Extract structured data from any chart image or PDF. Upload a bar chart, line graph, or pie chart and get
            clean CSV/JSON output in seconds.
          </p>
        </div>

        {/* Visual Demo */}
        <div className="mb-16 rounded-2xl border border-border/60 bg-card/30 p-8">
          <div className="flex items-center justify-center gap-8">
            {/* Input: Chart */}
            <div className="flex-1 rounded-xl border border-border/40 bg-background/50 p-6">
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">Input</p>
              <div className="aspect-video rounded-lg bg-muted/30 border border-border/30 flex items-center justify-center">
                <svg viewBox="0 0 200 120" className="w-full h-full p-4">
                  <rect x="20" y="80" width="25" height="30" fill="#22C55E" opacity="0.8" rx="2" />
                  <rect x="55" y="50" width="25" height="60" fill="#22C55E" opacity="0.8" rx="2" />
                  <rect x="90" y="30" width="25" height="80" fill="#22C55E" opacity="0.8" rx="2" />
                  <rect x="125" y="60" width="25" height="50" fill="#22C55E" opacity="0.8" rx="2" />
                  <rect x="160" y="40" width="25" height="70" fill="#22C55E" opacity="0.8" rx="2" />
                  <line x1="15" y1="110" x2="190" y2="110" stroke="currentColor" strokeOpacity="0.3" />
                  <line x1="15" y1="20" x2="15" y2="110" stroke="currentColor" strokeOpacity="0.3" />
                </svg>
              </div>
              <p className="mt-3 text-xs text-muted-foreground text-center">quarterly_revenue.png</p>
            </div>

            <ArrowRight className="h-6 w-6 text-primary flex-shrink-0" />

            {/* Output: Table */}
            <div className="flex-1 rounded-xl border border-border/40 bg-background/50 p-6">
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">Output</p>
              <div className="rounded-lg border border-border/30 overflow-hidden">
                <table className="w-full text-xs">
                  <thead className="bg-muted/30">
                    <tr>
                      <th className="px-3 py-2 text-left font-medium text-muted-foreground">Quarter</th>
                      <th className="px-3 py-2 text-left font-medium text-muted-foreground">Revenue</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono">
                    <tr className="border-t border-border/20">
                      <td className="px-3 py-2">Q1</td>
                      <td className="px-3 py-2 text-primary">$12,400</td>
                    </tr>
                    <tr className="border-t border-border/20">
                      <td className="px-3 py-2">Q2</td>
                      <td className="px-3 py-2 text-primary">$18,200</td>
                    </tr>
                    <tr className="border-t border-border/20">
                      <td className="px-3 py-2">Q3</td>
                      <td className="px-3 py-2 text-primary">$24,800</td>
                    </tr>
                    <tr className="border-t border-border/20">
                      <td className="px-3 py-2">Q4</td>
                      <td className="px-3 py-2 text-primary">$21,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-muted-foreground text-center">output.csv</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {[
            { icon: Zap, title: "Fast Processing", desc: "Results in under 5 seconds for most charts" },
            { icon: FileSpreadsheet, title: "Multiple Formats", desc: "Export to CSV, JSON, or Excel" },
            { icon: CheckCircle2, title: "High Accuracy", desc: "AI-powered extraction with 95%+ accuracy" },
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
          <p className="mb-6 text-muted-foreground">Pay per extraction, no monthly fees</p>
          <div className="inline-flex items-baseline gap-1">
            <span className="text-4xl font-bold text-primary">$0.02</span>
            <span className="text-muted-foreground">/ chart</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Bulk discounts available for 1000+ extractions</p>
          <Button asChild className="mt-6 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/products/chart2csv/demo">Start Extracting</Link>
          </Button>
        </div>

        {/* Docs Link */}
        <div className="mt-8 text-center">
          <Link href="/docs/chart2csv" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Read the documentation →
          </Link>
        </div>
      </div>
    </div>
  )
}
