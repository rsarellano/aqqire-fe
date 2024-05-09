<template>
  <div class="flex flex-col">
    <FormKit
      label="Average Daily Rate"
      label-class="pb-1 text-2xl uppercase"
      v-model="model!.averageDailyRate"
    />
    <FormKit
      label="Occupancy"
      label-class="pb-1 text-2xl uppercase"
      v-model="model!.occupancy"
    />
    <FormKit
      label="Rev Par"
      label-class="pb-1 text-2xl uppercase"
      v-model="model!.revPar"
    />
    <FormKit
      label="Net Operating Income"
      label-class="pb-1 text-2xl uppercase"
      v-model="model!.netOperatingIncome"
    />
    <FormKit
      label="Cap Rate"
      v-model="model!.capRate"
    />
    <FormKit
      label="Multiplier"
      label-class="pb-1 text-2xl uppercase"
      v-model="model!.capRate"
    />
  </div>
</template>

<script setup lang="ts">
  import type { Property } from "~/types/property"
  const model = defineModel<Property>()
</script>
