<template>
  <div class="flex flex-col gap-2 py-4">
    <FormKit
      v-model="model!.permitZoning"
      label="Permit Zoning"
      outer-class="font-bold uppercase"
    />
    <div class="flex flex-col gap-2 lg:flex-row">
      <FormKit
        v-model="model!.buildingSizeinSqFt"
        label="Total building size in Square Foot"
        outer-class="font-bold uppercase"
      />
      <FormKit
        v-model="model!.numberOfBuildings"
        label="Number of buildings"
        outer-class="font-bold uppercase"
      />
    </div>
    <div class="flex flex-col gap-2 lg:flex-row">
      <FormKit
        v-model="model!.buildingClass"
        label="Building Class"
        outer-class="font-bold uppercase"
      />
      <FormKit
        v-model="model!.netRentableArea"
        label="Net Rentable Area"
        outer-class="font-bold uppercase"
      />
    </div>
    <div class="flex flex-col gap-2 lg:flex-row">
      <FormKit
        v-model="model!.netLease"
        label="Net Lease"
        outer-class="font-bold uppercase"
      />
      <FormKit
        v-model="model!.tenancy"
        label="Tenancy"
        outer-class="font-bold uppercase"
      />
    </div>
    <FormKit
      v-model="model!.lotSizeAcre"
      label="Lot size in Acre"
    />
    <div class="flex flex-col gap-2 lg:flex-row">
      <FormKit
        v-model="model!.yearBuilt"
        label="Year Built"
        outer-class="font-bold uppercase"
      />
      <FormKit
        v-model="model!.yearRenovated"
        label="Year Renovated"
        outer-class="font-bold uppercase"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Property } from "~/types/property"
  const model = defineModel<Property>()
</script>
