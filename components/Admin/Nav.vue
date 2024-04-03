<template>
  <div class="relative z-[40]">
    <!-- Desktop Navbar -->
    <div class="hidden w-full gap-6 p-4 border-b border-b-gray-400 lg:flex">
      <NuxtLink
        v-for="(route, key) in routes"
        :key="key"
        :to="'/admin/' + route.path"
        class="flex items-center justify-center h-full gap-2 p-2 [x=4] text-gray-400 duration-300 ease-in-out fill-gray-400"
        :class="{
          'font-bold rounded-md bg-blue-600 text-white fill-white': activeRoute(
            `/admin/${route.path}`
          ),
        }">
        <i v-if="route?.icon" :class="route.icon"></i>
        <span>{{ route.text }}</span>
      </NuxtLink>
    </div>

    <div class="lg:hidden">
      <!-- Control button for mobile Nav -->
      <div class="flex justify-end w-full p-4 bg-white">
        <button class="h-full" @click="open = !open">
          <i
            class="w-full duration-100 ease-in-out pi pi-caret-down"
            :class="{
              'rotate-180': !open,
            }" />
        </button>
      </div>

      <!-- Navigation Links -->
      <div
        class="absolute inset-x-0 flex flex-col items-start duration-500 ease-in-out bg-white"
        @click="open = !open"
        :class="{
          '-translate-y-[150%]': open,
        }">
        <NuxtLink
          v-for="route in routes"
          :key="route.path"
          :to="'/admin/' + route.path"
          class="flex items-center w-full gap-2 p-4 px-6 text-left text-gray-400 duration-300 ease-in-out border-y hover:text-gray-700 fill-gray-400 hover:fill-gray-700"
          :class="{
            'font-bold fill-blue-600 text-blue-600': activeRoute(
              `/admin/${route.path}`
            ),
          }">
          <i v-if="route?.icon" :class="route.icon"></i>

          <span>{{ route.text }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const router = useRoute();
  const open = ref(false);

  const activeRoute = computed(
    () => (route: string) => router.path.toLowerCase() === route.toLowerCase()
  );
  const routes = [
    {
      path: "properties",
      text: "Properties",
      // icon: BuildingIcon,
      icon: "pi pi-building",
    },
    {
      path: "users",
      text: "Users",
      icon: "pi pi-user",
    },
    {
      path: "faq",
      text: "FAQ",
      icon: "pi pi-question-circle",
    },
    {
      path: "pages",
      text: "Pages",
      icon: "pi pi-question-circle",
    },
    {
      path: "billing",
      text: "Billing",
      icon: "pi pi-credit-card",
    },
    {
      path: "testimonials",
      text: "Testimonials",
      icon: "pi pi-comments",
    },
    {
      path: "banners",
      text: "Banners",
      icon: "pi pi-images",
    },
    {
      path: "companies",
      text: "Companies",
      icon: "pi pi-building",
    },
  ];
</script>
