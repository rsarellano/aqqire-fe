<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-4 lg:flex-row">
      <FormKit
        v-model="model!.propertyName"
        type="text"
        label="Property Name*"
        label-class="pb-1 text-2xl uppercase"
        validation="required|length:4"
      />
      <FormKit
        v-model="model!.price"
        label="Price*"
        type="text"
        validation="required|length:4"
        prefix-icon="dollar"
        label-class="pb-1 text-2xl uppercase"
      />
    </div>
    <FormKit
      v-model="model!.brand"
      type="text"
      label="Brand"
      validation="required|length:4"
      label-class="pb-1 text-2xl uppercase"
    />
    <FormKit
      v-model="model!.saleType"
      type="text"
      label="Sale Type"
      label-class="pb-1 text-2xl uppercase"
    />
  </div>
</template>

<script setup lang="ts">
  import type { Property } from "~/types/property"
  const model = defineModel<Property>()
</script>
