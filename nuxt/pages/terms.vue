<template>
  <div class="noise-bg grid-bg min-h-screen">
    <Navbar />
    <main class="relative z-10 mx-auto max-w-3xl px-6 py-16">
      <PageHeader>
        <template #title>>> TERMS OF SERVICE</template>
        <template #description>
          Last updated: December 25, 2025
        </template>
      </PageHeader>

      <div class="space-y-8 text-muted-foreground">
        <section>
          <h2 class="mb-4 text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
          <p>
            By accessing or using KikuAI services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2 class="mb-4 text-lg font-semibold text-foreground">2. Service Description</h2>
          <p>
            KikuAI provides API services for data extraction, pattern analysis, PII masking, and API reliability. Services are provided "as is" and may be updated or modified at any time.
          </p>
        </section>

        <section>
          <h2 class="mb-4 text-lg font-semibold text-foreground">3. Account Responsibilities</h2>
          <ul class="list-inside list-disc space-y-2">
            <li>You are responsible for maintaining the security of your API keys</li>
            <li>You must not share your credentials with unauthorized parties</li>
            <li>You are responsible for all activity under your account</li>
          </ul>
        </section>

        <section>
          <h2 class="mb-4 text-lg font-semibold text-foreground">4. Acceptable Use</h2>
          <p>You agree not to use our services to:</p>
          <ul class="mt-2 list-inside list-disc space-y-2">
            <li>Violate any laws or regulations</li>
            <li>Infringe on intellectual property rights</li>
            <li>Transmit malicious code or spam</li>
            <li>Attempt to gain unauthorized access to our systems</li>
          </ul>
        </section>

        <section>
          <h2 class="mb-4 text-lg font-semibold text-foreground">5. Payment Terms</h2>
          <p>
            Payments are processed by Paddle.com as our Merchant of Record. All fees are non-refundable except as specified in our Refund Policy.
          </p>
        </section>

        <section>
          <h2 class="mb-4 text-lg font-semibold text-foreground">6. Limitation of Liability</h2>
          <p>
            KikuAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
          </p>
        </section>

        <section>
          <h2 class="mb-4 text-lg font-semibold text-foreground">7. Contact</h2>
          <p>
            For questions about these terms, contact us at:
            <a href="mailto:support@kikuai.dev" class="text-primary hover:underline">support@kikuai.dev</a>
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
</template>
