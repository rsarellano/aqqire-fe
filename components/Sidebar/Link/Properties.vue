<template>
  <SidebarLinkGroup
    v-slot="parentLink"
    :activeCondition="currentRoute.fullPath.includes('property')"
  >
    <a
      class="block truncate transition duration-150 text-slate-200 hover:text-white"
      :class="
        currentRoute.fullPath.includes('utility') && 'hover:text-slate-200'
      "
      href="#0"
      @click.prevent="
        sidebarExpanded ? parentLink.handleClick() : (sidebarExpanded = true)
      "
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <svg
            class="w-6 h-6 shrink-0"
            viewBox="0 0 24 24"
          >
            <path
              class="fill-current text-slate-600"
              :class="
                (currentRoute.fullPath === '/dashboard/properties' ||
                  currentRoute.fullPath.includes('/dashboard/properties')) &&
                '!text-blue-100'
              "
              d="M9 21v-6a2 2 0 0 1 2 -2h2c.645 0 1.218 .305 1.584 .78"
            />
            <path
              class="fill-current text-slate-600"
              :class="
                (currentRoute.fullPath === '/dashboard/properties' ||
                  currentRoute.fullPath.includes('/dashboard/properties')) &&
                'text-blue-900'
              "
              d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h4"
            />
            <path
              class="fill-current text-slate-400"
              :class="
                (currentRoute.fullPath === '/dashboard/properties' ||
                  currentRoute.fullPath.includes('/dashboard/properties')) &&
                'text-white'
              "
              d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z"
            />
          </svg>
          <span class="ml-3 text-sm font-medium duration-200">
            Properties
          </span>
        </div>
        <!-- Icon -->
        <div class="flex ml-2 shrink-0">
          <svg
            class="w-3 h-3 ml-1 fill-current shrink-0 text-slate-400"
            :class="parentLink.expanded && 'transform rotate-180'"
            viewBox="0 0 12 12"
          >
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </div>
    </a>
    <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
      <ul
        class="mt-1 pl-9"
        :class="!parentLink.expanded && 'hidden'"
      >
        <NuxtLink
          v-for="(link, key) in links"
          :key="key"
          :to="link.href"
          class="block mb-1 truncate transition duration-150 text-slate-400 hover:text-slate-200 last:mb-0"
        >
          <span class="text-sm font-medium duration-200">
            {{ link.text }}
          </span>
        </NuxtLink>
      </ul>
    </div>
  </SidebarLinkGroup>

  <NuxtLink
    to="/dashboard/property/saved"
    >
    <li
      class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 block truncate transition duration-150 text-slate-200 hover:text-white"
      >
   
        <div class="flex items-center justify-between">
          <div class="flex items-center grow">
           <i class="pl-1 text-gray-600 pi pi-bookmark-fill"></i>
            <span
              class="pl-4 text-sm font-medium duration-200 ">
              Saved Properties
            </span>
          </div>
        </div>
    </li>
  </NuxtLink>
</template>

<script setup lang="ts">
  import { sidebarExpanded } from "../SidebarStore"
  const currentRoute = useRouter().currentRoute.value
  const links = [
    {
      href: "/dashboard/property/active",
      text: "Active Properties",
    },
    {
      href: "/dashboard/property/inactive",
      text: "Inactive Properties",
    },
    {
      href: "/dashboard/property/sold",
      text: "Sold Properties",
    },
  ]
</script>
