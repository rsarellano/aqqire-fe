<template>
  <div class="flex card justify-content-center">
    <Button
      class="!p-1 !w-min bg-transparent !text-blue-500 hover:!text-white"
      type="button"
      icon="pi pi-ellipsis-v"
      @click="toggle"
      aria-haspopup="true"
      aria-controls="overlay_menu"
    />
    <Menu
      ref="menu"
      id="overlay_menu"
      :model="items"
      :popup="true"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue"

  const menu = ref()
  const items = ref([
    {
      label: "Options",
      items: [
        {
          label: "Exclusive Emails",
          icon: "pi pi-envelope",
        },
        {
          label: "Banner Ads",
          icon: "pi pi-flag",
        },
        {
          label: "Other Tools",
        },
        {
          label: "Add Email Impressions",
        },
        {
          label: "Edit Property",
        },
        {
          label: "Activate Property",
        },
        {
          label: "Mark as Sold",
        },
      ],
    },
  ])

  const toggle = (event: any) => {
    menu.value.toggle(event)
  }
</script>
