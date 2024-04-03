<template>
  <div class="h-full lg:p-6">
    <div
      class="h-full p-4 space-y-5 text-gray-700 rounded px-7 lg:p-6 lg:px-12 bg-slate-100">
      <h1 class="text-3xl font-bold text-center lg:text-left">
        My Notifications
      </h1>

      <h2 class="px-4 text-2xl font-bold">General Settings</h2>

      <!-- Comments and Replies -->
      <div class="flex items-center p-4 pb-6 border-b">
        <div class="grow">
          <h3 class="mb-2 text-xl font-bold lg:mb-0">Comments and Replies</h3>
          <p class="text-sm text-gray-400">
            Enable notifications to your replies and comments.
          </p>
        </div>
        <div class="flex flex-col">
          <span class="mb-1 text-xs text-center text-gray-400">
            {{ comments ? "On" : "Off" }}
          </span>
          <InputSwitch v-model="comments" />
        </div>
      </div>

      <!-- Messages -->
      <div class="flex items-center p-4 pb-6 border-b">
        <div class="grow">
          <h3 class="mb-2 text-xl font-bold lg:mb-0">Messages</h3>
          <p class="text-sm text-gray-400">
            Enable notifications from recieved messages.
          </p>
        </div>
        <div class="flex flex-col">
          <span class="mb-1 text-xs text-center text-gray-400">
            {{ messages ? "On" : "Off" }}
          </span>
          <InputSwitch v-model="messages" />
        </div>
      </div>
      <!-- Mentions -->

      <div class="flex items-center p-4 pb-6 border-b">
        <div class="grow">
          <h3 class="mb-2 text-xl font-bold lg:mb-0">Mentions</h3>
          <p class="text-sm text-gray-400">
            Enable notifications when mentioned.
          </p>
        </div>
        <div class="flex flex-col">
          <span class="mb-1 text-xs text-center text-gray-400">
            {{ mentions ? "On" : "Off" }}
          </span>
          <InputSwitch v-model="mentions" />
        </div>
      </div>

      <h2 class="px-4 text-2xl font-bold">Shares Settings</h2>

      <div
        class="flex flex-col items-center gap-2 p-4 pb-6 border-b lg:flex-row">
        <div class="grow">
          <h3 class="mb-2 text-xl font-bold lg:mb-0">Shares of my content</h3>
          <p class="text-sm text-gray-400">
            Enable notifications when someone shares you content.
          </p>
        </div>
        <div class="flex flex-col w-full max-w-sm lg:w-min">
          <Button size="small">Manage</Button>
        </div>
      </div>

      <div
        class="flex flex-col items-center gap-2 p-4 pb-6 border-b lg:flex-row">
        <div class="grow">
          <h3 class="mb-2 text-xl font-bold lg:mb-0">Team Invites</h3>
          <p class="text-sm text-gray-400">
            Enable notifications when being Invited to a team.
          </p>
        </div>
        <div class="flex flex-col w-full max-w-sm lg:w-min">
          <Button size="small">Manage</Button>
        </div>
      </div>

     

      <div class="flex flex-col justify-end gap-2 p-4 lg:flex-row">
        <Button severity="secondary" class="font-semibold">Cancel</Button>
        <Button class="font-semibold">Save Changes</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const comments = ref();
  const messages = ref();
  const mentions = ref();
</script>
