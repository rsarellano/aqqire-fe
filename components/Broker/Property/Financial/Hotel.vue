<template>
  <div class="flex flex-col">
    <FormKit
      v-model="model!.averageDailyRate"
      label="Average Daily Rate"
      label-class="pb-1 text-2xl uppercase"
    />
    <FormKit
      v-model="model!.occupancy"
      label="Occupancy"
      label-class="pb-1 text-2xl uppercase"
    />
    <FormKit
      v-model="model!.revPar"
      label="Rev Par"
      label-class="pb-1 text-2xl uppercase"
    />
    <FormKit
      v-model="model!.netOperatingIncome"
      label="Net Operating Income"
      label-class="pb-1 text-2xl uppercase"
    />
    <FormKit
      v-model="model!.capRate"
      label="Cap Rate"
    />
    <FormKit
      v-model="model!.capRate"
      label="Multiplier"
      label-class="pb-1 text-2xl uppercase"
    />
  </div>
</template>

<script setup lang="ts">
  import type { Property } from "~/types/property"
  const model = defineModel<Property>()
</script>
