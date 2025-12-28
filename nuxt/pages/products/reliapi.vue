<template>
  <div class="noise-bg grid-bg min-h-screen">
    <Navbar />
    <main class="relative z-10 mx-auto max-w-4xl px-6 py-16">
      <PageHeader back-link="/">
        <template #title>ReliAPI</template>
        <template #description>
          Reliability layer for API calls with retries, caching, and circuit breakers
        </template>
      </PageHeader>

      <!-- Action buttons -->
      <div class="mb-12 flex flex-wrap gap-3">
        <NuxtLink
          to="#demo"
          class="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Try demo
        </NuxtLink>
        <NuxtLink
          to="/dashboard"
          class="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-card px-5 text-sm font-medium transition-colors hover:bg-secondary"
        >
          Get API key
        </NuxtLink>
        <a
          href="https://github.com/KikuAI-Lab/reliapi/wiki"
          target="_blank"
          class="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-card px-5 text-sm font-medium transition-colors hover:bg-secondary"
        >
          Docs
        </a>
        <a
          href="https://github.com/KikuAI-Lab/reliapi"
          target="_blank"
          class="inline-flex h-10 items-center gap-2 justify-center rounded-xl border border-border bg-card px-5 text-sm font-medium transition-colors hover:bg-secondary"
        >
          <Github class="h-4 w-4" />
          GitHub
        </a>
      </div>

      <!-- Description -->
      <div class="mb-12 space-y-4 text-muted-foreground">
        <p>
          ReliAPI provides automatic retries, response caching, deduplication, and circuit-breaker logic for any HTTP API endpoint.
        </p>
        <p>
          It handles transient failures, reduces load on downstream services, and improves response times through intelligent caching and request deduplication.
        </p>
      </div>

      <!-- Problem / When to use -->
      <div class="mb-12 grid gap-6 md:grid-cols-2">
        <div class="rounded-xl border border-border/60 bg-card p-6">
          <h3 class="mb-3 font-semibold">Problem</h3>
          <p class="text-sm text-muted-foreground">
            External APIs can be unreliable, slow, or rate-limited. Without proper handling, failures cascade and performance degrades.
          </p>
        </div>
        <div class="rounded-xl border border-border/60 bg-card p-6">
          <h3 class="mb-3 font-semibold">When to use</h3>
          <p class="text-sm text-muted-foreground">
            Use ReliAPI when calling external APIs that may be unreliable, slow, or rate-limited. It handles all the retry and caching logic automatically.
          </p>
        </div>
      </div>

      <div class="mb-12 rounded-xl border border-border/60 bg-card p-6">
        <h3 class="mb-4 font-semibold">Input / Output</h3>
        <div class="grid gap-4 sm:grid-cols-2">
          <div>
            <div class="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Input</div>
            <p class="text-sm">HTTP request to any API endpoint</p>
          </div>
          <div>
            <div class="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Output</div>
            <p class="text-sm">Cached response if available, or retried request with circuit breaker protection</p>
          </div>
        </div>
      </div>

      <!-- Visual Demo -->
      <div class="mb-12 rounded-xl border border-border/60 bg-card p-6">
        <h3 class="mb-4 font-semibold">How it works</h3>
        <div class="flex flex-wrap items-center gap-4 font-mono text-sm">
          <div class="rounded-lg bg-secondary/50 px-4 py-2">
            <span class="text-muted-foreground">GET /api/data</span>
          </div>
          <ArrowRight class="h-5 w-5 text-primary" />
          <div class="rounded-lg bg-emerald-500/10 px-4 py-2">
            <span class="text-emerald-400">CACHE HIT</span>
            <span class="ml-2 text-muted-foreground/60">2ms</span>
          </div>
        </div>
      </div>

      <!-- Demo Section -->
      <section id="demo" class="scroll-mt-24">
        <h2 class="mb-6 text-xl font-semibold">Try it now</h2>
        <CodeBlock
          :tabs="['cURL', 'JavaScript', 'Python']"
          :code="codeExamples"
        />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { Github, ArrowRight } from 'lucide-vue-next'

const codeExamples = {
  cURL: `curl -X POST https://reliapi.kikuai.dev/api/proxy \\
  -H "Content-Type: application/json" \\
  -H "X-Target-URL: https://api.example.com/data" \\
  -d '{"key": "value"}'`,
  JavaScript: `const response = await fetch('https://reliapi.kikuai.dev/api/proxy', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Target-URL': 'https://api.example.com/data'
  },
  body: JSON.stringify({ key: 'value' })
});

const data = await response.json();`,
  Python: `import requests

response = requests.post(
  'https://reliapi.kikuai.dev/api/proxy',
  headers={'X-Target-URL': 'https://api.example.com/data'},
  json={'key': 'value'}
)
data = response.json()`,
}
</script>
