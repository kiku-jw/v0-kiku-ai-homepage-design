import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="noise-bg grid-bg flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="mb-4 text-3xl font-semibold">Dashboard</h1>
        <p className="mb-8 text-muted-foreground">Sign in to access your KikuAI dashboard.</p>
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
