<template>
  <div class="relative inline-flex">
    <button
      ref="trigger"
      class="flex items-center justify-center w-8 h-8 transition duration-150 rounded-full bg-slate-100 hover:bg-slate-200"
      :class="{ 'bg-slate-200': dropdownOpen }"
      aria-haspopup="true"
      :aria-expanded="dropdownOpen"
      @click.prevent="dropdownOpen = !dropdownOpen">
      <span class="sr-only">Notifications</span>
      <svg
        class="w-4 h-4"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg">
        <path
          class="fill-current text-slate-500"
          d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z" />
        <path
          class="fill-current text-slate-400"
          d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z" />
      </svg>
      <div
        class="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"/>
    </button>
    <transition
      enter-active-class="transition duration-200 ease-out transform"
      enter-from-class="-translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-out"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div
        v-show="dropdownOpen"
        class="origin-top-right z-10 absolute top-full -mr-48 sm:mr-0 min-w-80 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        :class="align === 'right' ? 'right-0' : 'left-0'">
        <div
          class="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4">
          Notifications
        </div>
        <ul
          ref="dropdown"
          @focusin="dropdownOpen = true"
          @focusout="dropdownOpen = false">
          <li
            v-for="_,key in [...new Array(10)]"
            :key="key"
            class="border-b border-slate-200 last:border-0">
            <NuxtLink
              class="block px-4 py-2 hover:bg-slate-50"
              to="/"
              @click="dropdownOpen = false">
              <span class="block mb-2 text-sm">
                📣
                <span class="font-medium text-slate-800">
                  Edit your information in a swipe
                </span>
                Sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim.
              </span>
              <span class="block text-xs font-medium text-slate-400">
                Feb 12, 2021
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    align: String,
  });

  const dropdownOpen = ref(false);
  const trigger = ref();
  const dropdown = ref();

  // close on click outside
  const clickHandler = (event: Event) => {
    if (
      !dropdownOpen.value ||
      dropdown.value?.contains(event.target) ||
      trigger.value.contains(event.target)
    )
      return;
    dropdownOpen.value = false;
  };

  // close if the esc key is pressed
  const keyHandler = ({ key }: KeyboardEvent) => {
    if (!dropdownOpen.value || key !== "Escape") return;
    dropdownOpen.value = false;
  };

  onMounted(() => {
    document.addEventListener("click", clickHandler);
    document.addEventListener("keydown", keyHandler);
  });

  onUnmounted(() => {
    document.removeEventListener("click", clickHandler);
    document.removeEventListener("keydown", keyHandler);
  });
</script>
