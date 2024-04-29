<template>
  <div class="p-8 md:p-4 space-y-2 bg-white rounded-md w-full max-w-6xl">
    <h2 class="text-2xl font-bold px-2">Places Nearby</h2>
    <ul class="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 p-2">
      <li
        class="py-2 lg:grow break-all"
        v-for="(item, key) in places"
        :key="key"
      >
        <p class="text-slate-700">{{ item.name }}</p>
        <p class="text-blue-500 text-sm">{{ item.distance }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  const places = ref([
    {
      name: 'Gas Station',
      distance: '3.11 Miles',
    },
    {
      name: 'KFC',
      distance: '3.27 Miles',
    },
    {
      name: 'Mcdonalds',
      distance: '3.11 Miles',
    },
    {
      name: 'Target',
      distance: '1 Mile',
    },
    {
      name: 'Costco Wholesale',
      distance: '2.11 Miles',
    },
    {
      name: 'Bestbuy',
      distance: '7.11 Miles',
    },
    {
      name: 'Meredith General Hospital',
      distance: '7.11 Miles',
    },
  ])
</script>
