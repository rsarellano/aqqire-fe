<template>
  <div class="flex flex-col gap-4 pb-4 text-slate-600">
    <h1 class="pb-4 text-2xl font-semibold border-b border-slate-200">
      Upload Profile Picture
    </h1>

    <div class="flex flex-col gap-4">
      <div class="aspect-square max-w-40">
        <img
          v-if="model!.profile_pic"
          :src="model!.profile_pic"
          class="size-full"
        >
      </div>

      <FileUpload
        mode="basic"
        name="company-logo"
        accept="image/*"
        @select="selectImage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { FileUploadSelectEvent } from "primevue/fileupload"
  import type { User } from "~/types/user"

  const model = defineModel<User>()

  const selectImage = (event: FileUploadSelectEvent) => {
    model.value!.profile_pic = event.files[0].objectURL
  }
</script>
