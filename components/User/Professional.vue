<template>
  <div class="flex flex-col gap-4 mt-4 text-slate-600 lg:mt-0">
    <h1 class="pb-4 text-2xl font-semibold border-b border-slate-200">
      Professional Information
    </h1>
    <div class="flex flex-col gap-2 md:flex-row">
      <FormKit label="Company"  
      v-model="model!.companyProfessional"/>
      <FormKit label="Job Title:"  
      v-model="model!.jobTitle"/>
    </div>

    <div class="flex flex-col gap-2 md:flex-row">
      <FormKit
        label="Date Started"
        type="month"
        v-model="model!.dateStarted"
      />
      <FormKit
        label="Date Finished"
        type="month"
        v-model="model!.dateFinished"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { User } from '~/types/user'
  const model = defineModel<User>()
</script>
