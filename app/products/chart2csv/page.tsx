import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ImageIcon } from "lucide-react"

export default function Chart2CSVPage() {
  return (
    <div className="noise-bg grid-bg flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <ImageIcon className="h-8 w-8 text-primary" />
        </div>
        <h1 className="mb-4 text-3xl font-semibold">Chart → CSV</h1>
        <p className="mb-8 max-w-md text-muted-foreground">
          Upload any chart image or PDF and get structured CSV/JSON data in seconds.
        </p>
        <Button asChild variant="outline" className="rounded-xl bg-transparent">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}
