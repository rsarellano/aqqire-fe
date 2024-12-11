<template>
  <button
    class="flex items-center justify-between w-full gap-6 p-1 px-4 rounded"
    :class="active ? 'bg-indigo-100' : 'bg-none'"
    @click="togglePanel">
    <div class="flex items-center truncate">
      <img
        class="w-8 h-8 mr-2 rounded-full"
        :src="imgUrl"
        width="32"
        height="32"
        alt="User 01" >
      <div class="truncate">
        <span class="text-sm font-medium text-slate-800">{{ name }}</span>
      </div>
    </div>
    <div
      class="inline-flex px-2 text-xs font-medium leading-5 text-center text-white bg-indigo-400 rounded-full">
      {{ messages }}
    </div>
  </button>
</template>

<script setup lang="ts">
  import { togglePanel } from "./store"
  const { name, messages, imgUrl } = defineProps<{
    name: string
    messages?: number
    imgUrl: string
    active: boolean
  }>()
</script>
