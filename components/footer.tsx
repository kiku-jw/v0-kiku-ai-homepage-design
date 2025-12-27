"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github } from "lucide-react"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="relative z-10 border-t border-border/40"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/products/chart2csv" className="transition-colors hover:text-foreground">
            Chart2CSV
          </Link>
          <Link href="/products/patas" className="transition-colors hover:text-foreground">
            PATAS
          </Link>
          <Link href="/docs" className="transition-colors hover:text-foreground">
            Docs
          </Link>
          <Link href="/pricing" className="transition-colors hover:text-foreground">
            Pricing
          </Link>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/open-source" className="transition-colors hover:text-foreground">
            Open Source
          </Link>
          <a
            href="https://github.com/kikuai"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>

      <div className="border-t border-border/20 py-4 text-center text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} KikuAI. All rights reserved.
      </div>
    </motion.footer>
  )
}
