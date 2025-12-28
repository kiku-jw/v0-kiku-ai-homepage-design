"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Loader2, Play, CheckCircle2, AlertCircle, Clock } from "lucide-react"

export default function ReliAPIDemoPage() {
  const [isRunning, setIsRunning] = useState(false)
  const [logs, setLogs] = useState<Array<{ type: "info" | "error" | "success"; message: string; time: string }>>([])

  const simulateRequest = async () => {
    setIsRunning(true)
    setLogs([])

    const addLog = (type: "info" | "error" | "success", message: string) => {
      const time = new Date().toLocaleTimeString()
      setLogs((prev) => [...prev, { type, message, time }])
    }

    addLog("info", "Sending request to OpenAI...")
    await new Promise((r) => setTimeout(r, 500))

    addLog("error", "429 Rate Limited - Too Many Requests")
    await new Promise((r) => setTimeout(r, 300))

    addLog("info", "ReliAPI: Checking cache...")
    await new Promise((r) => setTimeout(r, 200))

    addLog("success", "Cache HIT - Returning cached response")
    await new Promise((r) => setTimeout(r, 100))

    addLog("success", "Response delivered in 12ms (vs 2000ms+ without cache)")

    setIsRunning(false)
  }

  return (
    <div className="noise-bg grid-bg min-h-screen">
      {/* Header */}
      <div className="border-b border-border/40 bg-background/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/products/reliapi"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to ReliAPI
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-2xl font-semibold">ReliAPI Demo</h1>
          <p className="text-muted-foreground">See how ReliAPI handles rate limits and caching</p>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card/30 p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-medium">Simulate API Request</h2>
            <Button
              onClick={simulateRequest}
              disabled={isRunning}
              className="rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {isRunning ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Running...
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Run Demo
                </>
              )}
            </Button>
          </div>

          {/* Logs */}
          <div className="min-h-64 rounded-xl border border-border/40 bg-background/50 p-4">
            {logs.length === 0 ? (
              <p className="text-sm text-muted-foreground">Click "Run Demo" to simulate a rate-limited API request</p>
            ) : (
              <div className="space-y-2 font-mono text-sm">
                {logs.map((log, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xs text-muted-foreground">{log.time}</span>
                    {log.type === "info" && <Clock className="mt-0.5 h-4 w-4 text-muted-foreground" />}
                    {log.type === "error" && <AlertCircle className="mt-0.5 h-4 w-4 text-red-400" />}
                    {log.type === "success" && <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />}
                    <span
                      className={log.type === "error" ? "text-red-400" : log.type === "success" ? "text-primary" : ""}
                    >
                      {log.message}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Note */}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          This is a demo.{" "}
          <Link href="/dashboard" className="text-primary hover:underline">
            Sign in
          </Link>{" "}
          to use with your API key.
        </p>
      </div>
    </div>
  )
}
