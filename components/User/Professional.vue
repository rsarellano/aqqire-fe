<template>
  <div class="flex flex-col gap-4 mt-4 text-slate-600 lg:mt-0">
    <h1 class="pb-4 text-2xl font-semibold border-b border-slate-200">
      Professional Information
    </h1>
    <div class="flex flex-col gap-2 md:flex-row">
      <FormKit
v-model="model!.company_professional"  
      label="Company"/>
      <FormKit
v-model="model!.job_title"  
      label="Job Title:"/>
    </div>

    <div class="flex flex-col gap-2 md:flex-row">
      <FormKit
        v-model="model!.date_started"
        label="Date Started"
        type="month"
      />
      <FormKit
        v-model="model!.date_finished"
        label="Date Finished"
        type="month"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { User } from '~/types/user'
  const model = defineModel<User>()
</script>
