<template>
  <div class="w-full bg-slate-100/40">
    <HomeCarousel />
    <HomeFilter />

    <HomeAdvertisements />
    <h1 class="text-5xl font-bold text-center ">Properties</h1>

    <HomeProperties />
    <HomePopularProperties />
    <HomeCompanies :logo="logo" />
    <TrialFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Aqqire'
})
  definePageMeta({
    layout: "none",

    //disable global authentication on this page - @bhong
    auth: false    
  });

  const logo =
    "https://s3.us-west-1.amazonaws.com/storage.aqqire.com/a9ae25d8-94a0-41ff-be66-40db0720b6aa-aqq%281%29.png";
</script>

<style scoped></style>
