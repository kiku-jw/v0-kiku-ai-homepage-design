<template>
  <section class="relative z-10 px-6 pb-16">
    <div class="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
      <!-- Chart2CSV Tile -->
      <NuxtLink to="/products/chart2csv" class="group block">
        <div class="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-primary/5 hover:shadow-2xl md:p-8">
          <div class="mb-6 flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <ImageIcon class="h-5 w-5 text-primary" />
            </div>
            <h2 class="text-xl font-semibold">Chart → CSV</h2>
          </div>

          <div class="mb-6 flex items-center gap-3 rounded-xl bg-secondary/50 p-4">
            <!-- Before: Line chart thumbnail -->
            <div class="flex h-24 w-28 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-background/50 p-2">
              <svg viewBox="0 0 80 50" class="h-full w-full">
                <line x1="10" y1="10" x2="10" y2="45" stroke="currentColor" stroke-opacity="0.1" />
                <line x1="10" y1="45" x2="75" y2="45" stroke="currentColor" stroke-opacity="0.1" />
                <polyline
                  points="12,38 25,30 38,35 50,20 63,25 73,12"
                  fill="none"
                  stroke="#22C55E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle cx="12" cy="38" r="3" fill="#22C55E" />
                <circle cx="25" cy="30" r="3" fill="#22C55E" />
                <circle cx="38" cy="35" r="3" fill="#22C55E" />
                <circle cx="50" cy="20" r="3" fill="#22C55E" />
                <circle cx="63" cy="25" r="3" fill="#22C55E" />
                <circle cx="73" cy="12" r="3" fill="#22C55E" />
              </svg>
            </div>

            <!-- Arrow -->
            <div class="flex-shrink-0 animate-pulse">
              <ArrowRight class="h-5 w-5 text-primary" />
            </div>

            <!-- After: 3-row table -->
            <div class="flex-1 overflow-hidden rounded-lg border border-border bg-background/50">
              <table class="w-full font-mono text-[10px]">
                <thead>
                  <tr class="border-b border-border/50 bg-secondary/30">
                    <th class="px-2 py-1.5 text-left text-muted-foreground font-medium">date</th>
                    <th class="px-2 py-1.5 text-left text-muted-foreground font-medium">value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-border/30">
                    <td class="px-2 py-1 text-foreground/80">2024-01</td>
                    <td class="px-2 py-1 text-foreground/80">42</td>
                  </tr>
                  <tr class="border-b border-border/30">
                    <td class="px-2 py-1 text-foreground/80">2024-02</td>
                    <td class="px-2 py-1 text-foreground/80">67</td>
                  </tr>
                  <tr>
                    <td class="px-2 py-1 text-foreground/80">2024-03</td>
                    <td class="px-2 py-1 text-foreground/80">58</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <button class="inline-flex h-9 items-center justify-center rounded-xl bg-secondary px-4 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80">
            Try demo
          </button>
        </div>
      </NuxtLink>

      <!-- PATAS Tile -->
      <NuxtLink to="/products/patas" class="group block">
        <div class="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-primary/5 hover:shadow-2xl md:p-8">
          <div class="mb-6 flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <MessageSquare class="h-5 w-5 text-primary" />
            </div>
            <h2 class="text-xl font-semibold">Logs → Rules</h2>
          </div>

          <div class="mb-6 flex items-center gap-3 rounded-xl bg-secondary/50 p-4">
            <!-- Before: Chat/log lines -->
            <div class="flex w-28 flex-shrink-0 flex-col gap-1.5 overflow-hidden rounded-lg border border-border bg-background/50 p-2">
              <div class="flex items-start gap-1.5">
                <span class="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400/70" />
                <span class="font-mono text-[9px] text-muted-foreground leading-tight">Buy now! 🔥🔥</span>
              </div>
              <div class="flex items-start gap-1.5">
                <span class="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400/70" />
                <span class="font-mono text-[9px] text-muted-foreground leading-tight">Click bit.ly/x</span>
              </div>
              <div class="flex items-start gap-1.5">
                <span class="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400/70" />
                <span class="font-mono text-[9px] text-foreground/60 leading-tight">Hello team</span>
              </div>
              <div class="flex items-start gap-1.5">
                <span class="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400/70" />
                <span class="font-mono text-[9px] text-muted-foreground leading-tight">Free gift!</span>
              </div>
            </div>

            <!-- Arrow -->
            <div class="flex-shrink-0 animate-pulse">
              <ArrowRight class="h-5 w-5 text-primary" />
            </div>

            <!-- After: Complete JSON rules -->
            <div class="flex-1 overflow-hidden rounded-lg border border-border bg-background/50 p-2 font-mono text-[9px] leading-relaxed">
              <div class="text-muted-foreground">{"{"}</div>
              <div class="pl-2">
                <span class="text-cyan-400">"pattern"</span>
                <span class="text-muted-foreground">: </span>
                <span class="text-amber-400">"emoji_spam"</span>
                <span class="text-muted-foreground">,</span>
              </div>
              <div class="pl-2">
                <span class="text-cyan-400">"action"</span>
                <span class="text-muted-foreground">: </span>
                <span class="text-emerald-400">"BLOCK"</span>
                <span class="text-muted-foreground">,</span>
              </div>
              <div class="pl-2">
                <span class="text-cyan-400">"confidence"</span>
                <span class="text-muted-foreground">: </span>
                <span class="text-purple-400">0.94</span>
                <span class="text-muted-foreground">,</span>
              </div>
              <div class="pl-2">
                <span class="text-cyan-400">"reason"</span>
                <span class="text-muted-foreground">: </span>
                <span class="text-amber-400">"url+emoji"</span>
              </div>
              <div class="text-muted-foreground">{"}"}</div>
            </div>
          </div>

          <button class="inline-flex h-9 items-center justify-center rounded-xl bg-secondary px-4 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80">
            Try demo
          </button>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ImageIcon, MessageSquare, ArrowRight } from 'lucide-vue-next'
</script>
