import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github } from "lucide-react"

export default function OpenSourcePage() {
  return (
    <div className="noise-bg grid-bg flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <Github className="h-8 w-8 text-primary" />
        </div>
        <h1 className="mb-4 text-3xl font-semibold">Open Source</h1>
        <p className="mb-8 max-w-md text-muted-foreground">
          Explore our open source tools and contribute to the KikuAI ecosystem.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild variant="outline" className="rounded-xl bg-transparent">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild className="rounded-xl">
            <a href="https://github.com/kikuai" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
