<template>
  <div class="flex flex-col gap-2 py-4">
    <FormKit
      label="Price Per Square Foot"
      outer-class="font-bold uppercase"
      v-model="model!.pricePerSquareFt"
    />
    <FormKit
      label="Gross Rental Income"
      outer-class="font-bold uppercase"
      v-model="model!.grossRentalIncome"
    />
    <FormKit
      label="Net Rental Income"
      outer-class="font-bold uppercase"
      v-model="model!.netRentalIncome"
    />
    <FormKit
      label="Net Operating Income"
      outer-class="font-bold uppercase"
      v-model="model!.netOperatingIncome"
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