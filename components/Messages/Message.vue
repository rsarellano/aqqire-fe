<template>
  <div class="lg:max-w-[50%] flex gap-2 w-full">
    <div class="flex-shrink-0 rounded-full size-12">
      <img
        src="https://picsum.photos/200/300"
        class="rounded-full size-full" >
    </div>

    <div>
      <div
        class="p-3 mb-1 text-sm text-white border border-transparent rounded-lg rounded-tl-none shadow-md bg-main w-min">
        {{ message }}
      </div>
      <div class="flex items-center justify-between">
        <div class="text-xs font-medium text-slate-500">2:40 PM</div>
        <i
          :class="{
            'pi pi-check text-green-500': true,
          }"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { message, align } = defineProps<{ message: string; align?: string }>()
</script>
