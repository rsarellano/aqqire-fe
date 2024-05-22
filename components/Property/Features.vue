<template>
  <div class="p-8 md:p-4 space-y-2 bg-white rounded-md">
    <h2 class="text-2xl font-bold">Features</h2>
    <ul class="grid grid-cols-1 md:grid-cols-3 gap-x-4 p-2">
      <li
        class="py-2 lg:grow break-all"
        v-for="(item, key) in features"
        :key="key">
        <p class="text-slate-700">{{ item }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  const features = ref([
    'Gas Station',
    'Basketball Court',
    'Gym',
    'Home Theater',
    'Air Conditioned',
    'Pet Friendly',
    'Free Parking',
    'Swimming Pool',
    'Wheelchair Friendly',
  ])
</script>
