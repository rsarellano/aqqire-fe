import type { Property } from "~/types/property"

const defaultValues = {
  propertyType: "",
  // Basic Info
  propertyName: "",
  price: "",
  saleType: "",
  brand: "",

  // Location
  international: false,
  address: "",
  city: "",
  state: "",
  zip: "",
  coordinates: {
    lat: 0,
    lng: 0,
  },

  // Common Info
  buildingSizeinSqFt: "",
  numberOfBuildings: "",
  numberOfUnits: "",
  numberOfFloors: "",
  yearBuilt: "",
  yearRenovated: "",
  lotSizeAcre: "",
  permitZoning: "",
  netRentableArea: "",
  buildingClass: "",
  netLease: "",
  tenancy: "",
  apnId: "",
  pricePerSquareFt: "",
  netOperatingIncome: "",
  capRate: "",
  occupancy: "",
  grossRentalIncome: "",
  netRentalIncome: "",

  // Market Info
  investmentHighlights: "",
  propertySummary: "",
  marketSummary: "",
  trafficCount: "",

  // Gas
  mpd: "",
  gasOptions: [],
  baysIncome: "",
  annualFuelRevenue: "",
  annualCStoreRevenue: "",
  annualBayRevenue: "",
  annualRestaurantRevenue: "",

  // Hotel
  averageDailyRate: "",
  revPar: "",
  multiplier: "",

  brokers: [],
}

export const store = ref<Property>(defaultValues)

export const resetFields = () => {
  store.value = { ...defaultValues, propertyType: store.value.propertyType }
}
