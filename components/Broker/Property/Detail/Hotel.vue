<template>
  <div class="flex flex-col">
    <div class="flex flex-col gap-4 lg:flex-row">
      <FormKit
        label="Total building size in Square Foot"
        label-class="pb-1 text-2xl uppercase"
        v-model="model!.buildingSizeinSqFt"
      />
      <FormKit
        label="Number of buildings"
        label-class="pb-1 text-2xl uppercase"
        v-model="model!.numberOfBuildings"
      />
    </div>

    <div class="flex flex-col gap-4 lg:flex-row">
      <FormKit
        label="Number of Floors"
        label-class="pb-1 text-2xl uppercase"
        v-model="model!.numberOfFloors"
      />
      <FormKit
        label="Number of Units"
        label-class="pb-1 text-2xl uppercase"
        v-model="model!.numberOfUnits"
      />
    </div>

    <FormKit
      label="Lot size in Acre"
      v-model="model!.lotSizeAcre"
    />

    <div class="flex flex-col gap-4 lg:flex-row">
      <FormKit
        label="Year Built"
        type="date"

        label-class="pb-1 text-2xl uppercase"
        v-model="model!.yearBuilt"
      />
      <FormKit
        label="Year Renovated"
        type="date"
        label-class="pb-1 text-2xl uppercase"
        v-model="model!.yearRenovated"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Property } from "~/types/property"
  const model = defineModel<Property>()
</script>