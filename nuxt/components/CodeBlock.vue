<template>
  <div class="relative overflow-hidden rounded-xl border border-border bg-card">
    <div class="flex items-center justify-between border-b border-border/50 bg-secondary/30 px-4 py-2">
      <div class="flex gap-2">
        <button
          v-for="tab in tabs"
          :key="tab"
          :class="[
            'rounded-lg px-3 py-1 text-xs font-medium transition-colors',
            activeTab === tab
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground',
          ]"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>
      <button
        class="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        @click="copyCode"
      >
        <Check v-if="copied" class="h-4 w-4 text-primary" />
        <Copy v-else class="h-4 w-4" />
      </button>
    </div>
    <pre class="overflow-x-auto p-4 font-mono text-sm"><code class="text-foreground/90">{{ code[activeTab] }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import { Copy, Check } from 'lucide-vue-next'
import { ref } from 'vue'

const props = defineProps<{
  tabs: string[]
  code: Record<string, string>
}>()

const activeTab = ref(props.tabs[0])
const copied = ref(false)

function copyCode() {
  navigator.clipboard.writeText(props.code[activeTab.value])
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}
</script>
