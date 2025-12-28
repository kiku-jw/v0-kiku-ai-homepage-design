"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
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
          <h1 className="mb-8 text-4xl font-semibold tracking-tight">Privacy Policy</h1>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="mb-3 text-lg font-medium text-foreground">Data We Collect</h2>
              <p>We collect minimal data necessary to provide our services:</p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>Account information (email, name)</li>
                <li>Payment information (processed by Stripe)</li>
                <li>Usage logs (API calls, timestamps)</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium text-foreground">Data Processing</h2>
              <p>
                Input data sent to our APIs (images, text) is processed in real-time and immediately discarded after
                generating outputs. We do not store your input data or use it for training models.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium text-foreground">Data Sharing</h2>
              <p>We do not sell your data. We may share data with third-party services necessary for operations:</p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>Stripe for payment processing</li>
                <li>Cloud providers for infrastructure</li>
                <li>Analytics tools (anonymized usage data only)</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium text-foreground">Cookies</h2>
              <p>
                We use essential cookies for authentication and session management. No third-party tracking cookies are
                used.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium text-foreground">Your Rights</h2>
              <p>
                You can request access to, correction of, or deletion of your personal data by contacting{" "}
                <a href="mailto:privacy@kikuai.dev" className="text-primary hover:underline">
                  privacy@kikuai.dev
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium text-foreground">Updates</h2>
              <p>We may update this policy periodically. Significant changes will be communicated via email.</p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
