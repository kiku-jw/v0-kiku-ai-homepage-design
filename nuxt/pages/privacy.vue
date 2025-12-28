<template>
  <div class="noise-bg grid-bg min-h-screen">
    <Navbar />
    <main class="relative z-10 mx-auto max-w-3xl px-6 py-16">
      <PageHeader>
        <template #title>>> PRIVACY POLICY</template>
        <template #description>
          Last updated: December 25, 2025
        </template>
      </PageHeader>

      <div class="space-y-8 text-muted-foreground">
        <section>
          <h2 class="mb-4 text-lg font-semibold text-foreground">1. Information We Collect</h2>
          <p class="mb-4">We collect information you provide directly to us:</p>
          <ul class="list-inside list-disc space-y-2">
            <li>Account information (email, name)</li>
            <li>Payment information (processed by Paddle)</li>
            <li>Usage data and API logs</li>
          </ul>
        </section>

        <section>
          <h2 class="mb-4 text-lg font-semibold text-foreground">2. How We Use Your Information</h2>
          <ul class="list-inside list-disc space-y-2">
            <li>To provide and maintain our services</li>
            <li>To process payments and send invoices</li>
            <li>To communicate with you about your account</li>
            <li>To improve our services</li>
          </ul>
        </section>

        <section>
          <h2 class="mb-4 text-lg font-semibold text-foreground">3. Data Processing</h2>
          <p>
            Data submitted to our APIs is processed in real-time and is not stored permanently unless explicitly required for the service (e.g., batch processing). We do not use your data to train AI models.
          </p>
        </section>

        <section>
          <h2 class="mb-4 text-lg font-semibold text-foreground">4. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your data, including encryption in transit and at rest, and regular security audits.
          </p>
        </section>

        <section>
          <h2 class="mb-4 text-lg font-semibold text-foreground">5. Third-Party Services</h2>
          <p>
            We use third-party services for payment processing (Paddle), analytics, and infrastructure. These services have their own privacy policies.
          </p>
        </section>

        <section>
          <h2 class="mb-4 text-lg font-semibold text-foreground">6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul class="mt-2 list-inside list-disc space-y-2">
            <li>Access your personal data</li>
            <li>Request correction or deletion of your data</li>
            <li>Export your data</li>
            <li>Opt out of marketing communications</li>
          </ul>
        </section>

        <section>
          <h2 class="mb-4 text-lg font-semibold text-foreground">7. Contact</h2>
          <p>
            For privacy-related inquiries, contact us at:
            <a href="mailto:support@kikuai.dev" class="text-primary hover:underline">support@kikuai.dev</a>
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
</template>
