<template>
  <div class="sticky bottom-0 z-50 w-full p-4 bg-white border-t">
    <form @submit.prevent="sendMessage">
      <div class="flex items-center w-full gap-2 my-auto">
        <Button
          severity="contrast"
          size="large"
          class="mb-4 !p-2 align-middle">
          <i class="text-2xl pi pi-plus-circle"></i>
        </Button>
        <FormKit
          outer-class="w-full"
          type="text"
          v-model="message"
          placeholder="Send a message" />
        <button type="submit" class="p-2 mb-3">
          <i class="text-2xl pi pi-send"></i>
        </button>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
  import { messages } from "./store"
  const message = ref()
  const sendMessage = () => {
    messages.value.push({
      message: message.value,
    })
    message.value = ""
  }
</script>
