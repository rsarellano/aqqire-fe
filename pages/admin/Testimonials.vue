<template>
  <div>
    <AdminNav />

    <!-- Main content -->
    <div class="flex flex-col p-6 bg-white">
      <div class="flex justify-between">
        <h2 class="text-2xl font-bold">Testimonials</h2>
        <button
          class="p-4 py-2 text-white duration-200 rounded-md bg-main hover:bg-blue-400"
          @click="add">
          Add Testimonial
        </button>
      </div>

      <!--  Add Dialog -->
      <Modal :modal-open="modal">
        <div class="flex flex-col w-full gap-4 p-4">
          <!-- Add Testimonial -->
          <div class="flex justify-between">
            <div class="text-2xl font-bold capitalize">
              {{ mode }} Testimonial | {{ addTestimony.id }}
            </div>
            <button @click="modal = !modal"><i class="pi pi-times"/></button>
          </div>

          <FormKit v-model="addTestimony.name" label="Name" />
          <FormKit v-model="addTestimony.company" label="Company" />
          <FormKit v-model="addTestimony.position" label="Position" />
          <FormKit
            v-model="addTestimony.testimonial"
            type="textarea"
            label="Testimony" />

          <button
            v-if="mode === 'edit'"
            class="w-full p-2 px-4 text-white rounded-md bg-main hover:bg-blue-400"
            @click="changeValue">
            Edit
          </button>

          <button
            v-else-if="mode === 'add'"
            class="w-full p-2 px-4 text-white rounded-md bg-main hover:bg-blue-400"
            @click="addTestimonial">
            Add
          </button>
        </div>
      </Modal>

      <!-- Draggable -->
      <draggable
        :list="testimonials"
        group="testimonials"
        item-key="id"
        class="flex flex-wrap gap-4"
        @start="drag = true"
        @end="drag = false">
        <template #item="{ element, index }">
          <transition-group tag="div">
            <div :key="element" class="transition-transform transform">
              <AdminTestimonialsCard
                :id="element.id"
                :company="element.company"
                :testimonial="element.testimonial"
                :position="element.position"
                :name="element.name"
                :index="index"
                @edit="edit" />
            </div>
          </transition-group>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup lang="ts">
  import draggable from "vuedraggable";
  import {
    changeValue,
    addTestimony,
    testimonials,
    addTestimonial,
    setValue,
    modal,
    mode
  } from "../../components/Admin/Testimonials/store";

  const drag = ref(false);
  const edit = (idx: number) => {
    mode.value = "edit";
    modal.value = true;
    setValue(idx);
  };
  const add = () => {
    mode.value = "add";
    modal.value = true;
    setValue(-1);
  };
</script>
