<template>
  <Card
class="mx-1 overflow-hidden border border-black grow" 
  :pt="{
    content: { class: '!py-0'}
  }">
    <template #header>
      <div
        class="group relative block max-h-[200px] size-full hover:!bg-[400%] duration-300 overflow-hidden">
        <img
          :src="image"
          class="scale-125 duration-700 ease-in-out group-hover:scale-[1.8] -z-9999" >

        <div class="absolute flex gap-1 top-4 right-4">
          <div class="p-1 px-2 text-xs font-bold text-white bg-blue-500">
            For Sale
          </div>
          <div class="p-1 px-2 text-xs font-bold text-white bg-blue-500">
            Featured
          </div>
          <div class="p-1 px-2 text-xs font-bold text-white bg-blue-500">
            New
          </div>
        </div>

        <div
          class="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4 duration-500 opacity-0 group-hover:opacity-100 group-hover:bg-gradient-to-t from-slate-600 to-transparent">
          <a
            href="#"
            class="flex items-center gap-2">
            <img
              src="https://lion-coders.com/dzemo/html/sarchholm-real-estate-template/images/agents/agent_min_1.jpg"
              class="h-8 rounded-full w-min" >
            <p class="text-white">Tony Stark</p>
          </a>
          <div class="flex gap-2 text-white">
            <a
              href="#"
              class="duration-300 ease-in-out hover:fill-white fill-slate-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960  960"
                class="w-8 h-8">
                <path
                  d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </template>

    <template #title>
      <h2 class="text-sm font-semibold uppercase lg:text-xl">
        Villa on hartford
      </h2>
    </template>
    <template #subtitle>
      <p class="text-xs text-gray-500">2854 Meadow View Drive, Hartford, USA</p>
    </template>

    <template #content>
      <div
        class="grid justify-between w-full grid-cols-1 text-sm lg:grid-cols-2 gap-x-4">
        <div>- 4 Bedrooms</div>
        <div>- 3 baths</div>
        <div>- 2 Garage</div>
        <div>- 2142 sq. ft</div>
      </div>
      <div class="w-full h-[1px] mt-4 bg-gray-500"/>
      <div class="flex justify-between mt-2">
        <div class="pl-2 font-bold">Tony Stark</div>
        <div class="flex items-baseline gap-1">
          <p class="font-bold text-blue-500">$7500</p>
        </div>
      </div>
    </template>
  </Card>
</template>
<script lang="ts" setup>
  import { getRandomImage, images } from "~/pages/data"
  const image = ref(images[getRandomImage()])
</script>
