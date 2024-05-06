<template>
  <div class="flex flex-col gap-2 py-4">
    <FormKit
      label="Net Operating Income"
      outer-class="font-bold uppercase"
      v-model="model!.netOperatingIncome"
    />
    <FormKit
      label="Occupancy"
      outer-class="font-bold uppercase"
      v-model="model!.occupancy"
    />
    <FormKit
      label="Cap Rate"
      outer-class="font-bold uppercase"
      v-model="model!.capRate"
    />
  </div>
</template>

<script setup lang="ts">
  import type { Property } from "~/types/property"
  const model = defineModel<Property>()
</script>