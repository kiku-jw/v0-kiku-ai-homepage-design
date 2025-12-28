<template>
  <div class="noise-bg grid-bg min-h-screen">
    <Navbar />
    <main class="relative z-10 mx-auto max-w-4xl px-6 py-16">
      <PageHeader>
        <template #title>>> DOCS</template>
        <template #description>
          API reference and integration guides for all KikuAI products
        </template>
      </PageHeader>

      <!-- Products Grid -->
      <div class="grid gap-4 sm:grid-cols-2">
        <NuxtLink
          v-for="product in products"
          :key="product.name"
          :to="product.docsLink"
          class="group rounded-xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
        >
          <div class="mb-3 flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <component :is="product.icon" class="h-5 w-5 text-primary" />
            </div>
            <h2 class="font-semibold">{{ product.name }}</h2>
          </div>
          <p class="mb-4 text-sm text-muted-foreground">{{ product.description }}</p>
          <div class="flex items-center gap-1 text-sm text-primary">
            View docs
            <ArrowRight class="h-4 w-4" />
          </div>
        </NuxtLink>
      </div>

      <!-- API Overview -->
      <section class="mt-12">
        <h2 class="mb-6 text-xl font-semibold">>> API OVERVIEW</h2>
        <div class="space-y-4">
          <div class="rounded-xl border border-border/60 bg-card p-6">
            <h3 class="mb-3 font-semibold">Authentication</h3>
            <p class="mb-4 text-sm text-muted-foreground">
              All API requests require an API key passed in the <code class="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">Authorization</code> header.
            </p>
            <div class="rounded-lg bg-secondary/50 p-3 font-mono text-sm text-muted-foreground">
              Authorization: Bearer kiku_sk_your_api_key
            </div>
          </div>

          <div class="rounded-xl border border-border/60 bg-card p-6">
            <h3 class="mb-3 font-semibold">Base URL</h3>
            <div class="rounded-lg bg-secondary/50 p-3 font-mono text-sm text-muted-foreground">
              https://kikuai.dev/api/v1
            </div>
          </div>

          <div class="rounded-xl border border-border/60 bg-card p-6">
            <h3 class="mb-3 font-semibold">Rate Limits</h3>
            <p class="text-sm text-muted-foreground">
              Default rate limit is 100 requests per minute. Contact us for higher limits.
            </p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ImageIcon, MessageSquare, Shield, RefreshCw, ArrowRight } from 'lucide-vue-next'

const products = [
  {
    name: 'Chart2CSV',
    description: 'Extract structured data from chart images',
    icon: ImageIcon,
    docsLink: '/docs/chart2csv',
  },
  {
    name: 'PATAS',
    description: 'Pattern-adaptive anti-spam system',
    icon: MessageSquare,
    docsLink: '/docs/patas',
  },
  {
    name: 'Masker',
    description: 'PII redaction and text anonymization',
    icon: Shield,
    docsLink: '/docs/masker',
  },
  {
    name: 'ReliAPI',
    description: 'Reliability layer for API calls',
    icon: RefreshCw,
    docsLink: '/docs/reliapi',
  },
]
</script>
