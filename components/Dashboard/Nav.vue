<template>
  <Menubar
    :model="routes"
    class="my-2"
  >
    <template #item="{ item, props }">
      <NuxtLink
        :to="item.route"
        class="w-full mr-6"
      >
        <span
          v-bind="props.label"
          class="capitalize text-slate-500"
          :class="{ 'font-bold !text-blue-500': route.path === item.route }"
        >
          {{ item.label }}
        </span>
      </NuxtLink>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
  const route = useRoute()
  const routes = ref([
    {
      label: "Dashboard",
      route: "/dashboard/",
    },
    {
      label: "active properties",
      route: "/dashboard/property/active",
    },
    {
      label: "inactive properties",
      route: "/dashboard/property/inactive",
    },

    {
      label: "sold properties",
      route: "/dashboard/property/sold",
    },
    {
      label: "add property",
      route: "/dashboard/property/add",
    },
  ])
</script>
