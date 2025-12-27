"use client"

import { motion } from "framer-motion"
import { Key, CreditCard, Play } from "lucide-react"

const stats = [
  {
    icon: Key,
    label: "One account + API key",
  },
  {
    icon: CreditCard,
    label: "Usage-based billing",
  },
  {
    icon: Play,
    label: "Self-serve demos",
  },
]

export function SocialProof() {
  return (
    <section className="relative z-10 px-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mx-auto max-w-3xl"
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
              className="flex items-center gap-2 rounded-full border border-border/40 bg-card/50 px-4 py-2"
            >
              <stat.icon className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
