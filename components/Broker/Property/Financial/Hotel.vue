<template>
  <div class="flex flex-col">
    <FormKit
      label="Average Daily Rate"
      label-class="pb-1 text-2xl uppercase"
      v-model="store.averageDailyRate"
    />
    <FormKit
      label="Occupancy"
      label-class="pb-1 text-2xl uppercase"
      v-model="store.occupancy"
    />
    <FormKit
      label="Rev Par"
      label-class="pb-1 text-2xl uppercase"
      v-model="store.revPar"
    />
    <FormKit
      label="Net Operating Income"
      label-class="pb-1 text-2xl uppercase"
      v-model="store.netOperatingIncome"
    />
    <FormKit label="Cap Rate" />
    <FormKit
      label="Multiplier"
      label-class="pb-1 text-2xl uppercase"
      v-model="store.capRate"
    />
  </div>
</template>

<script setup lang="ts">
  import { store } from "../store"
</script>
