<template>
  <AdminNav />
  <div class="flex items-center justify-between w-full px-4">
    <div class="flex items-center gap-2 grow">
      <FormKit
        v-model="value"
        outer-class="!max-w-[30%] w-full"
        type="text"
        label="Search" />
      <Button
        class="!h-min mt-1.5 px-6"
        size="small"
        @click="getData(0)">
        Search
      </Button>
    </div>

    <NuxtLink to="/admin/users/add">
      <Button>Create User</Button>
    </NuxtLink>
  </div>
  <DataTable
    :key="currentPage"
    v-model:filters="filters"
    class="text-sm"
    :value="data?.users"
    show-gridlines
    data-key="id"
    :loading="loading"
    :total-records="data?.total"
    :first="currentPage * numberOfRows"
    :rows="numberOfRows"
    sort-mode="multiple"
    paginator
    :lazy="true"
    :global-filter-fields="[
      'id',
      'email',
      'first_name',
      'last_name',
      'account_type',
      'profile_pic',
      'role',
      'work_type',
      'active',
      'broker',
      'owner',
      'staff',
      'superuser',
      // 'id',
      // 'first_name',
      // 'last_name',
      // 'email',
      // 'active',
      // 'disabled',
      // 'address',
      // 'company',
      // 'city',
      // 'state',
      // 'status',
      // 'lastLogin',
      // 'createdOn',
    ]"
    :show-filter-operator="false"
    @page="paginate">
    <template #empty>
      <div class="text-center">No Users found.</div>
    </template>
    <template #header>
      <h1 class="pb-4 text-2xl text-center text-main">Users</h1>

      <!-- Search table -->
      <Accordion
        expand-icon="pi pi-caret-down"
        collapse-icon="pi pi-caret-up">
        <AccordionTab>
          <template #header>
            <h2 class="w-full text-right">Table Filter Options</h2>
          </template>
          <div class="grid w-full grid-cols-2 gap-2 py-2 pt-4 mt-2">
            <FormKit
              v-model="filters.global.value"
              type="text"
              label="Search"
              :delay="400" />

            <!-- 
                <FormKit
                  v-model="filters.state.value"
                  type="text"
                  label="Search by State"
                  :delay="400" />
            <FormKit v-model="filters.city.value" type="text" label="Search by City" :delay="400" />
            <FormKit v-model="filters.company.value" type="text" label="Search by Company" :delay="400" /> -->
            <!-- <FormKit type="select" label="Status" outer-class="!col-span-full" v-model="filters.status.value"
              :options="statusOptions" /> -->
          </div>
        </AccordionTab>
      </Accordion>
    </template>

    <Column
      field="email"
      header="User Information"
      :show-filter-menu="false">
      <template #body="{ data: emailData }">
        <div class="flex items-center max-w-xs gap-4">
          <div class="min-w-20 max-w-20 aspect-square">
            <img
              :src="emailData.profile_pic"
              :alt="`${emailData.first_name + emailData.last_name}'s profile picture`"
              class="!size-full" />
          </div>

          <div class="space-y-1">
            <div class="flex items-baseline gap-4 font-bold">
              <i class="pi pi-user" />
              {{ emailData.first_name + emailData.last_name }}
            </div>

            <div class="flex items-baseline gap-4">
              <i class="pi pi-envelope" />
              {{ emailData.email }}
            </div>

            <!-- <div class="flex items-baseline gap-4">
              <i class="pi pi-mobile"></i>
              {{ emailData.phone }}
            </div> -->

            <div class="flex items-baseline gap-4 text-xs capitalize">
              <i class="pi pi-map-marker" />
              {{ emailData.mongodata.street_address }}
              {{ emailData.mongodata.city }}
            </div>

            <div class="flex items-baseline gap-4 text-xs capitalize">
              <i class="pi pi-building" />
              {{ emailData.mongodata.company_name }}
            </div>
          </div>
        </div>
      </template>
    </Column>

    <Column
      field="id"
      header="Account Information"
      sort-field="lastLogin"
      sortable
      :show-filter-menu="false">
      <template #body="{ data: idData }">
        <div class="flex flex-col max-w-xs gap-2">
          <div class="flex gap-2">
            <Tag>
              {{ idData.id }}
            </Tag>
            <Tag
              v-if="idData.work_type"
              class="capitalize">
              {{ idData.work_type }}
            </Tag>
            <Tag
              :severity="
                idData.account_type === 'limited' ? 'warning' : 'primary'
              "
              :value="idData.account_type"
              class="capitalize" />
          </div>

          <p
            class="text-green-500"
            :class="{
              'text-red-500 font-bold':
                elapsedSince(idData.lastLogin).numerical?.months! > 6,
              'text-yellow-500 font-semibold':
                elapsedSince(idData.lastLogin).numerical?.months! < 6 &&
                elapsedSince(idData.lastLogin).numerical?.months! > 3,
            }">
            Recent Login {{ elapsedSince(idData.lastLogin).value }} (
            {{ new Date(idData.lastLogin).toLocaleDateString() }} )
          </p>
          <p>
            Joined {{ elapsedSince(idData.mongodata.createdAt).value }} (
            {{ formatISODate(idData.mongodata.createdAt) }} )
          </p>
        </div>
      </template>

      <template #filter />
    </Column>

    <Column
      field="status"
      header="Status"
      :show-filter-menu="false">
      <template #body="{ data: statusData }">
        <div class="max-w-xs mx-auto space-y-1 w-fit">
          <Tag
            v-if="statusData.active"
            icon="pi pi-check"
            value="Active" />
          <Tag
            v-else
            icon="pi pi-times"
            severity="warning"
            value="Inactive" />
        </div>
      </template>
    </Column>

    <Column
      field="actions"
      header="Actions"
      :show-filter-menu="false">
      <template #body="{ data: actionsData }">
        <div class="flex items-center justify-center max-w-xs gap-1">
          <NuxtLink
            :to="'/user/' + actionsData.id"
            class="p-1.5 px-2 text-gray-500 border-2 border-gray-500 rounded-full hover:border-main hover:text-main">
            <i class="pi pi-info" />
          </NuxtLink>
          <NuxtLink
            :to="'/admin/users/edit/' + actionsData.id"
            class="p-1.5 px-2 text-gray-500 border-2 border-gray-500 rounded-full hover:border-main hover:text-main">
            <i
              class="pi pi-pencil"
              title="Edit" />
          </NuxtLink>

          <button
            class="p-1.5 px-2 text-gray-500 border-2 border-gray-500 rounded-full hover:border-red-500 hover:text-red-500"
            @click="deleteUser(actionsData)">
            <i
              class="pi pi-trash"
              title="Edit" />
          </button>

          <button title="Enable or Disable(Soft Delete)">
            <InputSwitch v-model="actionsData.active" />
          </button>
        </div>
      </template>
    </Column>
  </DataTable>

  <Dialog
    v-model:visible="showDialog"
    modal>
    <div class="text-2xl font-bold text-center text-red-500">
      Are you sure you want to delete this user?
    </div>

    <div class="flex flex-col items-center justify-center gap-4 my-8">
      <div class="overflow-hidden border rounded-md size-44">
        <img
          :src="currentUser.profile_pic"
          class="size-full" />
      </div>

      <div class="flex flex-col gap-2">
        <template
          v-for="(name, key) in currentUser"
          :key="key">
          <div class="flex gap-2 grow">
            <div class="font-bold capitalize">{{ key }}:</div>
            <div class="capitalize text-main">{{ name }}:</div>
          </div>
        </template>
      </div>
    </div>

    <Button
      severity="danger"
      icon="pi pi-trash"
      class="w-full" />
  </Dialog>
</template>

<script setup lang="ts">
  import { FilterMatchMode } from "primevue/api"
  import type { PageState } from "primevue/paginator"

  import { useRuntimeConfig } from "#app"
  const apiUrl = useRuntimeConfig().public.API_BASE_URL

  // Types
  interface User {
    id: number
    email: string
    first_name: string
    last_name: string
    account_type: string
    profile_pic: string
    role: string
    work_type: string
    active: boolean
    broker: boolean
    owner: boolean
    staff: boolean
    superuser: boolean
  }

  interface Data {
    users: User[]
    total: number
    page: number
    items: number
  }

  // Refs
  const route = useRoute()
  const router = useRouter()
  const showDialog = ref(false)
  const currentUser = ref()

  const filters = ref({
    global: { value: undefined, matchMode: FilterMatchMode.STARTS_WITH },
    id: { value: undefined, matchMode: FilterMatchMode.CONTAINS },

    // personal info
    email: { value: undefined, matchMode: FilterMatchMode.CONTAINS },
    first_name: { value: undefined, matchMode: FilterMatchMode.CONTAINS },
    last_name: { value: undefined, matchMode: FilterMatchMode.CONTAINS },
    role: { value: undefined, matchMode: FilterMatchMode.CONTAINS },

    work_type: { value: undefined, matchMode: FilterMatchMode.CONTAINS },
    active: { value: undefined, matchMode: FilterMatchMode.EQUALS },
    broker: { value: undefined, matchMode: FilterMatchMode.EQUALS },
    owner: { value: undefined, matchMode: FilterMatchMode.EQUALS },
    staff: { value: undefined, matchMode: FilterMatchMode.EQUALS },
    superuser: { value: undefined, matchMode: FilterMatchMode.EQUALS },
    // state: { value: undefined, matchMode: FilterMatchMode.STARTS_WITH },
    // city: { value: undefined, matchMode: FilterMatchMode.STARTS_WITH },
    // company: { value: undefined, matchMode: FilterMatchMode.CONTAINS },
  })

  const statusOptions = [
    { label: "Any", value: null },
    { label: "Active", value: true },
    { label: "Inactive", value: false },
  ]

  const currentPage = computed(() => Number(route.query.page) || 0)
  const numberOfRows = ref(10)
  const params = ref()

  const data = ref<Data | null>()
  const value = ref("")
  const field = ref("email")
  const loading = ref(false)

  const getData = async (page?: number) => {
    loading.value = true
    const { data: fetchedData, refresh } = await useFetch<Data>(
      () => `${apiUrl}/admin/users`,
      {
        key: `users-${currentPage.value}`,
        params: {
          page: page || currentPage.value,
          items: numberOfRows,
          field,
          value,
        },
      }
    )

    data.value = fetchedData.value
    loading.value = false
  }

  const paginate = async (event: PageState) => {
    await router.push({
      query: {
        page: event?.page || 0,
      },
    })
    await getData()
  }

  const deleteUser = (user: User) => {
    showDialog.value = true
    currentUser.value = user
  }

  await getData()
</script>
