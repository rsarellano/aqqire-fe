<template>
  <div class="flex flex-col gap-4 mt-4 text-slate-600 lg:mt-0">
    <h1 class="pb-4 text-2xl font-semibold border-b border-slate-200">
      License Information
    </h1>
    <div class="flex flex-col gap-2 md:flex-row">
      <FormKit
        type="select"
        :options="states"
        label="License State"
        selectIcon="caretDown"
        v-model="model!.license_state"
      />
      <FormKit
        label="License Number"
        v-model="model!.license_number"
      />
      <Button class="!p-2 !px-4 my-auto h-min">Add License</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { states } from '~/store/states'

  import type { User } from '~/types/user'
  const model = defineModel<User>()
</script>
