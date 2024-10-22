<template>
  <div
    class="transition-transform transform w-full min-w-[300px] flex flex-col gap-2 max-w-[350px] max-h-[200px] bg-blue-500 rounded-md p-4 cursor-move grow">
    <p class="font-bold text-center text-white">
      {{ name || "Logo Name" }} {{ dialogForm.id }}
    </p>
    <div
      class="flex items-center justify-center w-full h-full p-4 bg-white rounded-md overflow-clip aspect-video">
      <img
        :src="imageUrl"
        class="object-cover" />
    </div>
    <div class="flex items-center justify-center gap-4 fill-white">
      <button
        class="hover:fill-blue-400"
        @click="showModal">
        <EditIcon />
      </button>
      <button
        class="hover:fill-red-500"
        @click="deleteItem(id)">
        <trashCan />
      </button>
    </div>

    <dialog
      ref="modal"
      @close="visible = false"
      class="min-w-[300px] w-full max-w-[600px] rounded-md py-4">
      <div class="flex flex-col gap-2 p-4">
        <div class="flex items-center gap-2">
          <p
            class="p-2 font-bold text-center text-white bg-blue-500 rounded-md grow">
            Edit Logo
          </p>
          <button
            class="p-2 px-4 font-bold text-white bg-red-500 rounded-md hover:bg-red-600"
            @click="showModal">
            X
          </button>
        </div>

        <!-- input fields -->
        <label
          for="name"
          class="flex flex-col gap-2 text-gray-600">
          Name:
          <input
            type="text"
            name=""
            id="name"
            class="rounded-md"
            v-model="dialogForm.name" />
        </label>

        <label
          for="url"
          class="flex flex-col gap-2 text-gray-600">
          URL:
          <input
            type="text"
            name=""
            id="url"
            class="rounded-md"
            v-model="dialogForm.url" />
        </label>

        <div class="flex items-center justify-center p-4">
          <img :src="dialogForm.imageUrl" />
        </div>
        <label
          :for="'file' + index"
          class="gap-2 text-gray-600">
          Logo:

          <div class="w-full p-2 text-gray-600 bg-gray-200 rounded-md">
            Select File
            <input
              type="file"
              :id="'file' + index"
              class="hidden"
              @input="handleFileChange($event, dialogForm)" />
          </div>
        </label>

        <button
          @click="emitValue"
          class="p-2 mt-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
          Update
        </button>
      </div>
    </dialog>
  </div>
</template>

<script setup lang="ts">
  import { handleFileChange, deleteItem } from "./store"

  const props = defineProps({
    imageUrl: {
      type: String,
      default: "",
    },
    url: "",
    name: String,
    index: Number,
    id: Number,
  })
  const emit = defineEmits(["emitValue"])

  const modal = ref()
  const visible = ref(false)
  const dialogForm = ref({
    id: "",
    imageUrl: "",
    url: "",
    name: "",
  })

  const showModal = () => {
    if (visible.value === true) {
      modal.value.close()
      visible.value = false
      return
    }

    modal.value.showModal()
    visible.value = true
  }

  const emitValue = () => {
    emit("emitValue", dialogForm.value)
    modal.value.close()
    visible.value = false
  }
</script>
