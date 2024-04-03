<template>
  <!-- Add FAQ Modal -->
  <button
    @click="showModal"
    class="p-4 py-2 text-gray-700 duration-300 border border-gray-700 rounded hover:bg-blue-500 hover:border-blue-500 hover:text-white">
    Add Item
  </button>

  <dialog
    ref="modal"
    @close="visible = false"
    class="p-0 bg-white rounded-md backdrop:bg-gray-800 backdrop:bg-opacity-60">
    <div class="flex flex-col gap-4 p-4 rounded-md min-w-[30rem]">
      <!-- Header -->
      <div class="flex gap-2">
        <h2
          class="p-4 py-2 font-bold text-center text-white bg-blue-500 rounded grow">
          Add Billing
        </h2>
        <button
          @click="showModal"
          class="px-4 text-white bg-red-500 rounded-md p2">
          X
        </button>
      </div>

      <!-- Fields -->
      <FormKit label="Price" v-model="addBilling.price" type="number" number />
      <FormKit label="Package Name" v-model="addBilling.packageName" />
      <FormKit
        type="textarea"
        label="Description"
        v-model="addBilling.description" />
      <button
        @click="addItem"
        class="p-2 px-4 text-blue-500 border border-blue-500 rounded-md hover:text-white hover:bg-blue-500">
        Add Billing
      </button>
    </div>
  </dialog>
</template>

<script setup lang="ts">
  const emits = defineEmits(["add-billing"]);

  const modal = ref();
  const addBilling = ref({
    price: 0,
    packageName: "",
    description: "",
  });
  const visible = ref(false);

  const showModal = () => {
    if (visible.value === true) {
      modal.value.close();
      return;
    }
    modal.value.showModal();
    visible.value = true;
  };

  const addItem = () => {
    emits("add-billing", addBilling.value);
    showModal();
  };
</script>
