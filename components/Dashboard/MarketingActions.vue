<template>
  <div class="flex card justify-content-center">
    <Button
      class="!p-1 !w-min bg-transparent !text-main hover:!text-white"
      type="button"
      icon="pi pi-ellipsis-v"
      aria-haspopup="true"
      aria-controls="overlay_menu"
      @click="toggle" />
    <Menu
      id="overlay_menu"
      ref="menu"
      :model="items"
      :popup="true">
      <template #item="{ item }">
        <NuxtLink
          v-ripple
          :to="`${item.route}`"
          class="flex items-center justify-start gap-2 p-2 px-4 cursor-pointer">
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
          <Badge
            v-if="item.badge"
            class="ml-auto"
            :value="item.badge" />
          <span
            v-if="item.shortcut"
            class="p-1 ml-auto text-xs border rounded border-surface bg-emphasis text-muted-color">
            {{ item.shortcut }}
          </span>
        </NuxtLink>
      </template>
    </Menu>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue"
  const { id } = defineProps<{
    id: string | number
  }>()
  const menu = ref()
  const items = ref([
    {
      label: "Options",
      items: [
        {
          label: "View",
          icon: "pi pi-home",
          route: "/property",
        },
        {
          label: "Exclusive Emails",
          icon: "pi pi-envelope",
          route: "/",
        },
        {
          label: "Banner Ads",
          icon: "pi pi-flag",
          route: "/",
        },
        {
          label: "Other Tools",
          route: "/",
        },
        {
          label: "Edit Property",
          route: `/dashboard/property/${id}/edit`,
        },
        {
          label: "Activate Property",
          route: "/",
        },
        {
          label: "Mark as Sold",
          route: "/",
        },
      ],
    },
  ])

  const toggle = (event: Event) => {
    menu.value.toggle(event)
  }
</script>
