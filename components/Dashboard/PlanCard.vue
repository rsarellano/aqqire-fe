<template>
  <Card class="pb-4">
    <template #title>
      <div class="flex items-center">
        <!-- Icon -->
        <div :class="`w-6 h-6 mr-2 rounded-full shrink-0 ${props.bg}`">
          <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
            <path
              d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z"></path>
          </svg>
        </div>

        <!-- Header -->
        <p class="">{{ props.name }}</p>
      </div>
    </template>

    <template #subtitle>
      <p class="text-sm text-gray-400">
        Ideal for individuals that need a custom solution with custom tools.
      </p>
    </template>

    <template #content>
      <div class="flex items-baseline font-bold">
        <span class="text-xl">$</span>
        <p class="text-3xl">{{ props.price }}</p>
        <span class="text-sm font-normal text-gray-700">/Mo</span>
      </div>

      <Button class="w-full my-4" size="small">Upgrade</Button>

      <div class="pt-2 border-t border-gray-100">
        <p class="mt-2 mb-4 text-xs font-semibold uppercase">What's Included</p>
        <ul class="p-1 space-y-1 text-sm">
          <li class="space-x-2">
            <i class="text-green-600 pi pi-check"></i>
            <span>Lorem ipsum dolor sit amet</span>
          </li>
          <li class="space-x-2">
            <i class="text-green-600 pi pi-check"></i>
            <span>Lorem ipsum dolor sit amet</span>
          </li>
          <li class="space-x-2">
            <i class="text-green-600 pi pi-check"></i>
            <span>Lorem ipsum dolor sit amet</span>
          </li>
        </ul>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
  const props = defineProps({
    bg: {
      type: String,
      default: "bg-sky-400",
    },
    name: String,
    price: Number,
  });
</script>
