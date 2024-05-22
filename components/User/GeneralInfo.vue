<template>
  <div class="flex flex-col gap-4 text-slate-600">
    <h1 class="pb-4 text-2xl font-semibold border-b border-slate-200">
      General Information
    </h1>

    <div class="flex flex-wrap gap-4 justify-evenly">
      <FormKit
        type="text"
        label="First Name"
        v-model="model!.firstName"
      />
      <FormKit
        type="text"
        label="Middle Name"
        v-model="model!.middleName"
      />
      <FormKit
        type="text"
        label="Last Name"
        v-model="model!.lastName"
      />
    </div>

    <div class="flex flex-wrap gap-4 justify-evenly">
      <FormKit
        type="text"
        label="Phone"
        v-model="model!.phone"
      />
      <FormKit
        type="text"
        label="Street Address"
        v-model="model!.street"
      />
      <FormKit
        type="text"
        label="City"
        v-model="model!.city"
      />
    </div>

    <div class="flex flex-wrap gap-4 justify-evenly">
      <FormKit
        type="select"
        :options="states"
        selectIcon="caretDown"
        label="State"
        v-model="model!.state"
      />
      <FormKit
        type="text"
        label="Zip"
        v-model="model!.zip"
      />
    </div>

    <div class="flex flex-wrap gap-4 justify-evenly">
      <FormKit
        type="text"
        label="Company Name"
        v-model="model!.company"
      />
      <FormKit
        type="text"
        label="Work Type"
        v-model="model!.workType"
      />
      <FormKit
        type="text"
        label="Company Position"
        v-model="model!.companyPosition"
      />
    </div>

    <Editor
      editorStyle="height: 200px"
      v-model="model!.profileDescription"
    />
  </div>
</template>

<script setup lang="ts">
  import type { User } from '~/types/user'
  import Editor from 'primevue/editor'
  import { states } from '~/store/states'

  const model = defineModel<User>()
</script>
