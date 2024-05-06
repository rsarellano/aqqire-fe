<template>
  <div>
    <AdminNav />

    <div class="lg:px-4 xl:px-12">
      <div
        class="grid flex-col items-center justify-center w-full grid-cols-2 gap-2 py-2 mt-2 md:grid-cols-4"
      >
        <FormKit
          v-model="filters.global.value"
          type="text"
          label="Search"
          :delay="400"
        />

        <FormKit
          v-model="search"
          type="text"
          label="Search by Broker"
          :delay="400"
        />

        <FormKit
          type="select"
          label="Property Type"
          placeholder="Filter by Property Type"
          v-model="filters.propertyType.value"
          :options="propertyTypes"
        />

        <FormKit
          type="select"
          label="Status"
          v-model="filters.status.value"
          :options="statusOptions"
        />
      </div>

      <DataTable
        v-model:filters="filters"
        :value="posts"
        show-gridlines
        paginator
        :rows="10"
        class="text-xs"
        dataKey="id"
        sortMode="multiple"
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
        ref="dt"
      >
        <template #empty>No Properties found.</template>
        <template #header>
          <h1 class="text-xl text-center text-blue-500"> Properties </h1>
        </template>

        <Column
          field="name"
          header="Name"
          :showFilterMenu="false"
          sortable
          sort-field="lastUpdated"
        >
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
                    elapsedSince(data.lastUpdated).numerical?.months! > 6,
                  'text-yellow-500 font-semibold':
                    elapsedSince(data.lastUpdated).numerical?.months! < 6 &&
                    elapsedSince(data.lastUpdated).numerical?.months! > 3,
                }"
                >Last Updated {{ elapsedSince(data.lastUpdated).value }} (
                {{ new Date(data.lastUpdated).toLocaleDateString() }} )</p
              >
              <p
                >Created {{ elapsedSince(data.propertyDate).value }} ({{
                  new Date(data.propertyDate).toLocaleDateString()
                }})
              </p>
            </div>
          </template>
        </Column>

        <Column
          field="address"
          header="Address"
          :showFilterMenu="false"
        >
          <template #body="{ data }">
            <div class="max-w-xs space-y-2">
              <Tag
                value="primary"
                class="capitalize"
              >
                {{ data.propertyType }}
              </Tag>

              <p class="text-sm">
                {{ data.propertyAddress }}
              </p>
            </div>
          </template>

          <template #filter="{ filterModel, filterCallback }"> </template>
        </Column>

        <Column
          field="brokers"
          header="Broker Information"
          :showFilterMenu="false"
          body-class="max-w-xs"
        >
          <template #body="{ data }">
            <div class="space-y-1 w-fit">
              <div
                class="p-4 space-y-1"
                v-for="(broker, key) in data.brokers"
                :key="key"
              >
                <Tag
                  :severity="broker.status === 'Limited' ? 'warning' : 'info'"
                >
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
        </Column>

        <Column
          field="propertyPrice"
          header="Price"
          :showFilterMenu="false"
        >
          <template #body="{ data }">
            <div class="max-w-xs space-y-1">
              <p class="text-sm font-bold">
                <template v-if="typeof data.propertyPrice == 'number'">
                  $
                </template>
                {{ data.propertyPrice }}</p
              >
            </div>
          </template>
        </Column>

        <Column
          field="status"
          header="Status"
          :showFilterMenu="false"
        >
          <template #body="{ data }">
            <div class="max-w-xs mx-auto space-y-1 w-fit">
              <Tag
                v-if="data.status"
                icon="pi pi-check"
                value="Active"
              ></Tag>
              <Tag
                v-else
                icon="pi pi-times"
                severity="warning"
                value="Inactive"
              ></Tag>
            </div>
          </template>
        </Column>

        <Column
          field="actions"
          header="Actions"
          :showFilterMenu="false"
        >
          <template #body="{ data }">
            <div class="flex items-center justify-center max-w-xs gap-1">
              <NuxtLink
                :to="'/properties/property/' + data.id"
                class="p-1.5 px-2 text-gray-500 border-2 border-gray-500 rounded-full hover:border-blue-500 hover:text-blue-500"
              >
                <i class="pi pi-info"></i>
              </NuxtLink>

              <NuxtLink
                :to="'/admin/properties/edit/' + data.id"
                class="p-1.5 px-2 text-gray-500 border-2 border-gray-500 rounded-full hover:border-blue-500 hover:text-blue-500"
              >
                <i
                  class="pi pi-pencil"
                  title="Edit"
                ></i>
              </NuxtLink>

              <button title="Enable or Disable(Soft Delete)">
                <InputSwitch v-model="data.status" />
              </button>
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from "vue"
  import { FilterMatchMode } from "primevue/api"
  import { data } from "../../data"

  const filters = ref({
    global: { value: undefined, matchMode: FilterMatchMode.STARTS_WITH },
    name: { value: undefined, matchMode: FilterMatchMode.CONTAINS },
    address: { value: undefined, matchMode: FilterMatchMode.STARTS_WITH },
    status: { value: undefined, matchMode: FilterMatchMode.EQUALS },
    brokers: { value: undefined, matchMode: FilterMatchMode.CONTAINS },
    propertyType: { value: undefined, matchMode: FilterMatchMode.EQUALS },
  })

  const statusOptions = [
    { label: "Any", value: null },
    { label: "Active", value: true },
    { label: "Inactive", value: false },
  ]

  const propertyTypes = [
    { label: "All", value: null },
    { label: "Hotel", value: "Hotel" },
    { label: "Gas Station", value: "Gas Station" },
    { label: "Retail", value: "Retail" },
    { label: "Multi Family", value: "Multi Family" },
    { label: "Restaurant", value: "Restaurant" },
    { label: "Land", value: "Land" },
    { label: "Industrial", value: "Industrial" },
    { label: "Health Office", value: "Health Office" },
    { label: "Specialty", value: "Specialty" },
    { label: "Office", value: "Office" },
  ]

  const filterByBroker = (name: string) => {
    return data.filter((item) =>
      item.brokers.some((broker) => broker.name.includes(name))
    )
  }

  const posts = ref([...data])
  const dt = ref()
  const search = ref()

  watch(search, () => {
    const data = filterByBroker(search.value)
    posts.value = [...data]
  })

  const exportCSV = () => {
    dt.value.exportCSV()
  }
</script>
