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

      <DataTable
        :value="propertyData.properties"
        paginator
        :rows="10"
        show-gridlines>
        <Column
          field="name"
          header="Property"
          sortable>
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
  const { signIn, token, data, status, lastRefreshedAt } = useAuth()
  const user: any = { ...data.value! }
  definePageMeta({
    middleware: "auth",
  })

  const { data: propertyData } = await useFetch(
    "https://api3.aqqire.com/properties?items=10"
  )
</script>
