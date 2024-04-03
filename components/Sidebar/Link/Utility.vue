<template>
  <SidebarLinkGroup
    v-slot="parentLink"
    :activeCondition="currentRoute.fullPath.includes('utility')">
    <a
      class="block truncate transition duration-150 text-slate-200 hover:text-white"
      :class="
        currentRoute.fullPath.includes('utility') && 'hover:text-slate-200'
      "
      href="#0"
      @click.prevent="
        sidebarExpanded ? parentLink.handleClick() : (sidebarExpanded = true)
      ">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24">
            <circle
              class="fill-current text-slate-400"
              :class="
                currentRoute.fullPath.includes('utility') && 'text-indigo-300'
              "
              cx="18.5"
              cy="5.5"
              r="4.5" />
            <circle
              class="fill-current text-slate-600"
              :class="
                currentRoute.fullPath.includes('utility') && 'text-indigo-500'
              "
              cx="5.5"
              cy="5.5"
              r="4.5" />
            <circle
              class="fill-current text-slate-600"
              :class="
                currentRoute.fullPath.includes('utility') && 'text-indigo-500'
              "
              cx="18.5"
              cy="18.5"
              r="4.5" />
            <circle
              class="fill-current text-slate-400"
              :class="
                currentRoute.fullPath.includes('utility') && 'text-indigo-300'
              "
              cx="5.5"
              cy="18.5"
              r="4.5" />
          </svg>
          <span
            class="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
            Utility
          </span>
        </div>
        <!-- Icon -->
        <div class="flex ml-2 shrink-0">
          <svg
            class="w-3 h-3 ml-1 fill-current shrink-0 text-slate-400"
            :class="parentLink.expanded && 'transform rotate-180'"
            viewBox="0 0 12 12">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </div>
    </a>
    <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
      <ul class="mt-1 pl-9" :class="!parentLink.expanded && 'hidden'">
        <NuxtLink
          to="/utility/changelog"
          custom
          v-slot="{ href, navigate, isExactActive }">
          <li class="mb-1 last:mb-0">
            <a
              class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
              :class="isExactActive && '!text-indigo-500'"
              :href="href"
              @click="navigate">
              <span
                class="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                Changelog
              </span>
            </a>
          </li>
        </NuxtLink>
        <NuxtLink
          to="/utility/roadmap"
          custom
          v-slot="{ href, navigate, isExactActive }">
          <li class="mb-1 last:mb-0">
            <a
              class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
              :class="isExactActive && '!text-indigo-500'"
              :href="href"
              @click="navigate">
              <span
                class="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                Roadmap
              </span>
            </a>
          </li>
        </NuxtLink>
        <NuxtLink
          to="/utility/faqs"
          custom
          v-slot="{ href, navigate, isExactActive }">
          <li class="mb-1 last:mb-0">
            <a
              class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
              :class="isExactActive && '!text-indigo-500'"
              :href="href"
              @click="navigate">
              <span
                class="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                FAQs
              </span>
            </a>
          </li>
        </NuxtLink>
        <NuxtLink
          to="/utility/empty-state"
          custom
          v-slot="{ href, navigate, isExactActive }">
          <li class="mb-1 last:mb-0">
            <a
              class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
              :class="isExactActive && '!text-indigo-500'"
              :href="href"
              @click="navigate">
              <span
                class="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                Empty State
              </span>
            </a>
          </li>
        </NuxtLink>
        <NuxtLink
          to="/utility/404"
          custom
          v-slot="{ href, navigate, isExactActive }">
          <li class="mb-1 last:mb-0">
            <a
              class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
              :class="isExactActive && '!text-indigo-500'"
              :href="href"
              @click="navigate">
              <span
                class="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                404
              </span>
            </a>
          </li>
        </NuxtLink>
      </ul>
    </div>
  </SidebarLinkGroup>
</template>

<script setup lang="ts">
  const currentRoute = useRouter().currentRoute.value;
</script>
