<template>
  <div
    class="container flex flex-col items-center justify-around w-full h-full gap-2 p-4 py-12 mx-auto text-gray-700 lg:flex-row">
    <div class="w-full">
      <div class="w-full mb-4 text-center">
        <h1 class="text-4xl font-bold">Contact Us</h1>
      </div>

      <div class="flex justify-center w-full">
        <FormKit
          v-model="form.fullName"
          type="text"
          label="Fullname"
          validation="required" />
      </div>

      <div class="flex justify-center w-full">
        <FormKit
          v-model="form.email"
          type="email"
          label="Email"
          validation="required|email" />
      </div>

      <div class="flex justify-center w-full">
        <FormKit
          v-model="form.subject"
          type="text"
          label="Subject"
          validation="required" />
      </div>

      <div class="flex justify-center w-full">
        <FormKit
          type="textarea"
          name="message"
          label="Message"
          :help="`${form.message ? form.message.length : 0} / 400`"
          validation="length:0,120"
          validation-visibility="live"
          v-model="form.message"
          :validation-messages="{
            length: 'Instructions cannot be more than 400 characters.',
          }" />
      </div>
      <div class="flex justify-center w-full">
        <Button
          label="Submit"
          type="submit"
          class="px-12 mt-2" />
      </div>
    </div>
    <div class="w-full pl-12 space-y-4 text-center uppercase lg:text-left">
      <h2 class="text-4xl font-bold">Email us at</h2>
      <p class="text-3xl">Info@aqqire.com</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  const form = ref({
    message: "",
    email: "",
    fullName: "",
    subject: "",
  })

  definePageMeta({
    layout: "none",
    auth: false,
  })
</script>
