<template>
  <div class="flex flex-col gap-2 py-4">
    <FormKit label="Price per Square Foot" />
    <FormKit label="Gross Rental Income" />
    <FormKit label="Net Rental Income" />
    <FormKit label="Net Operating Income" />
    <FormKit label="Cap Rate" />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    condition: String,
  });
</script>
