"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Shield, RefreshCw, ArrowRight } from "lucide-react"

export function UnderTheHood() {
  return (
    <section className="relative z-10 px-6 pb-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mx-auto max-w-5xl"
      >
        <div className="mb-4 text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Under the hood</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Masker Tile */}
          <motion.div
            whileHover={{ y: -2 }}
            className="group rounded-xl border border-border/50 bg-card/50 p-5 transition-all duration-300 hover:border-primary/30"
          >
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <h3 className="font-semibold">Masker</h3>
              <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                PII Masking
              </span>
            </div>

            <p className="mb-4 text-sm text-muted-foreground">
              Automatic detection and redaction before any processing.
            </p>

            {/* Micro-visual: email → [EMAIL] */}
            <div className="mb-4 flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-2 font-mono text-xs">
              <span className="text-muted-foreground">john@acme.co</span>
              <ArrowRight className="h-3 w-3 text-primary" />
              <span className="rounded bg-primary/20 px-1.5 py-0.5 text-primary">[EMAIL]</span>
            </div>

            <Link
              href="/docs/masker"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Docs
              <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>

          {/* ReliAPI Tile */}
          <motion.div
            whileHover={{ y: -2 }}
            className="group rounded-xl border border-border/50 bg-card/50 p-5 transition-all duration-300 hover:border-primary/30"
          >
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <RefreshCw className="h-4 w-4 text-primary" />
              </div>
              <h3 className="font-semibold">ReliAPI</h3>
              <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                Reliability Layer
              </span>
            </div>

            <p className="mb-4 text-sm text-muted-foreground">
              Retries, caching, and deduplication built into every call.
            </p>

            {/* Micro-visual: request → cache hit */}
            <div className="mb-4 flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-2 font-mono text-xs">
              <span className="text-muted-foreground">GET /api</span>
              <ArrowRight className="h-3 w-3 text-primary" />
              <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-emerald-400">CACHE HIT</span>
            </div>

            <Link
              href="/docs/reliapi"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Docs
              <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
