<template>
  <div class="card">
    <DataTable :value="products">
      <template #header>
        <div class="flex justify-between gap-12">
          <Skeleton class="!h-12 !w-1/4"></Skeleton>
          <Skeleton class="!h-12 !w-2/5"></Skeleton>
          <Skeleton class="!h-12 !w-1/4"></Skeleton>
        </div>
      </template>
      <Column
        field="code"
        header="">
        <template #body>
          <Skeleton></Skeleton>
        </template>
      </Column>
      <Column
        field="name"
        header="">
        <template #body>
          <Skeleton></Skeleton>
        </template>
      </Column>
      <Column
        field="category"
        header="">
        <template #body>
          <Skeleton></Skeleton>
        </template>
      </Column>
      <Column
        field="quantity"
        header="">
        <template #body>
          <Skeleton></Skeleton>
        </template>
      </Column>
      <Column
        field="quantity"
        header="">
        <template #body>
          <Skeleton></Skeleton>
        </template>
      </Column>
      <Column
        field="quantity"
        header="">
        <template #body>
          <Skeleton></Skeleton>
        </template>
      </Column>
      <Column
        field="quantity"
        header="">
        <template #body>
          <Skeleton></Skeleton>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
  const products = ref(new Array(8))
</script>
