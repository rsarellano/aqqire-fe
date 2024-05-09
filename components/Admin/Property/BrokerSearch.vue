<template>
  <div class="font-bold uppercase">Add brokers to property</div>
  <AutoComplete
    v-model="model"
    optionLabel="login"
    :suggestions="filteredBrokers"
    @complete="search"
    multiple
  >
    <template #option="props">
      <button class="flex items-center gap-2">
        <img
          :src="props.option.avatar_url"
          class="size-6"
        />
        <div class="capitalize">{{ props.option.login }}</div>
      </button>
    </template>

    <template #chip="props">
      <div class="flex items-center gap-2">
        <img
          :src="props.value.avatar_url"
          class="rounded-full size-6"
        />
        <div>{{ props.value.login }}</div>
      </div>
    </template>
  </AutoComplete>
</template>

<script setup lang="ts">
  import type { AutoCompleteCompleteEvent } from "primevue/autocomplete"
  const model = defineModel<string[]>()
  const filteredBrokers = ref()

  const search = async (event: AutoCompleteCompleteEvent) => {
    const response: any = await $fetch(
      `https://api.github.com/search/users?q=${event.query}`
    )
    filteredBrokers.value = response.items
  }
</script>
