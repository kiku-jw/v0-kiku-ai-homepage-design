"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function RefundPage() {
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

      <main className="relative z-10 mx-auto max-w-3xl px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="mb-8 text-4xl font-semibold tracking-tight">Refund Policy</h1>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="mb-3 text-lg font-medium text-foreground">Overview</h2>
              <p>
                KikuAI offers credit-based pricing. Once purchased, credits are non-refundable as they are immediately
                available for use. However, we understand that situations may arise.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium text-foreground">Eligibility</h2>
              <p>Refunds may be considered within 7 days of purchase if:</p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>No credits have been used from the purchased package</li>
                <li>There was a technical issue preventing access to services</li>
                <li>Duplicate charges occurred due to payment processing errors</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium text-foreground">How to Request</h2>
              <p>
                Contact us at{" "}
                <a href="mailto:support@kikuai.dev" className="text-primary hover:underline">
                  support@kikuai.dev
                </a>{" "}
                with your account email and purchase details. We typically respond within 2 business days.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium text-foreground">Processing</h2>
              <p>
                Approved refunds are processed within 5-10 business days. The refund will be credited to the original
                payment method.
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
