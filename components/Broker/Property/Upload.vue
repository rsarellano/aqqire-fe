<template>
  <FileUpload
    :multiple="props.multiple"
    :accept="props.accept"
    :maxFileSize="1000000"
  >
    <template
      #header="{ chooseCallback, uploadCallback, clearCallback, files }"
    >
      <div
        class="flex flex-wrap flex-1 gap-2 justify-content-between align-items-center"
      >
        <!-- Header Buttons -->
        <Button
          icon="pi pi-images"
          @click="chooseCallback"
          rounded
          outlined
        ></Button>

        <Button
          icon="pi pi-cloud-upload"
          @click="uploadCallback"
          rounded
          outlined
        ></Button>

        <Button
          icon="pi pi-times"
          @click="clearCallback"
          rounded
          outlined
        ></Button>
      </div>
    </template>

    <template #empty>
      <div class="flex flex-col items-center justify-center text-blue-400">
        <i
          class="p-5 border border-blue-400 rounded-full pi pi-cloud-upload border-circle text-8xl"
        />
        <p class="mt-4 mb-0">Drag and drop files to here to upload.</p>
      </div>
    </template>
  </FileUpload>
</template>

<script setup lang="ts">
  const props = defineProps({
    accept: String,
    multiple: Boolean,
  })
</script>
