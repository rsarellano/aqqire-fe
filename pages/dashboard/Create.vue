<template>
  <div class="flex flex-col gap-4 p-4 px-12">
    <h1 class="px-2 text-2xl font-bold">Select Property Type</h1>
    <FormKit
      type="select"
      placeholder="Select Property Type"
      name="property_types"
      :options="propertyTypes"
      v-model="propertyType"
      label-class="pb-1 text-2xl uppercase" />

    <template v-if="propertyType">
      <BrokerCreateBasicInfo />
      <BrokerCreateLocation />

      <h2
        class="pb-4 text-2xl font-bold text-gray-700 border-b border-gray-700">
        {{ propertyType }} Detailed Information
      </h2>

      <!-- APN -->
      <FormKit
        label="Apn ID (Assessor's Parcel Number ID)"
        type="text"
        label-class="pb-1 text-2xl uppercase" />

      <BrokerCreateDetailHotel v-if="propertyType === 'Hotel'" />
      <BrokerCreateDetailGas v-if="propertyType === 'Gas Station'" />
      <BrokerCreateDetailRetail v-if="propertyType === 'Retail'" />
      <BrokerCreateDetailIndustrial v-if="propertyType === 'Industrial'" />
      <BrokerCreateDetailMulti v-if="propertyType === 'Multi-Family'" />
      <BrokerCreateDetailRestaurant v-if="propertyType === 'Restaurant'" />
      <BrokerCreateDetailHealth v-if="propertyType === 'Health'" />
      <BrokerCreateDetailOffice v-if="propertyType === 'Office'" />
      <BrokerCreateDetailSpecial v-if="propertyType === 'Special'" />

      <BrokerCreateMarketInfo />

      <h2
        class="pb-4 text-2xl font-bold text-gray-700 border-b border-gray-700">
        {{ propertyType }} Financial Information
      </h2>

      <BrokerCreateFinancialHotel v-if="propertyType === 'Hotel'" />
      <BrokerCreateFinancialGas v-if="propertyType === 'Gas Station'" />
      <BrokerCreateFinancialRetail v-if="propertyType === 'Retail'" />
      <BrokerCreateFinancialMulti v-if="propertyType === 'Multi-Family'" />
      <BrokerCreateFinancialRestaurant v-if="propertyType === 'Restaurant'" />
      <BrokerCreateFinancialHealth v-if="propertyType === 'Health'" />
      <BrokerCreateFinancialOffice v-if="propertyType === 'Office'" />
      <BrokerCreateFinancialSpecial v-if="propertyType === 'Special'" />

      <Button>Create Property</Button>
    </template>
  </div>
</template>

<script setup lang="ts">
  const propertyTypes = [
    "Hotel",
    "Gas Station",
    "Retail",
    "Multi-Family",
    "Land",
    "Industrial",
    "Restaurant",
    "Health",
    "Office",
    "Special",
  ];

  const propertyType = ref();
</script>
