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
      class="flex flex-col gap-4 px-4 md:px-0"
      @submit.prevent="handleSignIn()">
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

      <FormKit
        v-model="rememberMe"
        type="checkbox"
        label="Remember Me"
        name="rememberMe"
        decorator-icon="check" />

      <Button type="submit">Sign In</Button>
      <NuxtLink
        to="/register"
        class="text-main">
        Dont have an account? Sign up!
      </NuxtLink>
      <NuxtLink
        to="/Forgot-password"
        class="text-main">
        Forgot Password?
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
  const rememberMe = ref(false)
  const checkFields = ref(false)
  const checkMessage = ref()

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
      checkMessage.value = "Invalid Credentials"
    }
  }

  onMounted(async () => {
    const { status } = useAuth()
    if (status.value === "authenticated") {
      reloadNuxtApp({ path: "/dashboard" })
    } else {
      reloadNuxtApp({ path: "/login" })
    }
  })
</script>
