<template>
  <div class="w-full max-w-md">
    <h1 class="my-4 text-2xl font-bold">Welcome Back!</h1>
    <FormKit type="email" label="Email Address" />
    <FormKit type="password" label="Password" />
    <Button class="w-full my-4">Sign In</Button>
    <NuxtLink
      to="/forgot-password"
      class="underline underline-offset-2 text-slate-900">
      Forgot Password?
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "auth",
  });
</script>
