<template>
  <section
    class="flex flex-col justify-between w-full max-w-6xl p-4 text-gray-700 bg-white rounded-md md:flex-row">
    <div class="space-y-3 md:block md:space-y-2 max-w-[80%]">
      <h1
        class="text-2xl font-bold text-center md:text-left md:text-2xl text-slate-800">
        {{ name }}
      </h1>
      <p class="space-x-2 text-center md:text-left">
        <i class="text-main pi pi-map-marker"/>
        <span class="italic text-gray-400">
          {{ address }},
          <template v-if="city">{{ city.trim() }},</template>

          <template v-if="state">{{ state }}</template>
        </span>
      </p>
      <p
        v-if="size"
        class="text-sm text-center text-gray-400 md:text-left">
        <i class="pi pi-building"/>
        Building Size {{ size }} sq. ft.
      </p>
    </div>
    <div
      class="flex flex-col items-center justify-center gap-2 md:items-end md:justify-between grow">
      <Tag
        v-if="asset"
        class="capitalize">
        {{ asset }}
      </Tag>
      <p
        v-if="price"
        class="flex flex-col items-end text-2xl font-bold text-main">
        <span class='text-xs'>Price</span>
        {{
          !isNaN(checkPrice)
            ? "$" + checkPrice.toLocaleString("en-US")
            : `${price}`
        }}
      </p>
      <p
        v-if="capRate"
        class="text-sm text-gray-400">
        Cap Rate {{ capRate }}%
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
  const { capRate, city, name, price, size, address, state, asset } =
    defineProps<{
      name?: string
      city?: string
      address?: string
      size?: string
      state?: string
      price?: string
      capRate?: number
      asset?: string
    }>()
  const checkPrice = Number(cleanString(price!))
</script>
