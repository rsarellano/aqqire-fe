<template>
  <div class="flex flex-col gap-4 mt-4 text-slate-600">
    <h1 class="pb-4 text-2xl font-semibold border-b border-slate-200">
      Change Password
    </h1>
    <FormKit
      v-model="model!.password"
      type="password"
      label="New password"
    />
  </div>
</template>

<script setup lang="ts">
  import type { User } from '~/types/user'
  const model = defineModel<User>()
</script>
