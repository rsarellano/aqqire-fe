<template>
  <section
    class="flex flex-col justify-between w-full max-w-6xl p-4 text-gray-700 bg-white rounded-md md:flex-row">
    <div class="space-y-3 md:block md:space-y-2">
      <h1
        class="text-2xl font-bold text-center md:text-left md:text-4xl text-slate-800">
        Family Home in Glasgow
      </h1>
      <p class="space-x-2 text-center md:text-left">
        <i class="text-blue-500 pi pi-map-marker"></i>
        <span class="italic text-gray-400"> 60 High St, Glasgow, London </span>
      </p>
      <p class="text-sm text-center text-gray-400 md:text-left">
        <i class="pi pi-building"></i>
        Building Size 103,484 sq. ft.</p
      >
    </div>
    <div
      class="flex flex-col items-center justify-center gap-2 mt-4 md:items-end md:justify-between">
      <Tag>Gas Station</Tag>
      <p class="text-2xl font-bold text-blue-500">$7,500,000</p>
      <p class="text-sm text-gray-400">Cap Rate 9.36%</p>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
