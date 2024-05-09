<template>
  <div class="flex flex-col gap-4 mt-4 text-slate-600 lg:mt-0">
    <h1 class="pb-4 text-2xl font-semibold border-b border-slate-200">
      Keywords (Press Enter to add a keyword)
    </h1>

    <Chips
      v-model="model!.keywords"
      separator=","
    />
  </div>
</template>

<script setup lang="ts">
  import type { User } from '~/types/user'
  const model = defineModel<User>()
</script>
