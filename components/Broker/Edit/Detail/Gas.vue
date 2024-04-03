<template>
  <div class="flex flex-col gap-4 py-4">
    <FormKit
      label="MPD(Multi Product Dispenser)"
      outer-class="font-bold uppercase" />

    <!-- Checkboxes -->
    <div class="flex flex-col gap-4 my-2">
      <FormKit
        type="checkbox"
        decorator-icon="check"
        :options="[
          'Branded Fuel',
          'Convenience Store',
          'Fast Foods',
          'Number of Bays',
          'Diesel',
        ]" />

      <div class="flex flex-col gap-4 lg:flex-row">
        <FormKit
          label="Total building size in Square Foot"
          outer-class="font-bold uppercase" />
        <FormKit
          label="Number of buildings"
          outer-class="font-bold uppercase" />
      </div>

      <div class="flex flex-col gap-4 lg:flex-row">
        <FormKit label="Lot size in Acre" outer-class="font-bold uppercase" />
        <FormKit label="Bays Income" outer-class="font-bold uppercase" />
      </div>

      <div class="flex flex-col gap-4 lg:flex-row">
        <FormKit label="Year Built" outer-class="font-bold uppercase" />
        <FormKit label="Year Renovated" outer-class="font-bold uppercase" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
