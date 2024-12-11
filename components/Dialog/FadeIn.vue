<template>
  <div class="relative rounded-md w-max">
    <button class="w-full" @click="toggleDialog">
      <slot name="open"/>
    </button>

    <transition
      enter-active-class="duration-300 ease-out"
      enter-from-class="transform opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="transform opacity-0"
      >
      <div
        v-if="props.show"
        class="absolute top-0 right-0 flex flex-col py-2 bg-white border border-gray-300 rounded-md min-w-96 z-[9999]">
        <button
          class="flex flex-row-reverse p-2 border-b border-gray-300 fill-gray-600"
          @click="toggleDialog">
          <div class="size-6">
            <IconClose />
          </div>
        </button>

        <slot name="content"/>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    show: Boolean,
  });

  const emits = defineEmits(["toggle"]);

  const toggleDialog = () => {
    emits("toggle");
  };

  const check = computed(() => props.show);
</script>
