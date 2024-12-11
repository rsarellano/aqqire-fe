<template>
  <div>
    <AdminNav />

    <!-- Properties Section -->
    <div class="p-4">
      <DataTable :value="pages">
        <Column field="name" header="Name">
          <template #body="props">
            <p class='text-xs'>
              {{ props.data.name }}
            </p>
          </template>
        </Column>

        <Column field="header" header="Header">
          <template #body="props">
            <p class='text-xs'>{{ props.data.header }}</p>
          </template>
        </Column>

        <Column field="content" header="Content" class="text-xs max-w-52">
          <template #body="props">
            <div class="flex items-center gap-2 line-clamp-1">
              {{ props.data.content }}
            </div>
          </template>
        </Column>

        <Column field="link" header="Link" class='max-w-52'>
          <template #body="props">
            <div class="flex items-center gap-2 text-xs">{{props.data.link}}</div>
          </template>
        </Column>

        <Column field="actions" header="Actions">
          <template #body="props">
            <div class="flex items-center gap-2">
              <NuxtLink
                to="#"
                class="p-1 px-2 text-gray-500 border-2 border-gray-500 rounded-full hover:border-blue-500 hover:text-blue-500"
                title="Info">
                <i class="text-gray-500 hover:text-blue-500 pi pi-info"/>
              </NuxtLink>
              <NuxtLink
                to="#"
                class="p-1 px-2 text-gray-500 border-2 border-gray-500 rounded-full hover:border-blue-500 hover:text-blue-500">
                <i class="pi pi-pencil" title="Edit"/>
              </NuxtLink>

              <button title="Enable or Disable(Soft Delete)">
                <InputSwitch v-model="props.data.disabled" />
              </button>
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
  const pages = ref([
    {
      name: "About Us",
      header: "About Us",
      content: `<h1 id="mcetoc_1bqc8tb5c2" style="text-align: center;">Connecting Commercial Real Estate</h1> <h3 id="mcetoc_1bqc8t0mn1"`,
      link: "https://www.aqqire.com/about-us",
      disabled: true,
    },
    {
      name: "About Us",
      header: "About Us",
      content: `<h1 id="mcetoc_1bqc8tb5c2" style="text-align: center;">Connecting Commercial Real Estate</h1> <h3 id="mcetoc_1bqc8t0mn1"`,
      link: "https://www.aqqire.com/about-us",
      disabled: true,
    },
    {
      name: "About Us",
      header: "About Us",
      content: `<h1 id="mcetoc_1bqc8tb5c2" style="text-align: center;">Connecting Commercial Real Estate</h1> <h3 id="mcetoc_1bqc8t0mn1"`,
      link: "https://www.aqqire.com/about-us",
      disabled: true,
    },
    {
      name: "About Us",
      header: "About Us",
      content: `<h1 id="mcetoc_1bqc8tb5c2" style="text-align: center;">Connecting Commercial Real Estate</h1> <h3 id="mcetoc_1bqc8t0mn1"`,
      link: "https://www.aqqire.com/about-us",
      disabled: false,
    },
  ]);
</script>
