<template>
  <div
    class="relative flex flex-col justify-end flex-1 overflow-hidden border rounded group hover:shadow-xl min-w-56 w-full max-w-56 h-full">
    <img
      src="https://lion-coders.com/demo/html/sarchholm-real-estate-template/images/property/property_1.jpg"
      class="scale-125 h-full duration-700 ease-in-out group-hover:scale-[1.8] -z-9999 absolute inset-0 w-full" >

    <div
      class="z-20 flex flex-col w-full gap-2 overflow-hidden duration-700 bg-gray-700/30">
      <div class="p-2 space-y-2">
        <div class="flex gap-[2px] text-white">
          <Tag
            value="$11,000"
            class="p-1 text-xs bg-blue-400 rounded w-min"
            :class="{
              'line-through': props.sale === true,
              'font-bold': props.sale === false,
            }" />
        </div>
        <div class="text-sm font-semibold text-white">3398 Lodgeville Road</div>
      </div>
    </div>

    <div class="absolute top-2 right-2">
      <Tag
        value="For Sale"
        class="z-30 bg-blue-400"
        rounded />
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    sale: Boolean,
  })
</script>
