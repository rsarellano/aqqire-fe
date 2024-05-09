<template>
  <div class="flex flex-col gap-2 p-8 bg-white rounded-md h-min">
    <h2 class="my-4 text-2xl font-bold text-center uppercase text-slate-700"
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
        <div class="pb-4 text-xl font-bold text-slate-700">Message:</div>
        <FormKit type="textarea" />
      </div>
      <Button class="w-full">Send Message</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { FormKit } from "@formkit/vue"
</script>
