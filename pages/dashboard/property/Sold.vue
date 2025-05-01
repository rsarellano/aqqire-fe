<template>
  <div class="">
    <DashboardNav />
    <DataTable
      :key="currentPage"
      data-key="id"
      :loading="loading"
      show-gridlines
      :rows="items"
      :lazy="true"
      :first="currentPage * items - 1"
      :total-records="1000000"
      paginator-template="PrevPageLink CurrentPageReport NextPageLink"
      current-page-report-template="{currentPage}"
      paginator
      :value="properties"
      size="small"
      @page="paginate">
      <!-- Header -->
      <template #header>
        <div
          class="flex flex-col items-center justify-between w-full gap-4 md:flex-row">
          <h1 class="text-3xl font-bold">Sold Properties</h1>

          <div class="flex gap-4">
            <Formkit type="form">
              <FormKit label="Search Properties" />
              <Button
                class="!h-min my-auto"
                @click="fetchProperties">
                Search
              </Button>
            </Formkit>
          </div>
        </div>
      </template>

      <template #empty>
        <p>No Properties Found</p>
      </template>

      <Column
        sortable
        field="name"
        header="Property Name"/>
      <Column
        sortable
        field="asset_type"
        header="Property Type">
        <template #body="{ data }">
          <p class="capitalize">{{ data.asset_type }}</p>
        </template>
      </Column>
      <Column
        sortable
        field="created_at"
        header="Date Created">
        <template #body="{ data }">
          {{ formatISODate(data.created_at) }}
        </template>
      </Column>
      <Column
        sortable
        field="impressions"
        header="Impressions"/>
      <Column
        sortable
        field="views"
        header="Views"/>
      <Column
        field="actions"
        header="Actions">
        <template #body={data}>
          <div class="flex justify-center">
            <PropertyTableActions :id="data.id" />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
<script setup lang="ts">
  import { useRuntimeConfig } from "#app"
  import type { PageState } from "primevue/paginator"
  const apiUrl = useRuntimeConfig().public.API_BASE_URL
  const { data: authData } = useAuth()

  const properties = ref()
  const loading = ref(false)
  const route = useRoute()
  const router = useRouter()

  const user = computed(() => authData.value)
  const currentPage = computed(() => Number(route.query.page) || 1)
  const items = ref(10)
  const total = ref()

  const fetchProperties = async () => {
    if (user.value && user.value.id) {
      loading.value = true
      try {
        const { data } = await useFetch(`${apiUrl}/broker/properties`, {
          params: {
            userId: user.value.id,
            page: currentPage,
            size: items.value,
          },
        })
        properties.value = data.value.items.filter(
          (item) => !!item.sold === false
        )
        total.value = data.value.total
      } catch (error) {
        console.error("Error fetching properties:", error)
      } finally {
        loading.value = false
      }
    }
  }

  const paginate = async (event: PageState) => {
    await router.push({
      query: {
        page: event.page + 1 || 1,
      },
    })
    await fetchProperties()
  }

  await fetchProperties()
  watch(user, fetchProperties)
</script>
