<template>
  <div class="h-screen mx-auto space-y-4">
    <h1 class="text-4xl font-bold"> Welcome Back {{ user.name }} </h1>
    <DashboardNav />

    <div
      class="flex flex-col md:flex-row justify-between gap-4 text-xl font-bold text-white uppercase"
    >
      <DashboardCard
        header="Views"
        value="378"
      />
      <DashboardCard
        header="Clicks"
        value="127"
      />
      <DashboardCard
        header="Impressions"
        value="25"
      />
    </div>
    <div>
      <h2
        class="p-4 py-2 text-lg font-semibold text-center text-white bg-blue-600 rounded-t"
        >My Properties</h2
      >

      <DataTable
        :value="formattedTop"
        paginator
        :rows="10"
        show-gridlines
      >
        <Column
          field="name"
          header="Property"
          sortable
        >
          <template #body="{data}">
            <NuxtLink to="/property/asda/" class="text-blue-500">{{data.name}}</NuxtLink></template
        ></Column>
        <Column
          field="clicks"
          header="Clicks"
          sortable
        ></Column>
        <Column
          field="views"
          header="Views"
          sortable
        ></Column>
        <Column
          field="impressions"
          header="Total Impressions"
          sortable
        ></Column>
        <Column
          field="impressions"
          header="Website Impressions"
          sortable
        ></Column>
        <Column
          field="impressions"
          header="Email Impressions"
          sortable
        ></Column>
        <Column
          field="lastUpdated.value"
          header="Last Updated"
          sortable
        ></Column>

        <Column
          field="actions"
          header="Actions"
        >
          <template #body>
            <div class="flex justify-center">
              <DashboardMarketingActions />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { signIn, token, data, status, lastRefreshedAt } = useAuth()
  const user: any = data.value!
  definePageMeta({
    middleware: "auth",
  })

  const formatDateTable = (arr: any) => {
    return arr.map((item: any) => {
      return { ...item, lastUpdated: elapsedSince(item.lastUpdated) }
    })
  }
  const top = [
    {
      name: "Berge Springs",
      clicks: 752,
      views: 96105,
      impressions: 2062,
      lastUpdated:
        "Thu Sep 07 2023 23:28:53 GMT+0800 (Philippine Standard Time)",
    },
    {
      name: "Hoppe Trail",
      clicks: 421,
      views: 69783,
      impressions: 67332,
      lastUpdated:
        "Tue Sep 26 2023 10:56:31 GMT+0800 (Philippine Standard Time)",
    },
    {
      name: "Brekke Port",
      clicks: 359,
      views: 71790,
      impressions: 95046,
      lastUpdated:
        "Sat Feb 10 2024 03:05:17 GMT+0800 (Philippine Standard Time)",
    },
    {
      name: "Madisen Freeway",
      clicks: 474,
      views: 95976,
      impressions: 36169,
      lastUpdated:
        "Mon Aug 28 2023 09:54:45 GMT+0800 (Philippine Standard Time)",
    },
    {
      name: "Alfredo Pines",
      clicks: 46,
      views: 53993,
      impressions: 90555,
      lastUpdated:
        "Fri May 05 2023 17:39:08 GMT+0800 (Philippine Standard Time)",
    },
  ]
  const low = [
    {
      name: "Klocko Isle",
      clicks: 582,
      views: 12818,
      impressions: 28780,
      lastUpdated:
        "Sun Mar 24 2024 20:29:18 GMT+0800 (Philippine Standard Time)",
    },
    {
      name: "Schneider Tunnel",
      clicks: 353,
      views: 33606,
      impressions: 66458,
      lastUpdated:
        "Tue Apr 02 2024 12:18:23 GMT+0800 (Philippine Standard Time)",
    },
    {
      name: "Ullrich Crossroad",
      clicks: 612,
      views: 50406,
      impressions: 94756,
      lastUpdated:
        "Fri Aug 18 2023 04:53:21 GMT+0800 (Philippine Standard Time)",
    },
    {
      name: "Tillman Falls",
      clicks: 553,
      views: 78391,
      impressions: 6890,
      lastUpdated:
        "Sat Jul 01 2023 06:46:16 GMT+0800 (Philippine Standard Time)",
    },
    {
      name: "Verner Tunnel",
      clicks: 398,
      views: 36811,
      impressions: 80030,
      lastUpdated:
        "Wed Feb 21 2024 19:38:40 GMT+0800 (Philippine Standard Time)",
    },
  ]

  const formattedLow = ref(formatDateTable(low))
  const formattedTop = ref(formatDateTable(top))
</script>
