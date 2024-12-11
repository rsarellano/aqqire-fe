<template>
  <div class="max-w-6xl mx-auto">
    <FormKit
      v-model="sellingPoint"
      label="Add a selling point"
    />
    <div class="flex justify-end gap-2">
      <Button severity="success">Submit</Button>
      <Button>Preview</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  const sellingPoint = ref()
</script>
