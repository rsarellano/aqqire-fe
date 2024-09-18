<template>
  <div class="flex overflow-hidden bg-white">
    <div class="relative flex-1 overflow-x-hidden overflow-y-auto">
      <Navbar />

      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
