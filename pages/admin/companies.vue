<template>
  <div>
    <AdminNav />

    <div class="p-4">
      <div
        class="p-4 py-2 mx-auto my-2 font-bold text-center text-white bg-blue-500 rounded-t-md">
        Featured Logos
      </div>

      <div class="flex flex-col h-full gap-4 p-4 bg-white rounded-md">
        <div class="flex flex-col justify-between gap-4 md:flex-row">
          <h2 class="text-2xl font-bold">Drag and Drop to change sorting</h2>
          <button
            class="p-2 px-4 text-white bg-blue-500 rounded-md"
            @click="modal = !modal">
            Add Logo
          </button>
        </div>

        <!-- Modal -->
        <Modal
          id="featured-logo-modal"
          :modal-open="modal">
          <div class="flex items-center justify-center bg-blue-500">
            <p class="text-xl text-center text-white grow">Add Featured Logo</p>
            <button
              class="p-4 py-2 text-white bg-red-500"
              @click="modal = !modal">
              X
            </button>
          </div>
          <div class="p-4">
            <div class="flex flex-col gap-4">
              <!-- input fields -->

              <FormKit
                v-model="addItem.url"
                label="Url" />
              <FormKit
                v-model="addItem.name"
                label="Name" />

              <div class="flex items-center justify-center p-4">
                <img :src="addItem.imageUrl" />
              </div>
              <label class="gap-2 text-gray-600">
                Logo:
                <div class="w-full p-2 text-gray-600 bg-gray-200 rounded-md">
                  Select File
                  <input
                    type="file"
                    class="hidden"
                    @input="handleFileChange($event, addItem)" />
                </div>
              </label>

              <!-- <button @click="addLogo">Add Logo</button> -->
            </div>
          </div>
        </Modal>

        <draggable
          :list="featuredLogos"
          group="featuredLogos"
          class="flex flex-wrap items-center gap-4"
          item-key="id"
          @start="drag = true"
          @end="drag = false">
          <template #item="{ element, index }">
            <transition-group
              tag="div"
              name="fade">
              <AdminCompanyItem
                :id="element.id"
                :name="element.name"
                :url="element.url"
                :image-url="element.imageUrl"
                :index="index"
                @emit-value="editLogo" />
            </transition-group>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import draggable from "vuedraggable"

  import {
    featuredLogos,
    editLogo,
    addItem,
    handleFileChange,
  } from "~/components/Admin/Company/store"

  const drag = ref(false)
  const modal = ref(false)

  // const addLogo = () => {
  //   featuredLogos.value.push({
  //     ...addItem.value,
  //     id: featuredLogos.value.length + 1,
  //   })
  //   modal.value = false
  // }
</script>
