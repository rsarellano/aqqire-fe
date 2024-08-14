<template>
  <div class="flex flex-col gap-3">
    <div class="px-4 text-xs font-semibold uppercase text-slate-400">
      Direct messages
    </div>

    <!-- Users -->
    <ul class="space-y-1 overflow-y-scroll max-h-80 no-scrollbar">
      <li
        v-for="(item, key) in users"
        :key="key">
        <MessagesContact
          :imgUrl="'https://i.imgur.com/ETJzZb9.jpeg'"
          :name="item"
          :messages="2"
          :active="key === 2 ? true : false" />
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
