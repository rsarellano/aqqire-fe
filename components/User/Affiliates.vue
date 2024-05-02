<template>
  <div class="flex flex-col gap-4 mt-4 text-slate-600 lg:mt-0">
    <h1 class="pb-4 text-2xl font-semibold border-b border-slate-200">
      Add User Affiliates
    </h1>
    <div class="flex flex-col gap-2 md:flex-row">
      <FormKit
        label="Search user"
        :delay="500"
      />
    </div>

    <!-- Search Section -->
    <p>Search</p>
    <ul class="flex flex-col gap-4">
      <li
        class="flex items-center justify-between gap-2 p-1 px-4 border rounded-md grow"
      >
        <p class="text-sm font-semibold">Neil Infante</p>
        <Button
          class="h-min !p-2 w-min"
          icon="pi pi-plus"
        ></Button>
      </li>
    </ul>

    <p>Affiliates</p>
    <!-- Added Affiliates -->
    <ul class="flex flex-col gap-4">
      <li
        class="flex items-center justify-between gap-2 p-1 px-4 border rounded-md grow"
      >
        <p class="text-sm font-semibold">Neil Infante</p>
        <Button
          class="h-min !p-2 w-min"
          icon="pi pi-times"
          severity="danger"
        ></Button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

import type { User } from '~/types/user'
  const model = defineModel<User>()
</script>
