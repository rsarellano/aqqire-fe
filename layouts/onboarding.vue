<template>
  <main class="bg-white">
    <div class="relative flex">
      <!-- Content -->
      <div class="w-full md:w-1/2">
        <div class="flex flex-col h-full min-h-screen after:flex-1">
          <div class="flex-1">
            <!-- Progress bar -->
            <OnboardingNav />
          </div>
          <slot />
        </div>
      </div>

      <!-- Image -->
      <OnboardingImage />
    </div>
  </main>
</template>

<script setup>
  definePageMeta({
    layout: "none",
    auth: false,
  })
</script>
