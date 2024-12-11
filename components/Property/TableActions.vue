<template>
  <div class="flex card justify-content-center">
    <Button
      class="!p-1 !w-min bg-transparent !text-blue-500 hover:!text-white"
      type="button"
      icon="pi pi-ellipsis-v"
      aria-haspopup="true"
      aria-controls="overlay_menu"
      @click="toggle"
    />
    <Menu
      id="overlay_menu"
      ref="menu"
      :model="items"
      :popup="true"
    >
      <template #item="{ item }">
        <div
          v-if="item.route"
          class="flex"
        >
          <NuxtLink
            :to="`/dashboard/property/edit/${item.id}`"
            class="p-4 py-2 space-x-4 cursor-pointer hover:text-blue-500 grow"
          >
            <i :class="item.icon" />
            <span>{{ item.label }} </span>
          </NuxtLink>
        </div>
        <div
          v-else
          v-ripple
          class="px-4 py-2 space-x-4 cursor-pointer hover:text-green-600"
        >
          <i :class="item.icon" />
          <span class="ml-2">{{ item.label }} </span>
        </div>
      </template>
    </Menu>
  </div>
</template>

<script setup lang="ts">
  import { routerKey } from "vue-router"

  const router = useRouter()

  const props = defineProps({
    id: String,
  })
  const menu = ref()
  const items = ref([
    {
      label: "Options",
      items: [
        {
          label: "Activate Property",
          icon: "pi pi-check",
          command: () =>
            router.push({ path: `/dashboard/property/${props.id}/activate/` }),
        },
        {
          label: "Mark as Sold",
          icon: "pi pi-check",
          command: () =>
            router.push({ path: `/dashboard/property/${props.id}/sell` }),
        },
        {
          label: "Edit",
          icon: "pi pi-pencil",
          command: () =>
            router.push({ path: `/dashboard/property/${props.id}/edit/` }),
        },
      ],
    },
  ])

  const toggle = (event: Event) => {
    menu.value.toggle(event)
  }
</script>
