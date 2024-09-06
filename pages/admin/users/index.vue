<template>
  <AdminNav />

  <div class="flex items-center justify-between w-full px-4">
    <FormKit
      outerClass="!max-w-[30%] w-full"
      type="text"
      label="Search"
      :delay="400" />

    <NuxtLink to="/admin/users/add">
      <Button>Create User</Button>
    </NuxtLink>
  </div>

  <DataTable
    v-model:filters="filters"
    :value="users"
    show-gridlines
    paginator
    :rows="10"
    class="text-sm"
    dataKey="id"
    sortMode="multiple"
    :globalFilterFields="[
      'name',
      'id',
      'email',
      'active',
      'disabled',
      'address',
      'company',
      'city',
      'state',
      'status',
      'lastLogin',
      'createdOn',
    ]"
    :showFilterOperator="false">
    <template #empty>
      <div class="text-center">No Users found.</div>
    </template>
    <template #header>
      <h1 class="pb-4 text-2xl text-center text-blue-500">Users</h1>

      <!-- Search table -->
      <Accordion
        expandIcon="pi pi-caret-down"
        collapseIcon="pi pi-caret-up">
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
            <FormKit
              v-model="filters.state.value"
              type="text"
              label="Search by State"
              :delay="400" />
            <FormKit
              v-model="filters.city.value"
              type="text"
              label="Search by City"
              :delay="400" />
            <FormKit
              v-model="filters.company.value"
              type="text"
              label="Search by Company"
              :delay="400" />
            <FormKit
              type="select"
              label="Status"
              outer-class="!col-span-full"
              v-model="filters.status.value"
              :options="statusOptions" />
          </div>
        </AccordionTab>
      </Accordion>
    </template>

    <Column
      field="name"
      header="User Information"
      :showFilterMenu="false">
      <template #body="{ data }">
        <div class="flex items-center max-w-xs gap-4">
          <div class="mr-4 size-20">
            <img
              :src="data.img"
              :alt="`${data.name}'s profile picture`" />
          </div>

          <div class="space-y-1">
            <div class="flex items-baseline gap-4 font-bold">
              <i class="pi pi-user"></i>
              {{ data.name }}
            </div>

            <div class="flex items-baseline gap-4">
              <i class="pi pi-envelope"></i>
              {{ data.email }}
            </div>

            <div class="flex items-baseline gap-4">
              <i class="pi pi-mobile"></i>
              {{ data.phone }}
            </div>

            <div class="flex items-baseline gap-4 capitalize">
              <i class="pi pi-map-marker"></i>
              {{ data.city }}, {{ data.state }}
            </div>

            <div class="flex items-baseline gap-4 capitalize">
              <i class="pi pi-building"></i>
              {{ data.company }}
            </div>
          </div>
        </div>
      </template>
    </Column>

    <Column
      field="account"
      header="Account Information"
      sort-field="lastLogin"
      sortable
      :showFilterMenu="false">
      <template #body="{ data }">
        <div class="max-w-xs space-y-2">
          <Tag>
            {{ data.id }}
          </Tag>

          <p
            class="text-green-500"
            :class="{
              'text-red-500 font-bold':
                elapsedSince(data.lastLogin).numerical?.months! > 6,
              'text-yellow-500 font-semibold':
                elapsedSince(data.lastLogin).numerical?.months! < 6 &&
                elapsedSince(data.lastLogin).numerical?.months! > 3,
            }">
            Recent Login {{ elapsedSince(data.lastLogin).value }} (
            {{ new Date(data.lastLogin).toLocaleDateString() }} )
          </p>
          <p>
            Joined {{ elapsedSince(data.createdOn).value }} (
            {{ new Date(data.createdOn).toLocaleDateString() }} )
          </p>
        </div>
      </template>

      <template #filter="{ filterModel, filterCallback }"></template>
    </Column>

    <Column
      field="status"
      header="Status"
      :showFilterMenu="false">
      <template #body="{ data }">
        <div class="max-w-xs mx-auto space-y-1 w-fit">
          <Tag
            v-if="data.status"
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
            :to="'/admin/users/edit/' + data.id"
            class="p-1.5 px-2 text-gray-500 border-2 border-gray-500 rounded-full hover:border-blue-500 hover:text-blue-500">
            <i
              class="pi pi-pencil"
              title="Edit"></i>
          </NuxtLink>

          <button
            @click="deleteUser(data)"
            class="p-1.5 px-2 text-gray-500 border-2 border-gray-500 rounded-full hover:border-red-500 hover:text-red-500">
            <i
              class="pi pi-trash"
              title="Edit"></i>
          </button>

          <button title="Enable or Disable(Soft Delete)">
            <InputSwitch v-model="data.status" />
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
          :src="currentUser.img"
          class="size-full" />
      </div>

      <div class="flex flex-col gap-2">
        <template v-for="(name, key) in currentUser">
          <div class="flex gap-2 grow">
            <div class="font-bold capitalize">{{ key }}:</div>
            <div class="text-blue-500 capitalize">{{ name }}:</div>
          </div>
        </template>
      </div>
    </div>

    <Button
      severity="danger"
      icon="pi pi-trash"
      class="w-full"></Button>
  </Dialog>
</template>

<script setup lang="ts">
  import { FilterMatchMode } from "primevue/api"

  const filters = ref({
    global: { value: undefined, matchMode: FilterMatchMode.STARTS_WITH },
    id: { value: undefined, matchMode: FilterMatchMode.CONTAINS },
    name: { value: undefined, matchMode: FilterMatchMode.CONTAINS },
    email: { value: undefined, matchMode: FilterMatchMode.CONTAINS },
    status: { value: undefined, matchMode: FilterMatchMode.EQUALS },
    state: { value: undefined, matchMode: FilterMatchMode.STARTS_WITH },
    city: { value: undefined, matchMode: FilterMatchMode.STARTS_WITH },
    company: { value: undefined, matchMode: FilterMatchMode.CONTAINS },
  })

  const statusOptions = [
    { label: "Any", value: null },
    { label: "Active", value: true },
    { label: "Inactive", value: false },
  ]
  const users = ref([
    {
      name: "John Doe",
      email: "johndoe@john.com",
      phone: "(617)333-1234",
      id: "661412ac4e40670033df24e6",
      lastLogin: "2023-11-08T15:52:12.252Z",
      createdOn: "2022-04-08T15:52:12.252Z",
      status: true,
      img: "https://s3.amazonaws.com/media.procesohospitality.com/public/images/default-profile/default-profile-pic.jpg",
      state: "nevada",
      city: "las vegas",
      company: "amazon",
    },
    {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "123-456-7890",
      id: "JD123",
      lastLogin: "2022-04-09",
      createdOn: "2023-01-15",
      status: false,
      img: "https://s3.amazonaws.com/media.procesohospitality.com/public/images/default-profile/default-profile-pic.jpg",
      state: "Nevada",
      city: "Los Angeles",
      company: "ABC Corp",
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "987-654-3210",
      id: "JS456",
      lastLogin: "2024-04-08",
      createdOn: "2022-11-30",
      status: true,
      img: "https://s3.amazonaws.com/media.procesohospitality.com/public/images/default-profile/default-profile-pic.jpg",
      state: "New York",
      city: "New York City",
      company: "XYZ Inc",
    },
    {
      name: "Alice Johnson",
      email: "alicejohnson@example.com",
      phone: "555-555-5555",
      id: "AJ789",
      lastLogin: "2024-04-07",
      createdOn: "2023-05-20",
      status: false,
      img: "https://s3.amazonaws.com/media.procesohospitality.com/public/images/default-profile/default-profile-pic.jpg",
      state: "Texas",
      city: "Houston",
      company: "DEF Company",
    },
    {
      name: "Bob Williams",
      email: "bobwilliams@example.com",
      phone: "222-222-2222",
      id: "BW101",
      lastLogin: "2024-04-06",
      createdOn: "2023-02-10",
      status: true,
      img: "https://s3.amazonaws.com/media.procesohospitality.com/public/images/default-profile/default-profile-pic.jpg",
      state: "Florida",
      city: "Miami",
      company: "GHI Enterprises",
    },
    {
      name: "Emily Brown",
      email: "emilybrown@example.com",
      phone: "333-333-3333",
      id: "EB202",
      lastLogin: "2024-04-05",
      createdOn: "2023-08-25",
      status: false,
      img: "https://s3.amazonaws.com/media.procesohospitality.com/public/images/default-profile/default-profile-pic.jpg",
      state: "Illinois",
      city: "Chicago",
      company: "JKL Corporation",
    },
    {
      name: "Michael Davis",
      email: "michaeldavis@example.com",
      phone: "666-666-6666",
      id: "MD303",
      lastLogin: "2024-04-04",
      createdOn: "2023-10-10",
      status: true,
      img: "https://s3.amazonaws.com/media.procesohospitality.com/public/images/default-profile/default-profile-pic.jpg",
      state: "Washington",
      city: "Seattle",
      company: "MNO Limited",
    },
    {
      name: "Sarah Wilson",
      email: "sarahwilson@example.com",
      phone: "777-777-7777",
      id: "SW404",
      lastLogin: "2024-04-03",
      createdOn: "2023-12-01",
      status: false,
      img: "https://s3.amazonaws.com/media.procesohospitality.com/public/images/default-profile/default-profile-pic.jpg",
      state: "Massachusetts",
      city: "Boston",
      company: "PQR Solutions",
    },
    {
      name: "David Martinez",
      email: "davidmartinez@example.com",
      phone: "888-888-8888",
      id: "DM505",
      lastLogin: "2024-04-02",
      createdOn: "2023-07-15",
      status: true,
      img: "https://s3.amazonaws.com/media.procesohospitality.com/public/images/default-profile/default-profile-pic.jpg",
      state: "Arizona",
      city: "Phoenix",
      company: "STU Inc",
    },
    {
      name: "Linda Garcia",
      email: "lindagarcia@example.com",
      phone: "999-999-9999",
      id: "LG606",
      lastLogin: "2024-04-01",
      createdOn: "2023-09-30",
      status: false,
      img: "https://s3.amazonaws.com/media.procesohospitality.com/public/images/default-profile/default-profile-pic.jpg",
      state: "Colorado",
      city: "Denver",
      company: "VWX Corporation",
    },
    {
      name: "William Rodriguez",
      email: "williamrodriguez@example.com",
      phone: "000-000-0000",
      id: "WR707",
      lastLogin: "2024-03-31",
      createdOn: "2023-03-05",
      status: true,
      img: "https://s3.amazonaws.com/media.procesohospitality.com/public/images/default-profile/default-profile-pic.jpg",
      state: "Georgia",
      city: "Atlanta",
      company: "YZA Enterprises",
    },
  ])

  const search = ref()
  const showDialog = ref(false)
  const currentUser = ref()
  const route = useRoute()
  const page = ref(route.query.page || 0)

  const searchApi = async () => {
    const apiLink = ""

    page.value = parseInt(route.query.page as string)
    try {
      let { data, clear, error } = await useFetch(apiLink, {
        query: {
          page: route.query.page || 0,
          items: route.query.items || 20,
        },
      })
    } catch (e) {
      console.error(e)
    }
  }
  const deleteUser = (user: (typeof users.value)[0]) => {
    showDialog.value = true
    currentUser.value = user
  }
</script>
