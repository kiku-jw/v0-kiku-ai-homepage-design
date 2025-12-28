<template>
  <div class="noise-bg grid-bg min-h-screen">
    <Navbar />
    <main class="relative z-10 mx-auto max-w-5xl px-6 py-16">
      <PageHeader>
        <template #title>Dashboard</template>
        <template #description>
          Manage your API keys, billing, and usage
        </template>
      </PageHeader>

      <!-- Dashboard Grid -->
      <div class="grid gap-6 md:grid-cols-2">
        <!-- API Keys Card -->
        <div class="rounded-xl border border-border/60 bg-card p-6">
          <div class="mb-4 flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Key class="h-5 w-5 text-primary" />
            </div>
            <h2 class="text-lg font-semibold">API Keys</h2>
          </div>
          <p class="mb-4 text-sm text-muted-foreground">
            Create and manage your API keys for all KikuAI services.
          </p>
          <div class="rounded-lg bg-secondary/50 p-3 font-mono text-sm">
            <div class="flex items-center justify-between">
              <span class="text-muted-foreground">kiku_sk_****...****7a3f</span>
              <button class="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                <Copy class="h-4 w-4" />
              </button>
            </div>
          </div>
          <button class="mt-4 inline-flex h-9 items-center justify-center rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Create new key
          </button>
        </div>

        <!-- Balance Card -->
        <div class="rounded-xl border border-border/60 bg-card p-6">
          <div class="mb-4 flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Wallet class="h-5 w-5 text-primary" />
            </div>
            <h2 class="text-lg font-semibold">Balance</h2>
          </div>
          <div class="mb-4">
            <div class="text-3xl font-bold">$24.50</div>
            <p class="text-sm text-muted-foreground">Available credits</p>
          </div>
          <NuxtLink
            to="/pricing"
            class="inline-flex h-9 items-center justify-center rounded-xl bg-secondary px-4 text-sm font-medium transition-colors hover:bg-secondary/80"
          >
            Top up balance
          </NuxtLink>
        </div>

        <!-- Usage Card -->
        <div class="rounded-xl border border-border/60 bg-card p-6">
          <div class="mb-4 flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <BarChart3 class="h-5 w-5 text-primary" />
            </div>
            <h2 class="text-lg font-semibold">Usage</h2>
          </div>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-sm text-muted-foreground">Chart2CSV</span>
              <span class="font-mono text-sm">142 calls</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-muted-foreground">PATAS</span>
              <span class="font-mono text-sm">58 calls</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-muted-foreground">Masker</span>
              <span class="font-mono text-sm">1,247 calls</span>
            </div>
          </div>
        </div>

        <!-- Quick Links Card -->
        <div class="rounded-xl border border-border/60 bg-card p-6">
          <div class="mb-4 flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Zap class="h-5 w-5 text-primary" />
            </div>
            <h2 class="text-lg font-semibold">Quick Links</h2>
          </div>
          <div class="space-y-2">
            <NuxtLink
              to="/docs"
              class="flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-secondary"
            >
              <span>Documentation</span>
              <ArrowRight class="h-4 w-4 text-muted-foreground" />
            </NuxtLink>
            <a
              href="https://t.me/kikuai_bot"
              target="_blank"
              class="flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-secondary"
            >
              <span>Telegram Bot</span>
              <ArrowRight class="h-4 w-4 text-muted-foreground" />
            </a>
            <a
              href="mailto:support@kikuai.dev"
              class="flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-secondary"
            >
              <span>Contact Support</span>
              <ArrowRight class="h-4 w-4 text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { Key, Wallet, BarChart3, Zap, Copy, ArrowRight } from 'lucide-vue-next'
</script>
