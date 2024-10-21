<template>
  <main class="relative flex w-full h-screen max-h-screen">
    <div class="flex items-center justify-center flex-1 h-full p-4">
      <slot />
    </div>

    <!-- logo -->
    <div class="absolute top-4 left-4">
      <NuxtLink to="/">
        <SidebarLogo />
      </NuxtLink>
    </div>

    <!-- Wallpaper -->
    <div
      class="relative flex-1 hidden h-full lg:block"
      :style="background"></div>
  </main>
</template>

<script setup lang="ts">
  const bg = ""
  const background = {
    background: `url('/img/newyork.jpg') no-repeat`,
    backgroundSize: "cover",
  }
</script>
