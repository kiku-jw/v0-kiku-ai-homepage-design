"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsPage() {
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
          <h1 className="mb-8 text-4xl font-semibold tracking-tight">Terms of Service</h1>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="mb-3 text-lg font-medium text-foreground">1. Acceptance of Terms</h2>
              <p>
                By accessing or using KikuAI services, you agree to be bound by these Terms of Service. If you do not
                agree to these terms, do not use our services.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium text-foreground">2. Service Description</h2>
              <p>
                KikuAI provides AI-powered data extraction and transformation APIs. Services include Chart2CSV, PATAS,
                Masker, and ReliAPI. We reserve the right to modify or discontinue services at any time.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium text-foreground">3. User Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>Provide accurate account information</li>
                <li>Maintain the security of your API keys</li>
                <li>Use services in compliance with applicable laws</li>
                <li>Not abuse, overload, or attempt to exploit our systems</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium text-foreground">4. Payment and Credits</h2>
              <p>
                Credits are purchased in advance and deducted upon API usage. Credits do not expire. All purchases are
                final unless otherwise specified in our Refund Policy.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium text-foreground">5. Intellectual Property</h2>
              <p>
                You retain ownership of your input data and outputs. KikuAI retains ownership of the service, APIs, and
                underlying technology.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium text-foreground">6. Limitation of Liability</h2>
              <p>
                KikuAI is provided "as is" without warranties. We are not liable for indirect, incidental, or
                consequential damages arising from use of our services.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium text-foreground">7. Contact</h2>
              <p>
                For questions about these terms, contact{" "}
                <a href="mailto:legal@kikuai.dev" className="text-primary hover:underline">
                  legal@kikuai.dev
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
