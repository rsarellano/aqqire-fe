<template>
  <div class="flex flex-col gap-2 py-4">
    <FormKit
      label="Permit Zoning"
      outer-class="font-bold uppercase"
      v-model="model!.permitZoning"
    />
    <div class="flex flex-col gap-2 lg:flex-row">
      <FormKit
        label="Total building size in Square Foot"
        outer-class="font-bold uppercase"
        v-model="model!.buildingSizeinSqFt"
      />
      <FormKit
        label="Number of buildings"
        outer-class="font-bold uppercase"
        v-model="model!.numberOfBuildings"
      />
    </div>
    <div class="flex flex-col gap-2 lg:flex-row">
      <FormKit
        label="Building Class"
        outer-class="font-bold uppercase"
        v-model="model!.buildingClass"
      />
      <FormKit
        label="Net Rentable Area"
        outer-class="font-bold uppercase"
        v-model="model!.netRentableArea"
      />
    </div>
    <div class="flex flex-col gap-2 lg:flex-row">
      <FormKit
        label="Net Lease"
        outer-class="font-bold uppercase"
        v-model="model!.netLease"
      />
      <FormKit
        label="Tenancy"
        outer-class="font-bold uppercase"
        v-model="model!.tenancy"
      />
    </div>
    <FormKit label="Lot size in Acre" />
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