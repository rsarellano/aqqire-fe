<template>
  <div class="w-full max-w-md">
    <h1 class="my-4 text-2xl font-bold">Welcome Back!</h1>
    <pre>Status: {{ status }}</pre>
    <pre>Data: {{ data || 'no session data present, are you logged in?' }}</pre>
    <pre>Last refreshed at: {{ lastRefreshedAt || 'no refresh happened' }}</pre>
    <pre>JWT token: {{ token || 'no token present, are you logged in?' }}</pre>
    <form @submit.prevent="handleSignIn()">
      <input v-model="username" type="text" placeholder="Username">
      <input v-model="password" type="password" placeholder="Password">
      <button type="submit">
        sign in
      </button>
    </form>
    
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
//added authentication to access user specific functions 
import { useAuth } from '#imports'
const { signIn, token, data, status, lastRefreshedAt } = useAuth()

const username = ref('')
const password = ref('')

definePageMeta({
  layout: "auth",
  //add authentication specifics
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/dashboard'
  }
})

//handle user login and rediret to dashboard 
const handleSignIn = async () => {
  try {
      await signIn({ username: username.value, password: password.value }, { callbackUrl: '/dashboard' });
      } catch (error) {
      console.error(error)
    }
}

</script>
