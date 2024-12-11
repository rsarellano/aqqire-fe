<template>
  <div class="h-full max-h-[80dvh] overflow-hidden relative">
    <!-- Controls -->

    <button
      class="h-full p-4 absolute inset-y-0 left-0 fill-white z-[100] hover:bg-gray-900/10"
      @click="control('prev')">
      <IconChevronLeft class="size-12" />
    </button>
    <button
      class="h-full p-4 absolute inset-y-0 right-0 fill-white z-[100] hover:bg-gray-900/10"
      @click="control('next')">
      <IconChevronRight class="size-12" />
    </button>

    <!-- Slides -->
    <transition
      v-for="(slide, index) in slides"
      :key="index"
      enter-from-class="opacity-0"
      enter-active-class="transition-all duration-300 ease-in-out"
      enter-to-class="opacity-1">
      <div
        v-show="index === currentIndex"
        :style="{
          background: `linear-gradient(0deg, rgba(2,0,36,0.5858718487394958) 0%, rgba(184,184,193,0.11808473389355745) 100%, rgba(2,0,36,0.9662640056022409) 100%), url(${slide.image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }"
        class="flex items-end w-full h-screen text-white">
        <div class="absolute bottom-0 z-50 w-full md:bg-cover">
          <!-- Property Details -->
          <transition
            enter-from-class="translate-y-4 opacity-0"
            enter-active-class="transition-all duration-300 ease-in-out"
            enter-to-class="translate-y-0 opacity-1">
            <div
              v-if="index === currentIndex"
              class="container flex flex-col items-start p-4 mx-auto text-left md:p-16 md:pb-4">
              <div class="p-2 text-xl font-bold tracking-wider bg-blue-500">
                ${{ slide.price.toLocaleString() }}
              </div>
              <h2 class="mt-2 text-3xl font-semibold">{{ slide.name }}</h2>
              <p class="flex flex-col text-xl">
                {{ slide.address }}
                <span class="text-xl">
                  {{ slide.state }}
                </span>
              </p>
            </div>
          </transition>

          <!-- Read More Section -->
          <transition v-show="index === currentIndex">
            <NuxtLink
              to="#"
              class="container z-50 flex items-center gap-2 p-4 pt-4 mx-auto my-10 font-semibold duration-200 ease-in-out border-t cursor-pointer md:px-16 md:pt-10 fill-white hover:fill-blue-500 hover:text-blue-500">
              <span>Read More</span>
              <IconChevronRight class="size-6" />
            </NuxtLink>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
  const currentIndex = ref(1)
  let autoplay: ReturnType<typeof setInterval>
  const slides = ref([
    {
      image: "/img/1.jpg",
      name: "Ocean Avenue Manor",
      price: 35000,
      state: "California",
      address: "2341 Ocean Avenue",
    },
    {
      image: "/img/2.jpg",
      name: "Nettie Sparks",
      price: 21527,
      state: "Iraq",
      address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      image: "/img/3.jpg",
      name: "Bertie Gill",
      price: 16335,
      state: "Cape Verde",
      address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      image: "/img/4.jpg",
      name: "David Wells",
      price: 10953,
      state: "Anguilla",
      address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      image: "/img/5.jpg",
      name: "Aiden Douglas",
      price: 23785,
      state: "El Salvador",
      address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ])

  const slideShow = (delay: number) => {
    autoplay = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % slides.value.length

      if (currentIndex.value === 0) {
        setTimeout(() => {
          currentIndex.value = 0
        }, 1000)
      }
    }, delay)
  }

  const control = (direction: string) => {
    clearInterval(autoplay)
    if (direction === "prev") {
      currentIndex.value =
        currentIndex.value === 0
          ? (currentIndex.value = slides.value.length - 1)
          : currentIndex.value - 1
      slideShow(3000)
    }
    if (direction === "next") {
      currentIndex.value =
        currentIndex.value === slides.value.length - 1
          ? (currentIndex.value = 0)
          : currentIndex.value + 1
      slideShow(3000)
    }
  }

  onMounted(() => {
    slideShow(3000)
  })
</script>
