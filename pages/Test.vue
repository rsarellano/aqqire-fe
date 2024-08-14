<template>
  <div>{{ data }}</div>
  {{status}}
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "none",
    auth: false,
  })
  const { signIn, token, data, status, lastRefreshedAt } = useAuth()

  const test = ref()
</script>
