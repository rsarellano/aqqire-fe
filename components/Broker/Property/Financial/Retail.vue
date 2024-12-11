<template>
  <div class="flex flex-col gap-2 py-4">
    <FormKit
      v-model="model!.pricePerSquareFt"
      label="Price per Square Foot"
    />
    <FormKit
      v-model="model!.grossRentalIncome"
      label="Gross Rental Income"
    />
    <FormKit
      v-model="model!.netRentalIncome"
      label="Net Rental Income"
    />
    <FormKit
      v-model="model!.netOperatingIncome"
      label="Net Operating Income"
    />
    <FormKit
      v-model="model!.capRate"
      label="Cap Rate"
    />
  </div>
</template>

<script setup lang="ts">
  import type { Property } from "~/types/property"
  const model = defineModel<Property>()
</script>
