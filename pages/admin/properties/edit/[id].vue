<template>
  <AdminNav />
  <div class="flex flex-col gap-4 p-4 px-12">
    <h1 class="text-2xl font-bold capitalize">
      Edit Property

      <span class="text-blue-500">
        {{ store.propertyName }}
      </span>
    </h1>

    <template v-if="store.propertyType">
      <AdminPropertyBrokerSearch v-model="store.brokers" />
      <BrokerPropertyBasicInfo v-model="store" />
      <BrokerPropertyLocation v-model="store" />
      <BrokerPropertyMap v-model="store" />

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
  import { onMounted } from "vue"
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

  onMounted(() => {
    store.value = {
      propertyType: "Hotel",
      // Basic Info
      propertyName: "Lakeside Resort",
      price: "$10,000,000",
      saleType: "For Sale",
      brand: "Luxury Suites",

      // Location
      international: false,
      address: "123 Lakeview Dr",
      city: "Los Angeles",
      state: "California",
      zip: "90001",
      coordinates: {
        lat: 0,
        lng: 0,
      },

      // Common Info
      buildingSizeinSqFt: "50,000",
      numberOfBuildings: "3",
      numberOfUnits: "100",
      numberOfFloors: "5",
      yearBuilt: "1990",
      yearRenovated: "2018",
      lotSizeAcre: "10",
      permitZoning: "Commercial",
      netRentableArea: "45,000",
      buildingClass: "A",
      netLease: "Triple Net",
      tenancy: "Fully Leased",
      apnId: "123-456-789",
      pricePerSquareFt: "$200",
      netOperatingIncome: "$750,000",
      capRate: "7%",
      occupancy: "95%",
      grossRentalIncome: "$1,000,000",
      netRentalIncome: "$900,000",

      // Market Info
      investmentHighlights: "Prime location with high tourist traffic.",
      propertySummary: "Luxurious lakeside resort offering premium amenities.",
      marketSummary: "Strong demand for hospitality services in the area.",
      trafficCount: "10,000 vehicles per day",

      // Gas
      mpd: "8",
      gasOptions: [],
      baysIncome: "$200,000",
      annualFuelRevenue: "$1,500,000",
      annualCStoreRevenue: "$1,000,000",
      annualBayRevenue: "$300,000",
      annualRestaurantRevenue: "$600,000",

      // Hotel
      averageDailyRate: "$200",
      revPar: "$150",
      multiplier: "10",

      brokers: [], // No data provided for brokers

      // No data provided for gas options
    }
  })
</script>
