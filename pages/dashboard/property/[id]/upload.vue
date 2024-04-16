<template>
  <div class="flex flex-col gap-4 p-4">
    <h2 class="text-2xl font-bold">Add property images </h2>
    <BrokerPropertyUpload accept="image/*" />
    <h2 class="text-2xl font-bold">Add Financial Files </h2>
    <BrokerPropertyUpload  />
    <h2 class="text-2xl font-bold">Upload Confidential Files </h2>
    <FileUpload
      mode="basic"
      name="demo[]"
      :maxFileSize="1000000"
    />
  </div>
</template>

<script setup lang="ts">
  const route = useRoute()
  const imageFiles = ref([])
</script>
