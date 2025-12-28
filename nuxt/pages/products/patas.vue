<template>
  <div class="noise-bg grid-bg min-h-screen">
    <Navbar />
    <main class="relative z-10 mx-auto max-w-4xl px-6 py-16">
      <PageHeader back-link="/">
        <template #title>PATAS</template>
        <template #description>
          Pattern-adaptive anti-spam system with semantic discovery
        </template>
      </PageHeader>

      <!-- Action buttons -->
      <div class="mb-12 flex flex-wrap gap-3">
        <a
          href="https://patas.app/demo"
          target="_blank"
          class="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Try demo
        </a>
        <NuxtLink
          to="/dashboard"
          class="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-card px-5 text-sm font-medium transition-colors hover:bg-secondary"
        >
          Get API key
        </NuxtLink>
        <a
          href="https://github.com/kiku-jw/PATAS/wiki"
          target="_blank"
          class="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-card px-5 text-sm font-medium transition-colors hover:bg-secondary"
        >
          Docs
        </a>
        <a
          href="https://github.com/kiku-jw/PATAS"
          target="_blank"
          class="inline-flex h-10 items-center gap-2 justify-center rounded-xl border border-border bg-card px-5 text-sm font-medium transition-colors hover:bg-secondary"
        >
          <Github class="h-4 w-4" />
          GitHub
        </a>
        <NuxtLink
          to="/products/patas/batch"
          class="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-card px-5 text-sm font-medium transition-colors hover:bg-secondary"
        >
          Batch Analysis
        </NuxtLink>
      </div>

      <!-- Description -->
      <div class="mb-12 space-y-4 text-muted-foreground">
        <p>
          PATAS (Pattern-Adaptive Transmodal Anti-Spam) is a semantic pattern discovery and rule management engine for large-scale anti-spam operations.
        </p>
        <p>
          It moves beyond simple keyword matching to discover sophisticated spam patterns using semantic clustering and AI-driven analysis.
        </p>
      </div>

      <!-- Problem / When to use -->
      <div class="mb-12 grid gap-6 md:grid-cols-2">
        <div class="rounded-xl border border-border/60 bg-card p-6">
          <h3 class="mb-3 font-semibold">Problem</h3>
          <p class="text-sm text-muted-foreground">
            Spam evolves faster than static rules. Manually creating rules for millions of messages is impossible for human moderators.
          </p>
        </div>
        <div class="rounded-xl border border-border/60 bg-card p-6">
          <h3 class="mb-3 font-semibold">When to use</h3>
          <p class="text-sm text-muted-foreground">
            Use PATAS when you need to protect large-scale communication platforms from bots and spam attacks. It automatically discovers new patterns.
          </p>
        </div>
      </div>

      <div class="mb-12 rounded-xl border border-border/60 bg-card p-6">
        <h3 class="mb-4 font-semibold">Input / Output</h3>
        <div class="grid gap-4 sm:grid-cols-2">
          <div>
            <div class="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Input</div>
            <p class="text-sm">Raw message logs and user reports</p>
          </div>
          <div>
            <div class="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Output</div>
            <p class="text-sm">Discovered spam patterns, generated SQL/JSON rules, and effectiveness metrics</p>
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
import { Github } from 'lucide-vue-next'

const codeExamples = {
  cURL: `curl -X POST https://kikuai.dev/api/demo/patas \\
  -H "Content-Type: application/json" \\
  -d '{"input": "your data here"}'`,
  JavaScript: `const response = await fetch('https://kikuai.dev/api/demo/patas', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ input: 'your data here' })
});

const data = await response.json();`,
  Python: `import requests

response = requests.post(
  'https://kikuai.dev/api/demo/patas',
  json={'input': 'your data here'}
)
data = response.json()`,
}
</script>
