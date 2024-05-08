<template>
  <AdminNav />
  <div class="flex flex-col gap-4 p-4 px-12">
    <h1
      class="px-2 text-2xl font-bold capitalize"
      v-if="store.propertyType"
    >
      Add {{ store.propertyType }} Property
    </h1>
    <h1
      class="px-2 text-2xl font-bold capitalize"
      v-else
    >
      Select Property type
    </h1>

    <FormKit
      type="select"
      placeholder="Select Property Type"
      name="property_types"
      :options="propertyTypes"
      v-model="store.propertyType"
      @input="resetFields"
      label-class="pb-1 text-2xl uppercase"
    />

    <template v-if="store.propertyType">
      <AdminPropertyBrokerSearch v-model="store.brokers" />
      <BrokerPropertyBasicInfo v-model="store" />
      <BrokerPropertyLocation v-model="store" />

      <h2
        class="pb-4 text-2xl font-bold text-gray-700 capitalize border-b border-gray-700"
      >
        {{ store.propertyType }} Detailed Information
      </h2>

      <!-- APN -->
      <FormKit
        label="Apn ID (Assessor's Parcel Number ID)"
        type="text"
        v-model="store.apnId"
        label-class="pb-1 text-2xl uppercase"
      />

      <BrokerPropertyDetailHotel
        v-if="store.propertyType === 'Hotel'"
        v-model="store"
      />
      <BrokerPropertyDetailGas
        v-if="store.propertyType === 'Gas Station'"
        v-model="store"
      />
      <BrokerPropertyDetailRetail
        v-model="store"
        v-if="
          store.propertyType === 'Retail' ||
          store.propertyType === 'Health' ||
          store.propertyType === 'Special'
        "
      />
      <BrokerPropertyDetailIndustrial
        v-model="store"
        v-if="store.propertyType === 'Industrial'"
      />
      <BrokerPropertyDetailMulti
        v-if="store.propertyType === 'Multi-Family'"
        v-model="store"
      />
      <BrokerPropertyDetailRestaurant
        v-model="store"
        v-if="store.propertyType === 'Restaurant'"
      />
      <BrokerPropertyDetailOffice
        v-if="store.propertyType === 'Office'"
        v-model="store"
      />

      <BrokerPropertyMarketInfo v-model="store" />

      <h2
        class="pb-4 text-2xl font-bold text-gray-700 capitalize border-b border-gray-700"
      >
        {{ store.propertyType }} Financial Information
      </h2>

      <BrokerPropertyFinancialHotel
        v-if="store.propertyType === 'Hotel'"
        v-model="store"
      />
      <BrokerPropertyFinancialGas
        v-if="store.propertyType === 'Gas Station'"
        v-model="store"
      />
      <BrokerPropertyFinancialRetail
        v-model="store"
        v-if="
          store.propertyType === 'Retail' ||
          store.propertyType === 'Health' ||
          store.propertyType === 'Special'
        "
      />
      <BrokerPropertyFinancialMulti
        v-model="store"
        v-if="store.propertyType === 'Multi-Family'"
      />
      <BrokerPropertyFinancialRestaurant
        v-model="store"
        v-if="store.propertyType === 'Restaurant'"
      />
      <BrokerPropertyFinancialOffice
        v-if="store.propertyType === 'Office'"
        v-model="store"
      />

      <div class="flex flex-col w-full gap-2">
        <Button
          @click="resetFields"
          severity="danger"
          >Reset Fields</Button
        >
        <Button @click="">Create Property</Button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { store, resetFields } from "~/components/Broker/Property/store"
  const route = useRoute()
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
  ]
</script>
