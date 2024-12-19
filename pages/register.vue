<template>
  <div class="flex flex-col w-full max-w-md gap-2">
    <h1 class="my-4 text-2xl font-bold">Create your account</h1>
    <FormKit
      type="email"
      label="Email Address"
    />
    <FormKit
      type="text"
      label="First Name"
    />
    <FormKit
      type="text"
      label="Last Name"
    />
    <FormKit
      type="password"
      label="Password"
    />
    <FormKit
      type="password"
      label="Confirm Password"
    />
    <FormKit
      select-icon="caretDown"
      type="select"
      label="Your Role"
      name="user-role"
      :options="[
        'Broker',
        'Owner',
        'Vendor',
        'Buyer',
        'Company',
        'Marketing',
      ]"
    />

    <Button>Register</Button>
    <NuxtLink
      to="/login"
      class="text-main"
    >
      Already have an account? Login.
    </NuxtLink>
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
