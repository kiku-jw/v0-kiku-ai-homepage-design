<template>
  <footer class="relative z-10 border-t border-border/40">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
      <div class="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
        <NuxtLink to="/products/chart2csv" class="transition-colors hover:text-foreground">
          Chart2CSV
        </NuxtLink>
        <NuxtLink to="/products/patas" class="transition-colors hover:text-foreground">
          PATAS
        </NuxtLink>
        <NuxtLink to="/docs" class="transition-colors hover:text-foreground">
          Docs
        </NuxtLink>
        <NuxtLink to="/pricing" class="transition-colors hover:text-foreground">
          Pricing
        </NuxtLink>
      </div>

      <div class="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
        <NuxtLink to="/refund" class="transition-colors hover:text-foreground">
          Refund
        </NuxtLink>
        <NuxtLink to="/terms" class="transition-colors hover:text-foreground">
          Terms
        </NuxtLink>
        <NuxtLink to="/privacy" class="transition-colors hover:text-foreground">
          Privacy
        </NuxtLink>
        <NuxtLink to="/open-source" class="transition-colors hover:text-foreground">
          Open Source
        </NuxtLink>
        <a
          href="https://github.com/kikuai"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-colors hover:text-foreground"
        >
          <Github class="h-4 w-4" />
          <span class="sr-only">GitHub</span>
        </a>
      </div>
    </div>

    <div class="border-t border-border/20 py-4 text-center text-xs text-muted-foreground/60">
      © {{ new Date().getFullYear() }} KikuAI. All rights reserved.
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Github } from 'lucide-vue-next'
</script>
