<template>
  <nav
    class="fixed top-0 z-[9999] lg:static flex items-center justify-between w-full p-12 text-gray-700 lg:bg-white bg-transparent">
    <!-- Logo -->
    <div
      class="flex items-center h-full duration-200 ease-in-out hover:drop-shadow-2xl">
      <NuxtLink to="/">
        <img
          :src="logo"
          alt="Aqqire logo"
          class="object-contain h-10 min-h-8 lg:invert" />
      </NuxtLink>
    </div>

    <!-- Main Nav Links -->
    <ul
      class="z-50 items-center justify-center hidden h-full gap-12 p-4 text-sm lg:flex">
      <li
        class="relative text-xl font-bold uppercase duration-200 ease-in-out hover:text-blue-500 hover:drop-shadow-2xl group"
        v-for="(link, key) in links"
        :key="key">
        <NuxtLink :to="link.destination">{{ link.text }}</NuxtLink>
        <!-- bar -->
        <div
          class="w-0 group-hover:w-full h-[2px] bg-blue-500 duration-200 ease-in-out"></div>
      </li>
    </ul>
    <div class="flex items-center gap-4">
      <Login />

      <HomeBurgerMenu />
    </div>
  </nav>
</template>

<script setup lang="ts">
  import { links } from "./links";
  const logo =
    "https://s3.us-west-1.amazonaws.com/storage.aqqire.com/a9ae25d8-94a0-41ff-be66-40db0720b6aa-aqq%281%29.png";
</script>
