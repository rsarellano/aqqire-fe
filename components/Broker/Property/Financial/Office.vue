<template>
  <div class="flex flex-col gap-2 py-4">
    <FormKit
      label="Price per Square Foot"
      v-model="store.pricePerSquareFt"
    />
    <FormKit
      label="Gross Rental Income"
      v-model="store.grossRentalIncome"
    />
    <FormKit
      label="Net Rental Income"
      v-model="store.netRentalIncome"
    />
    <FormKit
      label="Net Operating Income"
      v-model="store.netOperatingIncome"
    />
    <FormKit
      label="Cap Rate"
      v-model="store.capRate"
    />
  </div>
</template>

<script setup lang="ts">
  import { store } from "../store"
</script>
