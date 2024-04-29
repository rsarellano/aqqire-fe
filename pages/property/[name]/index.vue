<template>
  <div
    class="xs:max-w-80 container flex flex-col items-center justify-center gap-6 p-4 mx-auto bg-slate-50"
  >
    <Galleria
      v-model:activeIndex="activeIndex"
      circular
      autoPlay
      :showThumbnails="false"
      showItemNavigators
      :value="images"
      :responsiveOptions="responsiveOptions"
      container-class="w-full xs:w-6/7"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          class="w-full h-full"
        />
      </template>
    </Galleria>

    <!-- Share -->
    <PropertyShare />
    <PropertyBasicInfo />
    <PropertyDescription />

    <section class="flex w-full md:max-w-6xl gap-4 p-1 flex-col lg:flex-row">
      <div class="space-y-2 max-h-min grow">
        <PropertyDetails />
        <PropertyFeatures />
        <PropertyDocuments />
      </div>
      <PropertyContactRight />
    </section>

    <!-- Descriptioon -->
    <section class="flex w-full md:max-w-6xl gap-4 mt-2 flex-col h-full">
      <!-- Recently Added Section -->
      <h2 class="text-xl font-bold bg-white w-full p-4 text-center md:text-left"
        >Other Properties from this broker</h2
      >
      <PropertyRecommendedProperties />
    </section>

    <PropertyLocation />

    <section class="w-full max-w-6xl mt-2 space-y-2">
      <h2
        class="p-4 pb-4 text-2xl font-bold uppercase bg-white rounded-md text-slate-700"
        >Contact Broker
      </h2>

      <!-- Buyer Details -->
      <div class="flex flex-col w-full gap-2 md:flex-row">
        <PropertyBuyer />

        <!-- Seller Details -->
        <PropertyBroker />
      </div>

      <!-- Mortgage -->
      <PropertyMortgage />

      <section class="flex w-full md:max-w-6xl gap-4 mt-2 flex-col h-full">
        <h2
          class="text-xl font-bold bg-white w-full p-4 text-center md:text-left"
        >
          Other Properties from Aqqire
        </h2>
        <PropertyRecommendedProperties />
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
  const images = [
    {
      itemImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg',
      alt: 'Description for Image 2',
      title: 'Title 2',
    },
    {
      itemImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria3.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria3s.jpg',
      alt: 'Description for Image 3',
      title: 'Title 3',
    },
    {
      itemImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria4.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria4s.jpg',
      alt: 'Description for Image 4',
      title: 'Title 4',
    },
    {
      itemImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria5.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria5s.jpg',
      alt: 'Description for Image 5',
      title: 'Title 5',
    },
    {
      itemImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria6.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria6s.jpg',
      alt: 'Description for Image 6',
      title: 'Title 6',
    },
    {
      itemImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria7.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria7s.jpg',
      alt: 'Description for Image 7',
      title: 'Title 7',
    },
    {
      itemImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria8.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria8s.jpg',
      alt: 'Description for Image 8',
      title: 'Title 8',
    },
    {
      itemImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria9.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria9s.jpg',
      alt: 'Description for Image 9',
      title: 'Title 9',
    },
    {
      itemImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria10s.jpg',
      alt: 'Description for Image 10',
      title: 'Title 10',
    },
    {
      itemImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria11.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria11s.jpg',
      alt: 'Description for Image 11',
      title: 'Title 11',
    },
    {
      itemImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria12.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria12s.jpg',
      alt: 'Description for Image 12',
      title: 'Title 12',
    },
    {
      itemImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria13.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria13s.jpg',
      alt: 'Description for Image 13',
      title: 'Title 13',
    },
    {
      itemImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria14.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria14s.jpg',
      alt: 'Description for Image 14',
      title: 'Title 14',
    },
    {
      itemImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria15.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primevue/images/galleria/galleria15s.jpg',
      alt: 'Description for Image 15',
      title: 'Title 15',
    },
  ]

  const responsiveOptions = [
    {
      breakpoint: '1300px',
      numVisible: 4,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
    },
  ]

  const activeIndex = ref(2)
</script>
