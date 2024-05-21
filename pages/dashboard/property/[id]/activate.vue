<template>
  <div class="max-w-6xl mx-auto">
    <FormKit
      label="Add a selling point"
      v-model="sellingPoint"
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
