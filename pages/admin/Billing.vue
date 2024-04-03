<template>
  <div>
    <AdminNav />

    <!-- Billing Section -->
    <div class="flex flex-col w-full h-full p-4 bg-white rounded-sm">
      <DataTable :value="plans">
        <template #header>
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span
              class="text-xl font-semibold text-surface-900 dark:text-surface-0">
              Billing
            </span>
            <AdminBillingAdd @add-billing="addItem" />
          </div>
        </template>

        <Column field="Price" header="Price" class="font-bold text-gray-700">
          <template #body="props">
            <div class="text-sm italic font-medium text-blue-500 line-clamp-1">
              $ {{ props.data.price }}
            </div>
          </template>
        </Column>

        <Column field="Package" header="Package" class="font-bold w-min">
          <template #body="props">
            <div class="font-semibold tracking-wide">
              {{ props.data.packageName }}
            </div>
          </template>
        </Column>

        <Column field="Description" header="Description" class="w-min">
          <template #body="props">
            <div class="text-xs line-line-clamp-1">
              {{ props.data.description }}
            </div>
          </template>
        </Column>

        <Column field="enabled" header="Status" class="w-min">
          <template #body="props">
            <div
              class="text-xs font-bold text-green-500 line-line-clamp-1"
              :class="{
                '!text-red-500': !props.data.disabled,
              }">
              {{ !props.data.disabled ? "Disabled" : "Enabled" }}
            </div>
          </template>
        </Column>

        <Column field="Actions" header="Actions">
          <template #body="props">
            <div class="flex items-center gap-4">
              <button @click="openModal(props.data)">
                <i class="text-2xl pi pi-pencil"></i>
              </button>
              <button title="Enable or Disable(Soft Delete)">
                <InputSwitch v-model="props.data.disabled" />
              </button>
            </div>
          </template>
        </Column>
      </DataTable>
    </div>

    <!-- Edit Modal -->
    <Modal :modalOpen="modal">
      <!-- Header -->
      <div class="flex justify-between bg-blue-500">
        <p class="p-2 text-lg font-semibold text-white">Edit Item</p>
        <button
          @click="modal = !modal"
          class="h-full p-3 text-white bg-red-500">
          <i class="pi pi-times"></i>
        </button>
      </div>

      <!-- Edit Fields -->
      <div class="p-4">
        <FormKit type="text" label="Price" v-model="modalData.price" />
        <FormKit
          type="text"
          label="Package Name"
          v-model="modalData.packageName" />
        <FormKit
          type="text"
          label="Description"
          v-model="modalData.description" />
        <button
          @click="editPlan"
          class="w-full p-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
          Edit
        </button>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
  type plan = {
    id: number;
    price: string;
    packageName: string;
    description: string;
    disabled: boolean;
  };

  const modal = ref(false);
  const modalData = ref({
    id: 0,
    price: "0",
    packageName: "",
    description: "",
    disabled: false,
  });

  const plans = ref([
    {
      id: 1,
      price: "99.00",
      packageName: "Pro Annually",
      description: "<p><strong>Pro Anually</strong></p>",
      disabled: false,
    },
    {
      id: 2,
      price: "200.00",
      packageName: "Pro Five Years Promo",
      description: "<p><strong>Pro Five years Pro</strong></p>",
      disabled: false,
    },
    {
      id: 3,
      price: "350.00",
      packageName: "Pro 10 Years Promo",
      description: "<p><strong>Pro 10 years promo</strong></p>",
      disabled: false,
    },
    {
      id: 4,
      price: "1000.00",
      packageName: "Pro Forever",
      description: "<p><strong>Pro Forever</strong></p>",
      disabled: false,
    },
  ]);

  const openModal = (item: plan) => {
    modalData.value = { ...item };
    modal.value = true;
  };

  const addItem = (item: plan) => {
    plans.value.push({ ...item, id: plans.value.length + 1 });
  };

  const editPlan = () => {
    plans.value.forEach((item, index) => {
      if (item.id === modalData.value.id) {
        plans.value[index] = {
          ...modalData.value,
        };
      }
    });

    modal.value = false;
  };

  // const deletePlan = (index: number) => {
  //   console.log(index, "index");
  //   plans.value = plans.value.filter((item) => {
  //     console.log(item.id, "id");
  //     return index !== item.id;
  //   });
  // };
</script>
