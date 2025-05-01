<template>
  <div class="p-4 space-y-4">
    <template v-if="loading"><CampaignSkeleton /></template>
    <!-- Change to Data table -->
    <template v-else>
      <DataTable
        :value="data?.Results"
        :loading="loading"
        :filters="filters"
        :rows="rowsPerpage"
        dataKey="CampaignID">
        <template #header>
          <div class="flex items-center justify-between gap-12">
            <div class="text-2xl">Sent Campaigns</div>

            <div class="flex items-center justify-center gap-4 p-2">
              <Calendar
                v-model="fromDate"
                placeholder="From Date"
                :max-date="toDate"
                date-format="yy/mm/dd"
                :show-icon="true"
                showButtonBar />

              <Calendar
                v-model="toDate"
                showButtonBar
                placeholder="To Date"
                :min-date="fromDate"
                date-format="yy/mm/dd"
                :show-icon="true" />

              <Button @click="getData">Get Data</Button>
            </div>
          </div>
        </template>

        <Column
          field="Name"
          header="Campaign Name"
          class="w-1/4 max-w-1/4">
          <template #body="slotProps">
            <div class="line-clamp-1">
              {{ slotProps.data.Name }}
            </div>
            <div class="font-bold line-clamp-1">
              {{ slotProps.data.Subject }}
            </div>
          </template>
        </Column>

        <Column
          field="FromName"
          header="From">
          <template #body="slotProps">
            <div class="line-clamp-1 max-w-fit">
              {{ slotProps.data.FromName }}
            </div>
            <div class="font-bold line-clamp-1 max-w-fit">
              {{ slotProps.data.FromEmail }}
            </div>
          </template>
        </Column>
        <Column
          field="SentDate"
          header="Sent Date">
          <template #body="slotProps">
            {{ formatISODate(slotProps.data.SentDate) }}
          </template>
        </Column>

        <Column
          field="TotalRecipients"
          header="Total Recipients">
          <template #body="slotProps">
            <div class="flex items-center gap-2 p-2 text-center">
              <i class="text-blue-500 pi pi-envelope"></i>
              {{ slotProps.data.TotalRecipients }}
            </div>
          </template>
        </Column>

        <Column
          field="CampaignID"
          header="Actions">
          <template #body="slotProps">
            <div class="flex items-center gap-2 p-2 text-center">
              <NuxtLink
                :to="`/campaign/${slotProps.data.CampaignID}`"
                class="text-sm text-blue-500 hover:underline"
                title="Go to Campaign">
                <i class="pi pi-chart-line"></i>
              </NuxtLink>
              <a
                :href="slotProps.data.WebVersionURL"
                class="text-blue-500 hover:underline"
                target="_blank"
                title="View Template">
                <i class="pi pi-file-pdf"></i>
              </a>
            </div>
          </template>
        </Column>
      </DataTable>
    </template>
    <Paginator
      :first="first"
      :rows="rowsPerpage"
      :totalRecords="data?.TotalNumberOfRecords"
      :rowsPerPageOptions="[10, 25, 50, 100]"
      template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink JumpToPageDropdown JumpToPageInput RowsPerPageDropdown"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} "
      @page="paginate($event)"></Paginator>
  </div>
</template>

<script setup lang="ts">
  import type { PageState } from "primevue/paginator"
  import type { sent } from "~/types/campaign"
  import { FilterMatchMode } from "primevue/api"
  import { formatISODate } from "../../composables/dateTimeUtils"

  definePageMeta({
    layout: "none",
    auth: false,
  })

  const fromDate = ref<Date>()
  const toDate = ref<Date>()
  const first = ref(0)
  const page = ref(1)
  const rowsPerpage = ref(10)
  const loading = ref(false)
  const data = ref<{
    ResultsOrderedBy: string
    OrderDirection: string
    PageNumber: number
    PageSize: number
    RecordsOnThisPage: number
    TotalNumberOfRecords: number
    NumberOfPages: number
    Results: sent[]
  }>()
  const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  })
  const getData = async () => {
    try {
      loading.value = true
      data.value = await $fetch<{
        ResultsOrderedBy: string
        OrderDirection: string
        PageNumber: number
        PageSize: number
        RecordsOnThisPage: number
        TotalNumberOfRecords: number
        NumberOfPages: number
        Results: sent[]
      }>("/api/campaigns_sent", {
        query: {
          pagesize: rowsPerpage.value || 25,
          page: page.value || 1,
          sentfromdate: fromDate.value,
          senttodate: toDate.value,
        },
      })
    } catch (e) {
      console.error(e)
    }

    loading.value = false
  }
  const paginate = async (event: PageState) => {
    first.value = event.first
    page.value = event.page + 1
    rowsPerpage.value = event.rows
    await getData()
  }
  onBeforeMount(async () => {
    await getData()
  })
</script>
