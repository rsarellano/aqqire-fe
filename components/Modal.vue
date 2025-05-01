<template>
  <!-- Modal backdrop -->
  <transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-100 ease-out"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0">
    <div
      v-show="modalOpen"
      class="fixed inset-0 z-50 transition-opacity bg-slate-900 bg-opacity-30"
      aria-hidden="true"/>
  </transition>
  <!-- Modal dialog -->
  <transition
    enter-active-class="transition duration-200 ease-in-out"
    enter-from-class="translate-y-4 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in-out"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-4 opacity-0">
    <div
      v-show="modalOpen"
      :id="id"
      class="fixed inset-0 z-50 flex items-center justify-center px-4 my-4 overflow-hidden transform sm:px-6"
      role="dialog"
      aria-modal="true">
      <div
        ref="modalContent"
        class="w-full max-w-lg max-h-full overflow-auto bg-white rounded shadow-lg">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
  const props = defineProps({ id: String, modalOpen: Boolean });
  const emit = defineEmits(["close-modal"]);

  const modalContent = ref();

  const clickHandler = ({ target }: Event) => {
    if (!props.modalOpen || modalContent.value.contains(target)) return;
    emit("close-modal");
  };

  onMounted(() => {
    document.addEventListener("click", clickHandler);
  });

  onUnmounted(() => {
    document.removeEventListener("click", clickHandler);
  });
</script>
