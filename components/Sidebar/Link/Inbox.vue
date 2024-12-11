<template>
  <NuxtLink
    v-slot="{ href, navigate, isExactActive }"
    to="/dashboard/inbox"
    custom>
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
              :class="isExactActive && 'text-indigo-500'"
              d="M16 13v4H8v-4H0l3-9h18l3 9h-8Z" />
            <path
              class="fill-current text-slate-400"
              :class="isExactActive && 'text-indigo-300'"
              d="m23.72 12 .229.686A.984.984 0 0 1 24 13v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8c0-.107.017-.213.051-.314L.28 12H8v4h8v-4H23.72ZM13 0v7h3l-4 5-4-5h3V0h2Z" />
          </svg>
          <span
            class="ml-3 text-sm font-medium duration-200">
            Inbox
          </span>
        </div>
      </a>
    </li>
  </NuxtLink>
</template>

<script setup lang="ts"></script>
