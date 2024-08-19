<template>
  <div class="p-4">
    {{ data }}
    {{ status }}
    <button
      @click="getData"
      class="p-4 m-4 text-white border rounded-md bg-slate-500">
      Get Data
    </button>
    <FormKit
      type="text"
      name="email"
      v-model="inputValue"
      accesskey=""
      @input="handleInput('email', $event)"
      :delay="400" />

    {{ arr }}

    <div class="w-full h-4 my-2 bg-red-500"></div>
    <div class="font-bold">Aqqire Data:</div>
    <!-- {{ data }}
    {{ error }}
    {{ status }} -->
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "none",
    auth: false,
  })
  const { signIn, token, data, status, lastRefreshedAt, signOut, getSession } =
    useAuth()

  const route = useRoute()
  const router = useRouter()
  const arr = ref()
  const inputValue = ref()

  const currentPage = ref(Number(route.params.page) || 0)
  const items = 10

  const handleInput = async (field: string, value?: string) => {
    const req = await $fetch(`https://api3.aqqire.com/users`, {
      params: {
        field,
        value,
      },
    })
    arr.value = req
  }
  const fetchData = async () => {
    const { data, execute, refresh, error, status } = await useFetch(
      () => `https://api3.aqqire.com/users`,
      {
        query: {
          page: currentPage,
          items,
        },
        immediate: true,
      }
    )
    arr.value = data.value
  }

  const getData = async () => {
    currentPage.value = currentPage.value + 1
    await router.push({ query: { ...route.query, page: currentPage.value } })
    await fetchData()
  }
  fetchData()
</script>
