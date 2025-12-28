<template>
  <div class="noise-bg grid-bg min-h-screen">
    <Navbar />
    <main class="relative z-10 mx-auto max-w-4xl px-6 py-16">
      <PageHeader>
        <template #title>>> PRICING</template>
        <template #description>
          Prepaid USD balance. Top up once, use across all APIs. No subscriptions.
        </template>
      </PageHeader>

      <!-- Free Tier -->
      <section class="mb-12">
        <h2 class="mb-4 text-xl font-semibold">>> FREE TIER</h2>
        <div class="rounded-xl border border-border/60 bg-card p-6">
          <ul class="space-y-2 text-muted-foreground">
            <li class="flex items-start gap-2">
              <Check class="mt-0.5 h-4 w-4 text-primary" />
              <span><strong class="text-foreground">Chart2CSV:</strong> 3 extractions per day — no login required</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="ml-6 text-sm">After the limit: sign in and use balance</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Top Up Balance -->
      <section class="mb-12">
        <h2 class="mb-4 text-xl font-semibold">>> TOP UP BALANCE</h2>
        <p class="mb-6 text-muted-foreground">Buy balance once, use it across all KikuAI APIs.</p>
        <div class="grid gap-4 sm:grid-cols-3 md:grid-cols-5">
          <div
            v-for="plan in plans"
            :key="plan.name"
            :class="[
              'relative rounded-xl border bg-card p-4 text-center transition-all hover:-translate-y-1 hover:border-primary/40',
              plan.popular ? 'border-primary/60' : 'border-border/60',
            ]"
          >
            <span
              v-if="plan.popular"
              class="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2 py-0.5 text-[10px] font-medium text-primary-foreground"
            >
              Popular
            </span>
            <div class="mb-2 text-sm font-medium text-muted-foreground">{{ plan.name }}</div>
            <div class="text-2xl font-bold">${{ plan.price }}</div>
          </div>
        </div>
        <p class="mt-4 text-sm text-muted-foreground/70">
          Balance does not expire while your account is active and in good standing.
        </p>
      </section>

      <!-- API Costs -->
      <section class="mb-12">
        <h2 class="mb-4 text-xl font-semibold">>> API COSTS</h2>
        <div class="overflow-hidden rounded-xl border border-border/60 bg-card">
          <table class="w-full text-sm">
            <tbody>
              <tr class="border-b border-border/40">
                <td class="px-4 py-3 font-medium">Chart2CSV</td>
                <td class="px-4 py-3 text-muted-foreground">$0.05 per extraction</td>
              </tr>
              <tr class="border-b border-border/40">
                <td class="px-4 py-3 font-medium">PDF (multi-page)</td>
                <td class="px-4 py-3 text-muted-foreground">$0.05 per page (typical)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 font-medium">Other APIs</td>
                <td class="px-4 py-3 text-muted-foreground">varies — see product docs</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="mt-4 text-sm text-muted-foreground">
          Example: $5 balance = ~100 chart extractions.
        </p>
      </section>

      <!-- Payments -->
      <section class="mb-12">
        <h2 class="mb-4 text-xl font-semibold">>> PAYMENTS</h2>
        <div class="rounded-xl border border-border/60 bg-card p-6">
          <p class="mb-4 text-muted-foreground">
            Payments are processed by <strong class="text-foreground">Paddle.com</strong> as Merchant of Record.
          </p>
          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <h4 class="mb-2 font-medium">Credit cards</h4>
              <p class="text-sm text-muted-foreground">Visa, Mastercard, Amex</p>
            </div>
            <div>
              <h4 class="mb-2 font-medium">Digital wallets</h4>
              <p class="text-sm text-muted-foreground">PayPal, Google Pay, Apple Pay</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Enterprise -->
      <section class="mb-12">
        <h2 class="mb-4 text-xl font-semibold">>> ENTERPRISE</h2>
        <div class="rounded-xl border border-border/60 bg-card p-6">
          <p class="text-muted-foreground">
            Need on-prem deployments, SLAs, or invoicing? Contact:
            <a href="mailto:support@kikuai.dev" class="text-primary hover:underline">support@kikuai.dev</a>
          </p>
        </div>
      </section>

      <NuxtLink
        to="/dashboard/billing"
        class="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Open Dashboard →
      </NuxtLink>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { Check } from 'lucide-vue-next'

const plans = [
  { name: 'Starter', price: 5 },
  { name: 'Basic', price: 10 },
  { name: 'Popular', price: 25, popular: true },
  { name: 'Pro', price: 50 },
  { name: 'Business', price: 100 },
]
</script>
