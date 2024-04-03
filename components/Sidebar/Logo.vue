<template>
  <NuxtLink class="flex justify-start w-full h-14" to="/">
    <img
      src="https://s3.us-west-1.amazonaws.com/storage.aqqire.com/57b9b5f7-54a0-47b5-af22-0df496b00b68-qq-logo.png"
      alt="Aqq Logo"
      :class="{ 'h-12 w-12 mt-4': sidebarExpanded }" />
  </NuxtLink>
</template>

<script setup lang="ts">
  const props = defineProps({
    sidebarExpanded: Boolean,
  });
</script>
