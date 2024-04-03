<template>
  <div class="flex flex-col gap-2 py-4">
    <div class="flex flex-col gap-2 lg:flex-row">
      <FormKit label="Number of Buildings" outer-class="font-bold uppercase" />
      <FormKit label="Units" outer-class="font-bold uppercase" />
    </div>
    <div class="flex flex-col gap-2 lg:flex-row">
      <FormKit
        label="Total building size in Square Foot"
        outer-class="font-bold uppercase" />
      <FormKit label="Floors" outer-class="font-bold uppercase" />
    </div>

    <div class="flex flex-col gap-2 lg:flex-row">
      <FormKit
        label="Price per Square Foot"
        outer-class="font-bold uppercase" />
      <FormKit label="Net Rentable Area" outer-class="font-bold uppercase" />
    </div>

    <FormKit label="Lot size in Acre" outer-class="font-bold uppercase" />
    <div class="flex flex-col gap-2 lg:flex-row">
      <FormKit label="Year Built" outer-class="font-bold uppercase" />
      <FormKit label="Year Renovated" outer-class="font-bold uppercase" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
