<template>
  <div class="flex flex-col gap-2 py-4">
    <FormKit
      label="Net Operating Income"
      outer-class="font-bold uppercase"
      v-model="store.netOperatingIncome"
    />
    <FormKit
      label="Occupancy"
      outer-class="font-bold uppercase"
      v-model="store.occupancy"
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
