import Link from "next/link"
import { ArrowLeft, Book, ImageIcon, MessageSquare, EyeOff, RefreshCw, ExternalLink } from "lucide-react"

const products = [
  {
    name: "Chart2CSV",
    description: "Extract data from chart images",
    icon: ImageIcon,
    href: "/docs/chart2csv",
  },
  {
    name: "PATAS",
    description: "Generate spam detection rules",
    icon: MessageSquare,
    href: "/docs/patas",
  },
  {
    name: "Masker",
    description: "PII masking API",
    icon: EyeOff,
    href: "/docs/masker",
  },
  {
    name: "ReliAPI",
    description: "Reliability layer for AI APIs",
    icon: RefreshCw,
    href: "/docs/reliapi",
  },
]

export default function DocsPage() {
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
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <Book className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-semibold">Documentation</h1>
          </div>
          <p className="text-muted-foreground">Learn how to integrate KikuAI products into your applications.</p>
        </div>

        {/* Getting Started */}
        <div className="mb-12 rounded-2xl border border-border/60 bg-card/30 p-8">
          <h2 className="mb-4 text-xl font-semibold">Getting Started</h2>
          <p className="mb-6 text-muted-foreground">
            All KikuAI APIs use the same authentication method. Include your API key in the header:
          </p>
          <pre className="rounded-xl border border-border/40 bg-background/50 p-4 font-mono text-sm overflow-x-auto">
            {`curl -X POST https://api.kikuai.dev/v1/chart2csv/extract \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"image_url": "https://..."}'`}
          </pre>
        </div>

        {/* Product Docs */}
        <h2 className="mb-6 text-xl font-semibold">Product Documentation</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group rounded-xl border border-border/40 bg-card/20 p-6 transition-colors hover:border-primary/30 hover:bg-card/40"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <product.icon className="h-5 w-5 text-primary" />
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h3 className="mb-1 font-medium">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </Link>
          ))}
        </div>

        {/* API Reference */}
        <div className="mt-12 rounded-2xl border border-border/60 bg-card/30 p-8">
          <h2 className="mb-4 text-xl font-semibold">API Reference</h2>
          <p className="mb-4 text-muted-foreground">Base URL for all API endpoints:</p>
          <code className="rounded-lg bg-muted/30 px-3 py-2 font-mono text-sm">https://api.kikuai.dev/v1</code>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-border/30 bg-background/30 p-4">
              <p className="mb-2 text-sm font-medium">Rate Limits</p>
              <p className="text-sm text-muted-foreground">100 requests/minute per API key</p>
            </div>
            <div className="rounded-xl border border-border/30 bg-background/30 p-4">
              <p className="mb-2 text-sm font-medium">Response Format</p>
              <p className="text-sm text-muted-foreground">All responses are JSON</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
