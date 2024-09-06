<template>
  <div
    class="flex flex-col items-center justify-start p-8 space-y-2 bg-white rounded-md">
    <p class="pb-4 text-2xl font-bold">Broker Details</p>
    <NuxtLink
      to="/"
      class="overflow-hidden rounded-xl size-36 border-slate-400">
      <img
        :src="
          imgUrl ||
          ' https://fastly.picsum.photos/id/928/200/300.jpg?hmac=0vBcHV9dVfFTsvcFDn8PRUQiOaH72_2aaKnmlU1PHWk'
        "
        alt="Broker Profile Picture"
        class="w-full h-full" />
    </NuxtLink>

    <NuxtLink
      to="/"
      class="text-xl font-bold text-slate-600">
      {{ firstName }} {{ lastName }}
    </NuxtLink>
    <p class="text-slate-400">{{ workType }}</p>
    <NuxtLink
      to="/"
      class="overflow-hidden">
      <img
        v-if="logo"
        :src="logo"
        class="max-w-28"
        alt="Broker Company Logo" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  const { firstName, lastName, imgUrl, workType } = defineProps<{
    firstName?: string
    lastName?: string
    workType?: string
    imgUrl?: string
    logo?: string
  }>()
</script>
