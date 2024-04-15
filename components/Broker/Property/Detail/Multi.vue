<template>
  <div class="flex flex-col gap-2 py-4">
    <div class="flex flex-col gap-2 lg:flex-row">
      <FormKit
        label="Number of Buildings"
        outer-class="font-bold uppercase"
        v-model="store.numberOfBuildings"
      />
      <FormKit
        label="Number of Units"
        outer-class="font-bold uppercase"
        v-model="store.numberOfUnits"
      />
    </div>
    <div class="flex flex-col gap-2 lg:flex-row">
      <FormKit
        label="Total building size in Square Foot"
        outer-class="font-bold uppercase"
        v-model="store.buildingSizeinSqFt"
      />
      <FormKit
        label="Number of Floors"
        outer-class="font-bold uppercase"
        v-model="store.numberOfFloors"
      />
    </div>

    <div class="flex flex-col gap-2 lg:flex-row">
      <FormKit
        label="Price per Square Foot"
        outer-class="font-bold uppercase"
        v-model="store.pricePerSquareFt"
      />
      <FormKit
        label="Net Rentable Area"
        outer-class="font-bold uppercase"
        v-model="store.netRentableArea"
      />
    </div>

    <FormKit
      label="Lot size in Acre"
      outer-class="font-bold uppercase"
      v-model="store.lotSizeAcre"
    />
    <div class="flex flex-col gap-2 lg:flex-row">
      <FormKit
        label="Year Built"
        outer-class="font-bold uppercase"
        v-model="store.yearBuilt"
      />
      <FormKit
        label="Year Renovated"
        outer-class="font-bold uppercase"
        v-model="store.yearRenovated"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { store } from "../store"
</script>
