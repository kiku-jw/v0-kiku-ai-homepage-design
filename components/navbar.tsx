"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">K</span>
          </div>
          <span className="text-lg font-semibold tracking-tight">KikuAI</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/products/chart2csv"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </Link>
          <Link href="/pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </Link>
          <Link href="/docs" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Docs
          </Link>
          <Link
            href="/status"
            className="text-xs text-muted-foreground/70 transition-colors hover:text-muted-foreground"
          >
            Status
          </Link>
        </nav>

        <Button asChild size="sm" className="rounded-xl">
          <Link href="/dashboard">Dashboard</Link>
        </Button>
      </div>
    </motion.header>
  )
}
