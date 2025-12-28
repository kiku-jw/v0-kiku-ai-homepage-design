<template>
  <div class="noise-bg grid-bg min-h-screen">
    <Navbar />
    <main class="relative z-10 mx-auto max-w-4xl px-6 py-16">
      <PageHeader>
        <template #title>>> OPEN SOURCE</template>
        <template #description>
          Most KikuAI projects are open-source. Your balance pays for the managed hosted API.
        </template>
      </PageHeader>

      <div class="mb-12 space-y-4 text-muted-foreground">
        <p>
          We believe in open source software. Our core projects are available on GitHub for you to inspect, contribute to, or self-host.
        </p>
        <p>
          When you use our hosted API, your balance pays for: uptime, scaling, billing, and support — so you don't have to manage infrastructure.
        </p>
      </div>

      <!-- Repositories Grid -->
      <div class="grid gap-4 sm:grid-cols-2">
        <a
          v-for="repo in repositories"
          :key="repo.name"
          :href="repo.url"
          target="_blank"
          class="group rounded-xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
        >
          <div class="mb-3 flex items-center gap-3">
            <Github class="h-5 w-5 text-muted-foreground" />
            <h2 class="font-semibold">{{ repo.name }}</h2>
          </div>
          <p class="mb-4 text-sm text-muted-foreground">{{ repo.description }}</p>
          <div class="flex items-center gap-4 text-xs text-muted-foreground">
            <span class="flex items-center gap-1">
              <Star class="h-3.5 w-3.5" />
              {{ repo.stars }}
            </span>
            <span>{{ repo.language }}</span>
          </div>
        </a>
      </div>

      <div class="mt-12 rounded-xl border border-border/60 bg-card p-6">
        <h2 class="mb-4 text-lg font-semibold">Contributing</h2>
        <p class="text-muted-foreground">
          We welcome contributions! Check out the individual repository README files for contribution guidelines. For major changes, please open an issue first to discuss what you would like to change.
        </p>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { Github, Star } from 'lucide-vue-next'

const repositories = [
  {
    name: 'Chart2CSV',
    description: 'AI-powered extraction of structured data from chart images',
    url: 'https://github.com/KikuAI-Lab/Chart2CSV',
    stars: '127',
    language: 'Python',
  },
  {
    name: 'PATAS',
    description: 'Pattern-adaptive anti-spam system with semantic discovery',
    url: 'https://github.com/kiku-jw/PATAS',
    stars: '89',
    language: 'TypeScript',
  },
  {
    name: 'Masker',
    description: 'Secure PII redaction and text anonymization',
    url: 'https://github.com/KikuAI-Lab/masker',
    stars: '64',
    language: 'Python',
  },
  {
    name: 'ReliAPI',
    description: 'Reliability layer for API calls with retries and caching',
    url: 'https://github.com/KikuAI-Lab/reliapi',
    stars: '42',
    language: 'TypeScript',
  },
]
</script>
