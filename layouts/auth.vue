import { _backgroundSize } from '../.nuxt/types/tailwind.config';
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
    <div class="relative flex-1 hidden h-full lg:block" :style="background">
      <!-- wallpaper Icon -->
      <div class="absolute flex items-center top-44 -left-16">
        <img
          src="https://www2.aqqire.com/assets/auth-decoration.a3f89aec.png"
          class="w-48 h-48" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  const background = {
    background: `url('https://www2.aqqire.com/assets/auth-image.b4a9973b.jpg') no-repeat`,
    backgroundSize: "cover",
  };
</script>
