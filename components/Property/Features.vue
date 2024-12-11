<template>
  <div class="p-8 space-y-2 bg-white rounded-md md:p-4">
    <h2 class="text-2xl font-bold">Features</h2>
    <ul class="grid grid-cols-1 p-2 md:grid-cols-3 gap-x-4">
      <li
        v-for="(item, key) in features"
        :key="key"
        class="py-2 break-all lg:grow">
        <p class="text-slate-700">{{ item }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  const { features } = defineProps<{ features: string[] }>()
</script>
