<template>
  <div>
    {{props.test}}
    <FormKit v-model="props.test"  />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    test: String,
  });
</script>
