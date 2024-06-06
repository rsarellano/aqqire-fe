<template>
  <template v-if="loading">
    <Loader />
  </template>
  <template v-else>
    <div class="flex flex-col gap-4 p-4 mx-auto">
      <div class="w-full p-4 mx-auto space-y-4 shadow-lg bg-slate-50 max-w-7xl">
        <h1 class="text-2xl font-bold text-gray-700">Search for Properties</h1>
        <div class="flex flex-col gap-2 md:flex-row">
          <FormKit type="text" />
          <Button class="!px-12 h-min">Search</Button>
        </div>

        <Accordion
          expandIcon="pi pi-caret-down"
          collapseIcon="pi pi-caret-up"
        >
          <AccordionTab>
            <template #header>
              <h2 class="w-full text-right"> More Filter Options </h2>
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
                  ]"
                />
                <FormKit
                  type="select"
                  label="Select City"
                  :options="[
                    'New York',
                    'California',
                    'Washington',
                    'New Jersey',
                    'Los Angeles',
                  ]"
                />
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
                  ]"
                />
              </div>
              <div class="flex flex-col flex-1 gap-2 md:flex-row">
                <FormKit
                  type="number"
                  label="Minimum Price"
                />
                <FormKit
                  type="number"
                  label="Maximum Price"
                />
              </div>
            </div>
          </AccordionTab>
        </Accordion>
      </div>

      <div class="grid w-full grid-cols-6 gap-4 mx-auto max-w-7xl">
        <div
          class="flex flex-col items-center justify-between col-span-6 p-2 pt-4 pb-1 md:flex-row"
        >
          <div class="w-full md:w-1/3">
            <FormKit
              label="Sort By"
              type="select"
              placeholder="Sort By"
              :options="['Newest', 'Oldest', 'Popular']"
            />
          </div>
          <div class="text-center grow md:text-right">
            Showing 30 Listings
          </div>
        </div>

        <!-- Listing Items -->
        <div
          class="col-span-6 py-4"
          v-for="(item, key) in items"
          :key="key"
        >
          <PropertyCardHorizontal />
        </div>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
  const loading = ref(false)
  const layout = ref("default")
  const items = ref([...new Array(10)])
  definePageMeta({
    layout: "none",
  })
</script>
