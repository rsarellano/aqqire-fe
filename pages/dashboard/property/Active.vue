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
        <div class="flex flex-col items-center justify-between w-full gap-4 md:flex-row">
          <h1 class="text-3xl font-bold">Active Properties</h1>

          <div>
            <FormKit
              v-model="filters.global.value"
              label="Search Properties"
            />
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
        field="propertyDate"
        header="Date Created"
      >
        <template #body="{ data }">
          {{ elapsedSince(data.propertyDate).value }}
        </template></Column
      >
      <Column
        sortable
        field="impressions"
        header="Impressions"
      ></Column>
      <Column
        sortable
        field="views"
        header="Views"
      ></Column>
      <Column
        field="actions"
        header="Actions"
      >
        <template #body>
          <div class="flex justify-center">
            <PropertyTableActions />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
<script setup lang="ts">
  import { data } from "../../data"
  import { FilterMatchMode } from "primevue/api"

  import { elapsedSince } from "../../../composables/dateTimeUtils"
  const properties = ref([...data])
  const filters = ref({
    global: { value: "", matchMode: FilterMatchMode.CONTAINS },
    name: { value: "", matchMode: FilterMatchMode.STARTS_WITH },
    propertyType: { value: "", matchMode: FilterMatchMode.STARTS_WITH },
  })
</script>
