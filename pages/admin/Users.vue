import type { RuntimeConfig from 'nuxt/schema';
<template>
  <div>
    <AdminNav />

    <!-- Main  Section -->
    <div class="flex gap-4 p-2 rounded-md">
      <div class="flex flex-col grow">
        <h2
          class="p-2 font-bold text-center text-white bg-blue-500 rounded-t-md">
          Users Table List
        </h2>

        <DataTable :value="properties">
          <Column field="user" header="User Information">
            <template #body="props">
              <div class="flex items-center gap-2">
                <div class="">
                  <img
                    :src="props.data.image"
                    alt="user image"
                    class="w-16 border rounded-md" />
                </div>
                <div class="text-xs">
                  <div class="font-bold max-w-96 line-clamp-1">
                    {{ props.data.name }}
                  </div>
                  <div>{{ props.data.email }}</div>
                  <div>{{ props.data.phone }}</div>
                </div>
              </div>
            </template>
          </Column>

          <Column header="Account Information">
            <template #body="props">
              <div class="flex flex-col gap-1 text-xs">
                <div class="flex">
                  <span class="pr-1 font-bold">User ID:</span>
                  <span class="capitalize line-clamp-1">
                    {{ props.data.id }}
                  </span>
                </div>
                <div class="flex gap-1">
                  <span class="font-bold">Date Joined:</span>
                  <div class="line-clamp-1 max-w-40">
                    {{ props.data.dateJoined }}
                  </div>
                </div>
              </div>
            </template>
          </Column>

          <Column header="Status">
            <template #body="props">
              <div>
                <i
                  class="text-2xl text-green-500 pi pi-check-circle"
                  v-if="props.data.active"></i>
                <i class="text-2xl text-red-500 pi pi-times-circle" v-else></i>
              </div>
            </template>
          </Column>

          <Column field="category" header="Action">
            <template #body="props">
              <div class="flex items-center gap-2">
                <NuxtLink
                  to="#"
                  class="p-1 px-2 text-gray-500 border-2 border-gray-500 rounded-full hover:border-blue-500 hover:text-blue-500"
                  title="Info">
                  <i class="text-gray-500 hover:text-blue-500 pi pi-info"></i>
                </NuxtLink>
                <NuxtLink
                  to="#"
                  class="p-1 px-2 text-gray-500 border-2 border-gray-500 rounded-full hover:border-blue-500 hover:text-blue-500">
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
      <!-- Main Section End -->

      <!-- Filter Section -->
      <div class="flex flex-col min-w-[15%]">
        <h2
          class="p-2 font-bold text-center text-white bg-blue-500 rounded-t-md">
          Filter List
        </h2>

        <!-- Inputs -->
        <div class="p-2 border-b">
          <FormKit type="text" label="Search" placeholder="Search property" />
        </div>

        <!-- Status Filter -->
        <div class="flex flex-col gap-4 p-4 text-xl">
          <h2 class="my-2 text-2xl font-bold text-gray-600">Status</h2>
          <FormKit
            v-model="filter.status"
            type="radio"
            :options="['all', 'active', 'inactive']"
            label-class="m-2 font-semibold text-gray-600 capitalize"
            decoratorIcon="circle" />

          <!-- Property Type -->
          <h2 class="my-2 text-2xl font-bold text-gray-600">User Type</h2>
          <FormKit
            v-model="filter.userType"
            type="radio"
            :options="['all', 'broker', 'owner', 'vendor']"
            label-class="m-2 font-semibold text-gray-600 capitalize"
            decoratorIcon="circle" />

          <!-- Sort Filter -->
          <h2 class="my-2 text-2xl font-bold text-gray-600">Sort By</h2>
          <FormKit
            v-model="filter.sort"
            type="radio"
            :options="[
              'Date (Latest-Oldest)',
              'Date (Oldest-Latest)',
              'Date (A-Z)',
              'Date (Z-A)',
            ]"
            label-class="m-2 font-semibold text-gray-600 capitalize"
            decoratorIcon="circle" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const filter = ref({
    status: "",
    userType: "",
    sort: "",
  });

  const properties = ref([
    {
      name: "Edwin Reid",
      email: "liwfuneg@ilaufo.jm",
      id: "3225",
      dateJoined: "5/17/2090",
      image:
        "https://s3.amazonaws.com/media.procesohospitality.com/public/images/default-profile/default-profile-pic.jpg",
      active: false,
      disabled: false,
    },
    {
      name: "Craig Hudson",
      email: "lasej@zis.pw",
      id: "4144",
      dateJoined: "12/26/2110",
      image:
        "https://s3.amazonaws.com/media.procesohospitality.com/public/images/default-profile/default-profile-pic.jpg",
      active: true,
      disabled: true,
    },
  ]);
</script>
