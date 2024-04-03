<template>
  <div
    class="relative flex flex-col justify-end w-full h-full overflow-hidden border rounded min-h-52 group hover:shadow-xl">
    <img
      src="https://lion-coders.com/demo/html/sarchholm-real-estate-template/images/property/property_1.jpg"
      class="scale-125 h-full duration-700 ease-in-out group-hover:scale-[1.8] -z-9999 absolute inset-0" />

    <div
      class="z-50 flex flex-col w-full gap-2 overflow-hidden duration-700 bg-gray-700/30">
      <div class="p-2 space-y-2">
        <div class="flex gap-[2px] text-white">
          <div
            class="p-1 text-xs bg-blue-400 rounded w-min"
            :class="{
              'line-through': props.sale === true,
              'font-bold': props.sale === false,
            }">
            $11,000
          </div>

          <div
            v-if="props.sale"
            class="p-1 text-xs font-bold bg-green-400 rounded w-min">
            $9,500
          </div>
        </div>
        <div class="text-sm font-semibold text-white">3398 Lodgeville Road</div>
      </div>
    </div>
    <div
      class="z-50 text-white duration-500 ease-in-out bg-blue-400 max-h-0 group-hover:max-h-full">
      <ul class="flex justify-between gap-2 p-2 px-4 text-xs text-center">
        <li>
          <div>Area:</div>
          <div>240m</div>
        </li>
        <li>
          <div>Beds:</div>
          <div>2</div>
        </li>
        <li>
          <div>Baths:</div>
          <div>2</div>
        </li>
        <li>
          <div>Garages:</div>
          <div>0</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    sale: Boolean,
  });
</script>
