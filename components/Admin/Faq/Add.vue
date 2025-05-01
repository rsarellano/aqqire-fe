<template>
  <!-- Add FAQ Modal -->
  <button
    class="p-4 py-2 text-gray-700 duration-300 border border-gray-700 rounded hover:bg-main hover:border-main hover:text-white"
    @click="showModal">
    Add FAQ
  </button>

  <dialog
    ref="modal"
    class="p-0 bg-white rounded-md backdrop:bg-gray-800 backdrop:bg-opacity-60"
    @close="visible = false">
    <div class="flex flex-col gap-4 p-4 rounded-md min-w-[30rem]">
      <!-- Header -->
      <div class="flex gap-2">
        <h2
          class="p-4 py-2 font-bold text-center text-white rounded bg-main grow">
          Add FAQ
        </h2>
        <button
          class="px-4 text-white bg-red-500 rounded-md p2"
          @click="showModal">
          X
        </button>
      </div>

      <!-- Fields -->
      <input
        v-model="addFaq.question"
        placeholder="Question"
        class="p-2 px-4 border border-gray-300 rounded-md" >
      <textarea
        v-model="addFaq.answer"
        placeholder="Answer"
        class="h-full min-h-[10rem] rounded"/>
      <button
        class="p-2 px-4 border rounded-md text-main border-main hover:text-white hover:bg-main"
        @click="addItem">
        ADD FAQ
      </button>
    </div>
  </dialog>
</template>

<script setup lang="ts">
  import { faqList } from "./FaqStore";

  const modal = ref();
  const addFaq = ref({
    question: '',
    answer: '',
  });
  const visible = ref(false);

  const showModal = () => {
    if (visible.value === true) {
      modal.value.close();
      return;
    }
    modal.value.showModal();
    visible.value = true;
  };

  const addItem = () => {
    faqList.value.push({ ...addFaq.value, id: faqList.value.length + 1 });
    showModal()
  };
</script>
