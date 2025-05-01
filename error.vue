<script setup lang="ts">
  import type { NuxtError } from "#app";

  const props = defineProps({
    error: Object as () => NuxtError,
  });
</script>

<template>
  <div
    class="flex flex-col items-center justify-center w-full min-h-screen gap-8">
    <img
      src="https://www2.aqqire.com/assets/404-illustration.a20d59b6.svg"
      alt="404 not found image" >
    <h1 class="px-4 italic font-thin text-center md:text-xl">
      Hmm...this page doesn’t exist. Try searching for something else!
    </h1>
    <Button @click="$router.back" >Go back</Button>
  </div>
</template>
