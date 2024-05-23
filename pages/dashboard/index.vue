<template>
  <div class="h-screen max-w-6xl mx-auto"> 
    <h1 class="text-4xl font-bold"> Welcome Back {{ user.name }} </h1>
    <DashboardNav />

  </div>
</template>

<script setup lang="ts">
  const { signIn, token, data, status, lastRefreshedAt } = useAuth()
  const user: any = data.value!
  definePageMeta({
    middleware: "auth",
  })
</script>
