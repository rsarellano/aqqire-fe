<template>
  <div class="flex flex-col">
    <div class="flex flex-col gap-4 lg:flex-row">
      <FormKit
        label="Total building size in Square Foot"
        label-class="pb-1 text-2xl uppercase" />
      <FormKit
        label="Number of buildings"
        label-class="pb-1 text-2xl uppercase" />
    </div>

    <div class="flex flex-col gap-4 lg:flex-row">
      <FormKit label="Number of Floors" label-class="pb-1 text-2xl uppercase" />
      <FormKit label="Number of Units" label-class="pb-1 text-2xl uppercase" />
    </div>

    <FormKit label="Lot size in Acre" />

    <div class="flex flex-col gap-4 lg:flex-row">
      <FormKit label="Year Built" label-class="pb-1 text-2xl uppercase" />
      <FormKit label="Year Renovated" label-class="pb-1 text-2xl uppercase" />
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    condition: String,
  });
</script>
