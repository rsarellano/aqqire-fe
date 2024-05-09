<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-4 lg:flex-row">
      <FormKit
        type="text"
        label="Property Name*"
        label-class="pb-1 text-2xl uppercase"
        v-model="model!.propertyName"
        validation="required|length:4"
      />
      <FormKit
        label="Price*"
        type="text"
        validation="required|length:4"
        prefix-icon="dollar"
        label-class="pb-1 text-2xl uppercase"
        v-model="model!.price"
      />
    </div>
    <FormKit
      type="text"
      label="Brand"
      validation="required|length:4"
      label-class="pb-1 text-2xl uppercase"
      v-model="model!.brand"
    />
    <FormKit
      type="text"
      label="Sale Type"
      label-class="pb-1 text-2xl uppercase"
      v-model="model!.saleType"
    />
  </div>
</template>

<script setup lang="ts">
  import type { Property } from "~/types/property"
  const model = defineModel<Property>()
</script>
