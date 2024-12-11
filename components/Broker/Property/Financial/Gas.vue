<template>
  <div class="flex flex-col gap-2 py-4">
    <FormKit
      v-model="model!.annualFuelRevenue"
      label="Annual Fuel Revenue"
      outer-class="font-bold uppercase"
    />
    <FormKit
      v-model="model!.annualCStoreRevenue"
      label="Annual C-Store Revenue"
      outer-class="font-bold uppercase"
    />
    <FormKit
      v-model="model!.annualBayRevenue"
      label="Annual Bay Revenue"
      outer-class="font-bold uppercase"
    />
    <FormKit
      v-model="model!.annualRestaurantRevenue"
      label="Annual Restaurant Revenue"
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