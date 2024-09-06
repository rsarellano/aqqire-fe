<template>
  <NuxtLink
    to="/login"
    class="absolute inset-0 z-50 flex items-center justify-center text-lg font-semibold bg-white/60 size-full backdrop-blur-sm">
    <Button>
      {{ message }}
    </Button>
  </NuxtLink>
</template>

<script setup lang="ts">
  const { message } = defineProps<{ message: string }>()
</script>
