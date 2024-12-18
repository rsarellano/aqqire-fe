<template>
  <div>
    <AdminNav />

    <div class="p-4">
      <div class="p-2 font-bold text-center text-white rounded-md bg-main">
        Frequently Asked Questions
      </div>
      <div class="w-full h-full p-4 my-2 bg-white rounded-md">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-semibold text-gray-700 uppercase">
            Drag/Drop to change sorting
          </h2>
          <FaqAdd />
        </div>

        <!-- Draggable Here -->
        <draggable
          v-model="faqList"
          group="faq"
          item-key="id"
          @start="drag = true"
          @end="drag = false">
          <template #item="{ element, index }">
            <transition-group tag="div" name="fade">
              <AdminFaqItem
                :id="element.id"
                :question="element.question"
                :answer="element.answer"
                :index="index"
                @emit-value="changeValue" />
            </transition-group>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import draggable from "vuedraggable";

  // Store
  import { faqList, changeValue } from "../../components/Admin/Faq/FaqStore";

  // Refs
  const drag = ref(false);
</script>
