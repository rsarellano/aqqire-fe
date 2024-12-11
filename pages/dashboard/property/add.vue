<template>
  <div>
    <DashboardNav />
    <div class="flex flex-col gap-4 md:px-12 md:p-4">
      <h1 class="px-2 text-2xl font-bold capitalize">
        Add {{ store.propertyType }} Property
      </h1>

      <FormKit
        v-model="store.propertyType"
        type="select"
        placeholder="Select Property Type"
        name="property_types"
        :options="propertyTypes"
        label-class="pb-1 text-2xl uppercase"
        @input="resetFields" />

      <template v-if="store.propertyType">
        <BrokerPropertyBasicInfo v-model="store" />
        <BrokerPropertyLocation v-model="store" />
        <BrokerPropertyMap v-model="store" />

        <h2
          class="pb-4 text-2xl font-bold text-gray-700 capitalize border-b border-gray-700">
          {{ store.propertyType }} Detailed Information
        </h2>

        <!-- APN -->
        <FormKit
          v-model="store.apnId"
          label="Apn ID (Assessor's Parcel Number ID)"
          type="text"
          label-class="pb-1 text-2xl uppercase" />

        <BrokerPropertyDetailHotel
          v-if="store.propertyType === 'Hotel'"
          v-model="store" />
        <BrokerPropertyDetailGas
          v-if="store.propertyType === 'Gas Station'"
          v-model="store" />
        <BrokerPropertyDetailRetail
          v-if="
            store.propertyType === 'Retail' ||
            store.propertyType === 'Health' ||
            store.propertyType === 'Special'
          "
          v-model="store" />
        <BrokerPropertyDetailIndustrial
          v-if="store.propertyType === 'Industrial'"
          v-model="store" />
        <BrokerPropertyDetailMulti
          v-if="store.propertyType === 'Multi-Family'"
          v-model="store" />
        <BrokerPropertyDetailRestaurant
          v-if="store.propertyType === 'Restaurant'"
          v-model="store" />
        <BrokerPropertyDetailOffice
          v-if="store.propertyType === 'Office'"
          v-model="store" />

        <BrokerPropertyMarketInfo v-model="store" />

        <h2
          class="pb-4 text-2xl font-bold text-gray-700 capitalize border-b border-gray-700">
          {{ store.propertyType }} Financial Information
        </h2>

        <BrokerPropertyFinancialHotel
          v-if="store.propertyType === 'Hotel'"
          v-model="store" />
        <BrokerPropertyFinancialGas
          v-if="store.propertyType === 'Gas Station'"
          v-model="store" />
        <BrokerPropertyFinancialRetail
          v-if="
            store.propertyType === 'Retail' ||
            store.propertyType === 'Health' ||
            store.propertyType === 'Special'
          "
          v-model="store" />
        <BrokerPropertyFinancialMulti
          v-if="store.propertyType === 'Multi-Family'"
          v-model="store" />
        <BrokerPropertyFinancialRestaurant
          v-if="store.propertyType === 'Restaurant'"
          v-model="store" />
        <BrokerPropertyFinancialOffice
          v-if="store.propertyType === 'Office'"
          v-model="store" />

        <div class="flex flex-col w-full gap-2">
          <Button
            severity="danger"
            @click="resetFields">
            Reset Fields
          </Button>
          <Button @click="handleClick">Create Property</Button>
        </div>
      </template>
    </div>
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

  const handleClick = () => {
    console.log("click")
  }
</script>
