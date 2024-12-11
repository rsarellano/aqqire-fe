<template>
  <div class="max-w-6xl py-8 mx-auto">
    <!-- properties list -->
    <h1
      class="w-full p-4 px-12 mt-4 mb-4 text-4xl font-bold text-center uppercase lg:text-left">
      Popular
    </h1>

    <Carousel
      :value="properties"
      :num-visible="3"
      :num-scroll="1"
      circular
      :autoplay-interval="3000"
      :responsive-options="responsiveOptions"
      :pt="{
        indicators: {
          class: 'flex gap-2 pt-4 justify-center',
        },
      }">
      <template #item="propertyDetails">
        <PropertyCard />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
  const properties = ref([...new Array(10)])
  const responsiveOptions = ref([
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ])
</script>
