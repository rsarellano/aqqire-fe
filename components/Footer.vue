<template>
  <div class="flex items-center justify-center w-full pt-4 mt-auto bg-blue-600">
    <div class="container flex flex-col items-center gap-12 p-4">
      <!-- logo -->

      <div>
        <div class="mx-auto max-w-72">
          <img :src="logo" alt="Aqqire Logo" class="size-full" />
        </div>
        <p class="max-w-md mt-2 text-sm text-center text-white">
          Our mission is to facilitate networking, foster collaboration, and
          provide insights that drive success in the ever-evolving world of
          commercial real estate.
        </p>
      </div>

      <ul class="flex justify-between gap-12 mt-auto text-sm text-white">
        <li
          class="text-4xl cursor-pointer hover:underline underline-offset-2"
          v-for="link in socialLinks">
          <a :href="link.destination" target="__blank">
            <i :class="link.icon"></i>
          </a>
        </li>
      </ul>

      <ul
        class="flex flex-wrap justify-between gap-8 text-sm text-center text-white">
        <li
          class="cursor-pointer hover:underline underline-offset-2"
          v-for="link in footerLinks">
          <NuxtLink :to="link.destination">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  const logo =
    "https://s3.us-west-1.amazonaws.com/storage.aqqire.com/a9ae25d8-94a0-41ff-be66-40db0720b6aa-aqq%281%29.png";

  const socialLinks = [
    { icon: "pi pi-instagram", destination: "https://www.instagram.com/" },
    { icon: "pi pi-facebook", destination: "https://www.facebook.com/" },
    { icon: "pi pi-linkedin", destination: "https://www.linkedin.com/" },
  ];
  const footerLinks = [
    { text: "Home", destination: "/" },
    { text: "About", destination: "/about" },
    { text: "Faq", destination: "/faq" },
    { text: "Privacy Policy", destination: "/privacy-policy" },
    { text: "Terms of Use Policy", destination: "/terms" },
    { text: "Contact", destination: "/contact" },
  ];
</script>
