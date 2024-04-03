<template>
  <div class="flex h-screen overflow-hidden bg-white">
    <Sidebar />

    <div
      class="relative flex flex-col flex-1 overflow-x-hidden">
      <!-- Site header -->
      <Header :sidebarOpen="sidebar" @toggle-sidebar="toggleSideBar" />

      <div class='lg:p-4'>

        <slot />
      </div>

      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const sidebar = ref(true);

  const toggleSideBar = () => {
    sidebar.value = !sidebar.value;
  };
</script>
