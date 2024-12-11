<template>
  <div class="flex flex-col">
    <div class="flex flex-col gap-4 lg:flex-row">
      <FormKit
        v-model="model!.buildingSizeinSqFt"
        label="Total building size in Square Foot"
        label-class="pb-1 text-2xl uppercase"
      />
      <FormKit
        v-model="model!.numberOfBuildings"
        label="Number of buildings"
        label-class="pb-1 text-2xl uppercase"
      />
    </div>

    <div class="flex flex-col gap-4 lg:flex-row">
      <FormKit
        v-model="model!.numberOfFloors"
        label="Number of Floors"
        label-class="pb-1 text-2xl uppercase"
      />
      <FormKit
        v-model="model!.numberOfUnits"
        label="Number of Units"
        label-class="pb-1 text-2xl uppercase"
      />
    </div>

    <FormKit
      v-model="model!.lotSizeAcre"
      label="Lot size in Acre"
    />

    <div class="flex flex-col gap-4 lg:flex-row">
      <FormKit
        v-model="model!.yearBuilt"
        label="Year Built"

        type="date"
        label-class="pb-1 text-2xl uppercase"
      />
      <FormKit
        v-model="model!.yearRenovated"
        label="Year Renovated"
        type="date"
        label-class="pb-1 text-2xl uppercase"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Property } from "~/types/property"
  const model = defineModel<Property>()
</script>