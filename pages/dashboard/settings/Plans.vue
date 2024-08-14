<template>
  <div class="h-full lg:p-6">
    <div
      class="h-full p-4 space-y-5 text-gray-700 rounded md:px-7 lg:p-6 lg:px-12 bg-slate-100">
      <h1 class="text-3xl font-bold">Plans</h1>
      <h2 class="text-sm text-gray-500">
        This workspace’s Basic Plan is set to $34 per month and will renew on
        July 9, 2021.
      </h2>

      <div class="flex items-center gap-2 text-sm">
        <p class="font-semibold text-gray-400">Monthly</p>
        <InputSwitch v-model="discount" />
        <div class="flex gap-1 text-sm font-semibold text-gray-400">
          Annually
          <p class="text-sm font-semibold text-green-400">(-20%)</p>
        </div>
      </div>

      <!-- Plans -->
      <div class="grid grid-cols-1 gap-2 md:gap-8 lg:grid-cols-3">
        <DashboardPlanCard
          bg="bg-teal-400"
          name="Basic"
          :price="prices?.basic" />
        <DashboardPlanCard
          bg="bg-green-400"
          name="Advanced"
          :price="prices?.advanced" />
        <DashboardPlanCard name="Premium" :price="prices?.premium" />
      </div>

      <div
        class="flex items-center justify-between w-full p-4 px-6 bg-blue-200 rounded-md">
        <p class="font-semibold text-gray-950">
          Looking for different configurations?
        </p>
        <NuxtLink>
          <Button size="small">Contact Sales</Button>
        </NuxtLink>
      </div>

      <h1 class="text-3xl font-bold">FAQs</h1>
      <div class="space-y-6">
        <div v-for="item in faqs" class="space-y-2">
          <div class="text-lg font-bold text-gray-700">
            {{ item.title }}
          </div>
          <div class="text-gray-400">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const faqs = ref([
    {
      title: "What is the difference between the three versions?",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
    },
    {
      title: "Is there any difference between Basic and Plus licenses?",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
    },
    {
      title: "Got more questions?",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
    },
  ]);
  const discount = ref();

  const prices = computed(() => {
    if (discount.value === true)
      return { basic: 14, advanced: 23, premium: 31 };
    else
      return {
        basic: 19,
        advanced: 29,
        premium: 39,
      };
  });
</script>
