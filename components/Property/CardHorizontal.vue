<template>
  <NuxtLink
    :to="`/property/${id}`"
    class="flex flex-col w-full overflow-hidden rounded-md shadow-lg cursor-pointer md:flex-row hover:shadow-xl">
    <!-- Image -->
    <div class="relative md:w-2/5 group">
      <div class="overflow-hidden max-h-72">
        <img
          :src="image"
          class="duration-700 ease-in-out group-hover:scale-[1.8] -z-9999 size-full" />
      </div>

      <div class="absolute flex gap-1 top-4 right-4">
        <div class="p-1 px-2 text-xs font-bold text-white bg-main">
          For Sale
        </div>
        <div class="p-1 px-2 text-xs font-bold text-white bg-main">
          Featured
        </div>
        <div class="p-1 px-2 text-xs font-bold text-white bg-main">New</div>
      </div>

      <div
        class="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4 duration-500 opacity-0 group-hover:opacity-100 group-hover:bg-gradient-to-t from-slate-600 to-transparent">
        <NuxtLink
          to="/"
          class="flex items-center gap-2">
          <img
            :src="image"
            class="h-8 rounded-full w-min" />
          <p class="text-white">Tony Stark</p>
        </NuxtLink>
        <div class="flex gap-2 text-white">
          <NuxtLink
            to="/"
            class="duration-300 ease-in-out hover:fill-white fill-slate-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960  960"
              class="w-8 h-8">
              <path
                d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Info -->
    <div class="flex flex-col justify-between p-4 px-8 md:flex-row grow">
      <div class="flex flex-col justify-between gap-4 p-2">
        <div class="space-y-2">
          <h2 class="max-w-lg text-xl font-semibold uppercase line-clamp-1">
            {{ props.name }}
          </h2>
          <p class="max-w-sm text-gray-500 text-md line-clamp-1">
            <i class="pr-2 text-xs text-main pi pi-map-marker md:text-sm" />
            <span>
              {{ props.address }}
            </span>
            <span v-if="props.city">{{ ", " + props.city }}</span>
            <span v-if="props.state">{{ ", " + props.state }}</span>
          </p>
        </div>
        <div class="flex items-center gap-4">
          <!-- <p class="pl-2 text-gray-500">{{ elapsedSince(updated).value }}</p> -->
          <p class="text-slate-500">
            <i class="pi pi-building" />
            2457 sqft
          </p>
        </div>
      </div>

      <div class="flex flex-col justify-between gap-4 p-2 items-right">
        <p
          v-if="props.price"
          class="text-2xl font-bold text-main">
          ${{ props.price }}
        </p>
        <p
          v-else
          class="text-lg font-bold text-main">
          Contact Broker
        </p>

        <Button
          size="small"
          class="!h-min">
          Go to Property
        </Button>
      </div>
    </div>

    <!-- Rating / Price -->
  </NuxtLink>
</template>
<script lang="ts" setup>
  const props = defineProps<{
    name: string
    city: string
    state: string
    address: string
    price: number
    updated: string
    id: string
    image: string
  }>()
</script>
