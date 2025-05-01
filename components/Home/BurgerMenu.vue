<template>
  <div class="flex items-center justify-center card">
    <Button
      type="button"
      icon="pi pi-align-justify"
      class="mb-2 border border-white fill-white bg-main hover:bg-white hover:text-main"
      aria-haspopup="true"
      aria-controls="overlay_menu"
      @click="toggle" />

    <Menu
      id="overlay_menu"
      ref="menu"
      :popup="true"
      :model="items">
      <template #start>
        <NuxtLink
          v-for="(link, key) in mobileLinks"
          :key="key"
          class="lg:hidden"
          :to="link.destination">
          <div
            v-ripple
            class="flex gap-2 p-4 pl-12 border-b-2 hover:text-main align-items-center">
            <p class="text-xs">{{ link.text }}</p>
          </div>
        </NuxtLink>
      </template>
      <template #item="{ item, props }">
        <NuxtLink
          v-ripple
          :to="item.destination"
          v-bind="props.action"
          class="flex gap-2 border-b-2 hover:text-main align-items-center">
          <span :class="item.icon" />
          <p class="text-xs">{{ item.label }}</p>
        </NuxtLink>
      </template>
    </Menu>
  </div>
</template>

<script setup lang="ts">
  //added authentication to access user specific functions
  import { useAuth } from "#imports"

  import { links } from "../Navbar/links"
  const { signOut, token, data, status, lastRefreshedAt } = useAuth()
  const userProfile = {
    profileImage: data.value.picture,
    firstName: data.value.name,
    email: data.value.username,
    role: data.value.role,
  }
  const menu = ref()
  const mobileLinks = [...links]

  const toggle = (event: Event) => {
    menu.value.toggle(event)
  }

  const items = ref([
    {
      items: [
        {
          label: "Dashboard",
          icon: "pi pi-chart-bar",
          destination: "/dashboard",
        },
        {
          label: "Add Property",
          icon: "pi pi-plus",
          destination: "/dashboard/property/add",
        },

        {
          label: "About us",
          icon: "pi pi-exclamation-circle",
          destination: "/about",
        },
        {
          label: "Faq",
          icon: "pi pi-question-circle",
          destination: "/faq",
        },
        {
          label: "privacy-policy",
          icon: "pi pi-eye",
          destination: "/privacy-policy",
        },
      ],
    },
  ])
</script>
