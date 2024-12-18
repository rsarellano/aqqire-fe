<template>
  <!-- Add FAQ Modal -->
  <button
    class="p-4 py-2 text-gray-700 duration-300 border border-gray-700 rounded hover:bg-main hover:border-main hover:text-white"
    @click="showModal">
    Add Item
  </button>

  <dialog
    ref="modal"
    class="p-0 bg-white rounded-md backdrop:bg-gray-800 backdrop:bg-opacity-60"
    @close="visible = false">
    <div class="flex flex-col gap-4 p-4 rounded-md min-w-[30rem]">
      <!-- Header -->
      <div class="flex gap-2">
        <h2
          class="p-4 py-2 font-bold text-center text-white rounded bg-main grow">
          Add Billing
        </h2>
        <button
          class="px-4 text-white bg-red-500 rounded-md p2"
          @click="showModal">
          X
        </button>
      </div>

      <!-- Fields -->
      <FormKit v-model="addBilling.price" label="Price" type="number" number />
      <FormKit v-model="addBilling.packageName" label="Package Name" />
      <FormKit
        v-model="addBilling.description"
        type="textarea"
        label="Description" />
      <button
        class="p-2 px-4 border rounded-md text-main border-main hover:text-white hover:bg-main"
        @click="addItem">
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
