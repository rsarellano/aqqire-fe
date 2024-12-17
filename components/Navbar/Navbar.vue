<template>
  <nav
    class="top-0 w-full py-2 text-gray-700 bg-slate-100 z-[9998] sticky shadow-md">
    <!-- Logo -->
    <div class="flex items-center justify-between mx-auto max-w-7xl">
      <NuxtLink to="/">
        <div
          class="flex items-center h-full duration-200 ease-in-out hover:drop-shadow-2xl">
          <img
            src="/logo.png"
            alt="Aqqire logo"
            class="object-contain size-12 min-h-8" />
          <h2 class="ml-4 text-xl font-bold tracking-wide uppercase">Aqqire</h2>
        </div>
      </NuxtLink>

      <!-- Main Nav Links -->
      <ul
        class="z-[9999] items-center justify-center hidden h-full gap-12 p-4 text-sm lg:flex">
        <template
          v-for="(link, key) in links"
          :key="key">
          <NuxtLink
            v-if="!!!link.requiresAuth || status === 'authenticated'"
            class="relative font-semibold text-gray-600 duration-200 ease-in-out hover:drop-shadow-2xl group hover:text-slate-900"
            :to="link.destination">
            <li>{{ link.text }}</li>
            <div
              class="w-0 group-hover:w-full h-[2px] bg-main duration-200 ease-in-out" />
          </NuxtLink>
        </template>
      </ul>
      <div
        v-if="status == 'authenticated'"
        class="flex items-center gap-4">
        <HomeBurgerMenu />
      </div>
      <div
        v-if="status != 'authenticated'"
        class="flex items-center gap-4">
        <Login />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  //added authentication to access user specific functions
  import { useAuth } from "#imports"

  import { links } from "./links"
  const { signOut, token, data, status } = useAuth()
  const logo =
    "https://s3.us-west-1.amazonaws.com/storage.aqqire.com/a9ae25d8-94a0-41ff-be66-40db0720b6aa-aqq%281%29.png"
</script>
