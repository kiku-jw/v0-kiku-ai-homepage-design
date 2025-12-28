import Link from "next/link"
import { ArrowLeft, ImageIcon } from "lucide-react"

export default function Chart2CSVDocsPage() {
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
            <ImageIcon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Chart2CSV</h1>
            <p className="text-muted-foreground">Extract data from chart images</p>
          </div>
        </div>

        {/* Endpoint */}
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold">Endpoint</h2>
          <code className="rounded-lg bg-muted/30 px-3 py-2 font-mono text-sm">POST /v1/chart2csv/extract</code>
        </section>

        {/* Request */}
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold">Request Body</h2>
          <pre className="rounded-xl border border-border/40 bg-background/50 p-4 font-mono text-sm overflow-x-auto">
            {`{
  "image_url": "https://example.com/chart.png",
  // OR
  "image_base64": "data:image/png;base64,...",
  
  "output_format": "csv", // "csv" | "json" | "xlsx"
  "options": {
    "detect_axis_labels": true,
    "include_confidence": false
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
  "data": {
    "columns": ["Quarter", "Revenue"],
    "rows": [
      ["Q1", 12400],
      ["Q2", 18200],
      ["Q3", 24800]
    ]
  },
  "chart_type": "bar",
  "credits_used": 1
}`}
          </pre>
        </section>

        {/* Supported Charts */}
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold">Supported Chart Types</h2>
          <div className="grid gap-3 md:grid-cols-3">
            {["Bar charts", "Line charts", "Pie charts", "Area charts", "Scatter plots", "Histograms"].map((type) => (
              <div key={type} className="rounded-lg border border-border/30 bg-card/20 px-4 py-2 text-sm">
                {type}
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="rounded-2xl border border-border/60 bg-card/30 p-6">
          <h2 className="mb-2 text-lg font-semibold">Pricing</h2>
          <p className="text-muted-foreground">1 credit = $0.02 per chart extraction</p>
        </section>
      </div>
    </div>
  )
}
