<template>
  <template v-if="loading">
    <Loader />
  </template>
  <template v-else>
    <div class="flex flex-col gap-4 p-4 mx-auto">
      <div class="w-full p-4 mx-auto space-y-4 shadow-lg bg-slate-50 max-w-7xl">
        <h1 class="text-2xl font-bold text-gray-700">Search for Properties</h1>
        <div class="flex flex-col gap-2 md:flex-row">
          <form
            type="form"
            @submit.prevent="search"
            class="w-full">
            <FormKit
              type="text"
              outer-class="!w-full"
              v-model="query" />
            <Button
              type="submit"
              class="w-full">
              Search
            </Button>
          </form>
        </div>

        <Accordion
          expandIcon="pi pi-caret-down"
          collapseIcon="pi pi-caret-up">
          <AccordionTab>
            <template #header>
              <h2 class="w-full text-right">More Filter Options</h2>
            </template>
            <div>
              <div class="flex flex-col gap-2 md:flex-row">
                <FormKit
                  type="select"
                  label="Select State"
                  :options="[
                    'New York',
                    'California',
                    'Washington',
                    'New Jersey',
                    'Los Angeles',
                  ]" />
                <FormKit
                  type="select"
                  label="Select City"
                  :options="[
                    'New York',
                    'California',
                    'Washington',
                    'New Jersey',
                    'Los Angeles',
                  ]" />
                <FormKit
                  type="select"
                  label="Select Property Type"
                  :options="[
                    'Hotel',
                    'Multi-Family',
                    'Retail',
                    'Gas Station',
                    'Los Angeles',
                    'Land',
                    'Industrial',
                    'Restaurant',
                    'Special',
                    'Office',
                    'Health',
                  ]" />
              </div>
              <div class="flex flex-col flex-1 gap-2 md:flex-row">
                <FormKit
                  type="number"
                  label="Minimum Price" />
                <FormKit
                  type="number"
                  label="Maximum Price" />
              </div>
            </div>
          </AccordionTab>
        </Accordion>
      </div>

      <div class="grid w-full grid-cols-6 gap-4 mx-auto max-w-7xl">
        <div
          class="flex flex-col items-center justify-between col-span-6 p-2 pt-4 pb-1 md:flex-row">
          <div class="w-full md:w-1/3">
            <FormKit
              label="Sort By"
              type="select"
              placeholder="Sort By"
              :options="['Newest', 'Oldest', 'Popular']" />
          </div>
        </div>
        <!-- Listing Items -->
        <div
          class="col-span-6 py-4"
          v-for="(item, key) in properties.data"
          :key="key">
          <PropertyCardHorizontal
            :name="item.name"
            :id="item.id"
            :location="`${item.city} ${item.address}`" />
        </div>
      </div>
      <!-- Pagination -->

      <Paginator
        class="w-full"
        :first="(page - 1) * items"
        :rows="items"
        @page="paginate"
        :totalRecords="properties.total"></Paginator>
    </div>
  </template>
</template>

<script setup lang="ts">
  import type { PageState } from "primevue/paginator"

  const loading = ref(false)
  const layout = ref("default")
  const route = useRoute()
  const router = useRouter()
  const properties = ref()
  const query = ref()

  definePageMeta({
    layout: "none",
    auth: false,
  })

  const name = computed(() => route.query.name || "")
  const page = ref(1)
  const items = ref(10)
  const fetchResults = async () => {
    loading.value = true
    const { data, error } = await useFetch(
      `https://api3.aqqire.com/property_search?`,
      {
        params: {
          q: name,
          page: page,
          items: items,
        },
      }
    )
    if (!error.value) {
      properties.value = data.value
    }
    loading.value = false
  }

  const search = async () => {
    page.value = 1
    if (query.value) {
      await router.push({ query: { name: query.value } })
      fetchResults()
    }
  }

  const paginate = (newPage: PageState) => {
    page.value = Math.floor(newPage.first / items.value) + 1
    fetchResults()
  }

  watch([name, page, items], fetchResults, { immediate: true })
</script>
