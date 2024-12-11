<template>
  <Card class="w-full lg:w-96">
    <template #title>
      <div class="flex justify-between">
        <h2 class="text-gray-600 line-clamp-1">{{ props.title }}</h2>

        <img
          src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_Google-512.png"
          class="w-8 h-8" >
      </div>
    </template>

    <template #content>
      <p class="italic font-light text-gray-400 line-clamp-1">
        {{ props.description }}
      </p>
    </template>

    <template #footer>
      <div class="flex justify-between">
        <p class="flex items-center gap-2">
          <i class="pi pi-star"/>
          <span>{{ props.rating }}</span>
        </p>

        <Button type="button" size="small">Connected</Button>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
  const props = defineProps({
    rating: Number,
    description: String,
    title: String,
  });
</script>
