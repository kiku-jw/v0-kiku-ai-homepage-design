"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ImageIcon, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypewriterCode } from "@/components/typewriter-code"

export function ProductTiles() {
  return (
    <section className="relative z-10 px-6 pb-16">
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {/* Chart2CSV Tile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -4 }}
          className="group"
        >
          <Link href="/products/chart2csv" className="block">
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-xl transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-primary/5 group-hover:shadow-2xl md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <ImageIcon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Chart → CSV</h2>
              </div>

              {/* Before → After Preview */}
              <div className="mb-6 flex items-center gap-4 rounded-xl bg-secondary/50 p-4">
                {/* Before: Chart thumbnail */}
                <div className="flex h-20 w-24 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-background/50">
                  <svg viewBox="0 0 60 40" className="h-12 w-16 text-muted-foreground/50">
                    <rect x="5" y="25" width="8" height="12" fill="currentColor" opacity="0.6" />
                    <rect x="17" y="15" width="8" height="22" fill="currentColor" opacity="0.8" />
                    <rect x="29" y="20" width="8" height="17" fill="currentColor" opacity="0.7" />
                    <rect x="41" y="8" width="8" height="29" fill="currentColor" />
                  </svg>
                </div>

                {/* Arrow */}
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <ArrowRight className="h-5 w-5 text-primary" />
                </motion.div>

                {/* After: CSV snippet */}
                <div className="flex-1 overflow-hidden rounded-lg border border-border bg-background/50 p-2 font-mono text-xs">
                  <div className="text-muted-foreground">date,value</div>
                  <div className="text-foreground/80">2024-01,42</div>
                  <div className="text-foreground/80">2024-02,67</div>
                </div>
              </div>

              <Button variant="secondary" size="sm" className="rounded-xl">
                Try demo
              </Button>
            </div>
          </Link>
        </motion.div>

        {/* PATAS Tile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          whileHover={{ y: -4 }}
          className="group"
        >
          <Link href="/products/patas" className="block">
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-xl transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-primary/5 group-hover:shadow-2xl md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Logs → Rules</h2>
              </div>

              {/* Before → After Preview */}
              <div className="mb-6 flex items-center gap-4 rounded-xl bg-secondary/50 p-4">
                {/* Before: Log lines */}
                <div className="flex w-28 flex-shrink-0 flex-col gap-1 overflow-hidden rounded-lg border border-border bg-background/50 p-2 font-mono text-[10px]">
                  <div className="truncate text-muted-foreground">Buy now! 🔥</div>
                  <div className="truncate text-muted-foreground">Click bit.ly/...</div>
                  <div className="truncate text-foreground/60">Hello team</div>
                </div>

                {/* Arrow */}
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.3 }}
                >
                  <ArrowRight className="h-5 w-5 text-primary" />
                </motion.div>

                {/* After: JSON rules */}
                <div className="flex-1 overflow-hidden rounded-lg border border-border bg-background/50 p-2 font-mono text-[10px]">
                  <TypewriterCode />
                </div>
              </div>

              <Button variant="secondary" size="sm" className="rounded-xl">
                Try demo
              </Button>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
