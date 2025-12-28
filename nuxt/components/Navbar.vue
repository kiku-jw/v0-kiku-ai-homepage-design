<template>
  <header class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
      <NuxtLink to="/" class="flex items-center gap-2">
        <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <span class="text-sm font-bold text-primary-foreground">K</span>
        </div>
        <span class="text-lg font-semibold tracking-tight">KikuAI</span>
      </NuxtLink>

      <nav class="hidden items-center gap-6 md:flex">
        <div class="relative" @mouseenter="productsOpen = true" @mouseleave="productsOpen = false">
          <button class="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
            Products
            <ChevronDown class="h-3.5 w-3.5" />
          </button>
          <Transition
            enter-active-class="transition duration-150 ease-out"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-2"
          >
            <div v-if="productsOpen" class="absolute left-0 top-full pt-2">
              <div class="w-48 rounded-xl border border-border/60 bg-card/95 p-2 shadow-xl backdrop-blur-xl">
                <NuxtLink to="/products/chart2csv" class="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                  Chart → CSV
                </NuxtLink>
                <NuxtLink to="/products/patas" class="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                  Logs → Rules
                </NuxtLink>
                <div class="my-2 border-t border-border/40" />
                <NuxtLink to="/pricing" class="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                  Pricing
                </NuxtLink>
                <NuxtLink to="/docs" class="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                  Docs
                </NuxtLink>
              </div>
            </div>
          </Transition>
        </div>

        <NuxtLink to="/about" class="text-xs text-muted-foreground/70 transition-colors hover:text-muted-foreground">
          About
        </NuxtLink>
      </nav>

      <NuxtLink to="/dashboard" class="inline-flex h-9 items-center justify-center rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
        Dashboard
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

const productsOpen = ref(false)
</script>
