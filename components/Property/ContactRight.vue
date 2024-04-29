<template>
  <div
    class="flex flex-col w-full gap-2 bg-white rounded-md p-8 lg:max-w-[35%]">
    <h2 class="text-2xl font-bold text-slate-700 text-center uppercase my-4"
      >Contact Broker</h2
    >

    <div class="space-y-4">
      <div class="flex flex-col">
        <div class="text-xl font-bold text-slate-700">Name:</div>
        <div class="font-semibold md:text-xl text-slate-500">Neil Infante</div>
      </div>

      <div>
        <div class="text-xl font-bold text-slate-700">Phone:</div>
        <div class="font-semibold md:text-xl text-slate-500">(63) 121-7141</div>
      </div>

      <div>
        <div class="text-xl font-bold text-slate-700">Email:</div>
        <div class="font-semibold sm:text-xl text-slate-500"
          >neil.infante@eflexervices.com</div
        >
      </div>

      <div>
        <div class="pb-4 text-xl font-bold text-slate-700">Message:</div>
        <FormKit type="textarea" />
      </div>
      <Button class="w-full">Send Message</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { FormKit } from '@formkit/vue'
</script>
