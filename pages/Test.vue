<template>
  <div
    v-for="item in data.data.Results"
    class="flex flex-col p-4 border border-blue-500">
    <div v-for="(value, key) in item">
      <div class="flex gap-2">
        <span>{{ key }} :</span>
        <span>{{ value }}</span>
      </div>
    </div>
  </div>
  <!-- {{ data }} -->
  {{ status }}
  {{ error }}
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "none",
    auth: false,
  })

  // const { data, error, status } = await useFetch("/api/campaign_clicks", {
  //   query: {
  //     id: "97455c18a892dac405fb9f6b9a19876d",
  //   },
  // })

  // const { data } = useFetch(
  //   "https://api.createsend.com/api/v3.3/clients.json?pretty=true",
  //   {
  //     headers: {
  //       Authorization:
  //         "Basic " +
  //         btoa(
  //           "6FCxKV7cwzV7VXx4Tq5VAInmj8AgK1IUGs3nEIwHDHePm2p+gLhgOaqudZhe+xU2Q+NKefILUOxhJdc1P4yBtXzU2nox3auNy1LZeA9ggXNR60bTaoVejoBiwJNhk+NyOlTubtb4hJQcb9/5qKek2w==:x"
  //         ),
  //     },
  //   }
  // )

  const { data, error, status } = await useFetch("https://api.createsend.com/api/v3.3/campaigns/{campaignid}/clicks.{xml|json}?date={YYYY-MM-DD HH:MM}&page={pagenumber}&pagesize={pagesize}&orderfield={email|list|date}&orderdirection={asc|desc}")

  // const { signIn, token, data, status, lastRefreshedAt, signOut, getSession } =
  //   useAuth()

  // const route = useRoute()
  // const router = useRouter()
  // const arr = ref()
  // const inputValue = ref()

  // const currentPage = ref(Number(route.params.page) || 0)
  // const items = 10
</script>
