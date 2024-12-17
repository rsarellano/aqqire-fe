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
      aria-hidden="true" />
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
      class="fixed inset-0 z-50 flex items-start justify-center px-4 mb-4 overflow-hidden transform top-20 sm:px-6"
      role="dialog"
      aria-modal="true">
      <div
        ref="modalContent"
        class="w-full max-w-2xl max-h-full overflow-auto bg-white rounded shadow-lg">
        <!-- Search form -->
        <form class="border-b border-slate-200">
          <div class="relative">
            <label
              :for="searchId"
              class="sr-only">
              Search
            </label>
            <input
              :id="searchId"
              ref="searchInput"
              class="w-full py-3 pl-10 pr-4 border-0 appearance-none focus:ring-transparent placeholder-slate-400"
              type="search"
              placeholder="Search Anything…" />
            <button
              class="absolute inset-0 right-auto group"
              type="submit"
              aria-label="Search">
              <svg
                class="w-4 h-4 ml-4 mr-2 fill-current shrink-0 text-slate-400 group-hover:text-slate-500"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                <path
                  d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </form>
        <div class="px-2 py-4">
          <!-- Recent searches -->
          <div class="mb-3 last:mb-0">
            <div
              class="px-2 mb-2 text-xs font-semibold uppercase text-slate-400">
              Recent searches
            </div>
            <ul class="text-sm">
              <li
                v-for="(_, key) in [...new Array(10)]"
                :key="key">
                <NuxtLink
                  class="flex items-center p-2 rounded text-slate-800 hover:text-white hover:bg-indigo-500 group"
                  to="#0"
                  @click="$emit('close-modal')">
                  <svg
                    class="w-4 h-4 mr-3 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0"
                    viewBox="0 0 16 16">
                    <path
                      d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                  </svg>
                  <span>Form Builder - 23 hours on-demand video</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <!-- Recent pages -->
          <div class="mb-3 last:mb-0">
            <div
              class="px-2 mb-2 text-xs font-semibold uppercase text-slate-400">
              Recent pages
            </div>
            <ul class="text-sm">
              <li>
                <NuxtLink
                  class="flex items-center p-2 rounded text-slate-800 hover:text-white hover:bg-indigo-500 group"
                  to="#0"
                  @click="$emit('close-modal')">
                  <svg
                    class="w-4 h-4 mr-3 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0"
                    viewBox="0 0 16 16">
                    <path
                      d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z" />
                  </svg>
                  <span>
                    <span
                      class="font-medium text-slate-800 group-hover:text-white">
                      Messages
                    </span>
                    - Conversation / … / Mike Mills
                  </span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="flex items-center p-2 rounded text-slate-800 hover:text-white hover:bg-indigo-500 group"
                  to="#0"
                  @click="$emit('close-modal')">
                  <svg
                    class="w-4 h-4 mr-3 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0"
                    viewBox="0 0 16 16">
                    <path
                      d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z" />
                  </svg>
                  <span>
                    <span
                      class="font-medium text-slate-800 group-hover:text-white">
                      Messages
                    </span>
                    - Conversation / … / Eva Patrick
                  </span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
  import { ref, nextTick, onMounted, onUnmounted, watch } from "vue"

  const props = defineProps<{
    id: string
    searchId: string
    modalOpen: boolean
  }>()

  const emit = defineEmits(["open-modal", "close-modal"])
  const modalContent = ref()
  const searchInput = ref()

  // close on click outside
  const clickHandler = (event: Event) => {
    if (!props.modalOpen || modalContent.value.contains(event.target)) return
    emit("close-modal")
  }

  // close if the esc key is pressed
  const keyHandler = ({ key }: KeyboardEvent) => {
    if (!props.modalOpen || key !== "Escape") return
    emit("close-modal")
  }

  onMounted(() => {
    document.addEventListener("click", clickHandler)
    document.addEventListener("keydown", keyHandler)
  })

  onUnmounted(() => {
    document.removeEventListener("click", clickHandler)
    document.removeEventListener("keydown", keyHandler)
  })

  watch(
    () => props.modalOpen,
    (open) => open && nextTick(() => searchInput.value.focus())
  )
</script>
