<template>
  <div
    class="container flex flex-col items-center justify-center gap-6 p-4 mx-auto bg-slate-50">
    <Galleria
      v-model:activeIndex="activeIndex"
      circular
      autoPlay
      :showThumbnails="false"
      showIndicators
      showItemNavigators
      :value="images"
      :responsiveOptions="responsiveOptions"
      container-class="w-full ">
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          class="w-full h-full" />
      </template>
    </Galleria>

    <!-- Share -->
    <section class="w-full max-w-6xl p-0">
      <div
        class="flex items-center justify-center gap-2 text-lg md:justify-end">
        <Button
          size="small"
          class="hover:text-pink-500">
          <i class="pi pi-heart-fill"></i>
        </Button>
        <Button
          size="small"
          class="hover:text-yellow-500"
          ><i class="pi pi-share-alt"></i
        ></Button>
        <Button
          size="small"
          class="hover:text-yellow-500"
          ><i class="pi pi-envelope"></i
        ></Button>
        <Button
          size="small"
          class="hover:text-red-500"
          ><i class="pi pi-flag-fill"></i
        ></Button>
      </div>
    </section>

    <section
      class="flex flex-col justify-between w-full max-w-6xl p-4 text-gray-700 bg-white rounded-md md:flex-row">
      <div class="space-y-3 md:block md:space-y-2">
        <h1
          class="text-2xl font-bold text-center md:text-left md:text-4xl text-slate-800">
          Family Home in Glasgow
        </h1>
        <p class="space-x-2 text-center md:text-left">
          <i class="text-blue-500 pi pi-map-marker"></i>
          <span class="italic text-gray-400">
            60 High St, Glasgow, London
          </span>
        </p>
        <p class="text-sm text-center text-gray-400 md:text-left">
          <i class="pi pi-building"></i>
          Building Size 103,484 sq. ft.</p
        >
      </div>
      <div
        class="flex flex-col items-center justify-center gap-2 mt-4 md:items-end md:justify-between">
        <Tag>Gas Station</Tag>
        <p class="text-2xl font-bold text-blue-500">$7,500,000</p>
        <p class="text-sm text-gray-400">Cap Rate 9.36%</p>
      </div>
    </section>

    <!-- Descriptioon -->
    <section class="flex flex-col w-full max-w-6xl gap-4 mt-2 lg:flex-row">
      <div class="p-4 space-y-2 bg-white rounded-md grow">
        <h2 class="text-2xl font-bold">Property Description</h2>
        <p class="text-sm text-slate-500">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Vitae quidem atque illum minima cum
          iste! Cumque, ex! Corporis recusandae dolorem possimus totam inventore
          voluptate saepe, tempore quaerat reprehenderit velit ad in nihil culpa
          explicabo iste ab natus debitis quibusdam? Non consequuntur fugit
          obcaecati nisi similique sequi voluptatum porro ratione repellat?
        </p>

        <p class="text-sm text-slate-500">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Vitae quidem atque illum minima cum
          iste! Cumque, ex! Corporis recusandae dolorem possimus totam inventore
          voluptate saepe, tempore quaerat reprehenderit velit ad in nihil culpa
          explicabo iste ab natus debitis quibusdam? Non consequuntur fugit
          obcaecati nisi similique sequi voluptatum porro ratione repellat?
        </p>
      </div>

      <!-- Recently Added Section -->
      <div
        class="p-4 px-4 space-y-2 overflow-hidden bg-white rounded-md lg:max-w-[25%] w-full">
        <h2 class="text-xl font-bold">Recently Added</h2>

        <div
          class="flex flex-col flex-grow md:flex-row lg:flex-col gap-2 max-h-[35rem] overflow-auto no-scrollbar">
          <PropertyCardSmall />
          <PropertyCardSmall />
        </div>
      </div>
    </section>

    <section class="flex flex-col w-full max-w-6xl gap-4 mt-2 lg:flex-row">
      <div class="p-8 space-y-2 bg-white rounded-md grow">
        <h2 class="text-2xl font-bold uppercase">Location</h2>
        <img
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg" />
      </div>
    </section>

    <section class="w-full max-w-6xl mt-2 space-y-2">
      <h2
        class="p-4 pb-4 text-2xl font-bold uppercase bg-white rounded-md text-slate-700"
        >Contact Broker
      </h2>

      <!-- Buyer Details -->
      <div class="flex flex-col w-full gap-2 md:flex-row">
        <div class="flex-1 p-8 space-y-4 bg-white rounded-md">
          <div class="flex flex-col">
            <div class="text-xl font-bold text-slate-700">Name:</div>
            <div class="font-semibold md:text-xl text-slate-500"
              >Neil Infante</div
            >
          </div>

          <div>
            <div class="text-xl font-bold text-slate-700">Phone:</div>
            <div class="font-semibold md:text-xl text-slate-500"
              >(63) 121-7141</div
            >
          </div>

          <div>
            <div class="text-xl font-bold text-slate-700">Email:</div>
            <div class="font-semibold sm:text-xl text-slate-500"
              >neil.infante@eflexervices.com</div
            >
          </div>

          <div>
            <div class="pb-4 text-xl font-bold text-slate-700">Message:</div>
            <FormKit type="textarea" />
          </div>
          <Button class="w-full">Send Message</Button>
        </div>

        <!-- Seller Details -->
        <div
          class="flex flex-col items-center justify-start p-8 space-y-2 bg-white rounded-md">
          <p class="pb-4 text-2xl font-bold"> Broker Details</p>
          <NuxtLink
            to="/"
            class="overflow-hidden rounded-xl size-36 border-slate-400"
            ><img
              src="https://fastly.picsum.photos/id/928/200/300.jpg?hmac=0vBcHV9dVfFTsvcFDn8PRUQiOaH72_2aaKnmlU1PHWk"
              class="w-full h-full"
          /></NuxtLink>

          <NuxtLink
            to="/"
            class="text-xl font-bold text-slate-600"
            >John Allen Doe</NuxtLink
          >
          <p class="text-slate-400"> Investment Sales Advisor at Capstone</p>
          <NuxtLink
            to="/"
            class="overflow-hidden">
            <img
              src="https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg"
              class="max-w-28"
              alt="" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { FormKit } from '@formkit/vue'
  import { isPremium } from '~/store/isPremium'
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
