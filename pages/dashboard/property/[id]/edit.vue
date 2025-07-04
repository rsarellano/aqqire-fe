<template>
  <div class="flex flex-col gap-4 p-4 px-12">
    <DashboardNav />

    <h1 class="text-2xl font-bold capitalize">
      Edit Property

      <span class="text-main">
        {{ store.propertyName }}
      </span>
    </h1>

    <FormKit
      v-model="store.propertyType"
      label="Property Type"
      type="select"
      placeholder="Change Property Type"
      :options="assetTypes" />

    <template v-if="store.propertyType">
      <AdminPropertyBrokerSearch v-model="store.brokers" />
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
        v-if="store.propertyType === 'hotel'"
        v-model="store" />
      <BrokerPropertyDetailGas
        v-if="store.propertyType === 'gas'"
        v-model="store" />
      <BrokerPropertyDetailRetail
        v-if="
          store.propertyType === 'retail' ||
          store.propertyType === 'health' ||
          store.propertyType === 'special'
        "
        v-model="store" />
      <BrokerPropertyDetailIndustrial
        v-if="store.propertyType === 'industrial'"
        v-model="store" />
      <BrokerPropertyDetailMulti
        v-if="store.propertyType === 'multifamily'"
        v-model="store" />
      <BrokerPropertyDetailRestaurant
        v-if="store.propertyType === 'restaurant'"
        v-model="store" />
      <BrokerPropertyDetailOffice
        v-if="store.propertyType === 'office'"
        v-model="store" />

      <BrokerPropertyMarketInfo v-model="store" />

      <h2
        class="pb-4 text-2xl font-bold text-gray-700 capitalize border-b border-gray-700">
        {{ store.propertyType }} Financial Information
      </h2>

      <BrokerPropertyFinancialHotel
        v-if="store.propertyType === 'hotel'"
        v-model="store" />
      <BrokerPropertyFinancialGas
        v-if="store.propertyType === 'gas'"
        v-model="store" />
      <BrokerPropertyFinancialRetail
        v-if="
          store.propertyType === 'retail' ||
          store.propertyType === 'health' ||
          store.propertyType === 'special'
        "
        v-model="store" />
      <BrokerPropertyFinancialMulti
        v-if="store.propertyType === 'multifamily'"
        v-model="store" />
      <BrokerPropertyFinancialRestaurant
        v-if="store.propertyType === 'restaurant'"
        v-model="store" />
      <BrokerPropertyFinancialOffice
        v-if="store.propertyType === 'office'"
        v-model="store" />

      <div class="flex flex-col w-full gap-2">
        <Button>Update Property</Button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { useRuntimeConfig } from "#app"
  import { store, resetFields } from "~/components/Broker/Property/store"
  import { asset_types } from "~/pages/admin/properties/states"
  const apiUrl = useRuntimeConfig().public.API_BASE_URL

  const { data: authData } = useAuth()
  asset_types.shift()
  const assetTypes = ref(asset_types)

  const user = computed(() => authData.value)
  const route = useRoute()

  const { data } = await useFetch(`${apiUrl}/broker/properties`, {
    params: {
      userId: user?.value?.id,
      property_id: route.params.id,
    },
  })


  store.value = {
    propertyType: data.value.asset_type,

    // Basic Info
    propertyName: data.value.name,
    price: data.value.mongodata.price,
    saleType: data.value.mongodata.sale_type,
    brand: data.value.mongodata.brand,

    // Location
    international: false,
    address: data.value.address,
    city: data.value.city,
    state: data.value.state_name,
    zip: data.value.mongodata.zip_code,
    coordinates: {
      lat: data.value.mongodata.latitude,
      lng: data.value.mongodata.longitude,
    },

    // Common Info
    buildingSizeinSqFt: data.value.mongodata.building_size,
    numberOfBuildings: data.value.mongodata.buildings,
    numberOfUnits: data.value.mongodata.units,
    numberOfFloors: data.value.mongodata.floors,
    yearBuilt: data.value.mongodata.year,
    yearRenovated: data.value.mongodata.year_renovated,
    lotSizeAcre: data.value.mongodata.lot_size,
    apnId: data.value.mongodata.apn,
    occupancy: data.value.mongodata.occupancy,
    capRate: data.value.mongodata.cap_rate,
    permitZoning: "",
    netRentableArea: "",
    buildingClass: "",
    netLease: "",
    tenancy: "",
    pricePerSquareFt: "",
    netOperatingIncome: "",
    netRentalIncome: "",
    grossRentalIncome: "",

    // Market Info
    investmentHighlights: data.value.mongodata.highlights,
    propertySummary: data.value.mongodata.summary,
    marketSummary: data.value.mongodata.market_summary,
    trafficCount: data.value.mongodata.traffic_count,

    // Gas
    mpd: data.value.mongodata.mpd,
    gasOptions: [],
    baysIncome: data.value.mongodata.bays_income,
    annualFuelRevenue: data.value.mongodata.annual_fuel_revenue,
    annualCStoreRevenue: data.value.mongodata.annual_c_store_revenue,
    annualBayRevenue: data.value.mongodata.annual_bay_revenue,
    annualRestaurantRevenue: data.value.mongodata.annual_restaurant_revenue,

    // Hotel
    averageDailyRate: "",
    revPar: data.value.mongodata.revPar,
    multiplier: data.value.mongodata.multiplier,

    brokers: [], // No data provided for brokers

    // No data provided for gas options
  }
</script>
