<template>
  <div
    class="transition-transform transform w-full min-w-[300px] flex flex-col gap-2 max-w-[350px] max-h-[200px] bg-main rounded-md p-4 cursor-move grow">
    <p class="font-bold text-center text-white">
      {{ name || "Banner Name" }} {{ dialogForm.id }}
    </p>
    <div
      class="flex items-center justify-center w-full h-full p-4 bg-white rounded-md overflow-clip aspect-video">
      <img :src="imageUrl" class="object-cover" >
    </div>
    <div class="flex items-center justify-center gap-4 fill-white">
      <button class="hover:fill-blue-400" @click="showModal">
        <EditIcon />
      </button>
      <button class="hover:fill-red-500" @click="deleteItem(dialogForm.id)">
        <trashCan />
      </button>
    </div>

    <dialog
      ref="modal"
      class="min-w-[300px] w-full max-w-[600px] rounded-md py-4"
      @close="visible = false">
      <div class="flex flex-col gap-2 p-4">
        <div class="flex items-center gap-2">
          <p
            class="p-2 font-bold text-center text-white rounded-md bg-main grow">
            Edit banner
          </p>
          <button
            class="p-2 px-4 font-bold text-white bg-red-500 rounded-md hover:bg-red-600"
            @click="showModal">
            X
          </button>
        </div>

        <!-- input fields -->
        <label for="name" class="flex flex-col gap-2 text-gray-600">
          Name:
          <input
            id="name"
            v-model="dialogForm.name"
            type="text"
            name=""
            class="rounded-md" >
        </label>

        <div class="flex items-center justify-center p-4">
          <img :src="dialogForm.imageUrl" >
        </div>
        <label :for="'file' + index" class="gap-2 text-gray-600">
          Banner:

          <div class="w-full p-2 text-gray-600 bg-gray-200 rounded-md">
            Select File
            <input
              :id="'file' + index"
              type="file"
              class="hidden"
              @input="handleFileChange($event, dialogForm)" 
              >
          </div>
        </label>

        <button
          class="p-2 mt-2 text-white rounded-md bg-main hover:bg-blue-600"
          @click="emitValue">
          Update
        </button>
      </div>
    </dialog>
  </div>
</template>

<script setup lang="ts">
  // import { handleFileChange, deleteItem } from "./store";

  const { imageUrl, name, index, id } = defineProps({
    imageUrl: {
      type: String,
      default: '',
    },
    name: String,
    index: Number,
    id: Number,
  });
  
  const emit = defineEmits(["emitValue"]);

  const modal = ref();
  const visible = ref(false);
  const dialogForm = ref({
    id,
    imageUrl,
    name,
  });

  const showModal = () => {
    
    if (visible.value === true) {
      modal.value.close();
      visible.value = false;
      return;
    }

    modal.value.showModal();
    visible.value = true;
  };

  const emitValue = () => {
    emit("emitValue", dialogForm.value);
    modal.value.close();
    visible.value = false;
  };
</script>
