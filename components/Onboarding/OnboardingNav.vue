<template>
  <div class="px-4 pt-12 pb-8">
    <div class="w-full max-w-md mx-auto">
      <div class="relative">
        <div
          class="absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200"
          aria-hidden="true"
        ></div>
        <ul class="relative flex justify-between w-full">
          <li v-for="(item, key) in [...new Array(4)]">
            <NuxtLink
              class="flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-indigo-300 rounded-full"
              :class="{ '!bg-indigo-500': navIndex === key + 1 }"
              :to="`/onboarding/onboarding0${key + 1}`"
              >{{ key + 1 }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const navIndex = useState("nav-index", () => 1)
</script>
