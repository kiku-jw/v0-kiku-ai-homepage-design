<template>
  <div class="noise-bg grid-bg min-h-screen">
    <Navbar />
    <main class="relative z-10 mx-auto max-w-4xl px-6 py-16">
      <PageHeader back-link="/">
        <template #title>Chart2CSV</template>
        <template #description>
          AI-powered extraction of structured data from chart images
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
          href="https://github.com/KikuAI-Lab/Chart2CSV/wiki"
          target="_blank"
          class="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-card px-5 text-sm font-medium transition-colors hover:bg-secondary"
        >
          Docs
        </a>
        <a
          href="https://github.com/KikuAI-Lab/Chart2CSV"
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
          Chart2CSV leverages advanced vision-LLMs to extract structured numerical data from chart images with over 90% accuracy.
        </p>
        <p>
          It bridges the gap between static visual reports and actionable data by digitizing line, bar, and scatter charts into clean CSV or JSON formats.
        </p>
      </div>

      <!-- Problem / When to use / Input/Output -->
      <div class="mb-12 grid gap-6 md:grid-cols-2">
        <div class="rounded-xl border border-border/60 bg-card p-6">
          <h3 class="mb-3 font-semibold">Problem</h3>
          <p class="text-sm text-muted-foreground">
            Valuable trend data is often trapped in PDF reports or image files, requiring tedious manual data entry to reconstruct the original values.
          </p>
        </div>
        <div class="rounded-xl border border-border/60 bg-card p-6">
          <h3 class="mb-3 font-semibold">When to use</h3>
          <p class="text-sm text-muted-foreground">
            Use Chart2CSV to automate market research, digitize historical paper reports, or build data extraction pipelines for financial documents.
          </p>
        </div>
      </div>

      <div class="mb-12 rounded-xl border border-border/60 bg-card p-6">
        <h3 class="mb-4 font-semibold">Input / Output</h3>
        <div class="grid gap-4 sm:grid-cols-2">
          <div>
            <div class="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Input</div>
            <p class="text-sm">Image files (PNG/JPG) containing charts or graphs</p>
          </div>
          <div>
            <div class="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Output</div>
            <p class="text-sm">Structured tabular data in CSV or JSON format</p>
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
  cURL: `curl -X POST https://kikuai.dev/api/demo/chart2csv \\
  -H "Content-Type: multipart/form-data" \\
  -F "image=@chart.png"`,
  JavaScript: `const formData = new FormData();
formData.append('image', file);

const response = await fetch('https://kikuai.dev/api/demo/chart2csv', {
  method: 'POST',
  body: formData
});

const data = await response.json();`,
  Python: `import requests

files = {'image': open('chart.png', 'rb')}
response = requests.post(
  'https://kikuai.dev/api/demo/chart2csv',
  files=files
)
data = response.json()`,
}
</script>
