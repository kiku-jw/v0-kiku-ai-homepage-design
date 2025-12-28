"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Loader2, Copy, Check } from "lucide-react"

export default function MaskerDemoPage() {
  const [input, setInput] = useState(
    "Please contact John Smith at john.smith@acme.com or call +1-555-123-4567. His address is 123 Main St, New York, NY 10001.",
  )
  const [output, setOutput] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleMask = async () => {
    setIsProcessing(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setOutput("Please contact [NAME_1] at [EMAIL_1] or call [PHONE_1]. His address is [ADDRESS_1].")
    setIsProcessing(false)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="noise-bg grid-bg min-h-screen">
      {/* Header */}
      <div className="border-b border-border/40 bg-background/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/products/masker"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Masker
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-2xl font-semibold">Masker Demo</h1>
          <p className="text-muted-foreground">Enter text to mask PII data</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Input */}
          <div className="rounded-2xl border border-border/60 bg-card/30 p-6">
            <h2 className="mb-4 font-medium">Input Text</h2>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="h-48 w-full resize-none rounded-xl border border-border/40 bg-background/50 p-4 text-sm focus:border-primary/50 focus:outline-none"
              placeholder="Enter text containing PII..."
            />
            <Button
              onClick={handleMask}
              disabled={!input || isProcessing}
              className="mt-4 w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Masking...
                </>
              ) : (
                "Mask PII"
              )}
            </Button>
          </div>

          {/* Output */}
          <div className="rounded-2xl border border-border/60 bg-card/30 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-medium">Masked Output</h2>
              {output && (
                <Button variant="ghost" size="sm" onClick={handleCopy} className="h-8 px-2">
                  {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
                </Button>
              )}
            </div>
            {output ? (
              <div className="h-48 overflow-auto rounded-xl border border-border/40 bg-background/50 p-4 text-sm">
                {output}
              </div>
            ) : (
              <div className="flex h-48 items-center justify-center rounded-xl border border-border/40 bg-background/30">
                <p className="text-sm text-muted-foreground">Masked text will appear here</p>
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
