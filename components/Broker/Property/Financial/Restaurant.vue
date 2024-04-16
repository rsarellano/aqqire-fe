<template>
  <div class="flex flex-col gap-2 py-4">
    <FormKit
      label="Price Per Square Foot"
      outer-class="font-bold uppercase"
      v-model="store.pricePerSquareFt"
    />
    <FormKit
      label="Gross Rental Income"
      outer-class="font-bold uppercase"
      v-model="store.grossRentalIncome"
    />
    <FormKit
      label="Net Rental Income"
      outer-class="font-bold uppercase"
      v-model="store.netRentalIncome"
    />
    <FormKit
      label="Net Operating Income"
      outer-class="font-bold uppercase"
      v-model="store.netOperatingIncome"
    />
    <FormKit
      label="Cap Rate"
      outer-class="font-bold uppercase"
      v-model="store.capRate"
    />
  </div>
</template>

<script setup lang="ts">
  import { store } from "../store"
</script>
