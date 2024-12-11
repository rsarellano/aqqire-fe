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
    <ul class="flex flex-col gap-2">
      <li
        v-for="affiliate in affiliates"
        class="flex items-center justify-between gap-2 p-1 px-4 border rounded-md grow"
      >
        <p class="text-sm font-semibold">{{ affiliate }}</p>
        <Button
          class="h-min !p-2 w-min"
          icon="pi pi-plus"
          @click="addAffiliate(affiliate)"
        />
      </li>
    </ul>

    <p>Affiliates</p>
    <!-- Added Affiliates -->
    <ul class="flex flex-col gap-4">
      <li
        v-for="(affiliate, key) in model!.affiliates"
        class="flex items-center justify-between gap-2 p-1 px-4 border rounded-md grow"
      >
        <p class="text-sm font-semibold">{{ affiliate }}</p>
        <Button
          class="h-min !p-2 w-min"
          icon="pi pi-times"
          severity="danger"
          @click="removeAffiliate(affiliate)"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import type { User } from '~/types/user'
  const model = defineModel<User>()
  const affiliates = ref([
    'Neil Infante',
    'Adelle Dickens',
    'Nathaniel West',
    'Kailee Hagenes',
    'Kory Bergstrom',
    'Luis Cole',
  ])

  const addAffiliate = (val: string) => {
    model.value!.affiliates.push(val)

    affiliates.value.splice(
      affiliates.value.findIndex((item) => item === val),
      1
    )
  }

  const removeAffiliate = (val: string) => {
    affiliates.value.push(val)

    model.value?.affiliates.splice(
      model.value?.affiliates.findIndex((item) => item === val),
      1
    )
  }
</script>
