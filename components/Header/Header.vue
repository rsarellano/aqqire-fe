import { sidebarExpanded } from '../Sidebar/SidebarStore';
<template>
  <!-- <header class="sticky top-0 z-30 border-b bg-blue border-slate-200"> -->
  <header class="sticky top-0 z-30 bg-blue-600">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 -mb-px">
        <!-- Header: Left side -->
        <div class="flex">
          <!-- Hamburger button -->
          <button
            class="text-white"
            aria-controls="sidebar"
            @click="toggleSidebar"
            >
            <span class="sr-only">Open sidebar</span>
            <IconBurger />
          </button>
        </div>

        <!-- Header: Right side -->
        <div class="flex items-center space-x-3">
          <button
            class="flex items-center justify-center w-8 h-8 p-1 ml-3 transition duration-150 rounded-full bg-slate-100 hover:bg-slate-200"
            :class="{ 'bg-slate-200': searchModalOpen }"
            aria-controls="search-modal"
            @click.stop="searchModalOpen = true">
            <span class="sr-only">Search</span>
            <IconSearch />
          </button>

          <ModalSearch
            id="search-modal"
            search-id="search"
            :modal-open="searchModalOpen"
            @open-modal="searchModalOpen = true"
            @close-modal="searchModalOpen = false" />

          <Notifications align="right" />

          <Help align="right" />

          <!-- Divider -->
          <hr class="w-px h-6 bg-slate-200" >

          <UserMenu align="right" />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
  import { sidebarExpanded, toggleSidebar } from "../Sidebar/SidebarStore";
  const searchModalOpen = ref(false);
</script>
