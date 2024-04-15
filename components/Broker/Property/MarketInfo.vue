<template>
  <div class="flex flex-col gap-y-4">
    <h2 class="text-2xl font-bold text-gray-700">Market Information</h2>
    <div class="h-[1px] bg-gray-700 block"></div>

    <div class="flex flex-col gap-2">
      <div class="text-sm text-light">
        Investment Highlights
        <span class="text-xs font-bold text-red-500">Required</span>
      </div>
      <Editor
        v-model="store.investmentHighlights"
        editorStyle="height: 300px"
      />
    </div>

    <div class="flex flex-col gap-2">
      <div class="text-sm font-bold text-light">Property Summary</div>
      <Editor
        v-model="store.propertySummary"
        editorStyle="height: 300px"
      />
    </div>

    <div class="flex flex-col gap-2">
      <div class="text-sm font-bold text-light">Market Summary</div>
      <Editor
        v-model="store.marketSummary"
        editorStyle="height: 300px"
      />
    </div>

    <FormKit label="Traffic Count" />
  </div>
</template>

<script setup lang="ts">
  import Editor from "primevue/editor"
  import { store } from "./store"
</script>
