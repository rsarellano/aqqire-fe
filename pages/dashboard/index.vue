<template>
  <div class="mx-auto space-y-4">
    <h1 class="text-2xl font-bold md:text-4xl">
      Welcome Back
      <span class="text-blue-500">
        {{ user.first_name }} {{ user.last_name }}
      </span>
    </h1>
    <DashboardNav />

    <div
      class="flex flex-col justify-between gap-2 text-xl font-bold text-white uppercase lg:gap-4 md:flex-row">
      <DashboardCard
        header="Views"
        value="378" />
      <DashboardCard
        header="Clicks"
        value="127" />
      <DashboardCard
        header="Impressions"
        value="25" />
    </div>
    <div>
      <h2
        class="p-4 py-2 text-lg font-semibold text-center text-white bg-blue-600 rounded-t">
        My Properties
      </h2>

      <DataTable :value="properties" paginator :rows="10" show-gridlines>
        <Column field="name" header="Property" sortable>
          <template #body="{ data }">
            <NuxtLink
              target="_blank"
              :to="`/property/${data.id}`"
              class="text-blue-500 hover:underline">
              {{ data.name }}
            </NuxtLink>
          </template>
        </Column>
        <Column
          field="clicks"
          header="Clicks"
          sortable></Column>
        <Column
          field="views"
          header="Views"
          sortable></Column>
        <Column
          field="impressions"
          header="Total Impressions"
          sortable></Column>
        <Column
          field="impressions"
          header="Website Impressions"
          sortable></Column>
        <Column
          field="impressions"
          header="Email Impressions"
          sortable></Column>
        <Column
          field="updated_at"
          header="Last Updated"
          sortable>
          <template #body="{ data }">
            <p>{{ formatISODate(data.updated_at) }}</p>
          </template>
        </Column>

        <Column
          field="actions"
          header="Actions">
          <template #body="{ data }">
            <div class="flex justify-center">
              <DashboardMarketingActions :id="data.id" />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "#imports";
import { useRuntimeConfig } from "#app";
const apiUrl = useRuntimeConfig().public.API_BASE_URL;
const { data: authData } = useAuth();

const user = computed(() => authData.value);
const loading = ref(true);
const properties = ref([]);
const stats = ref({ views: 0, clicks: 0, impressions: 0 });

const fetchProperties = async () => {
  if (user.value && user.value.id) {
    loading.value = true;
    try {
      const { data } = await useFetch(`${apiUrl}/broker/properties`, {
        params: {
          userId: user.value.id,
          page: 1,
          size: 10,
        },
      });
      properties.value = data.value?.items || [];
      updateStats();
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      loading.value = false;
    }
  }
};

const updateStats = () => {
  stats.value = {
    views: properties.value.reduce((sum, prop) => sum + (prop.views || 0), 0),
    clicks: properties.value.reduce((sum, prop) => sum + (prop.clicks || 0), 0),
    impressions: properties.value.reduce(
      (sum, prop) => sum + (prop.impressions || 0),
      0,
    ),
  };
};

onMounted(fetchProperties);
watch(user, fetchProperties);

definePageMeta({
  middleware: "auth",
});

// Helper function to format ISO date (you might want to move this to a separate utility file)
const formatISODate = (isoString: string) => {
  return new Date(isoString).toLocaleDateString();
};
</script>
