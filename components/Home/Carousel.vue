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
      v-show="index === currentIndex"
      enter-from-class="opacity-0"
      enter-active-class="transition-all duration-300 ease-in-out"
      enter-to-class="opacity-1">
      <div
        :style="{
          background: `linear-gradient(0deg, rgba(2,0,36,0.5858718487394958) 0%, rgba(184,184,193,0.11808473389355745) 39%, rgba(2,0,36,0.5662640056022409) 100%), url(${slide.image})`,
        }"
        class="flex items-end w-full h-screen text-white bg-center bg-no-repeat bg-contain">
        <div class="absolute bottom-0 z-50 w-full md:bg-cover">
          <!-- Property Details -->
          <transition
            v-if="index === currentIndex"
            enter-from-class="translate-y-4 opacity-0"
            enter-active-class="transition-all duration-300 ease-in-out"
            enter-to-class="translate-y-0 opacity-1">
            <div
              class="container flex flex-col items-start p-4 mx-auto text-left">
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
              class="container z-50 flex items-center gap-2 p-4 pt-4 mx-auto my-10 font-semibold duration-200 ease-in-out border-t cursor-pointer fill-white hover:fill-blue-500 hover:text-blue-500">
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
  const currentIndex = ref(1);
  let autoplay: ReturnType<typeof setInterval>;
  const slides = ref([
    {
      image: "https://picsum.photos/id/1/1920/1080",
      name: "Ocean Avenue Manor",
      price: 35000,
      state: "California",
      address: "2341 Ocean Avenue",
    },
    {
      image: "https://picsum.photos/id/2/1920/1080",
      name: "Nettie Sparks",
      price: 21527,
      state: "Iraq",
      address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      image: "https://picsum.photos/id/3/1920/1080",
      name: "Bertie Gill",
      price: 16335,
      state: "Cape Verde",
      address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      image: "https://picsum.photos/id/4/1920/1080",
      name: "David Wells",
      price: 10953,
      state: "Anguilla",
      address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      image: "https://picsum.photos/id/5/1920/1080",
      name: "Aiden Douglas",
      price: 23785,
      state: "El Salvador",
      address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ]);

  const slideShow = (delay: number) => {
    autoplay = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % slides.value.length;

      if (currentIndex.value === 0) {
        setTimeout(() => {
          currentIndex.value = 0;
        }, 1000);
      }
    }, delay);
  };

  const control = (direction: string) => {
    clearInterval(autoplay);
    if (direction === "prev") {
      currentIndex.value =
        currentIndex.value === 0
          ? (currentIndex.value = slides.value.length - 1)
          : currentIndex.value - 1;
      slideShow(3000);
    }
    if (direction === "next") {
      currentIndex.value =
        currentIndex.value === slides.value.length - 1
          ? (currentIndex.value = 0)
          : currentIndex.value + 1;
      slideShow(3000);
    }
  };

  onMounted(() => {
    slideShow(3000);
  });
</script>
