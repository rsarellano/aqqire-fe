<template>
  <div
    class="flex flex-col flex-1 gap-4 p-4 border-2 rounded-md bg-main md:px-8 md:py-12 grow"
  >
    <div class="flex justify-between">
      <p>{{ props.header }}</p>
    </div>
    <p class="text-4xl font-bold">{{ props.value }}</p>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    header: String,
    value: String,
  })
</script>
