<template>
  <div
    ref="container"
    class="flex flex-col justify-end flex-grow h-full gap-6 p-4 pb-16 overflow-y-auto no-scrollbar">
    <MessagesMessage
      v-for="(message, key) in messages"
      :key="key"
      :message="message.message" />
  </div>
</template>

<script setup lang="ts">
  import { messages } from "./store"
  const container = ref()
  const scrollToBottom = () => {
    const messageContainer = container.value
    messageContainer.scrollTop = messageContainer.scrollHeight
  }

  onMounted(() => {
    scrollToBottom()
  })

  watch(
    () => messages,
    () => {
      scrollToBottom()
    },
    { deep: true }
  )
</script>
