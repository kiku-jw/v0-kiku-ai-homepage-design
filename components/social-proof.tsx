"use client"

import { motion } from "framer-motion"
import { Clock, Server, Code } from "lucide-react"

const stats = [
  {
    icon: Clock,
    value: "<30s",
    label: "to export",
  },
  {
    icon: Server,
    value: "Server-side",
    label: "billing",
  },
  {
    icon: Code,
    value: "API-first",
    label: "+ UI demos",
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="flex items-center gap-3 rounded-xl border border-border/40 bg-card/50 px-4 py-3"
            >
              <stat.icon className="h-4 w-4 text-primary" />
              <div>
                <div className="text-sm font-semibold">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
