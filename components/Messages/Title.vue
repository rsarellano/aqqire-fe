<template>
  <div class="sticky flex items-center p-5 bg-white border-b shadow-sm top-16">
    <button class="mr-4 lg:hidden" @click="togglePanel">
      <i class="text-lg pi pi-chevron-left"/>
    </button>
    <div class="overflow-x-auto max-w-[40%] lg:max-w-[15%] no-scrollbar">
      <div class="flex -space-x-4">
        <button
          v-for="(item, key) in [...new Array(10)]"
          :key="key"
          class="flex-shrink-0 w-10 h-10 overflow-hidden border-2 rounded-full border-slate-100">
          <img
            class="size-full"
            src="https://picsum.photos/200/300" >
        </button>
      </div>
    </div>

    <div class="flex gap-2 ml-auto">
      <Button
        severity="contrast"
        class="!p-1 !px-1.5 w-min shadow-md h-min border hover:bg-main hover:text-white duration-300 ease-in-out"
        icon="pi pi-info-circle"/>
      <Button
        severity="contrast"
        class="!p-1 !px-1.5 w-min shadow-md h-min border hover:bg-main hover:text-white duration-300 ease-in-out"
        icon="pi pi-check"/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { togglePanel } from "./store"
</script>
