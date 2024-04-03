<template>
  <!-- Companies using aqqire -->
  <section class="flex flex-col items-center justify-center gap-4 p-4 my-8">
    <div class="flex flex-col items-start gap-2 mb-2 lg:flex-row">
      <h2 class="text-2xl font-bold lg:text-4xl">Companies Using</h2>
      <img
        :src="props.logo"
        alt="Aqqire logo"
        class="object-contain h-10 my-2 invert min-h-8" />
    </div>

    <Carousel
      :value="companies"
      :numVisible="3"
      :numScroll="1"
      circular
      :autoplayInterval="3000"
      :responsiveOptions="responsiveOptions"
      class="max-w-[1300px] lg:px-32">
      <template #item="slotProps">
        <div class="w-full h-full">
          <div
            class="flex items-center justify-center h-full md:items-end md:mx-4">
            <img
              :src="slotProps.data.link"
              class="rounded-md max-h-[120px] w-min" />
          </div>
        </div>
      </template>
    </Carousel>
  </section>
</template>

<script setup lang="ts">
  const props = defineProps({
    logo: String,
  });

  const companies = ref([
    {
      link: "https://s3-us-west-1.amazonaws.com/storage.aqqire.com/company_pic/1505951376363-NewGen%20Logo%20-%20blue.png",
    },
    {
      link: "https://s3-us-west-1.amazonaws.com/storage.aqqire.com/company_pic/1505951297723-Amber%20Hotel%20Company%20-%20blue.png",
    },
    {
      link: "https://s3-us-west-1.amazonaws.com/storage.aqqire.com/company_pic/1505951359228-Leisure%20Real%20Estate%20logo.png",
    },
  ]);

  const responsiveOptions = ref([
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ]);
</script>
