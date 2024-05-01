<template>
  <div class="flex flex-col gap-4 text-slate-600">
    <h1 class="pb-4 text-2xl font-semibold border-b border-slate-200">
      Upload Profile Picture
    </h1>

    <div class="flex flex-col gap-4">
      <div class="aspect-square max-w-40">
        <img
          :src="img"
          class="size-full"
        />
      </div>

      <FileUpload
        mode="basic"
        name="company-logo"
        @select="selectImage"
        accept="image/*"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { FileUploadSelectEvent } from 'primevue/fileupload'
  const img = ref()
  const selectImage = (event: FileUploadSelectEvent) => {
    img.value = event.files[0].objectURL
  }
</script>
