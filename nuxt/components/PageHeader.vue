<template>
  <div class="mb-8">
    <NuxtLink
      v-if="backLink"
      :to="backLink"
      class="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      <ArrowLeft class="h-4 w-4" />
      Back
    </NuxtLink>
    <h1 class="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
      <slot name="title" />
    </h1>
    <p v-if="$slots.description" class="text-lg text-muted-foreground">
      <slot name="description" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'

defineProps<{
  backLink?: string
}>()
</script>
