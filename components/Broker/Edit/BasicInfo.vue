<template>
  <div class='flex flex-col gap-4'>
    <div class="flex flex-col gap-4 lg:flex-row">
      <FormKit
        type="text"
        label="Property Name"
        label-class="pb-1 text-2xl uppercase" />
      <FormKit
        label="Price"
        type="number"
        prefix-icon="dollar"
        label-class="pb-1 text-2xl uppercase" />
    </div>
    <FormKit type="text" label="Brand" label-class="pb-1 text-2xl uppercase" />
    <FormKit
      type="text"
      label="Sale Type"
      label-class="pb-1 text-2xl uppercase" />
  </div>
</template>

<script setup lang="ts">
</script>
