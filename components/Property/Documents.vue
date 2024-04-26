<template>
  <div class="p-8 md:p-4 space-y-2 bg-white rounded-md">
    <h2 class="text-2xl font-bold">Documents</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 p-4">
      <NuxtLink
        href="/"
        class="group text-lg flex items-center gap-4 lg:grow break-all py-2 hover:text-blue-500"
        v-for="(file, key) in files"
        :key="key">
        <i class="pi pi-file"></i>
        <p class="group-hover:underline underline-offset-4 ">{{ file.name }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
  const files = ref([
    {
      name: 'Floor Plan',
      link: '',
    },
    {
      name: 'Deed of Sale',
      link: '',
    },
    {
      name: 'Transcript of Record',
      link: '',
    },
    {
      name: 'Floor Plan Roof',
      link: '',
    },
    {
      name: 'Floor Plan Basement',
      link: '',
    },
  ])
</script>
