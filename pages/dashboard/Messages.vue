<template>
  <div class="overflow-clip size-full">
    <div
      class="flex transition-transform duration-500 ease-in-out lg:p-2 size-full lg:transform-none"
      :class="
        sidebarOpen
          ? 'transform translate-x-0'
          : 'transform -translate-x-full lg:translate-x-0'
      ">
      <!-- left -->
      <div
        class="flex flex-col lg:max-w-[20%] flex-shrink-0 size-full border max-w-full">
        <MessagesHeader />
        <div class="flex flex-col flex-shrink-0 py-4">
          <div class="px-4">
            <FormKit
              type="text"
              suffix-icon="search"
              placeholder="Find User" />
          </div>
          <MessagesContacts />
          <MessagesChannels />
        </div>
      </div>

      <!--right  -->
      <div
        class="flex flex-col flex-shrink-0 lg:max-w-[85%] max-w-full size-full max-h-full transition-transform duration-500 border border-l-0 grow">
        <MessagesTitle />
        <MessagesBody />
        <MessagesFooter />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { sidebarOpen } from "~/components/messages/store"
  definePageMeta({
    layout: "messages",
    auth: true,
  })
</script>
