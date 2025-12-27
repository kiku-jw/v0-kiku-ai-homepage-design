"use client"

import { motion } from "framer-motion"
import { Shield, RefreshCw } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const tools = [
  {
    name: "Masker",
    label: "PII",
    icon: Shield,
    description: "Automatic PII detection and masking before processing",
  },
  {
    name: "ReliAPI",
    label: "Reliability",
    icon: RefreshCw,
    description: "Retries, caching, and request deduplication built-in",
  },
]

export function UnderTheHood() {
  return (
    <section className="relative z-10 px-6 pb-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mx-auto max-w-5xl"
      >
        <div className="flex flex-col items-center gap-4 rounded-xl border border-border/40 bg-secondary/30 px-6 py-4 sm:flex-row sm:justify-center">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Under the hood</span>
          <div className="flex items-center gap-3">
            <TooltipProvider delayDuration={100}>
              {tools.map((tool) => (
                <Tooltip key={tool.name}>
                  <TooltipTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex cursor-default items-center gap-2 rounded-full border border-border/60 bg-card px-3 py-1.5 text-sm transition-colors hover:border-primary/30"
                    >
                      <tool.icon className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="font-medium">{tool.name}</span>
                      <span className="text-xs text-muted-foreground">({tool.label})</span>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="max-w-[200px] text-center">
                    <p className="text-xs">{tool.description}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
