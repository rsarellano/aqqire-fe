<template>
  <div class="flex flex-col w-full max-w-md gap-2">
    <h1 class="my-4 text-2xl font-bold">Reset Your Password</h1>
    <FormKit
      type="email"
      label="Email Address" />
    <Button>Send Reset Link</Button>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "auth",
    auth: {
      unauthenticatedOnly: true,
      navigateAuthenticatedTo: "/dashboard",
    },
  })
</script>
