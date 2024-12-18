<template>
  <div class="mx-auto space-y-4">
    <h1 class="text-2xl font-bold md:text-4xl">
      Welcome Back
      <span class="text-main">{{ user.first_name }} {{ user.last_name }}</span>
    </h1>

    <div>
      <h2
        class="p-4 py-2 text-lg font-semibold text-center text-white bg-blue-600 rounded-t">
        My Dashboard
      </h2>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { useAuth } from "#imports"
  import { useRuntimeConfig } from "#app"
  const apiUrl = useRuntimeConfig().public.API_BASE_URL
  const { data: authData } = useAuth()

  const user = computed(() => authData.value)
  const loading = ref(true)

  definePageMeta({
    middleware: "auth",
  })

  // Helper function to format ISO date (you might want to move this to a separate utility file)
  const formatISODate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString()
  }
</script>
