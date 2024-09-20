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
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="fill-current text-slate-600"
              :class="
                (currentRoute.fullPath === '/admin/properties' ||
                  currentRoute.fullPath.includes('/admin/properties')) &&
                '!text-blue-100'
              "
              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
            />
            <path
              class="fill-current text-slate-600"
              :class="
                (currentRoute.fullPath === '/admin/users' ||
                  currentRoute.fullPath.includes('/admin/users')) &&
                'text-blue-900'
              "
              d="M12 13C5.37 13 2 15.13 2 19V21H22V19C22 15.13 18.63 13 12 13Z"
            />
          </svg>
          <span class="ml-3 text-sm font-medium duration-200">Admin</span>
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
    <div class="lg:block 2xl:block">
      <ul class="mt-1 pl-9" :class="!parentLink.expanded && 'hidden'">
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
</template>

<script setup lang="ts">
import { sidebarExpanded } from "../SidebarStore";
const currentRoute = useRouter().currentRoute.value;
const links = [
  {
    href: "/admin/properties",
    text: "Properties",
  },
  {
    href: "/admin/users",
    text: "Users",
  },
];
</script>
