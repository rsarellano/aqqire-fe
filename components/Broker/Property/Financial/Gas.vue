<template>
  <div class="flex flex-col gap-2 py-4">
    <FormKit
      label="Annual Fuel Revenue"
      outer-class="font-bold uppercase"
      v-model="model!.annualFuelRevenue"
    />
    <FormKit
      label="Annual C-Store Revenue"
      outer-class="font-bold uppercase"
      v-model="model!.annualCStoreRevenue"
    />
    <FormKit
      label="Annual Bay Revenue"
      outer-class="font-bold uppercase"
      v-model="model!.annualBayRevenue"
    />
    <FormKit
      label="Annual Restaurant Revenue"
      outer-class="font-bold uppercase"
      v-model="model!.annualRestaurantRevenue"
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