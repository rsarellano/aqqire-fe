<template>
  <div class="p-8 space-y-2 bg-white rounded-md lg:p-4">
    <h2 class="text-2xl font-bold">Property Details</h2>

    <div class="grid grid-cols-1 gap-4 p-2 md:grid-cols-3">
      <div
        v-if="price"
        class="lg:grow">
        <p>Property Price:</p>
        <p class="font-semibold text-blue-400">
          {{
            !isNaN(checkPrice)
              ? "$" + checkPrice.toLocaleString("en-US")
              : `${price}`
          }}
        </p>
      </div>

      <div class="lg:grow">
        <p>Property Type:</p>
        <p class="font-semibold text-blue-400 capitalize">{{ type }}</p>
      </div>

      <div class="lg:grow">
        <p>Property Status:</p>
        <p class="font-semibold text-blue-400">For Sale</p>
      </div>

      <div
        v-if="floors"
        class="">
        <p>floors:</p>
        <p class="font-semibold text-blue-400">{{ floors }}</p>
      </div>

      <div v-if="units">
        <p>Units:</p>
        <p class="font-semibold text-blue-400">{{ units }} Units</p>
      </div>

      <div
        v-if="year"
        class="lg:grow">
        <p>Year Built:</p>
        <p class="font-semibold text-blue-400">{{ year }}</p>
      </div>

      <div
        v-if="lotSize"
        class="lg:grow">
        <p>Lot Size:</p>
        <p class="font-semibold text-blue-400">{{ lotSize }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { floors, lotSize, units, year, price } = defineProps<{
    units?: string | number
    floors?: string | number
    lotSize?: string | number
    year?: string | number
    type?: string
    price?: string
    id?: string
  }>()

  const checkPrice = Number(cleanString(price!))
</script>
