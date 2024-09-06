<template>
  <div
    class="flex flex-col w-full max-w-6xl p-8 space-y-2 bg-white rounded-md md:p-4">
    <h2 class="text-2xl font-bold">Property Description</h2>
    <div
      class="flex flex-col gap-2 text-sm text-slate-500"
      v-html="description"></div>
  </div>
</template>

<script setup lang="ts">  
  const { description } = defineProps<{ description?: string }>()
</script>
