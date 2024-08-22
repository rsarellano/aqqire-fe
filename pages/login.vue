<template>
  <div class="w-full max-w-md space-y-8">
    <h1 class="my-4 text-4xl font-bold text-center md:text-left">
      Welcome Back!
    </h1>

    <div
      v-if="checkFields"
      class="p-4 italic font-semibold text-red-500 border border-red-500 rounded">
      {{ checkMessage }}
    </div>
    <form
      @submit.prevent="handleSignIn()"
      class="flex flex-col gap-4 px-4 md:px-0">
      <FormKit
        v-model="username"
        label="Email Address"
        name="email"
        type="text"
        validation="email" />
      <FormKit
        v-model="password"
        label="Password"
        type="password"
        validation="required"
        required />
      <Button type="submit">Sign In</Button>
      <NuxtLink
        to="/register"
        class="text-blue-500">
        Dont have an account? Sign up!
      </NuxtLink>
    </form>
  </div>
</template>

<script setup lang="ts">
  //added authentication to access user specific functions
  import { useAuth } from "#imports"
  const { signIn, status } = useAuth()

  const username = ref("")
  const password = ref("")
  const checkFields = ref(false)
  const checkMessage = ref()

  definePageMeta({
    layout: "auth",
    //add authentication specifics
    auth: {
      unauthenticatedOnly: true,
      navigateAuthenticatedTo: "/test",
    },
  })

  //handle user login and rediret to dashboard
  const handleSignIn = async () => {
    try {
      if (username.value === "" || password.value === "") {
        throw new Error("Invalid Login Credentials")
      }
      checkFields.value = false

      const userLogin = await signIn(
        {
          username: username.value,
          password: password.value,
        },
        {
          callbackUrl: "/dashboard",
        }
      )
      console.log(userLogin)
    } catch (error) {
      checkFields.value = true
      checkMessage.value = 'Invalid Credentials'
    }
  }
</script>
