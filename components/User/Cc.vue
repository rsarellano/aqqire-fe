<template>
  <div class="flex flex-col gap-4 mt-4 text-slate-600 lg:mt-0">
    <h1 class="pb-4 text-2xl font-semibold border-b border-slate-200">
      Add Email CC
    </h1>
    <div class="flex flex-col gap-2 md:flex-row">
      <FormKit
        type="text"
        label="Email CC"
        v-model="model!.email_CC"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { states } from '~/store/states'

  import type { User } from '~/types/user'
  const model = defineModel<User>()
</script>
