<template>
  <AdminNav />
  {{ search }}
  <div class="flex items-center justify-between w-full">
    <!-- Search api for records -->
    <div class="flex items-center gap-2 grow">
      <FormKit
        outerClass="!max-w-[30%] w-full"
        type="text"
        label="Search"
        v-model="search.name" />
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
    :value="properties?.items"
    class="text-sm"
    :loading="loading"
    show-gridlines
    paginator
    :rows="10"
    dataKey="id"
    :total-records="properties.total"
    :first="currentPage * numberOfRows - 1"
    @page="paginate"
    :lazy="true"
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
            <h2 class="w-full text-right">Advanced Search Options</h2>
          </template>
          <div
            class="grid flex-col items-center justify-center w-full grid-cols-2 gap-2 py-2 pt-4 mt-2">
            <FormKit
              v-model="search.city"
              type="text"
              label="City" />
            <FormKit
              placeholder="Pick a State"
              type="select"
              label="State"
              v-model="search.state"
              :options="states" />
            <FormKit
              placeholder="Type of Property"
              type="select"
              label="State"
              v-model="search.asset_type"
              :options="asset_types" />
          </div>
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
          <p>
            Created {{ elapsedSince(data.created_at).value }} (
            {{ new Date(data.created_at).toLocaleDateString() }} )
          </p>
        </div>
      </template>
    </Column>

    <Column
      field="address"
      header="Address"
      :showFilterMenu="false">
      <template #body="{ data }">
        <div class="max-w-xs px-4 space-x-2 space-y-2">
          <Tag>
            {{ data.id }}
          </Tag>
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
          <p class="!m-0 py-2">
            <span v-if="data.address">
              {{ data.address.trimEnd() + ", " }}
            </span>
            <span v-if="data.city">{{ data.city + ", " }}</span>
            <span v-if="data.state_name">{{ data.state_name }}</span>
          </p>
        </div>
      </template>
    </Column>

    <Column
      field="brokers"
      header="Broker Information"
      :showFilterMenu="false"
      body-class="max-w-xs">
      <template #body="{ data }">
        <div class="space-y-1 w-fit">
          <div class="p-4 space-y-1">
            <!-- <Tag :severity="broker.status === 'Limited' ? 'warning' : 'info'">
              {{ data.status }}
            </Tag> -->
            <p class="font-bold">{{ data.first_name }} {{ data.last_name }}</p>
            <p class="text-gray-500">
              {{ data.email }}
            </p>
          </div>
        </div>
      </template>
    </Column>

    <Column
      field="propertyPrice"
      header="Price"
      :showFilterMenu="false">
      <template #body="{ data }">
        <div class="max-w-xs space-y-1">
          <p class="text-sm font-bold">
            {{
              isNaN(data.mongodata.price)
                ? "Contact Broker"
                : "$" + Number(data.mongodata.price).toLocaleString("en-US")
            }}
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
  import type { PageState } from "primevue/paginator"
  import { states, asset_types } from "./states"

  import { useRuntimeConfig } from "#app"
  const apiUrl = useRuntimeConfig().public.API_BASE_URL

  const route = useRoute()
  const router = useRouter()
  const search = ref<{
    name: string
    city?: string
    state?: string
    asset_type?: string
    active?: boolean
  }>({
    name: "california",
  })

  // Ref for exporting the data on the table
  const dt = ref()
  // const exportCSV = () => {
  //   dt.value.exportCSV()
  // }

  const currentPage = computed(() => Number(route.query.page) || 1)
  const numberOfRows = ref(10)
  const properties = ref()
  const loading = ref(false)

  const getData = async (newPage?: number) => {
    loading.value = true
    const { data } = await useFetch(`${apiUrl}/admin/properties`, {
      query: {
        name: search.value.name,
        city: search.value?.city,
        active: search.value?.active,
        page: newPage || currentPage,
        items: numberOfRows,
      },
    })
    properties.value = data.value
    loading.value = false
  }

  const paginate = async (event: PageState) => {
    await router.push({
      query: {
        page: event.page + 1 || 1,
      },
    })
    await getData()
  }

  await getData()
</script>
