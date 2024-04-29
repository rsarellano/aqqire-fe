<template>
  <section class="w-full md:max-w-6xl bg-white rounded p-4">
    <h2 class="text-xl font-bold bg-white w-full p-4 text-center md:text-left">
      Property Mortgage
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <FormKit
        type="number"
        label="Total Amount"
        prefix-icon="dollar"
      />
      <FormKit
        type="number"
        prefix-icon="dollar"
        label="Down Payment"
      />
      <FormKit
        type="number"
        label="Loan Terms(Years)"
        prefix-icon="dollar"
      />
      <FormKit
        type="number"
        prefix-icon="dollar"
        label="Total Amount"
      />
    </div>
    <div class="px-4">
      <Button class="w-full">Calculate</Button>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { FormKit } from '@formkit/vue'
</script>
