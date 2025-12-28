<template>
  <section class="relative z-10 px-6 pb-16">
    <div class="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3">
      <div
        v-for="item in items"
        :key="item"
        class="flex items-center gap-2 rounded-full border border-border/40 bg-card/30 px-4 py-2 text-sm text-muted-foreground"
      >
        <Check class="h-3.5 w-3.5 text-primary" />
        {{ item }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Check } from 'lucide-vue-next'

const items = [
  'One account + API key',
  'Usage-based billing',
  'Self-serve demos',
]
</script>
