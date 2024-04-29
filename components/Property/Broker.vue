<template>
  <div
    class="flex flex-col items-center justify-start p-8 space-y-2 bg-white rounded-md">
    <p class="pb-4 text-2xl font-bold"> Broker Details</p>
    <NuxtLink
      to="/"
      class="overflow-hidden rounded-xl size-36 border-slate-400"
      ><img
        src="https://fastly.picsum.photos/id/928/200/300.jpg?hmac=0vBcHV9dVfFTsvcFDn8PRUQiOaH72_2aaKnmlU1PHWk"
        class="w-full h-full"
    /></NuxtLink>

    <NuxtLink
      to="/"
      class="text-xl font-bold text-slate-600"
      >John Allen Doe</NuxtLink
    >
    <p class="text-slate-400"> Investment Sales Advisor at Capstone</p>
    <NuxtLink
      to="/"
      class="overflow-hidden">
      <img
        src="https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg"
        class="max-w-28"
        alt="" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
</script>
