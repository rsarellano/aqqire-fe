<template>
  <div>
    <AdminNav />
    <div class="flex flex-col">
      <div class="font-bold text-center text-white bg-blue-500 rounded-t-md">
        Banners
      </div>
      <div class="h-full p-4 bg-white">
        <div class="flex justify-between">
          <h2 class="text-xl">Drag and Drop to change Sorting</h2>
          <button
            class="p-2 px-4 text-white bg-blue-500 rounded-md"
            @click="modal = !modal">
            Add Banner
          </button>
        </div>
        <div class="my-2 text-sm italic font-bold text-red-500">
          (Minimum: 1280x720 Pixel) (Recommended: 1920x1080 Pixel)
        </div>

        <!-- Modal -->
        <Modal id="company-banner-modal" :modalOpen="modal">
          <div class="flex items-center justify-center bg-blue-500">
            <p class="text-xl text-center text-white grow">Add Banner</p>
            <button
              class="p-4 py-2 text-white bg-red-500"
              @click="modal = !modal">
              X
            </button>
          </div>
          <div class="p-4">
            <div class="flex flex-col gap-4">
              <!-- input fields -->
              <FormKit label="Name" v-model="addItem.name" />

              <FormKit
                type="file"
                label="Banner"
                v-model="addItem.imageUrl"
                accept=".jpg,.png,.webm" />

              <!-- <div class="flex items-center justify-center p-4">
                <img :src="addItem.imageUrl" />
              </div> -->

              <button @click="addBanner">Add Banner</button>
            </div>
          </div>
        </Modal>

        <!-- Draggable -->
        <draggable
          :list="banners"
          group="banners"
          @start="drag = true"
          @end="drag = false"
          class="flex flex-wrap items-center gap-4 mt-2"
          item-key="id">
          <template #item="{ element, index }">
            <transition-group tag="div" name="fade">
              <AdminBannerItem
                :name="element.name"
                :imageUrl="element.imageUrl"
                :id="element.id"
                :index="index" />
              <!-- @emit-value="editBanner"  -->
            </transition-group>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import draggable from "vuedraggable";
  import { banners, addItem } from "~/components/Admin/Banner/store";

  const drag = ref(false);
  const modal = ref(false);

  // const addBanner = () => {
  //   banners.value.push({
  //     ...addItem.value,
  //     id: banners.value.length + 1,
  //   });
  //   modal.value = false;
  // };
</script>
