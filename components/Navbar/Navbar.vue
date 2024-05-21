<template>
  <nav
    class="z-[9999] flex items-center justify-between w-full p-12 text-gray-700 bg-blue-500"
  >
    <!-- Logo -->
    <div
      class="flex items-center h-full duration-200 ease-in-out hover:drop-shadow-2xl"
    >
      <NuxtLink to="/">
        <img
          :src="logo"
          alt="Aqqire logo"
          class="object-contain h-10 min-h-8"
        />
      </NuxtLink>
    </div>

    <!-- Main Nav Links -->
    <ul
      class="z-50 items-center justify-center hidden h-full gap-12 p-4 text-sm lg:flex"
    >
      <li
        class="relative text-xl font-bold text-white uppercase duration-200 ease-in-out hover:drop-shadow-2xl group hover:text-slate-700"
        v-for="(link, key) in links"
        :key="key"
      >
        <NuxtLink :to="link.destination">{{ link.text }}</NuxtLink>
        <!-- bar -->
        <div
          class="w-0 group-hover:w-full h-[2px] bg-blue-500 duration-200 ease-in-out"
        ></div>
      </li>
    </ul>
    <div class="flex items-center gap-4" v-if="status=='authenticated'">
      <HomeBurgerMenu />
    </div>
    <div class="flex items-center gap-4" v-if="status!='authenticated'">
      <Login />
    </div>
  </nav>
</template>

<script setup lang="ts">
  //added authentication to access user specific functions 
  import { useAuth } from '#imports'
  const { signOut, token, data, status, lastRefreshedAt } = useAuth()

  import { links } from "./links"
  const logo =
    "https://s3.us-west-1.amazonaws.com/storage.aqqire.com/a9ae25d8-94a0-41ff-be66-40db0720b6aa-aqq%281%29.png"
</script>
