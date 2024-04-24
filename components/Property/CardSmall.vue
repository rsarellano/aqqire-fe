<template>
  <div
    class="relative flex flex-col justify-end w-full h-full overflow-hidden border rounded group hover:shadow-xl md:min-w-64 md:min-h-52 lg:min-h-32 min-h-52 min-w-52 lg:min-w-52">
    <img
      src="https://lion-coders.com/demo/html/sarchholm-real-estate-template/images/property/property_1.jpg"
      class="scale-125 h-full duration-700 ease-in-out group-hover:scale-[1.8] -z-9999 absolute inset-0 w-full" />

    <div
      class="z-50 flex flex-col w-full gap-2 overflow-hidden duration-700 bg-gray-700/30">
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
        class="bg-blue-400"
        rounded />
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    sale: Boolean,
  })
</script>
