<template>
  <div class="flex flex-col gap-4 p-4 px-12">
    <h1 class="px-2 text-2xl font-bold capitalize"> Add Property </h1>

    <FormKit
      type="select"
      placeholder="Select Property Type"
      name="property_types"
      :options="propertyTypes"
      v-model="propertyType"
      @input="resetFields"
      label-class="pb-1 text-2xl uppercase"
    />

    <template v-if="propertyType">
      <BrokerPropertyBasicInfo />
      <BrokerPropertyLocation />

      <h2
        class="pb-4 text-2xl font-bold text-gray-700 capitalize border-b border-gray-700"
      >
        {{ propertyType }} Detailed Information
      </h2>

      <!-- APN -->
      <FormKit
        label="Apn ID (Assessor's Parcel Number ID)"
        type="text"
        label-class="pb-1 text-2xl uppercase"
      />

      <BrokerPropertyDetailHotel v-if="propertyType === 'Hotel'" />
      <BrokerPropertyDetailGas v-if="propertyType === 'Gas Station'" />
      <BrokerPropertyDetailRetail
        v-if="
          propertyType === 'Retail' ||
          propertyType === 'Health' ||
          propertyType === 'Special'
        "
      />
      <BrokerPropertyDetailIndustrial v-if="propertyType === 'Industrial'" />
      <BrokerPropertyDetailMulti v-if="propertyType === 'Multi-Family'" />
      <BrokerPropertyDetailRestaurant v-if="propertyType === 'Restaurant'" />
      <BrokerPropertyDetailOffice v-if="propertyType === 'Office'" />

      <BrokerPropertyMarketInfo />

      <h2
        class="pb-4 text-2xl font-bold text-gray-700 capitalize border-b border-gray-700"
      >
        {{ propertyType }} Financial Information
      </h2>

      <BrokerPropertyFinancialHotel v-if="propertyType === 'Hotel'" />
      <BrokerPropertyFinancialGas v-if="propertyType === 'Gas Station'" />
      <BrokerPropertyFinancialRetail
        v-if="
          propertyType === 'Retail' ||
          propertyType === 'Health' ||
          propertyType === 'Special'
        "
      />
      <BrokerPropertyFinancialMulti v-if="propertyType === 'Multi-Family'" />
      <BrokerPropertyFinancialRestaurant v-if="propertyType === 'Restaurant'" />
      <BrokerPropertyFinancialOffice v-if="propertyType === 'Office'" />

      <div class="w-full flex gap-2 flex-col">
        <Button
          @click="resetFields"
          severity="danger"
          >Reset Fields</Button
        >
        <Button @click="handleClick">Create Property</Button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { store, resetFields } from '~/components/Broker/Property/store'

  const propertyTypes = [
    'Hotel',
    'Gas Station',
    'Retail',
    'Multi-Family',
    'Land',
    'Industrial',
    'Restaurant',
    'Health',
    'Office',
    'Special',
  ]

  const route = useRoute()

  const propertyType = ref()
  const handleClick = () => {
    console.log('click')
  }
</script>
