<template>
  <div class="flex flex-col gap-2 py-4">
    <FormKit
      label="Price per Square Foot"
      v-model="model!.pricePerSquareFt"
    />
    <FormKit
      label="Gross Rental Income"
      v-model="model!.grossRentalIncome"
    />
    <FormKit
      label="Net Rental Income"
      v-model="model!.netRentalIncome"
    />
    <FormKit
      label="Net Operating Income"
      v-model="model!.netOperatingIncome"
    />
    <FormKit
      label="Cap Rate"
      v-model="model!.capRate"
    />
  </div>
</template>

<script setup lang="ts">
  import type { Property } from "~/types/property"
  const model = defineModel<Property>()
</script>
