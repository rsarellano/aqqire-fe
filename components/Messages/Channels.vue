<template>
  <div class="flex flex-col gap-3 mt-2">
    <div class="px-4 text-xs font-semibold uppercase text-slate-400">
      Channels
    </div>

    <!-- Users -->
    <ul class="space-y-1 overflow-y-scroll max-h-32 no-scrollbar">
      <li
        v-for="(item, key) in users"
        :key="key">
        <button class="w-full px-4 font-semibold text-left hover:bg-slate-50">#{{ item }}</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  const users = [
    "Owen Hawkins",
    "Virginia Cortez",
    "Cameron Haynes",
    "Cody Lyons",
    "Lina Gill",
    "Virgie Arnold",
    "Clarence Harper",
    "Lucas Buchanan",
    "Eugenia Holmes",
    "Roxie Vargas",
    "Anthony Ferguson",
    "Allen Pierce",
    "Brandon Glover",
  ]
</script>
