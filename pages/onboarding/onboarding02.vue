<template>
  <div class="px-4 py-8">
    <div class="max-w-md mx-auto">
      <h1 class="mb-6 text-3xl font-bold text-slate-800"
        >Tell us about your company ✨</h1
      >
      <!-- Form -->
      <form>
        <div class="mb-8 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
          <label class="relative flex-1 block cursor-pointer">
            <input
              type="radio"
              name="radio-buttons"
              class="sr-only peer"
              checked
            />
            <div
              class="h-full px-4 py-6 text-center duration-150 ease-in-out bg-white border rounded shadow-sm border-slate-200 hover:border-slate-300"
            >
              <svg
                class="inline-flex w-10 h-10 mb-2 fill-current shrink-0"
                viewBox="0 0 40 40"
              >
                <circle
                  class="text-indigo-100"
                  cx="20"
                  cy="20"
                  r="20"
                />
                <path
                  class="text-indigo-500"
                  d="m26.371 23.749-3.742-1.5a1 1 0 0 1-.629-.926v-.878A3.982 3.982 0 0 0 24 17v-1.828A4.087 4.087 0 0 0 20 11a4.087 4.087 0 0 0-4 4.172V17a3.982 3.982 0 0 0 2 3.445v.878a1 1 0 0 1-.629.928l-3.742 1.5a1 1 0 0 0-.629.926V27a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.323a1 1 0 0 0-.629-.928Z"
                />
              </svg>
              <div class="mb-1 font-medium text-slate-800">Individual</div>
              <div class="text-sm"
                >Lorem ipsum is place text commonly used.</div
              >
            </div>
            <div
              class="absolute inset-0 border-2 border-transparent rounded pointer-events-none peer-checked:border-indigo-400"
              aria-hidden="true"
            ></div>
          </label>
          <label class="relative flex-1 block cursor-pointer">
            <input
              type="radio"
              name="radio-buttons"
              class="sr-only peer"
            />
            <div
              class="h-full px-4 py-6 text-center duration-150 ease-in-out bg-white border rounded shadow-sm border-slate-200 hover:border-slate-300"
            >
              <svg
                class="inline-flex w-10 h-10 mb-2 fill-current shrink-0"
                viewBox="0 0 40 40"
              >
                <circle
                  class="text-indigo-100"
                  cx="20"
                  cy="20"
                  r="20"
                />
                <path
                  class="text-indigo-500"
                  d="m26.371 23.749-3.742-1.5a1 1 0 0 1-.629-.926v-.878A3.982 3.982 0 0 0 24 17v-1.828A4.087 4.087 0 0 0 20 11a4.087 4.087 0 0 0-4 4.172V17a3.982 3.982 0 0 0 2 3.445v.878a1 1 0 0 1-.629.928l-3.742 1.5a1 1 0 0 0-.629.926V27a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.323a1 1 0 0 0-.629-.928Z"
                />
                <circle
                  class="text-indigo-100"
                  cx="20"
                  cy="20"
                  r="20"
                />
                <path
                  class="text-indigo-300"
                  d="m30.377 22.749-3.709-1.5a1 1 0 0 1-.623-.926v-.878A3.989 3.989 0 0 0 28.027 16v-1.828c.047-2.257-1.728-4.124-3.964-4.172-2.236.048-4.011 1.915-3.964 4.172V16a3.989 3.989 0 0 0 1.982 3.445v.878a1 1 0 0 1-.623.928c-.906.266-1.626.557-2.159.872-.533.315-1.3 1.272-2.299 2.872 1.131.453 6.075-.546 6.072.682V28a2.99 2.99 0 0 1-.182 1h7.119A.996.996 0 0 0 31 28v-4.323a1 1 0 0 0-.623-.928Z"
                />
                <path
                  class="text-indigo-500"
                  d="m22.371 24.749-3.742-1.5a1 1 0 0 1-.629-.926v-.878A3.982 3.982 0 0 0 20 18v-1.828A4.087 4.087 0 0 0 16 12a4.087 4.087 0 0 0-4 4.172V18a3.982 3.982 0 0 0 2 3.445v.878a1 1 0 0 1-.629.928l-3.742 1.5a1 1 0 0 0-.629.926V28a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.323a1 1 0 0 0-.629-.928Z"
                />
              </svg>
              <div class="mb-1 font-medium text-slate-800">Organization</div>
              <div class="text-sm"
                >Lorem ipsum is place text commonly used.</div
              >
            </div>
            <div
              class="absolute inset-0 border-2 border-transparent rounded pointer-events-none peer-checked:border-indigo-400"
              aria-hidden="true"
            ></div>
          </label>
        </div>
        <div class="flex items-center justify-between mb-8 space-x-6">
          <div>
            <div class="mb-1 text-sm font-medium text-slate-800"
              >💸 Lorem ipsum is place text commonly?</div
            >
            <div class="text-xs"
              >Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts.</div
            >
          </div>
          <div class="flex items-center">
            <div class="form-switch">
              <input
                type="checkbox"
                id="switch"
                class="sr-only"
                checked
              />
              <label
                class="bg-slate-400"
                for="switch"
              >
                <span
                  class="bg-white shadow-sm"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Switch label</span>
              </label>
            </div>
          </div>
        </div>
        <div class="flex justify-between w-full">
          <NuxtLink
            class="p-2 px-4 text-white bg-indigo-500 rounded-md btn hover:bg-indigo-600"
            to="/onboarding/onboarding01"
          >
            <i class="pi pi-caret-left"></i>
          </NuxtLink>
          <NuxtLink
            class="p-2 px-4 text-white bg-indigo-500 rounded-md btn hover:bg-indigo-600"
            to="/onboarding/onboarding03"
          >
            <i class="pi pi-caret-right"></i>
          </NuxtLink>
        </div>
      </form>
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
    navIndex.value = 2
  })
</script>
