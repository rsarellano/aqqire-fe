<template>
  <div class="flex h-screen text-gray-800 bg-white">
    <Sidebar />

    <div class="relative flex flex-col flex-1 overflow-x-hidden">
      <!-- Site header -->
      <Header
        :sidebarOpen="sidebar"
        @toggle-sidebar="toggleSideBar" />
      <section
        v-if="isPremium === false"
        class="relative flex flex-col items-center justify-center max-w-6xl gap-4 p-4 mx-auto mt-2 lg:flex-row">
        <img src="https://picsum.photos/700/100" />
        <p class="absolute p-4 font-bold bg-white rounded-md/80"
          >Advertisement</p
        >
      </section>
      <div
        class="flex flex-col items-center gap-4 p-4 md:flex-row md:items-start md:justify-center">
        <!-- Advertisement left -->
        <!-- Uncomment to show -->
        <!-- <section
          class="w-full h-full pt-4 max-w-36"
          v-if="isPremium === false">
          <img
            src="https://picsum.photos/120/700"
            class="sticky hidden w-full md:block top-4" />
        </section> -->

        <div class="lg:p-4">
          <slot />
        </div>

        <!-- Advertisement Right -->
        <!-- Uncomment -->
        <!-- <section
          class="w-full h-full pt-4 max-w-36"
          v-if="isPremium === false">
          <img
            src="https://picsum.photos/120/700"
            class="sticky hidden w-full md:block top-4" />
        </section> -->
      </div>
      <section
        v-if="isPremium === false"
        class="relative flex flex-col items-center justify-center max-w-6xl gap-4 p-4 mx-auto mt-2 lg:flex-row">
        <img src="https://picsum.photos/700/100" />
        <p class="absolute p-4 font-bold bg-white rounded-md/80"
          >Advertisement</p
        >
      </section>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { isPremium } from '../store/isPremium'

  const sidebar = ref(true)

  const toggleSideBar = () => {
    sidebar.value = !sidebar.value
  }
</script>
