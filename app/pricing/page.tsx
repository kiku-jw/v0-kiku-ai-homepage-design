"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const tiers = [
  {
    name: "Starter",
    price: "$10",
    credits: "1,000 credits",
    description: "Perfect for trying out KikuAI",
    features: ["Chart2CSV access", "PATAS access", "API access", "Email support"],
  },
  {
    name: "Pro",
    price: "$50",
    credits: "6,000 credits",
    description: "For growing teams and projects",
    features: ["Everything in Starter", "Priority processing", "Masker included", "ReliAPI included"],
    popular: true,
  },
  {
    name: "Scale",
    price: "$200",
    credits: "30,000 credits",
    description: "For high-volume usage",
    features: ["Everything in Pro", "Dedicated support", "Custom integrations", "SLA guarantee"],
  },
]

export default function PricingPage() {
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

      <main className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl font-semibold tracking-tight">Simple, usage-based pricing</h1>
          <p className="text-lg text-muted-foreground">Buy credits, use them across all products. No subscriptions.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-xl border bg-card/50 p-6 backdrop-blur-sm ${
                tier.popular ? "border-primary/50 shadow-lg shadow-primary/5" : "border-border/50"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <Zap className="h-3 w-3" /> Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-1 text-lg font-medium">{tier.name}</h3>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-semibold">{tier.price}</span>
                <span className="ml-2 text-muted-foreground">/ {tier.credits}</span>
              </div>

              <ul className="mb-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button asChild className="w-full" variant={tier.popular ? "default" : "outline"}>
                <Link href="/dashboard">Get Started</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center text-sm text-muted-foreground"
        >
          <p>All plans include API access. Credits never expire.</p>
          <p className="mt-1">
            Questions?{" "}
            <a href="mailto:support@kikuai.dev" className="text-primary hover:underline">
              Contact us
            </a>
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
