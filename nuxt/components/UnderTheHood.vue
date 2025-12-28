<template>
  <section class="relative z-10 px-6 pb-16">
    <div class="mx-auto max-w-5xl">
      <div class="mb-4 text-center">
        <span class="text-xs font-medium uppercase tracking-wider text-muted-foreground">Under the hood</span>
      </div>

      <div class="grid gap-4 sm:grid-cols-2">
        <!-- Masker Tile -->
        <div class="group rounded-xl border border-border/50 bg-card/50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30">
          <div class="mb-3 flex items-center gap-2">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <Shield class="h-4 w-4 text-primary" />
            </div>
            <h3 class="font-semibold">Masker</h3>
            <span class="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
              PII Masking
            </span>
          </div>

          <p class="mb-4 text-sm text-muted-foreground">
            Automatic detection and redaction before any processing.
          </p>

          <!-- Micro-visual: email → [EMAIL] -->
          <div class="mb-4 flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-2 font-mono text-xs">
            <span class="text-muted-foreground">john@acme.co</span>
            <ArrowRight class="h-3 w-3 text-primary" />
            <span class="rounded bg-primary/20 px-1.5 py-0.5 text-primary">[EMAIL]</span>
          </div>

          <NuxtLink to="/docs/masker" class="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary">
            Docs
            <ArrowRight class="h-3 w-3" />
          </NuxtLink>
        </div>

        <!-- ReliAPI Tile -->
        <div class="group rounded-xl border border-border/50 bg-card/50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30">
          <div class="mb-3 flex items-center gap-2">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <RefreshCw class="h-4 w-4 text-primary" />
            </div>
            <h3 class="font-semibold">ReliAPI</h3>
            <span class="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
              Reliability Layer
            </span>
          </div>

          <p class="mb-4 text-sm text-muted-foreground">
            Retries, caching, and deduplication built into every call.
          </p>

          <!-- Micro-visual: request → cache hit -->
          <div class="mb-4 flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-2 font-mono text-xs">
            <span class="text-muted-foreground">GET /api</span>
            <ArrowRight class="h-3 w-3 text-primary" />
            <span class="rounded bg-emerald-500/20 px-1.5 py-0.5 text-emerald-400">CACHE HIT</span>
          </div>

          <NuxtLink to="/docs/reliapi" class="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary">
            Docs
            <ArrowRight class="h-3 w-3" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Shield, RefreshCw, ArrowRight } from 'lucide-vue-next'
</script>
