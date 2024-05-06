<template>
  <div class="flex flex-col gap-2 py-4">
    <div class="flex flex-col gap-2 lg:flex-row">
      <FormKit
        label="Number of Buildings"
        outer-class="font-bold uppercase"
        v-model="model!.numberOfBuildings"
      />
      <FormKit
        label="Number of Units"
        outer-class="font-bold uppercase"
        v-model="model!.numberOfUnits"
      />
    </div>
    <div class="flex flex-col gap-2 lg:flex-row">
      <FormKit
        label="Total building size in Square Foot"
        outer-class="font-bold uppercase"
        v-model="model!.buildingSizeinSqFt"
      />
      <FormKit
        label="Number of Floors"
        outer-class="font-bold uppercase"
        v-model="model!.numberOfFloors"
      />
    </div>

    <div class="flex flex-col gap-2 lg:flex-row">
      <FormKit
        label="Price per Square Foot"
        outer-class="font-bold uppercase"
        v-model="model!.pricePerSquareFt"
      />
      <FormKit
        label="Net Rentable Area"
        outer-class="font-bold uppercase"
        v-model="model!.netRentableArea"
      />
    </div>

    <FormKit
      label="Lot size in Acre"
      outer-class="font-bold uppercase"
      v-model="model!.lotSizeAcre"
    />
    <div class="flex flex-col gap-2 lg:flex-row">
      <FormKit
        label="Year Built"
        outer-class="font-bold uppercase"
        v-model="model!.yearBuilt"
      />
      <FormKit
        label="Year Renovated"
        outer-class="font-bold uppercase"
        v-model="model!.yearRenovated"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Property } from "~/types/property"
  const model = defineModel<Property>()
</script>
