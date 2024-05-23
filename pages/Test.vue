<template>
  <div v-if="status === 'authenticated'">
    
    {{ status }}
    {{ data }}
  </div>
  <div v-else>hello</div>
</template>

<script setup lang="ts">
  const { signIn, token, data, status, lastRefreshedAt } = useAuth()
</script>
