<template>
  <div class="flex flex-col">
    <FormKit label="Average Daily Rate" label-class="pb-1 text-2xl uppercase" />
    <FormKit label="Occupancy" label-class="pb-1 text-2xl uppercase" />
    <FormKit label="Rev Par" label-class="pb-1 text-2xl uppercase" />
    <FormKit
      label="Net Operating Income"
      label-class="pb-1 text-2xl uppercase" />
    <FormKit label="Cap Rate" />
    <FormKit label="Multiplier" label-class="pb-1 text-2xl uppercase" />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    condition: String,
  });
</script>
