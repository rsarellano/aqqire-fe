<template>
  <div class="flex flex-col gap-4 py-4">
    <FormKit
      v-model="model!.mpd"
      label="MPD(Multi Product Dispenser)"
      outer-class="font-bold uppercase"
    />

    <!-- Checkboxes -->
    <div class="flex flex-col gap-4 my-2">
      <FormKit
        v-model="model!.gasOptions"
        type="checkbox"
        decorator-icon="check"
        :options="[
          'Branded Fuel',
          'Convenience Store',
          'Fast Foods',
          'Number of Bays',
          'Diesel',
        ]"
      />

      <div class="flex flex-col gap-4 lg:flex-row">
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

      <div class="flex flex-col gap-4 lg:flex-row">
        <FormKit
          v-model="model!.lotSizeAcre"
          label="Lot size in Acre"
          outer-class="font-bold uppercase"
        />
        <FormKit
          v-model="model!.baysIncome"
          label="Bays Income"
          outer-class="font-bold uppercase"
        />
      </div>

      <div class="flex flex-col gap-4 lg:flex-row">
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
  </div>
</template>

<script setup lang="ts">
  import type { Property } from "~/types/property"
  const model = defineModel<Property>()
</script>
