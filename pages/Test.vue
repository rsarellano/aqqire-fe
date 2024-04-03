<template>
  <div class="card">
    <DataTable
      v-model:filters="filters"
      :value="customers"
      paginator
      :rows="10"
      dataKey="id"
      filterDisplay="row"
      :loading="loading"
      :globalFilterFields="[]"
    >
      <template #header>
        <div class="flex justify-content-end">
          {{ filters.name }}
        </div>
        <div>
          {{ customers }}
        </div>
      </template>

      <template #empty>No customers found.</template>
      <template #loading>
        <div>Loading customers data. Please wait.</div>
      </template>

      <Column field="name" header="Name" style="min-width: 12rem">
        <template #body="{ data }">{{ data.name }}</template>
        <template #filter="{ filterModel, filterCallback }">
          <Dropdown
            v-model="filterModel.value"
            @change="
              () => {
                getCustomersAgain();
                filterCallback();
              }
            "
            :options="names"
            placeholder="Select a Status"
            class="w-full"
          />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { FilterMatchMode } from "primevue/api";

const customers = ref();

const filters = ref({
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
});

const names = ref(["a", "b", "c"]);

const loading = ref(true);

onMounted(() => {
  getCustomers().then((data) => {
    loading.value = false;
  });
});

const getCustomers = async () => {
  loading.value = true;

  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ name: "Jack" }, { name: "James" }, { name: "Airi" }]);
    }, 1000);
  });
  loading.value = false;
  customers.value = data;
};

const getCustomersAgain = async () => {
  loading.value = true;

  const data: object[] = await new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ name: "Jill" }, { name: "Ronald" }, { name: "Arun" }]);
    }, 1000);
  });
  customers.value = [...customers.value, ...data];
  loading.value = false;
};
</script>
