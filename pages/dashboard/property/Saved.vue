<template>
  <div class="">
    <DataTable
      v-model:filters="filters"
      show-gridlines
      :rows="10"
      paginator
      size="small"
      :value="properties"
      :global-filter-fields="[
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
      ]">
      <template #header>
        <div
          class="flex flex-col items-center justify-between w-full gap-4 md:flex-row">
          <h1 class="text-3xl font-bold">Saved Properties</h1>

          <div>
            <FormKit
              v-model="filters.global.value"
              label="Search Properties" />
          </div>
        </div>
      </template>
      <Column
        sortable
        field="name"
        header="Property Name" />
      <Column
        sortable
        field="propertyType"
        header="Property Type" />
      <Column
        sortable
        field="propertyDate"
        header="Date Created">
        <template #body="{ data: propertyDateData }">
          {{ elapsedSince(propertyDateData.propertyDate).value }}
        </template>
      </Column>
      <Column
        sortable
        field="brokers"
        header="Broker">
        <template #body="{ data: brokersData }">
          <div class="flex gap-2">
            <div
              v-for="(broker, key) in brokersData.brokers"
              :key="key"
              class="flex">
              {{ broker.name }}
            </div>
          </div>
        </template>
      </Column>
      <Column
        sortable
        field="views"
        header="Views" />

      <Column
        field="actions"
        header="Actions">
        <template #body="{ data: actionsData }">
          <NuxtLink
            :to="'/property/' + actionsData.id"
            class="flex justify-center hover:text-main">
            View Property
          </NuxtLink>
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
