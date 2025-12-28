<template>
  <div class="noise-bg grid-bg min-h-screen">
    <Navbar />
    <main class="relative z-10 mx-auto max-w-3xl px-6 py-16">
      <PageHeader>
        <template #title>>> ABOUT</template>
      </PageHeader>

      <div class="space-y-6 text-muted-foreground">
        <p>
          KikuAI Lab builds APIs that turn noisy data into clear, actionable signals.
        </p>
        <p>
          Our tools process unstructured information, analyze it with lightweight AI modules, and return clean,
          structured outputs that can be used directly in products, automation pipelines, and analytics systems.
        </p>
        <p>
          Each tool solves one task and works fully autonomously. Minimal inputs, predictable behavior, stable performance.
        </p>
        <p>
          One dashboard, one API key, unified billing — everything you need to integrate and ship fast.
        </p>
      </div>

      <section class="mt-12">
        <h2 class="mb-6 text-xl font-semibold">>> PRINCIPLES</h2>
        <div class="space-y-4">
          <div class="flex items-start gap-4 rounded-xl border border-border/50 bg-card/50 p-4">
            <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Zap class="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 class="mb-1 font-semibold">Simplicity</h3>
              <p class="text-sm text-muted-foreground">A tool should be understood in a minute</p>
            </div>
          </div>
          <div class="flex items-start gap-4 rounded-xl border border-border/50 bg-card/50 p-4">
            <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Shield class="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 class="mb-1 font-semibold">Stability</h3>
              <p class="text-sm text-muted-foreground">Consistent behavior under any load</p>
            </div>
          </div>
          <div class="flex items-start gap-4 rounded-xl border border-border/50 bg-card/50 p-4">
            <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Cpu class="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 class="mb-1 font-semibold">Autonomy</h3>
              <p class="text-sm text-muted-foreground">If it cannot run by itself, it doesn't belong here</p>
            </div>
          </div>
        </div>
      </section>

      <p class="mt-12 text-muted-foreground/70">
        Our APIs help remove noise, reduce manual work, and free developers from repetitive tasks. Everything else is just overhead.
      </p>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { Zap, Shield, Cpu } from 'lucide-vue-next'
</script>
