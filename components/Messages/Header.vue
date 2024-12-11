<template>
  <div class="flex items-center justify-between p-2 pr-3 border-b">
    <Button
      class="flex items-center gap-4 text-lg font-bold"
      severity="contrast"
      aria-haspopup="true"
      aria-controls="overlay_menu"
      @click="toggle">
      <div class="size-10">
        <img
          class="rounded-full size-full"
          src="https://picsum.photos/200/300" >
      </div>
      <p>#Marketing</p>
      <i class="mt-1 pi pi-chevron-down"/>
    </Button>
    <Menu
      ref="menu"
      :model="items"
      :popup="true">
      <template #item="{ item, props }">
        <button class="w-full p-1 px-2 font-semibold text-left">
          {{ item.label }}
        </button>
      </template>
    </Menu>

    <button
      class="px-2 py-1 ml-2 border rounded shadow-sm h-min border-slate-200 hover:border-slate-300">
      <i class="pi pi-pencil"/>
    </button>
  </div>
</template>

<script setup lang="ts">
  const menu = ref()
  const toggle = (event: Event) => {
    menu.value.toggle(event)
  }
  const items = ref([
    {
      label: "Router Link",
      icon: "pi pi-palette",
    },
    {
      label: "Programmatic",
    },
    {
      label: "External",
    },
  ])
</script>
