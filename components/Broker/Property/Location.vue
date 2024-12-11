<template>
  <div class="flex flex-col gap-4">
    <h2 class="pb-4 text-2xl font-bold text-gray-700 border-b border-gray-700">
      Location
    </h2>
    <div class="flex items-center gap-2">
      <InputSwitch v-model="model!.international" />
      <p class="flex items-end gap-2 font-semibold text-gray-700 text-md">
        International Property?
        <i
          v-tooltip.top="{
            value: 'Check if your property is outside United States ',
            pt: {
              text: 'text-xs text-gray-700 p-2 ',
            },
          }"
          class="p-1 text-gray-900 cursor-pointer text pi pi-info-circle w-min"
        />
      </p>
    </div>
    <p class="text-sm italic">
      If address is not provided, property will not show on our map, but it will
      be shown on our
      <NuxtLink
        to="/properties/unmapped"
        class="text-blue-500"
      >
        unmapped properties
      </NuxtLink>
    </p>

    <div class="flex flex-col gap-4 lg:flex-row">
      <FormKit
        v-model="model!.address"
        label="Address"
        validation="required|length:4"
        type="text"
        label-class="pb-1 text-2xl uppercase"
      />
      <FormKit
        v-model="model!.city"
        label="City"
        validation="required|length:4"
        type="text"
        label-class="pb-1 text-2xl uppercase"
      />
    </div>
    <div class="flex flex-col gap-4 lg:flex-row">
      <FormKit
        v-model="model!.state"
        label="State"
        validation="required|length:4"
        label-class="pb-1 text-2xl uppercase"
      />
      <FormKit
        v-model="model!.zip"
        label="Zip Code"
        validation="required|length:4"
        label-class="pb-1 text-2xl uppercase"
      />
    </div>
    <!-- Map -->
  </div>
</template>

<script setup lang="ts">
  import type { Property } from "~/types/property"
  const config = useRuntimeConfig()
  const model = defineModel<Property>()

</script>
