<template>
  <div class="flex min-h-screen text-gray-800 bg-white">
    <Sidebar />

    <div class="relative flex flex-col flex-1 overflow-x-hidden">
      <!-- Site header -->
      <Header
        :sidebar-open="sidebar"
        @toggle-sidebar="toggleSideBar" />

      <div class="size-full">
        <slot />
      </div>

      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
  const sidebar = ref(true)

  const toggleSideBar = () => {
    sidebar.value = !sidebar.value
  }
</script>
