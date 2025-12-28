<template>
  <div class="noise-bg grid-bg min-h-screen">
    <Navbar />
    <main class="relative z-10 mx-auto max-w-4xl px-6 py-16">
      <PageHeader back-link="/">
        <template #title>Masker</template>
        <template #description>
          Secure PII redaction and text anonymization for AI pipelines
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
          href="https://github.com/KikuAI-Lab/masker/wiki"
          target="_blank"
          class="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-card px-5 text-sm font-medium transition-colors hover:bg-secondary"
        >
          Docs
        </a>
        <a
          href="https://github.com/KikuAI-Lab/masker"
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
          Masker is a high-performance PII redaction and text anonymization API designed for high-throughput LLM pipelines.
        </p>
        <p>
          It automatically detects and masks sensitive entities like names, emails, phones, and credit card numbers in both plain text and JSON structures.
        </p>
      </div>

      <!-- Problem / When to use -->
      <div class="mb-12 grid gap-6 md:grid-cols-2">
        <div class="rounded-xl border border-border/60 bg-card p-6">
          <h3 class="mb-3 font-semibold">Problem</h3>
          <p class="text-sm text-muted-foreground">
            Sending data to third-party LLMs often involves risks of leaking PII. Manual redaction is slow and error-prone.
          </p>
        </div>
        <div class="rounded-xl border border-border/60 bg-card p-6">
          <h3 class="mb-3 font-semibold">When to use</h3>
          <p class="text-sm text-muted-foreground">
            Use Masker to clean your data before sending it to external AI models or storing it in analytics databases.
          </p>
        </div>
      </div>

      <div class="mb-12 rounded-xl border border-border/60 bg-card p-6">
        <h3 class="mb-4 font-semibold">Input / Output</h3>
        <div class="grid gap-4 sm:grid-cols-2">
          <div>
            <div class="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Input</div>
            <p class="text-sm">Text or JSON containing sensitive PII</p>
          </div>
          <div>
            <div class="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Output</div>
            <p class="text-sm">Anonymized text or JSON with PII replaced by tokens</p>
          </div>
        </div>
      </div>

      <!-- Visual Demo -->
      <div class="mb-12 rounded-xl border border-border/60 bg-card p-6">
        <h3 class="mb-4 font-semibold">How it works</h3>
        <div class="flex flex-wrap items-center gap-4 font-mono text-sm">
          <div class="rounded-lg bg-secondary/50 px-4 py-2">
            <span class="text-muted-foreground">Contact john@acme.co or call 555-1234</span>
          </div>
          <ArrowRight class="h-5 w-5 text-primary" />
          <div class="rounded-lg bg-secondary/50 px-4 py-2">
            <span class="text-muted-foreground">Contact </span>
            <span class="rounded bg-primary/20 px-1 text-primary">[EMAIL]</span>
            <span class="text-muted-foreground"> or call </span>
            <span class="rounded bg-primary/20 px-1 text-primary">[PHONE]</span>
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
  cURL: `curl -X POST https://kikuai.dev/api/demo/masker \\
  -H "Content-Type: application/json" \\
  -d '{"input": "Contact john@acme.co"}'`,
  JavaScript: `const response = await fetch('https://kikuai.dev/api/demo/masker', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ input: 'Contact john@acme.co' })
});

const data = await response.json();`,
  Python: `import requests

response = requests.post(
  'https://kikuai.dev/api/demo/masker',
  json={'input': 'Contact john@acme.co'}
)
data = response.json()`,
}
</script>
