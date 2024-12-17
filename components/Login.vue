<template>
  <Button
    type="button"
    size="large"
    icon="pi pi-bars"
    aria-haspopup="true"
    aria-controls="login_menu"
    class="mb-2 border border-white fill-white bg-main hover:bg-white hover:text-main"
    @click="toggle" />

  <Menu
    ref="menu"
    :model="routes"
    :popup="true"
    class="py-2 z-[9999]">
    <template #start>
      <div class="block pt-2 border-b z-[9999]" />
    </template>
    <template #item="{ item }">
      <NuxtLink
        :to="item.route"
        class="flex items-center gap-4 px-4 py-2 font-semibold capitalize border-b">
        <i :class="item.icon" />
        <div :class="item.class">
          {{ item.label }}
        </div>
      </NuxtLink>
    </template>
  </Menu>
</template>

<script setup lang="ts">
  const menu = ref()

  const toggle = (event: Event) => {
    menu.value.toggle(event)
  }

  const routes = ref([
    {
      route: "/login",
      label: "login",
      icon: "pi pi-sign-in",
      class: "",
    },
    {
      route: "/register",
      label: "register",
      icon: "pi pi-user-plus",
      class: "",
    },
    {
      route: "/properties",
      label: "Properties",
      class: "block lg:hidden",
    },
    {
      route: "/vendors",
      label: "Vendors",
      class: "block lg:hidden",
    },

    {
      route: "/companies",
      label: "Companies",
      class: "block lg:hidden",
    },
    {
      route: "/dashboard/property/active",
      label: "My Properties",
      class: "block lg:hidden",
    },
  ])
</script>
