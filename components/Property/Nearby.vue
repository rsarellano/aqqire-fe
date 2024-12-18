<template>
  <div class="w-full max-w-6xl p-8 space-y-2 bg-white rounded-md md:p-4">
    <h2 class="px-2 text-2xl font-bold">Places Nearby</h2>
    <ul class="grid grid-cols-1 p-2 md:grid-cols-3 gap-x-6 gap-y-8">
      <li
        v-for="(item, key) in places"
        :key="key"
        class="py-2 break-all lg:grow"
      >
        <p class="text-slate-700">{{ item.name }}</p>
        <p class="text-sm text-main">{{ item.distance }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface place {
  name: string,
  distance: string
}
const {places}=defineProps<{places: place[]}>()
 
</script>
