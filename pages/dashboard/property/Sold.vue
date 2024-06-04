<template>
  <div class="">
    <DashboardNav />
    <DataTable
      v-model:filters="filters"
      showGridlines
      :rows="10"
      paginator
      size="small"
      :value="properties"
      :globalFilterFields="[
        'name',
        'id',
        'brokers',
        'email',
        'propertyType',
        'propertyDate',
        'propertyAddress',
        'propertyAssetType',
        'propertyUrl',
        'propertyPrice',
        'propertyDate',
        'lastUpdated',
        'active',
        'disabled',
        'address',
        'owner',
        'status',
      ]"
    >
      <template #header>
        <div
          class="flex flex-col items-center justify-between w-full gap-4 md:flex-row"
        >
          <h1 class="text-3xl font-bold">Sold Properties</h1>

          <div>
            <FormKit
              v-model="filters.global.value"
              label="Search Properties"
            />
            <NuxtLink to="/dashboard/property/addSold">
              <Button>Add Sold Property</Button>
            </NuxtLink>
          </div>
        </div>
      </template>
      <Column
        sortable
        field="name"
        header="Property Name"
      ></Column>
      <Column
        sortable
        field="propertyType"
        header="Property Type"
      ></Column>
      <Column
        sortable
        field="propertyPrice"
        header="Price"
      ></Column>
      <Column
        field="propertyDate"
        header="Closing Date"
      >
        <template #body="{ data }">
          {{ formatISODate(data.propertyDate) }}
        </template>
      </Column>
    </DataTable>
  </div>
</template>
<script setup lang="ts">
  import { data } from "../../data"
  import { FilterMatchMode } from "primevue/api"

  import { formatISODate } from "../../../composables/dateTimeUtils"
  const properties = ref([...data])
  const filters = ref({
    global: { value: "", matchMode: FilterMatchMode.CONTAINS },
    name: { value: "", matchMode: FilterMatchMode.STARTS_WITH },
    propertyType: { value: "", matchMode: FilterMatchMode.STARTS_WITH },
  })
</script>
