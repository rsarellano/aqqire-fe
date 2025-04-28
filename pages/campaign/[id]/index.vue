<template>
  <div class="p-4 space-y-4">
    <div class="flex justify-between">
      <h1 class="p-2 text-4xl font-bold">
        {{ route.query.name }} Campaign Details
      </h1>
      <NuxtLink to="/campaign/sent">Go Back</NuxtLink>
    </div>

    <template v-if="false">Loading...</template>

    <template v-else>
      <div class="container flex justify-between gap-4 mx-auto">
        <Card class="grow">
          <template #title>
            <p class="flex items-center">Campaign Clicks {{ totalClicks }}</p>
          </template>
        </Card>
        <Card class="grow">
          <template #title>
            <p class="flex items-center">Campaign Views {{ totalOpens }}</p>
          </template>
        </Card>
      </div>

      <DataTable
        :value="campaignClicks"
        :filters="filters"
        size="small"
        paginator
        :totalRecords="totalClicks"
        :rows="10">
        <template #header>
          <div class="flex items-center justify-between gap-12">
            <div class="text-2xl">Campaign Clicks</div>

            <InputText
              v-model="filters['global'].value"
              placeholder="Search"
              class="grow" />
            <div>{{ totalClicks }} Campaign Clicks</div>
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
          header="Date"></Column>
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

      <DataTable
        :value="campaignOpens"
        :filters="filters"
        size="small"
        paginator
        :totalRecords="totalOpens"
        :rows="10">
        <template #header>
          <div class="flex items-center justify-between gap-2">
            <div class="text-2xl">Campaign Opens</div>
            <div>
              <i class="mr-2 pi pi-eye"></i>
              {{ totalClicks }} Campaign Opens
            </div>
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
          header="Date"></Column>
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
  </div>
</template>

<script setup lang="ts">
  import { FilterMatchMode } from "primevue/api"
  import type { clicks, opens } from "~/types/campaign"

  definePageMeta({
    layout: "none",
    auth: false,
  })

  type data = {
    status: string
    totalOpens: number
    totalClicks: number
    clicks: clicks[]
    opens: opens[]
  }

  const route = useRoute()
  const { data, error, status } = await useFetch<data>(
    "/api/campaign_clicks",
    {
      query: {
        id: route.params.id,
      },
      lazy: true,
    }
  )

  const {
    clicks: campaignClicks,
    opens: campaignOpens,
    totalClicks,
    totalOpens,
  } = data!.value!

  const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  })
</script>
