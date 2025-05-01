<template>
  <DataTable
    :value="data!.data"
    :filters="filters"
    size="small"
    paginator
    :totalRecords="data!.data.length"
    :rows="10">
    <template #header>
      <div class="flex items-center justify-between gap-12">
        <div class="text-2xl">Campaign Opens</div>

        <InputText
          v-model="filters['global'].value"
          placeholder="Search"
          class="grow" />
        <div>{{ data!.data.length }} Campaign Opens</div>
      </div>
    </template>
    <Column
      field="EmailAddress"
      header="Email"></Column>
    <Column
      field="ListID"
      header="List ID"></Column>
    <Column
      field="Date"
      header="Date">
      <template #body="slotProps">
        {{ formatISODate(slotProps.data.Date) }}
      </template>
    </Column>
    <Column
      field="City"
      header="City"></Column>
    <Column
      field="Region"
      header="Region"></Column>
    <Column
      field="CountryCode"
      header="Country Code"></Column>
    <Column
      field="CountryName"
      header="Country Name"></Column>
  </DataTable>
</template>

<script setup lang="ts">
  import type { opens } from "~/types/campaign"
  import { FilterMatchMode } from "primevue/api"
  const route = useRoute()

  const { data, error, status } = await useFetch<{ data: opens[] }>(
    "/api/campaign_open",
    {
      query: {
        id: route.params.id,
      },
    }
  )

  const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  })
</script>
