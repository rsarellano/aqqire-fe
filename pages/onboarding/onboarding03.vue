<template>
  <div class="px-4 py-8">
    <div class="max-w-md mx-auto">
      <h1 class="mb-6 text-3xl font-bold text-slate-800">
        Company information ✨
      </h1>

      <form>
        <FormKit
          id="company-name"
          label="Company Name *"
          required
          class="w-full form-input"
          type="text"
        />
        <div class="flex gap-2">
          <FormKit
            id="city"
            label="City *"
            required
            class="w-full form-input"
            type="text"
          />
          <FormKit
            id="postal-code"
            label="Postal Code"
            class="w-full form-input"
            type="text"
          />
        </div>

        <FormKit
          id="country"
          label="Country *"
          type="select"
          :options="['USA', 'ITALY', 'UNITED KINGDOM']"
        />
        <FormKit
          id="street"
          label="Street Address"
          class="w-full form-input"
          type="text"
        />
      </form>
      <div class="flex justify-between w-full">
        <NuxtLink
          class="p-2 px-4 text-white bg-indigo-500 rounded-md btn hover:bg-indigo-600"
          to="/onboarding/onboarding02"
        >
          <i class="pi pi-caret-left"/>
        </NuxtLink>
        <NuxtLink
          class="p-2 px-4 text-white bg-indigo-500 rounded-md btn hover:bg-indigo-600"
          to="/onboarding/onboarding04"
        >
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
    navIndex.value = 3
  })
</script>
