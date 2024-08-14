<template>
  <div class="space-y-4">
    <h1 class="font-bold text-4xl ">Add a Sold Property</h1>
    <FormKit label="Property Name" />
    <FormKit
      type="select"
      label="Type of Property"
      placeholder="Choose Property Type"
      :options="[
        'Hotel',
        'Gas Station',
        'Retail',
        'Multi-Family',
        'Land',
        'Industrial',
        'Restaurant',
      ]"
    />
    <div class="flex flex-col md:flex-row gap-4">
      <FormKit label="City" />
      <FormKit label="State" />
      <FormKit label="Zip Code" />
    </div>
    <div class="flex flex-col md:flex-row gap-4">
      <FormKit label="Closing Price" />
      <FormKit label="Closing Date" />
    </div>

    <FormKit
      type="select"
      label="I represent the?"
      :options="['Buyer', 'Seller']"
    />
    <FormKit
      type="select"
      label="Make Public or private?"
      :options="['Public', 'Private']"
    />
  
    <h2 class="text-center font-bold my-4">Add Property Images</h2>
    <BrokerPropertyUpload />
  </div>
</template>

<script setup lang="ts">
</script>
