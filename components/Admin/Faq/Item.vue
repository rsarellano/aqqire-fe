<template>
  <div
    class="flex gap-4 p-6 my-2 transition-transform transform border rounded-md cursor-move border-main gap-x-6 hover:scale-100">
    <div class="flex items-center justify-center text-4xl font-bold w-[8%]">
      {{ props.index + 1 }}.
    </div>
    <div class="flex flex-col grow">
      <div class="text-sm font-bold">Question:</div>
      <div class="p-4 pl-0">
        {{ props.question }}
      </div>
      <div class="text-sm font-bold">Answer:</div>
      <div class="p-4 pl-0">
        {{ props.answer }}
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-4">
      <button class="hover:fill-main" @click="showModal">
        <i class="pi pi-file-edit hover:text-main"/>
      </button>
      <button class="hover:text-red-500" @click="deleteFaq(props.id)">
        <i class="pi pi-trash"/>
      </button>
    </div>

    <dialog
      ref="modal"
      class="p-0 bg-white rounded-md backdrop:bg-gray-800 backdrop:bg-opacity-60"
      @close="visible = false">
      <div class="flex flex-col gap-4 p-4 rounded-md min-w-[30rem]">
        <!-- Header -->
        <div class="flex gap-2">
          <h2
            class="p-4 py-2 font-bold text-center text-white rounded bg-main grow">
            Edit FAQ
          </h2>
          <button
            class="px-4 text-white bg-red-500 rounded-md p2"
            @click="showModal">
            X
          </button>
        </div>

        <!-- Fields -->
        <input
          v-model="faqItem.question"
          placeholder="Question"
          class="p-2 px-4 border border-gray-300 rounded-md" >
        <textarea
          v-model="faqItem.answer"
          placeholder="Answer"
          class="h-full min-h-[10rem] rounded"/>
        <button
          class="p-2 px-4 border rounded-md text-main border-main hover:text-white hover:bg-main"
          @click="emitValue">
          Update FAQ
        </button>
      </div>
    </dialog>
  </div>
</template>

<script setup lang="ts">
  import { deleteFaq } from "./FaqStore";

  const props = defineProps({
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    index: { type: Number, required: true },
  });

  const emit = defineEmits(["emitValue"]);

  const modal = ref();
  const visible = ref(false);
  const faqItem = ref({
    question: props.question,
    answer: props.answer,
    id: props.id,
    order: props.index,
  });

  const showModal = () => {
    if (visible.value === true) {
      modal.value.close();
      return;
    }
    modal.value.showModal();
    visible.value = true;
  };

  const emitValue = () => {
    emit("emitValue", faqItem.value);
    modal.value.close();
  };
</script>
