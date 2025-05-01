<template>
  <div class="flex flex-col gap-4 text-slate-600">
    <h1 class="pb-4 text-2xl font-semibold border-b border-slate-200">
      General Information
    </h1>

    <div class="flex flex-wrap gap-4 justify-evenly">
      <FormKit
        v-model="model!.first_name"
        type="text"
        label="First Name"
      />
      <FormKit
        v-model="model!.middle_name"
        type="text"
        label="Middle Name"
      />
      <FormKit
        v-model="model!.last_name"
        type="text"
        label="Last Name"
      />
    </div>

    <div class="flex flex-wrap gap-4 justify-evenly">
      <FormKit
        v-model="model!.phone"
        type="text"
        label="Phone"
      />
      <FormKit
        v-model="model!.street"
        type="text"
        label="Street Address"
      />
      <FormKit
        v-model="model!.city"
        type="text"
        label="City"
      />
    </div>

    <div class="flex flex-wrap gap-4 justify-evenly">
      <FormKit
        v-model="model!.state"
        type="select"
        :options="states"
        select-icon="caretDown"
        label="State"
      />
      <FormKit
        v-model="model!.zip"
        type="text"
        label="Zip"
      />
    </div>

    <div class="flex flex-wrap gap-4 justify-evenly">
      <FormKit
        v-model="model!.company"
        type="text"
        label="Company Name"
      />
      <FormKit
        v-model="model!.work_type"
        type="text"
        label="Work Type"
      />
      <FormKit
        v-model="model!.company_position"
        type="text"
        label="Company Position"
      />
    </div>

    <Editor
      v-model="model!.profile_description"
      editor-style="height: 200px"
    />
  </div>
</template>

<script setup lang="ts">
  import type { User } from '~/types/user'
  import Editor from 'primevue/editor'
  import { states } from '~/store/states'

  const model = defineModel<User>()
</script>
