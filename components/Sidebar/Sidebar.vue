<template>
  <client-only>
    <!-- Sidebar backdrop (mobile only) -->

    <!-- Sidebar -->

    <div
      id="sidebar"
      ref="sidebar"
      class="fixed z-[100] max-w-full flex flex-col min-h-screen   overflow-y-scroll transition-all duration-200 ease-in-out transform lg:max-w-[25%] 2xl:max-w-[15%] lg:static lg:overflow-y-auto overflow-x-hidden no-scrollbar shrink-0 bg-stone-950"
      :class="sidebarExpanded ? 'w-full p-4' : 'w-0'"
    >
      <!-- Sidebar header -->
      <div class="flex justify-between w-full pr-3 mb-10 sm:px-2">
        <SidebarLogo />
        <!-- Close button -->
        <button
          ref="trigger"
          class="text-white hover:text-slate-400"
          @click="toggleSidebar"
          aria-controls="sidebar"
          :aria-expanded="sidebarExpanded"
        >
          <span class="sr-only">Close sidebar</span>
          <IconArrowLeft />
        </button>

        <!-- Logo -->
      </div>

      <!-- Links -->
      <div class="space-y-8">
        <!-- Pages group -->
        <div>
          <h3 class="pl-3 text-xs font-semibold uppercase text-slate-200">
            <span
              class="hidden w-6 text-center lg:block lg:sidebar-expanded:hidden 2xl:hidden"
              aria-hidden="true"
            >
              •••
            </span>
            <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">
              Broker
            </span>
          </h3>
          <ul class="mt-3">
            <SidebarLinkDashboard />
            <SidebarLinkProperties />
            <!-- <SidebarLinkEmails /> -->
            <SidebarLinkMessages />
            <!-- <SidebarLinkInbox /> -->
            <SidebarLinkSettings />
            <SidebarLinkAdmin  />
          </ul>
        </div>
      </div>

      <!-- Expand / collapse button -->
      <div class="justify-end hidden pt-3 mt-auto lg:inline-flex 2xl:hidden">
        <div class="px-3 py-2">
          <button @click="sidebarExpanded = !sidebarExpanded">
            <span class="sr-only">Expand / collapse sidebar</span>
            <svg
              class="w-6 h-6 fill-current sidebar-expanded:rotate-180"
              viewBox="0 0 24 24"
            >
              <path
                class="text-slate-400"
                d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
              />
              <path
                class="text-slate-600"
                d="M3 23H1V1h2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script setup lang="ts">
  import type { SessionData } from "#auth"
  import { useAuth } from "#imports"

  import { sidebarExpanded, toggleSidebar } from "./SidebarStore"
  const trigger = ref()
  const sidebar = ref()
  const { data } = useAuth()

  console.log(data.value, 'datadata')
  // close if the esc key is pressed
  const keyHandler = (event: KeyboardEvent) => {
    if (event.key === "Escape" && sidebarExpanded.value === true)
      return toggleSidebar()
    return
  }

  onMounted(() => {
    document.addEventListener("keydown", keyHandler)
  })

  onUnmounted(() => {
    document.removeEventListener("keydown", keyHandler)
  })
</script>
