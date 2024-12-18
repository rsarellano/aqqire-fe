<template>
  <div class="grid grid-cols-4 gap-2">
    <!-- Package Price -->
    <div
      class="col-span-1 p-2 my-1 text-xs italic truncate bg-gray-100 rounded text-main overflow-clip md:font-bold line-clamp-1">
      $ {{ dialogForm.price }}
    </div>

    <!-- Package Name -->
    <div
      class="col-span-1 p-2 my-1 text-xs bg-gray-100 rounded-md overflow-clip">
      <span class="truncate line-clamp-1">{{ dialogForm.name }}</span>
    </div>

    <!-- Props Description -->
    <div
      class="col-span-1 p-2 my-1 text-xs bg-gray-100 rounded-md overflow-clip">
      <span class="truncate line-clamp-1">{{ dialogForm.description }}</span>
    </div>

    <!-- Edit and Delete -->
    <div
      class="flex items-center justify-center col-span-1 gap-2 my-1 bg-gray-100 rounded-md overflow-clip">
      <button
        class="p-1 rounded-md hover:bg-gray-200 fill-main"
        @click="modal = !modal">
        <EditIcon />
      </button>
      <button
        class="p-1 rounded-md hover:bg-gray-200 fill-red-500"
        @click="deleteItem">
        <TrashCan />
      </button>
    </div>
  </div>

  <Modal :modal-open="modal">
    <div class="flex items-center pl-4 text-white bg-main">
      <p class="font-bold grow">Edit Billing</p>
      <button class="p-2 px-4 font-bold bg-red-500" @click="modal = !modal">
        x
      </button>
    </div>

    <div class="flex flex-col gap-4 p-4">
      <label for="price">
        Price:
        <input
          id="price"
          v-model="dialogForm.price"
          type="text"
          class="w-full rounded-md" >
      </label>
      <label for="packageName">
        Package Name:
        <input
          id="packageName"
          v-model="dialogForm.name"
          type="text"
          class="w-full rounded-md" >
      </label>

      <textarea v-model="dialogForm.description" class="rounded-md"/>
      <button class="py-2 text-white rounded-md bg-main" @click="edit">
        Update
      </button>
    </div>
  </Modal>
</template>

<script setup lang="ts">

  const props = defineProps({
    price: String,
    packageName: String,
    description: String,
    id: Number,
  });
  const emits = defineEmits(["editItem", "deleteItem"]);

  const modal = ref(false);

  const dialogForm = ref({
    id: props.id,
    name: props.packageName,
    price: props.price,
    description: props.description,
  });

 
  const edit = () => {
    emits("editItem", dialogForm.value);
    modal.value = false;
  };

  const deleteItem = () => {
    emits("deleteItem", props.id);
  };
</script>
