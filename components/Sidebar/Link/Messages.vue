<template>
  <NuxtLink
    to="/dashboard/messages"
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
        <div class="flex items-center justify-between">
          <div class="flex items-center grow">
            <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24">
              <path
                class="fill-current text-slate-600"
                :class="isExactActive && 'text-indigo-500'"
                d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z" />
              <path
                class="fill-current text-slate-400"
                :class="isExactActive && 'text-indigo-300'"
                d="M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z" />
            </svg>
            <span
              class="ml-3 text-sm font-medium duration-200">
              Messages
            </span>
          </div>
          <!-- Badge -->
          <div class="flex flex-shrink-0 ml-2">
            <span
              class="inline-flex items-center justify-center h-5 px-2 text-xs font-medium text-white bg-indigo-500 rounded">
              4
            </span>
          </div>
        </div>
      </a>
    </li>
  </NuxtLink>
</template>

<script setup lang="ts"></script>
