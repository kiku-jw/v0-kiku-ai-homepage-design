"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Zap, Shield, Code2, Users } from "lucide-react"

const principles = [
  {
    icon: Zap,
    title: "Speed First",
    description: "Every API call is optimized for minimal latency. We cache aggressively and process in parallel.",
  },
  {
    icon: Shield,
    title: "Privacy by Design",
    description: "Your data is processed and discarded. We don't train on your inputs or store sensitive information.",
  },
  {
    icon: Code2,
    title: "Developer Experience",
    description: "Clean APIs, comprehensive docs, and predictable pricing. Built by developers, for developers.",
  },
  {
    icon: Users,
    title: "Open Core",
    description: "Core utilities are open source. We believe in transparency and community contributions.",
  },
]

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <Navbar />

      <main className="relative z-10 mx-auto max-w-4xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="mb-4 text-4xl font-semibold tracking-tight">About KikuAI</h1>
          <p className="text-lg text-muted-foreground">
            We build AI-powered data extraction and transformation tools. Our mission is to turn messy, unstructured
            inputs into clean, usable data.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="mb-6 text-2xl font-medium">Our Principles</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm"
              >
                <principle.icon className="mb-3 h-5 w-5 text-primary" />
                <h3 className="mb-2 font-medium">{principle.title}</h3>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm"
        >
          <h2 className="mb-4 text-xl font-medium">Contact</h2>
          <p className="text-muted-foreground">
            Questions, feedback, or partnership inquiries:{" "}
            <a href="mailto:hello@kikuai.dev" className="text-primary hover:underline">
              hello@kikuai.dev
            </a>
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
