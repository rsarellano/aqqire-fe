<template>
  <div class="flex flex-col gap-2 py-4">
    <FormKit
      label="Annual Fuel Revenue"
      outer-class="font-bold uppercase"
      v-model="store.annualFuelRevenue"
    />
    <FormKit
      label="Annual C-Store Revenue"
      outer-class="font-bold uppercase"
      v-model="store.annualCStoreRevenue"
    />
    <FormKit
      label="Annual Bay Revenue"
      outer-class="font-bold uppercase"
      v-model="store.annualBayRevenue"
    />
    <FormKit
      label="Annual Restaurant Revenue"
      outer-class="font-bold uppercase"
      v-model="store.annualRestaurantRevenue"
    />
    <FormKit
      label="Net Operating Income"
      outer-class="font-bold uppercase"
      v-model="store.netOperatingIncome"
    />
    <FormKit
      label="Cap Rate"
      outer-class="font-bold uppercase"
    />
  </div>
</template>

<script setup lang="ts">
  import { store } from "../store"
</script>
