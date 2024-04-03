<template>
  <div class="max-w-6xl py-8 mx-auto">
    <!-- properties list -->
    <h1 class="w-full mt-4 text-4xl font-bold text-center uppercase lg:text-left">New</h1>

    <Carousel
      :value="properties"
      :numVisible="3"
      :numScroll="1"
      circular
      :autoplayInterval="3000"
      :responsiveOptions="responsiveOptions"
      >
      <template #item="propertyDetails">
        <PropertyCard />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
  const properties = ref([...new Array(12)]);
  const responsiveOptions = ref([
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 3 ,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ]);
</script>
