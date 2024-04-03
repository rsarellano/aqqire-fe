<template>
  <NuxtLink
    to="/dashboard/properties"
    custom
    v-slot="{ href, navigate, isExactActive }">
    <li
      class="px-3 py-2 rounded-sm mb-0.5 last:mb-0"
      :class="isExactActive && 'bg-stone-800'">
      <a
        class="block truncate transition duration-150 text-slate-200 hover:text-white"
        :class="isExactActive && 'hover:text-slate-200'"
        :href="href"
        @click="navigate">
        <div class="flex items-center">
          <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24">
            <path
              class="fill-current text-slate-600"
              :class="
                (currentRoute.fullPath === '/dashboard/properties' ||
                  currentRoute.fullPath.includes('/dashboard/properties')) &&
                '!text-blue-100'
              "
              d="M9 21v-6a2 2 0 0 1 2 -2h2c.645 0 1.218 .305 1.584 .78" />
            <path
              class="fill-current text-slate-600"
              :class="
                (currentRoute.fullPath === '/dashboard/properties' ||
                  currentRoute.fullPath.includes('/dashboard/properties')) &&
                'text-blue-900'
              "
              d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h4" />
            <path
              class="fill-current text-slate-400"
              :class="
                (currentRoute.fullPath === '/dashboard/properties' ||
                  currentRoute.fullPath.includes('/dashboard/properties')) &&
                'text-white'
              "
              d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" />
          </svg>
          <span
            class="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
            Properties
          </span>
        </div>
      </a>
    </li>
  </NuxtLink>
</template>

<script setup lang="ts">
  const currentRoute = useRouter().currentRoute.value;
</script>
