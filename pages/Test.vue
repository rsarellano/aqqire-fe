<template>
  {{ status }}
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
</script>
