<template>
  <div class="flex items-center justify-center card">
    <Button
      type="button"
      icon="pi pi-align-justify"
      class="mb-2 border border-white fill-white"
      @click="toggle"
      aria-haspopup="true"
      aria-controls="overlay_menu" />

    <Menu
      ref="menu"
      id="overlay_menu"
      :popup="true"
      :model="items"
      class="md:w-60">
      <template #start>
        <NuxtLink
          class="lg:hidden"
          v-for="(link, key) in mobileLinks"
          :to="link.destination"
          :key="key">
          <a
            v-ripple
            class="flex gap-2 p-4 pl-12 border-b-2 hover:text-blue-500 align-items-center">
            <p class="text-xs">{{ link.text }}</p>
          </a>
        </NuxtLink>
      </template>
      <template #item="{ item, props }">
        <NuxtLink :to="item.destination">
          <a
            v-ripple
            class="flex gap-2 border-b-2 hover:text-blue-500 align-items-center"
            v-bind="props.action">
            <span :class="item.icon"></span>
            <p class="text-xs">{{ item.label }}</p>
          </a>
        </NuxtLink>
      </template>
    </Menu>
  </div>
</template>

<script setup lang="ts">
  //added authentication to access user specific functions 
  import { useAuth } from '#imports'
  const { signOut, token, data, status, lastRefreshedAt } = useAuth()
  const userProfile = {
    profileImage: data.value.picture,
    firstName: data.value.name,
    email: data.value.username,
    role: data.value.role,
  };

  import { ref } from "vue";
  import { links } from "../Navbar/links";
  const menu = ref();
  const mobileLinks = [{ destination: "/login", text: "Sign In" },{ destination: "/register", text: "Sign Up" }, ...links];

  const toggle = (event: Event) => {
    menu.value.toggle(event);
  };

  const items = ref([
    {
      items: [
        {
          label: "Dashoard",
          icon: "pi pi-plus",
          destination: "/dashboard",
        },
        {
          label: "Add Listings",
          icon: "pi pi-plus",
          destination: "/dashboard/properties/create",
        },
        {
          label: "Advertise",
          icon: "pi pi-megaphone",
          destination: "/",
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
  ]);
</script>
