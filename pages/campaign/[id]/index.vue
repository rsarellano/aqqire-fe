<template>
  <div class="p-4 space-y-4">
    <div class="flex items-center justify-between">
      <NuxtLink to="/campaign/sent">
        <Button><i class="pi pi-arrow-left"></i></Button>
      </NuxtLink>
      <h1 class="p-2 mx-auto text-4xl font-bold text-center">
        {{ route.query.name }} Campaign Details
      </h1>
    </div>

    <!-- Skeleton -->
     <div class="px-6 space-y-14">
      
    <Suspense>
      <CampaignClicks />
      <template #fallback>
        <CampaignSkeleton />
      </template>
    </Suspense>

    <Suspense>
      <CampaignOpens />
      <template #fallback>
        <CampaignSkeleton />
      </template>
    </Suspense>
  </div>

  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "none",
    auth: false,
  })

  // type data = {
  //   status: string
  //   totalOpens: number
  //   totalClicks: number
  //   clicks: clicks[]
  //   opens: opens[]
  // }

  const route = useRoute()
  // const { data, error, status } = await useFetch<data>("/api/campaign_clicks", {
  //   query: {
  //     id: route.params.id,
  //   },
  // })
</script>
