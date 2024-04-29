<template>
  <SidebarLinkGroup
    v-slot="parentLink"
    :activeCondition="currentRoute.fullPath.includes('/dashboard/settings')">
    <a
      class="block truncate transition duration-150 text-slate-200 hover:text-white"
      :class="
        currentRoute.fullPath.includes('/dashboard/settings') &&
        'hover:text-slate-200'
      "
      href="#0"
      @click.prevent="
        sidebarExpanded ? parentLink.handleClick() : (sidebarExpanded = true)
      ">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24">
            <path
              class="fill-current text-slate-600"
              :class="
                currentRoute.fullPath.includes('settings') && 'text-indigo-500'
              "
              d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z" />
            <path
              class="fill-current text-slate-400"
              :class="
                currentRoute.fullPath.includes('settings') && 'text-indigo-300'
              "
              d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z" />
            <path
              class="fill-current text-slate-600"
              :class="
                currentRoute.fullPath.includes('settings') && 'text-indigo-500'
              "
              d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z" />
            <path
              class="fill-current text-slate-400"
              :class="
                currentRoute.fullPath.includes('settings') && 'text-indigo-300'
              "
              d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z" />
          </svg>
          <span
            class="ml-3 text-sm font-medium duration-200 ">
            Settings
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
          to="/dashboard/settings/account"
          custom
          v-slot="{ href, navigate, isExactActive }">
          <li class="mb-1 last:mb-0">
            <a
              class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
              :class="isExactActive && '!text-indigo-500'"
              :href="href"
              @click="navigate">
              <span
                class="text-sm font-medium duration-200 ">
                My Account
              </span>
            </a>
          </li>
        </NuxtLink>
        <NuxtLink
          to="/dashboard/settings/notifications"
          custom
          v-slot="{ href, navigate, isExactActive }">
          <li class="mb-1 last:mb-0">
            <a
              class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
              :class="isExactActive && '!text-indigo-500'"
              :href="href"
              @click="navigate">
              <span
                class="text-sm font-medium duration-200 ">
                My Notifications
              </span>
            </a>
          </li>
        </NuxtLink>
        <NuxtLink
          to="/dashboard/settings/apps"
          custom
          v-slot="{ href, navigate, isExactActive }">
          <li class="mb-1 last:mb-0">
            <a
              class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
              :class="isExactActive && '!text-indigo-500'"
              :href="href"
              @click="navigate">
              <span
                class="text-sm font-medium duration-200 ">
                Connected Apps
              </span>
            </a>
          </li>
        </NuxtLink>
        <NuxtLink
          to="/dashboard/settings/plans"
          custom
          v-slot="{ href, navigate, isExactActive }">
          <li class="mb-1 last:mb-0">
            <a
              class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
              :class="isExactActive && '!text-indigo-500'"
              :href="href"
              @click="navigate">
              <span
                class="text-sm font-medium duration-200 ">
                Plans
              </span>
            </a>
          </li>
        </NuxtLink>
        <NuxtLink
          to="/dashboard/settings/billing"
          custom
          v-slot="{ href, navigate, isExactActive }">
          <li class="mb-1 last:mb-0">
            <a
              class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
              :class="isExactActive && '!text-indigo-500'"
              :href="href"
              @click="navigate">
              <span
                class="text-sm font-medium duration-200 ">
                Billing & Invoices
              </span>
            </a>
          </li>
        </NuxtLink>
        <NuxtLink
          to="/dashboard/settings/feedback"
          custom
          v-slot="{ href, navigate, isExactActive }">
          <li class="mb-1 last:mb-0">
            <a
              class="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
              :class="isExactActive && '!text-indigo-500'"
              :href="href"
              @click="navigate">
              <span
                class="text-sm font-medium duration-200 ">
                Give Feedback
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
