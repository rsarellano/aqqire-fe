<template>
  <div class="w-full max-w-md space-y-8">
    <h1 class="my-4 text-4xl font-bold text-center md:text-left">
      Welcome Back!
    </h1>
    <form
      @submit.prevent="handleSignIn()"
      class="flex flex-col gap-4 px-4 md:px-0"
    >
      <FormKit
        v-model="username"
        type="text"
        required
        placeholder="Username"
      />
      <FormKit
        v-model="password"
        type="password"
        required
        placeholder="Password"
      />
      <Button type="submit">Sign In </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue"

  //added authentication to access user specific functions
  import { useAuth } from "#imports"
  const { signIn, token, data, status, lastRefreshedAt } = useAuth()
  const test = useAuth()

  const username = ref("")
  const password = ref("")

  definePageMeta({
    layout: "auth",
    //add authentication specifics
    auth: {
      unauthenticatedOnly: true,
      navigateAuthenticatedTo: "/dashboard",
    },
  })

  //handle user login and rediret to dashboard
  const handleSignIn = async () => {
    try {
      await signIn(
        { username: username.value, password: password.value },
        { callbackUrl: "/dashboard" }
      )
    } catch (error) {
      console.error(error)
    }
  }
</script>
