"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative z-10 px-6 pt-20 pb-12 text-center md:pt-28 md:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto max-w-2xl"
      >
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
          Turn messy inputs into <span className="text-primary">usable data</span>
        </h1>
        <p className="mx-auto mt-5 text-sm text-muted-foreground/70">Pick a workflow below.</p>
      </motion.div>
    </section>
  )
}
