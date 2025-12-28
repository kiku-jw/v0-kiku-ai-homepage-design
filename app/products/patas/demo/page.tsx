"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Upload, Download, Loader2, FileText } from "lucide-react"

export default function PATASDemoPage() {
  const [file, setFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0]
    if (uploadedFile) {
      setFile(uploadedFile)
      setResult(null)
    }
  }

  const handleProcess = async () => {
    if (!file) return
    setIsProcessing(true)
    await new Promise((resolve) => setTimeout(resolve, 2500))
    setResult(`{
  "rules": [
    {
      "action": "BLOCK",
      "pattern": "free.*v-?bucks",
      "confidence": 0.94,
      "cluster": "gaming_scam"
    },
    {
      "action": "REVIEW_ONLY",
      "pattern": "(buy|get).*followers",
      "confidence": 0.87,
      "cluster": "social_spam"
    }
  ],
  "mode": "SAFE_AUTO"
}`)
    setIsProcessing(false)
  }

  return (
    <div className="noise-bg grid-bg min-h-screen">
      {/* Header */}
      <div className="border-b border-border/40 bg-background/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/products/patas"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to PATAS
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-2xl font-semibold">PATAS Demo</h1>
          <p className="text-muted-foreground">Upload chat logs and generate spam rules</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Upload Area */}
          <div className="rounded-2xl border border-border/60 bg-card/30 p-6">
            <h2 className="mb-4 font-medium">1. Upload Logs</h2>
            <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border/60 bg-background/30 p-8 transition-colors hover:border-primary/50 hover:bg-background/50">
              <input type="file" accept=".json,.jsonl,.csv,.txt" onChange={handleUpload} className="hidden" />
              {file ? (
                <>
                  <FileText className="mb-3 h-10 w-10 text-primary" />
                  <p className="text-sm font-medium">{file.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{(file.size / 1024).toFixed(1)} KB</p>
                </>
              ) : (
                <>
                  <Upload className="mb-3 h-10 w-10 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Drop log file or click to upload</p>
                  <p className="mt-1 text-xs text-muted-foreground">JSON, JSONL, CSV, TXT</p>
                </>
              )}
            </label>
            <Button
              onClick={handleProcess}
              disabled={!file || isProcessing}
              className="mt-4 w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Generate Rules"
              )}
            </Button>
          </div>

          {/* Result Area */}
          <div className="rounded-2xl border border-border/60 bg-card/30 p-6">
            <h2 className="mb-4 font-medium">2. Download Rules</h2>
            {result ? (
              <>
                <pre className="mb-4 max-h-64 overflow-auto rounded-xl border border-border/40 bg-background/50 p-4 font-mono text-xs">
                  {result}
                </pre>
                <Button variant="outline" className="w-full rounded-xl bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Download JSON
                </Button>
              </>
            ) : (
              <div className="flex h-64 items-center justify-center rounded-xl border border-border/40 bg-background/30">
                <p className="text-sm text-muted-foreground">Rules will appear here</p>
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
