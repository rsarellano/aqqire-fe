<template>
  <div> </div>
</template>

<script setup lang="ts">
  import type { SessionData } from "#auth"
  import { useAuth } from "#imports"
  definePageMeta({
    layout: "none",
    auth: false,
  })

  const { data, status } = useAuth()
</script>
