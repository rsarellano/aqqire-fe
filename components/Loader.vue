<template>
  <div class="flex flex-col w-full h-[35rem] items-center justify-center">
    <div class="h-[35rem] w-full flex justify-center items-center">
      <div class="flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-12 h-12 my-4 font-extrabold text-main animate-spin"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
        <div class="font-sans text-sm font-semibold"> {{ props.text }} </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    text: {
      type: String,
      default: 'Loading...'
    }
  })
</script>
