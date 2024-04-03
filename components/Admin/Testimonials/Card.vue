<template>
  <Card
    class="max-w-sm gap-4 p-4 bg-white border border-gray-400 rounded-md shadow-lg min-w-[200px]">
    <template #header>
      <div class="w-full pb-4 mt-8 text-center border-b border-b-gray-400">
        <span class="text-lg font-bold line-clamp-3">
          {{ dialogForm.name }}
        </span>
        <div class="mx-auto text-sm text-gray-400">
          {{ dialogForm.position }} at {{ dialogForm.company }}
        </div>
      </div>
    </template>

    <template #content>
      <div
        class="w-full px-4 mx-auto text-sm italic leading-6 text-center text-gray-500">
        " {{ dialogForm.testimonial }} "
      </div>
    </template>

    <template #footer>
      <div class="flex items-center justify-center gap-4">
        <button class="hover:fill-blue-500" @click="edit">
          <i class="pi pi-pencil"></i>
        </button>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
  const props = defineProps({
    name: String,
    position: String,
    company: String,
    testimonial: String,
    id: Number,
    index: Number,
  });

  const emit = defineEmits(["edit"]);
  const dialogForm = ref({
    name: props.name,
    position: props.position,
    company: props.company,
    testimonial: props.testimonial,
    id: props.id,
    index: props.index,
  });

  const edit = () => {
    emit("edit", dialogForm.value.id);
  };
</script>
