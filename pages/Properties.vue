<template>
  <template v-if="loading">
    <Loader />
  </template>
  <template v-else>
    <div class="flex flex-col gap-4 p-4 mx-auto">
      <div class="w-full p-4 mx-auto space-y-4 shadow-lg bg-slate-50 max-w-7xl">
        <h1 class="text-2xl font-bold text-gray-700">Search for Properties</h1>
        <div class="flex flex-col gap-2 md:flex-row">
          <form type="form" class="w-full" @submit.prevent="search">
            <FormKit v-model="query" type="text" outer-class="!w-full" />
            <Button type="submit" class="w-full"> Search </Button>
          </form>
        </div>

        <Accordion
          expand-icon="pi pi-caret-down"
          collapse-icon="pi pi-caret-up"
        >
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
                <FormKit type="number" label="Minimum Price" />
                <FormKit type="number" label="Maximum Price" />
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
        </div>
        <!-- Listing Items -->
        <div
          v-for="(item, key) in properties.data"
          :key="key"
          class="col-span-6 py-4"
        >
          <PropertyCardHorizontal
            :id="item.id"
            :name="item.name"
            :price="item.price"
            :city="item.city"
            :address="item.address"
            :state="item.state"
            :updated="item.updated_at"
            :image="images[getRandomImage()]"
          />
        </div>
        <div>Property Page Cards</div>
      </div>
      <!-- Pagination -->

      <Paginator
        class="w-full"
        :first="(page - 1) * items"
        :rows="items"
        :total-records="properties.total"
        @page="paginate"
      />
    </div>
  </template>
</template>

<script setup lang="ts">
import { debounce } from "lodash";
import { ref, watch } from "vue";
import { getRandomImage, images } from "./data";
import type { PageState } from "primevue/paginator";
import { useRuntimeConfig } from "#app";
const apiUrl = useRuntimeConfig().public.API_BASE_URL;
const customApiUrl = useRuntimeConfig().public.CUSTOM_API_BASE;

const loading = ref(false);
const layout = ref("default");
const route = useRoute();
const router = useRouter();
const properties = ref({ data: [] });
const query = ref();

definePageMeta({
  layout: "none",
  auth: false,
});

const name = computed(() => route.query.name || "");
const page = ref(1);
const items = ref(10);

const fetchProperty = async () => {
  try {
    const response = await useFetch(`${customApiUrl}/property/`);
  } catch {}
};

const fetchResults = async () => {
  loading.value = true;
  const { data, error } = await useFetch(`${apiUrl}/property/search?`, {
    params: {
      q: name,
      page: page,
      items: items,
    },
  });
  if (!error.value) {
    properties.value = data.value;
  }
  loading.value = false;
};

const search = async () => {
  page.value = 1;
  if (query.value) {
    await router.push({ query: { name: query.value } });
    fetchResults();
  }
};

const paginate = (newPage: PageState) => {
  page.value = Math.floor(newPage.first / items.value) + 1;
  fetchResults();
};

watch([name, page, items], fetchResults, { immediate: true });
</script>
