<template>
  <div class="h-full lg:p-6">
    <div
      class="h-full p-4 space-y-5 text-gray-700 rounded px-7 lg:p-6 lg:px-12 bg-slate-100">
      <h2 class="mb-2 text-3xl font-bold text-slate-800">Give Feedback</h2>
      <p>
        Our product depends on customer feedback to improve the overall
        experience!
      </p>

      <h2 class="text-xl font-bold text-slate-800">
        How would you rate our services?
      </h2>
      <Rating v-model="value" :cancel="false"/>

      <h2 class="text-xl font-bold text-slate-800">Please leave your feedback below</h2>
      <FormKit
        type="textarea"
        name="instructions"
        validation-visibility="live"
        outer-class="my-2" />
    </div>
  </div>
</template>

<script setup lang="ts">
  const value = ref();
</script>
