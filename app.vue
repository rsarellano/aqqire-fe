<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
//added authentication to access user specific functions 
import { useAuth } from '#imports'
const { signIn, token, data, status, lastRefreshedAt, signOut, getSession } = useAuth()

</script> 

<style>
  @import url("~/assets/css/base.css");
  @import url('primeicons/primeicons.css')

</style>
