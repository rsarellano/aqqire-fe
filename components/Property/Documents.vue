<template>
  <div class="p-8 space-y-2 bg-white rounded-md md:p-4">
    <h2 class="text-2xl font-bold">Documents</h2>

    <div class="grid grid-cols-1 p-4 md:grid-cols-3">
      <NuxtLink
        v-for="(file, key) in files"
        :key="key"
        href="/"
        class="flex items-center gap-4 py-2 text-lg break-all group lg:grow hover:text-main">
        <i class="pi pi-file"/>
        <p class="group-hover:underline underline-offset-4">{{ file.name }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface documentFile {
    name: string
    link: string
  }
  const { files } = defineProps<{ files: documentFile[] }>()
 
</script>
