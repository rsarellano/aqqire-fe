<template>
  <div class="flex flex-col">
    <div class="flex flex-col gap-4 lg:flex-row">
      <FormKit
        label="Total building size in Square Foot"
        label-class="pb-1 text-2xl uppercase"
        v-model="store.buildingSizeinSqFt"
      />
      <FormKit
        label="Number of buildings"
        label-class="pb-1 text-2xl uppercase"
        v-model="store.numberOfBuildings"
      />
    </div>

    <div class="flex flex-col gap-4 lg:flex-row">
      <FormKit
        label="Number of Floors"
        label-class="pb-1 text-2xl uppercase"
        v-model="store.numberOfFloors"
      />
      <FormKit
        label="Number of Units"
        label-class="pb-1 text-2xl uppercase"
        v-moldel="store.numberOfUnits"
      />
    </div>

    <FormKit
      label="Lot size in Acre"
      v-model="store.lotSizeAcre"
    />

    <div class="flex flex-col gap-4 lg:flex-row">
      <FormKit
        label="Year Built"
        label-class="pb-1 text-2xl uppercase"
        v-model="store.yearBuilt"
      />
      <FormKit
        label="Year Renovated"
        label-class="pb-1 text-2xl uppercase"
        v-model="store.yearRenovated"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { store } from "../store"
</script>
