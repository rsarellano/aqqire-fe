<template>
  <div class="flex flex-col gap-4 pb-4 text-slate-600">
    <h1 class="pb-4 text-2xl font-semibold border-b border-slate-200">
      Upload Profile Picture
    </h1>

    <div class="flex flex-col gap-4">
      <div class="aspect-square max-w-40">
        <img
          v-if="model!.companyLogo"
          :src="model!.profilePicture"
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
  import type { FileUploadSelectEvent } from "primevue/fileupload"
  import type { User } from "~/types/user"

  const model = defineModel<User>()

  const selectImage = (event: FileUploadSelectEvent) => {
    model.value!.profilePicture = event.files[0].objectURL
  }
</script>
