<template>
  <div class="noise-bg grid-bg min-h-screen">
    <Navbar />
    <main class="relative z-10 mx-auto max-w-3xl px-6 py-16">
      <PageHeader>
        <template #title>>> REFUND POLICY</template>
        <template #description>
          Last updated: December 25, 2025
        </template>
      </PageHeader>

      <div class="space-y-8 text-muted-foreground">
        <section>
          <h2 class="mb-4 text-lg font-semibold text-foreground">Prepaid Balance</h2>
          <p>
            KikuAI operates on a prepaid balance model. Once you purchase credits, they are added to your account and can be used across all KikuAI APIs.
          </p>
        </section>

        <section>
          <h2 class="mb-4 text-lg font-semibold text-foreground">Refund Eligibility</h2>
          <ul class="list-inside list-disc space-y-2">
            <li>Refunds are available within 14 days of purchase</li>
            <li>Only unused balance is eligible for refund</li>
            <li>Processing fees may apply depending on payment method</li>
          </ul>
        </section>

        <section>
          <h2 class="mb-4 text-lg font-semibold text-foreground">How to Request a Refund</h2>
          <p class="mb-4">
            To request a refund, please contact us at:
          </p>
          <a href="mailto:support@kikuai.dev" class="text-primary hover:underline">
            support@kikuai.dev
          </a>
        </section>

        <section>
          <h2 class="mb-4 text-lg font-semibold text-foreground">Processing Time</h2>
          <p>
            Refunds are typically processed within 5-10 business days after approval. The actual time for funds to appear in your account depends on your payment provider.
          </p>
        </section>

        <section>
          <h2 class="mb-4 text-lg font-semibold text-foreground">Exceptions</h2>
          <p>
            Refunds may be denied in cases of abuse, fraud, or violation of our Terms of Service.
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
</template>
