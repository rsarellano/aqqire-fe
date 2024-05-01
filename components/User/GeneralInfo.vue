<template>
  <div class="flex flex-col gap-4 text-slate-600">
    <h1 class="pb-4 text-2xl font-semibold border-b border-slate-200">
      General Information
    </h1>

    <div class="flex flex-wrap gap-4 justify-evenly">
      <FormKit
        type="text"
        label="First Name"
      />
      <FormKit
        type="text"
        label="Middle Name"
      />
      <FormKit
        type="text"
        label="Last Name"
      />
    </div>

    <div class="flex flex-wrap gap-4 justify-evenly">
      <FormKit
        type="text"
        label="Phone"
      />
      <FormKit
        type="text"
        label="Street Address"
      />
      <FormKit
        type="text"
        label="City"
      />
    </div>

    <div class="flex flex-wrap gap-4 justify-evenly">
      <FormKit
        type="select"
        :options="states"
        selectIcon="caretDown"
        label="State"
      />
      <FormKit
        type="text"
        label="Zip"
      />
    </div>

    <div class="flex flex-wrap gap-4 justify-evenly">
      <FormKit
        type="text"
        label="Company Name"
      />
      <FormKit
        type="text"
        label="Work Type"
      />
      <FormKit
        type="text"
        label="Company Position"
      />
    </div>

    <Editor editorStyle="height: 200px" />
  </div>
</template>

<script setup lang="ts">
  import Editor from 'primevue/editor'
  import { states } from '~/store/states'
</script>
