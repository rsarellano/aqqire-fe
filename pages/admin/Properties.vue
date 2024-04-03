<template>
  <div>
    <AdminNav />

    <!-- Main  Section -->
    <div class="flex gap-4 p-2 rounded-md">
      <div class="flex flex-col grow">
        <h2
          class="p-2 font-bold text-center text-white bg-blue-500 rounded-t-md">
          Property Table List
        </h2>

        <DataTable
          :value="filteredProperties"
          showGridlines
          v-model:filters="filters">
          <template #header>
            <div class="flex gap-2 justify-content-end">
              <FormKit placeholder="Filter by Last Updated" />
              <FormKit placeholder="Keyword Search" />
              <FormKit placeholder="Keyword Search" />
            </div>
          </template>

          <Column field="name" header="Property Information" sortable>
            <template #body="props">
              <div class="text-xs w-fit">
                <div class="max-w-xs pb-1 font-bold">
                  {{ props.data.propertyName }}
                </div>

                <div
                  class="flex items-center gap-2"
                  :class="{
                    'text-red-500 font-bold':
                      props.data.propertyDate.numerical > 6 ||
                      props.data.propertyDate.time === 'years',
                    'text-yellow-500 font-semibold':
                      props.data.propertyDate.numerical > 1 &&
                      props.data.propertyDate.numerical < 6,
                  }">
                  Last Updated {{ props.data.propertyDate.value }}

                  <!-- Show warning if propery hasn't been updated after 6 months or greater -->
                  <i
                    v-if="
                      props.data.propertyDate.numerical > 6 ||
                      props.data.propertyDate.time === 'years'
                    "
                    class="text-sm pi pi-exclamation-circle"></i>
                </div>
                <div>Created {{ props.data.propertyDate.value }}</div>
              </div>
            </template>
          </Column>

          <Column header="Address">
            <template #body="props">
              <div class="max-w-xs space-y-1 text-xs w-fit">
                <div class="flex gap-1">
                  <Tag
                    class="capitalize"
                    :severity="
                      props.data.propertyType === 'premium'
                        ? 'primary'
                        : 'warning'
                    "
                    :value="props.data.propertyType"></Tag>
                  <Tag value="primary" class="capitalize">
                    {{ props.data.propertyAssetType }}
                  </Tag>
                </div>
                <div class="font-bold capitalize">
                  {{ props.data.propertyAddress }}
                </div>
                <div class="font-semibold">
                  Property ID: {{ props.data.propertyID }}
                </div>
              </div>
            </template>
          </Column>

          <Column field="broker" header="Broker Information">
            <template #body="props">
              <div class="space-y-1 text-xs w-fit">
                <div class="space-x-2 font-semibold">
                  <i class="pr-1 pi pi-envelope"></i>
                  {{ props.data.propertyOwnerEmail }}
                </div>
                <div class="font-semibold c">
                  <i class="pr-1 pi pi-user"></i>

                  {{ props.data.propertyOwner }}
                </div>
              </div>
            </template>
          </Column>

          <Column field="price" header="Price($)" sortable>
            <template #body="props">
              <div class="font-semibold w-fit">
                {{ props.data.propertyPrice.toLocaleString() }}
              </div>
            </template>
          </Column>

          <Column
            header="Status"
            :showFilterMenu="false"
            :filterMenuStyle="{ width: '14rem' }">
            <template #body="props">
              <Tag
                v-if="props.data.active"
                icon="pi pi-check"
                value="Active"></Tag>
              <Tag
                v-else
                icon="pi pi-times"
                severity="warning"
                value="Inactive"></Tag>
            </template>

            <template #filter="{ filterModel, filterCallback }">
              <Dropdown
                v-model="filterModel.value"
                :options="statuses"
                placeholder="Select One"
                class="p-column-filter"
                style="min-width: 12rem"
                :showClear="true">
                <template #option="slotProps">
                  <h1>hello</h1>
                </template>
              </Dropdown>
            </template>
          </Column>

          <Column field="category" header="Action">
            <template #body="props">
              <div class="flex items-center gap-2 text-xs">
                <NuxtLink
                  :to="'/properties/property/' + props.data.propertyID"
                  class="p-1.5 px-2 text-gray-500 border-2 border-gray-500 rounded-full hover:border-blue-500 hover:text-blue-500">
                  <i class="pi pi-info"></i>
                </NuxtLink>
                <NuxtLink
                  to="#"
                  class="p-1.5 px-2 text-gray-500 border-2 border-gray-500 rounded-full hover:border-blue-500 hover:text-blue-500">
                  <i class="pi pi-pencil" title="Edit"></i>
                </NuxtLink>

                <button title="Enable or Disable(Soft Delete)">
                  <InputSwitch v-model="props.data.disabled" />
                </button>
              </div>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { elapsedSince } from "../../composables/dateTimeUtils";
  import { FilterMatchMode } from "primevue/api";

  const statuses = ref(["active", "inactive", "in-contract"]);
  const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    broker: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
  });

  const properties = [
    {
      propertyName:
        "Lease-Purchase for Inventory Only! Liquor Store with Property in Cadwell, GA! Over $15K in Monthly Net Profit!",
      propertyID: "65a570676492fb00335be313",
      propertyOwner: "Kavita Purohit",
      propertyOwnerEmail: "communications@riverbrokers.com",
      propertyType: "limited",
      propertyDate: "2024-01-15T17:50:31.096Z",
      propertyAddress: "Cadwell, GA , Cadwell, Georgia",
      propertyAssetType: "retail",
      propertyUrl:
        "/property/retail/georgia/lease-purchase-for-inventory-only!-liquor-store-with-property-in-cadwell-ga!-over-dollar15k-in-monthly-net-profit!",
      propertyPrice: 499000,
      active: true,
      disabled: false,
    },
    {
      propertyName: "Fairfield Inn & Suites by Marriott",
      propertyID: "65a570676492fb00335be313",
      propertyOwner: "Bharat Vakil",
      propertyOwnerEmail: "bharat.vakil@newgenadv.com",
      propertyType: "premium",
      propertyDate: "2022-01-15T17:50:31.096Z",
      propertyAddress: "1517 S Stuart Ave, Monahans, Texas",
      propertyAssetType: "hotel",
      propertyUrl:
        "/property/hotel/texas/fairfield-inn-and-suites-by-marriott/1704388005589",
      propertyPrice: 11500000,
      active: false,
      disabled: true,
    },
  ];

  const filteredProperties = ref(
    properties.map((property) => {
      return {
        ...property,
        propertyDate: {
          date: property.propertyDate,
          ...elapsedSince(property.propertyDate),
        },
      };
    })
  );
</script>
