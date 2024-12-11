<template>
  <div class="px-4 py-8">
    <div class="max-w-md mx-auto">
      <div class="text-center">
        <h1 class="mb-8 text-3xl font-bold text-slate-800"
          >Nice to have you, Acme Inc. 🙌</h1
        >
        <NuxtLink
          class="flex items-center gap-2 p-2 px-4 text-center text-white bg-indigo-500 rounded-md btn hover:bg-indigo-600 w-max"
          to="/"
        >
          Go To Dashboard
          <i class="pi pi-caret-right"/>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "onboarding",
    auth: false,
  })
  const navIndex = useState("nav-index")
  onMounted(() => {
    navIndex.value = 4
  })
</script>
