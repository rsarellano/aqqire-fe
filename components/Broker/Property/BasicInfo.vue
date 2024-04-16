<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-4 lg:flex-row">
      <FormKit
        type="text"
        label="Property Name"
        label-class="pb-1 text-2xl uppercase"
        v-model="store.propertyName"
      />
      <FormKit
        label="Price"
        type="number"
        prefix-icon="dollar"
        label-class="pb-1 text-2xl uppercase"
        v-model="store.price"
      />
    </div>
    <FormKit
      type="text"
      label="Brand"
      label-class="pb-1 text-2xl uppercase"
      v-model="store.brand"
    />
    <FormKit
      type="text"
      label="Sale Type"
      label-class="pb-1 text-2xl uppercase"
      v-model="store.saleType"
    />
  </div>
</template>

<script setup lang="ts">
  import { store } from "./store"
</script>
