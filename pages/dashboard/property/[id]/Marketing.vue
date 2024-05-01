<template>
  <div class="p-4 px-8 pb-12 space-y-4">
    <h1 class="mb-12 text-2xl font-bold text-center"
      >Property Marketing Tools</h1
    >

    <!-- Top Properties Here -->
    <div>
      <h2
        class="p-4 py-2 text-lg font-semibold text-center text-white bg-blue-600 rounded-t"
        >Top Performing Properties</h2
      >

      <DataTable
        :value="formattedTop"
        size="small"
        show-gridlines
      >
        <Column
          field="name"
          header="Property"
          sortable
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
          header="Impressions"
          sortable
        ></Column>
        <Column
          field="lastUpdated.value"
          header="Last Updated"
          sortable
        ></Column>
      </DataTable>
    </div>

    <!-- Low performing Properties -->
    <div>
      <h2
        class="p-4 py-2 mt-8 text-lg font-semibold text-center text-white bg-yellow-600 rounded-t"
        >Low Performing Properties</h2
      >
      <DataTable
        :value="formattedLow"
        size="small"
        show-gridlines
      >
        <Column
          field="name"
          header="Property"
          sortable
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
          header="Impressions"
          sortable
        ></Column>
        <Column
          field="lastUpdated.value"
          header="Last Updated"
          sortable
        ></Column>
      </DataTable>
    </div>

    <h1 class="pt-6 text-2xl font-bold">Other Marketing Tools</h1>
    <p class="py-2 text-gray-600">
      We recommend some marketing tools that you can avail to gather more
      exposure:</p
    >

    <div class="flex flex-wrap gap-2">
      <Button
        class="!p-1 group bg-blue-500 max-w-64 w-full"
        v-ripple
      >
        <Card class="p-2 !bg-blue-600 w-max h-full">
          <template #title>
            <div class="flex justify-start text-white">
              <i class="text-3xl pi pi-envelope"></i>
            </div>
          </template>
          <template #content>
            <p class="font-bold text-left text-white">Exclusive Emails</p>
            <p
              class="max-w-[200px] text-xs text-left text-white leading-5 py-2"
            >
              Opt in to our exclusive emails (Included in our Premium plans)</p
            >
          </template>
        </Card>
      </Button>

      <Button
        class="!p-1 group bg-blue-500 max-w-64 w-full"
        v-ripple
      >
        <Card class="p-2 !bg-blue-600 w-full h-full">
          <template #title>
            <div class="-mt-2.5">
              <IconRobot class="size-10 fill-white" />
            </div>
          </template>
          <template #content>
            <div class="">
              <p class="mt-auto font-bold text-left text-white"
                >Ai Assistance</p
              >
              <p
                class="max-w-[200px] text-xs text-left text-white leading-5 py-2"
              >
                Ai Generated Promotional Advertisements (Included on our Premium
                Plan)
              </p>
            </div>
          </template>
        </Card>
      </Button>

      <Button
        class="!p-1 group bg-blue-500 max-w-64 w-full"
        v-ripple
      >
        <Card class="p-2 !bg-blue-600 w-max h-full">
          <template #title>
            <div class="flex justify-start text-white">
              <i class="text-3xl pi pi-flag"></i>
            </div>
          </template>
          <template #content>
            <p class="font-bold text-left text-white">Banner Ads</p>
            <p
              class="max-w-[200px] text-xs text-left text-white leading-5 py-2"
            >
              Banner Advertisements on Aqqire Website (Included on our Premium
              Plan)
            </p>
          </template>
        </Card>
      </Button>

      <Button
        class="!p-1 group bg-blue-500 max-w-64 w-full"
        v-ripple
      >
        <Card class="p-2 !bg-blue-600 w-max h-full">
          <template #title>
            <div class="flex justify-start text-white">
              <i class="text-3xl pi pi-ellipsis-h"></i>
            </div>
          </template>
          <template #content>
            <p class="font-bold text-left text-white">Other tools</p>
            <p
              class="max-w-[200px] text-xs text-left text-white leading-5 py-2"
            >
              Check out our other value adding marketing Tools (Included on our
              Premium Plan)
            </p>
          </template>
        </Card>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  const formatDateTable = (arr: any) => {
    return arr.map((item: any) => {
      return { ...item, lastUpdated: elapsedSince(item.lastUpdated) }
    })
  }
  const top = [
    {
      name: 'Berge Springs',
      clicks: 752,
      views: 96105,
      impressions: 2062,
      lastUpdated:
        'Thu Sep 07 2023 23:28:53 GMT+0800 (Philippine Standard Time)',
    },
    {
      name: 'Hoppe Trail',
      clicks: 421,
      views: 69783,
      impressions: 67332,
      lastUpdated:
        'Tue Sep 26 2023 10:56:31 GMT+0800 (Philippine Standard Time)',
    },
    {
      name: 'Brekke Port',
      clicks: 359,
      views: 71790,
      impressions: 95046,
      lastUpdated:
        'Sat Feb 10 2024 03:05:17 GMT+0800 (Philippine Standard Time)',
    },
    {
      name: 'Madisen Freeway',
      clicks: 474,
      views: 95976,
      impressions: 36169,
      lastUpdated:
        'Mon Aug 28 2023 09:54:45 GMT+0800 (Philippine Standard Time)',
    },
    {
      name: 'Alfredo Pines',
      clicks: 46,
      views: 53993,
      impressions: 90555,
      lastUpdated:
        'Fri May 05 2023 17:39:08 GMT+0800 (Philippine Standard Time)',
    },
  ]
  const low = [
    {
      name: 'Klocko Isle',
      clicks: 582,
      views: 12818,
      impressions: 28780,
      lastUpdated:
        'Sun Mar 24 2024 20:29:18 GMT+0800 (Philippine Standard Time)',
    },
    {
      name: 'Schneider Tunnel',
      clicks: 353,
      views: 33606,
      impressions: 66458,
      lastUpdated:
        'Tue Apr 02 2024 12:18:23 GMT+0800 (Philippine Standard Time)',
    },
    {
      name: 'Ullrich Crossroad',
      clicks: 612,
      views: 50406,
      impressions: 94756,
      lastUpdated:
        'Fri Aug 18 2023 04:53:21 GMT+0800 (Philippine Standard Time)',
    },
    {
      name: 'Tillman Falls',
      clicks: 553,
      views: 78391,
      impressions: 6890,
      lastUpdated:
        'Sat Jul 01 2023 06:46:16 GMT+0800 (Philippine Standard Time)',
    },
    {
      name: 'Verner Tunnel',
      clicks: 398,
      views: 36811,
      impressions: 80030,
      lastUpdated:
        'Wed Feb 21 2024 19:38:40 GMT+0800 (Philippine Standard Time)',
    },
  ]

  const formattedLow = ref(formatDateTable(low))
  const formattedTop = ref(formatDateTable(top))
</script>
