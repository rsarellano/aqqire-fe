<template>
  <div class="flex flex-col gap-2 py-4">
    <FormKit
      v-model="model!.pricePerSquareFt"
      label="Price Per Square Foot"
      outer-class="font-bold uppercase"
    />
    <FormKit
      v-model="model!.grossRentalIncome"
      label="Gross Rental Income"
      outer-class="font-bold uppercase"
    />
    <FormKit
      v-model="model!.netRentalIncome"
      label="Net Rental Income"
      outer-class="font-bold uppercase"
    />
    <FormKit
      v-model="model!.netOperatingIncome"
      label="Net Operating Income"
      outer-class="font-bold uppercase"
    />
    <FormKit
      v-model="model!.capRate"
      label="Cap Rate"
      outer-class="font-bold uppercase"
    />
  </div>
</template>

<script setup lang="ts">
  import type { Property } from "~/types/property"
  const model = defineModel<Property>()
</script>