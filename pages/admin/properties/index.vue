<template>
  <AdminNav />
  <div class="flex items-center justify-between w-full">
    <!-- Search api for records -->
    <div class="flex items-center gap-2 grow">
      <FormKit
        outerClass="!max-w-[30%] w-full"
        type="text"
        label="Search"
        v-model="query" />
      <Button
        @click="getData(1)"
        class="!h-min mt-1.5 px-6"
        size="small">
        Search
      </Button>
    </div>
    <NuxtLink to="/admin/properties/add">
      <Button>Create Property</Button>
    </NuxtLink>
  </div>

  <DataTable
    :key="currentPage"
    :value="properties.data"
    class="text-sm"
    :loading="loading"
    show-gridlines
    paginator
    :rows="10"
    dataKey="id"
    :total-records="properties?.total"
    :first="currentPage * numberOfRows - 1"
    @page="paginate"
    :lazy="true"
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
    :showFilterOperator="false"
    ref="dt">
    <template #empty>No Properties found.</template>
    <template #header>
      <h1 class="pb-4 text-2xl text-center text-blue-500">Properties</h1>

      <!-- Search table -->
      <Accordion
        expandIcon="pi pi-caret-down"
        collapseIcon="pi pi-caret-up">
        <AccordionTab>
          <template #header>
            <h2 class="w-full text-right">Table Filter Options</h2>
          </template>
          <!-- <div
          <!-- <div
            class="grid flex-col items-center justify-center w-full grid-cols-2 gap-2 py-2 pt-4 mt-2">
            <FormKit
              v-model="filters.global.value"
              type="text"
              :delay="400"
              label="Search Table" />

            <FormKit
              v-model="search"
              type="text"
              label="Search by Broker"
              :delay="400" />

            <FormKit
              type="select"
              label="Property Type"
              placeholder="Filter by Property Type"
              v-model="filters.propertyType.value"
              :options="propertyTypes" />

            <FormKit
              type="select"
              label="Status"
              v-model="filters.status.value"
              :options="statusOptions" />
          </div> -->
        </AccordionTab>
      </Accordion>
    </template>

    <Column
      field="name"
      header="Name"
      :showFilterMenu="false"
      sortable
      sort-field="lastUpdated">
      <template #body="{ data }">
        <div class="max-w-xs space-y-1">
          <Tag>
            {{ data.id }}
          </Tag>
          <p class="font-bold">
            {{ data.name }}
          </p>
          <p
            class="text-green-500"
            :class="{
              'text-red-500 font-bold':
                elapsedSince(data.updated_at).numerical?.months! > 6,
              'text-yellow-500 font-semibold':
                elapsedSince(data.updated_at).numerical?.months! < 6 &&
                elapsedSince(data.updated_at).numerical?.months! > 3,
            }">
            Last Updated {{ elapsedSince(data.updated_at).value }} (
            {{ new Date(data.updated_at).toLocaleDateString() }} )
          </p>
          <p></p>
        </div>
      </template>
    </Column>

    <Column
      field="address"
      header="Address"
      :showFilterMenu="false">
      <template #body="{ data }">
        <div class="max-w-xs space-x-2 space-y-2">
          <Tag
            value="primary"
            v-if="data.asset_type"
            class="capitalize">
            {{ data.asset_type }}
          </Tag>

          <Tag
            value="primary"
            v-if="data.property_type"
            class="capitalize">
            {{ data.property_type }}
          </Tag>

          <p class="text-xs">
            {{ data.address }}
            <span v-if="data.city">{{ data.city + ", " }}</span>
            <span v-if="data.state">{{ data.state }}</span>
          </p>
        </div>
      </template>
    </Column>

    <!-- <Column
      field="brokers"
      header="Broker Information"
      :showFilterMenu="false"
      body-class="max-w-xs">
      <template #body="{ data }">
        <div class="space-y-1 w-fit">
          <div
            class="p-4 space-y-1"
            v-for="(broker, key) in data.brokers"
            :key="key">
            <Tag :severity="broker.status === 'Limited' ? 'warning' : 'info'">
              {{ broker.status }}
            </Tag>
            <p class="font-bold">
              {{ broker.name }}
            </p>
            <p class="text-gray-500">
              {{ broker.email }}
            </p>
          </div>
        </div>
      </template>
    </Column> -->

    <Column
      field="propertyPrice"
      header="Price"
      :showFilterMenu="false">
      <template #body="{ data }">
        <div class="max-w-xs space-y-1">
          <p class="text-sm font-bold">
            <template v-if="typeof data.propertyPrice == 'number'">$</template>
            {{ data.property_price || "Contact Broker" }}
          </p>
        </div>
      </template>
    </Column>

    <Column
      field="status"
      header="Status"
      :showFilterMenu="false">
      <template #body="{ data }">
        <div class="max-w-xs mx-auto space-y-1 w-fit">
          <Tag
            v-if="data.active"
            icon="pi pi-check"
            value="Active"></Tag>
          <Tag
            v-else
            icon="pi pi-times"
            severity="warning"
            value="Inactive"></Tag>
        </div>
      </template>
    </Column>

    <Column
      field="actions"
      header="Actions"
      :showFilterMenu="false">
      <template #body="{ data }">
        <div class="flex items-center justify-center max-w-xs gap-1">
          <NuxtLink
            :to="'/property/' + data.id"
            class="p-1.5 px-2 text-gray-500 border-2 border-gray-500 rounded-full hover:border-blue-500 hover:text-blue-500">
            <i class="pi pi-info"></i>
          </NuxtLink>

          <NuxtLink
            :to="'/admin/properties/edit/' + data.id"
            class="p-1.5 px-2 text-gray-500 border-2 border-gray-500 rounded-full hover:border-blue-500 hover:text-blue-500">
            <i
              class="pi pi-pencil"
              title="Edit"></i>
          </NuxtLink>

          <button title="Enable or Disable(Soft Delete)">
            <InputSwitch v-model="data.status" />
          </button>
        </div>
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
  import { FilterMatchMode } from "primevue/api"
  import type { PageState } from "primevue/paginator"

  import { useRuntimeConfig } from "#app"
  const apiUrl = useRuntimeConfig().public.API_BASE_URL
  // const filters = ref({
  //   global: { value: undefined, matchMode: FilterMatchMode.STARTS_WITH },
  //   name: { value: undefined, matchMode: FilterMatchMode.CONTAINS },
  //   address: { value: undefined, matchMode: FilterMatchMode.STARTS_WITH },
  //   status: { value: undefined, matchMode: FilterMatchMode.EQUALS },
  //   brokers: { value: undefined, matchMode: FilterMatchMode.CONTAINS },
  //   propertyType: { value: undefined, matchMode: FilterMatchMode.EQUALS },
  // })

  // const statusOptions = [
  //   { label: "Any", value: null },
  //   { label: "Active", value: true },
  //   { label: "Inactive", value: false },
  // ]

  // const propertyTypes = [
  //   { label: "All", value: null },
  //   { label: "Hotel", value: "Hotel" },
  //   { label: "Gas Station", value: "Gas Station" },
  //   { label: "Retail", value: "Retail" },
  //   { label: "Multi Family", value: "Multi Family" },
  //   { label: "Restaurant", value: "Restaurant" },
  //   { label: "Land", value: "Land" },
  //   { label: "Industrial", value: "Industrial" },
  //   { label: "Health Office", value: "Health Office" },
  //   { label: "Specialty", value: "Specialty" },
  //   { label: "Office", value: "Office" },
  // ]

  const route = useRoute()
  const router = useRouter()
  const search = ref()

  // Ref for exporting the data on the table
  const dt = ref()
  // const exportCSV = () => {
  //   dt.value.exportCSV()
  // }

  const query = ref("california")

  const currentPage = computed(() => Number(route.query.page) || 1)
  const numberOfRows = ref(10)
  const properties = ref()
  const loading = ref(false)

  const getData = async (newPage?: number) => {
    loading.value = true
    const { data, refresh } = await useFetch(
      `${apiUrl}/admin/property/search`,
      {
        query: {
          q: query.value,
          page: newPage || currentPage.value,
          items: numberOfRows.value,
        },
      }
    )
    properties.value = data.value
    loading.value = false
  }

  const paginate = async (event: PageState) => {
    await router.push({
      query: {
        page: event?.page + 1 || 1,
      },
    })
    getData()
  }

  // const searchApi = async () => {
  //   const apiLink = ""

  //   page.value = parseInt(route.query.page as string)
  //   try {
  //     let { data, clear, error } = await useFetch(apiLink, {
  //       query: {
  //         page: route.query.page || 0,
  //         items: route.query.items || 20,
  //       },
  //     })
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }

  await getData()
</script>
