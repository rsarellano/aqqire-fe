<template>
  <NuxtLink
    to="/dashboard/home"
    class="text-white transition-all duration-150 ease-in-out group hover:text-slate-300">
    <li
      class="px-3 py-2 rounded-sm mb-0.5 last:mb-0"
      :class="
        currentRoute.fullPath === '/dashboard' && 'bg-gray-600/40 rounded-xl'
      ">
      <!-- <a
        class="block truncate transition duration-150 text-slate-200 hover:text-white"
        :class="isExactActive && 'hover:text-slate-200'"
        @click="navigate"> 
      </a>
      -->
      <div class="flex items-center">
        <svg
          class="w-6 h-6 shrink-0"
          viewBox="0 0 24 24">
          <path
            class="fill-current text-slate-400"
            :class="
              currentRoute.fullPath.includes('/dashboard') && '!text-slate-400'
            "
            d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" />
          <path
            class="fill-current text-slate-600"
            :class="
              currentRoute.fullPath.includes('/dashboard') && 'text-indigo-600'
            "
            d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z" />
          <path
            class="fill-current text-slate-400"
            :class="
              currentRoute.fullPath.includes('/dashboard') && 'text-white'
            "
            d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z" />
        </svg>
        <span
          class="ml-3 text-sm font-medium truncate duration-200 lg:opacity-100"
          :class="{
            'animate-pulse': currentRoute.fullPath === '/dashboard',
          }">
          Dashboard
        </span>
      </div>
    </li>
  </NuxtLink>
</template>

<script setup lang="ts">
  const currentRoute = useRouter().currentRoute.value
</script>
