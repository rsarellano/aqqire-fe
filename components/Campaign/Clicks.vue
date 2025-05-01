<template>
  <DataTable
    v-model:expandedRowGroups="expandedRowGroups"
    :value="data?.propertyClicks"
    expandableRowGroups
    rowGroupMode="subheader"
    groupRowsBy="PropertyID"
    sortMode="single"
    sortField="PropertyName"
    :filters="filters"
    :sortOrder="1"
    :striped-rows="true"
    :pt="{
        header: '!p-0 !rounded-t-md',
    }">
    <template #header>
      <div class="flex items-center justify-between w-full h-full gap-12 p-4 text-white bg-blue-500">
        <div class="text-2xl font-bold">Property Clicks</div>

 
        <div class='font-semibold'>
          {{ data!.propertyClicks.length }} Property Clicks
          <InputText
          v-model="filters['global'].value"
          placeholder="Search"
          />
        </div>
      </div>
    </template>
    <template #groupheader="slotProps">
      <span
        class="ml-2 font-bold capitalize vertical-align-middle line-height-3">
        {{ slotProps.data.PropertyName }}
      </span>

      <span class="ml-6 text-sm font-semibold text-blue-500">
        ({{ getClickCount(slotProps.data.PropertyID) }} Property Clicks)
      </span>
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
      header="City"
      class="text-center"></Column>
    <Column
      field="Region"
      header="Region"
      class="text-center"></Column>
    <Column
      field="CountryCode"
      header="Country Code"
      class="text-center"></Column>
    <Column
      field="CountryName"
      header="Country Name"></Column>
    <Column
      field="URL"
      header="Link">
      <template #body="slotProps">
        <a
          target="_blank"
          class="block text-xs text-blue-500 cursor-pointer hover:underline">
          {{ slotProps.data.URL }}
        </a>
      </template>
    </Column>
  </DataTable>

  <!-- Misc Clicks -->

  <DataTable
    :value="data!.miscClicks"
    :filters="filtersMisc"
    size="small"
    paginator
    :totalRecords="data!.miscClicks.length"
    :rows="10"
    class="cols-span-1">
    <template #header>
      <div class="flex items-center justify-between gap-12">
        <div class="text-2xl">Misc Clicks</div>

      
        <div>{{ data!.miscClicks.length }} Misc Campaign Clicks   <InputText
          v-model="filters['global'].value"
          placeholder="Search"
          class="grow" /></div>
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
  import type { clicks, propertyClicks } from "~/types/campaign"
  import { FilterMatchMode } from "primevue/api"
  import { formatISODate } from "../../composables/dateTimeUtils"
  const route = useRoute()

  type tableData = {
    propertyClicks: propertyClicks[]
    miscClicks: clicks[]
  }
  const expandedRowGroups = ref()

  const { data, error, status } = await useFetch<tableData>(
    "/api/campaign_clicks",
    {
      query: {
        id: route.params.id,
      },
    }
  )

  const getClickCount = (clicks: string) => {
    return data.value?.propertyClicks.filter(
      (click) => click.PropertyID === clicks
    ).length
  }

  const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  })

  const filtersMisc = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  })
</script>
