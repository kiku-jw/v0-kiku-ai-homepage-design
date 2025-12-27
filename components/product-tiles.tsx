"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ImageIcon, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

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

              <div className="mb-6 flex items-center gap-3 rounded-xl bg-secondary/50 p-4">
                {/* Before: Line chart thumbnail */}
                <div className="flex h-24 w-28 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-background/50 p-2">
                  <svg viewBox="0 0 80 50" className="h-full w-full">
                    {/* Grid lines */}
                    <line x1="10" y1="10" x2="10" y2="45" stroke="currentColor" strokeOpacity="0.1" />
                    <line x1="10" y1="45" x2="75" y2="45" stroke="currentColor" strokeOpacity="0.1" />
                    {/* Line chart */}
                    <polyline
                      points="12,38 25,30 38,35 50,20 63,25 73,12"
                      fill="none"
                      stroke="#22C55E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="38" r="3" fill="#22C55E" />
                    <circle cx="25" cy="30" r="3" fill="#22C55E" />
                    <circle cx="38" cy="35" r="3" fill="#22C55E" />
                    <circle cx="50" cy="20" r="3" fill="#22C55E" />
                    <circle cx="63" cy="25" r="3" fill="#22C55E" />
                    <circle cx="73" cy="12" r="3" fill="#22C55E" />
                  </svg>
                </div>

                {/* Arrow */}
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="flex-shrink-0"
                >
                  <ArrowRight className="h-5 w-5 text-primary" />
                </motion.div>

                {/* After: 3-row table */}
                <div className="flex-1 overflow-hidden rounded-lg border border-border bg-background/50">
                  <table className="w-full font-mono text-[10px]">
                    <thead>
                      <tr className="border-b border-border/50 bg-secondary/30">
                        <th className="px-2 py-1.5 text-left text-muted-foreground font-medium">date</th>
                        <th className="px-2 py-1.5 text-left text-muted-foreground font-medium">value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/30">
                        <td className="px-2 py-1 text-foreground/80">2024-01</td>
                        <td className="px-2 py-1 text-foreground/80">42</td>
                      </tr>
                      <tr className="border-b border-border/30">
                        <td className="px-2 py-1 text-foreground/80">2024-02</td>
                        <td className="px-2 py-1 text-foreground/80">67</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-1 text-foreground/80">2024-03</td>
                        <td className="px-2 py-1 text-foreground/80">58</td>
                      </tr>
                    </tbody>
                  </table>
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

              <div className="mb-6 flex items-center gap-3 rounded-xl bg-secondary/50 p-4">
                {/* Before: Chat/log lines */}
                <div className="flex w-28 flex-shrink-0 flex-col gap-1.5 overflow-hidden rounded-lg border border-border bg-background/50 p-2">
                  <div className="flex items-start gap-1.5">
                    <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400/70" />
                    <span className="font-mono text-[9px] text-muted-foreground leading-tight">Buy now! 🔥🔥</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400/70" />
                    <span className="font-mono text-[9px] text-muted-foreground leading-tight">Click bit.ly/x</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400/70" />
                    <span className="font-mono text-[9px] text-foreground/60 leading-tight">Hello team</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400/70" />
                    <span className="font-mono text-[9px] text-muted-foreground leading-tight">Free gift!</span>
                  </div>
                </div>

                {/* Arrow */}
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ArrowRight className="h-5 w-5 text-primary" />
                </motion.div>

                {/* After: Complete JSON rules (4-6 lines, no truncation) */}
                <div className="flex-1 overflow-hidden rounded-lg border border-border bg-background/50 p-2 font-mono text-[9px] leading-relaxed">
                  <div className="text-muted-foreground">{"{"}</div>
                  <div className="pl-2">
                    <span className="text-cyan-400">"pattern"</span>
                    <span className="text-muted-foreground">: </span>
                    <span className="text-amber-400">"emoji_spam"</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div className="pl-2">
                    <span className="text-cyan-400">"action"</span>
                    <span className="text-muted-foreground">: </span>
                    <span className="text-emerald-400">"BLOCK"</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div className="pl-2">
                    <span className="text-cyan-400">"confidence"</span>
                    <span className="text-muted-foreground">: </span>
                    <span className="text-purple-400">0.94</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div className="pl-2">
                    <span className="text-cyan-400">"reason"</span>
                    <span className="text-muted-foreground">: </span>
                    <span className="text-amber-400">"url+emoji"</span>
                  </div>
                  <div className="text-muted-foreground">{"}"}</div>
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
