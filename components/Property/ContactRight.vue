<template>
  <div class="relative flex flex-col w-full gap-2 p-8 bg-white rounded-md h-min">
    <div
      v-if="status === 'unauthenticated'"
      class="flex flex-col gap-4 size-full">
      <h2 class="my-4 text-2xl font-bold text-center uppercase text-slate-700">
        Contact Broker
      </h2>
      <SignInToUse message="Sign in to Contact" />
      <Skeleton height="2rem" />
      <Skeleton height="2rem" />
      <Skeleton height="2rem" />
      <Skeleton height="2rem" />
      <Button/>
    </div>
    <div
      v-else
      class="size-full">
      <h2 class="my-4 text-2xl font-bold text-center uppercase text-slate-700">
        Contact Broker
      </h2>
      <PropertyBuyer />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { message } from "./contactStore"
  import { useAuth } from "#imports"
  const { signOut, token, data, status } = useAuth()
</script>
