<template>
  <section class="w-full p-4 bg-white rounded md:max-w-6xl">
    <h2 class="w-full p-4 text-xl font-bold text-center bg-white md:text-left">
      Property Mortgage
    </h2>

    <div class="p-4">
      <FormKit
        type="number"
        label="Total Amount"
        prefix-icon="dollar"
      />
      <FormKit
        type="number"
        label="Loan Terms(Years)"
        prefix-icon="dollar"
      />
      <FormKit
        v-model="downpayment"
        type="range"
        prefix-icon="dollar"
        :label="`Down Payment (${downpayment})%`"
        :min="20"
        max="100"
      />
    </div>
    <div class="px-4">
      <Button class="w-full">Calculate</Button>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { FormKit } from "@formkit/vue"
  const downpayment = ref('20')
</script>
