import { ref } from "vue";

export const data = ref();

export const store = ref({
  // Basic Info
  propertyName: "",
  price: 0,
  saleType: "",
  brand: "",

  // Location
  international: false,
  address: "",
  city: "",
  state: "",
  zip: "",

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
  pricePerSquareFt: 0,
  netOperatingIncome: 0,
  capRate: 0,
  occupancy: 0,
  grossRentalIncome: 0,
  netRentalIncome: 0,

  // Market Info
  investmentHighlights: "",
  propertySummary: "",
  marketSummary: "",
  trafficCount: 0,

  // Gas
  mpd: "",
  gasOptions: [],
  baysIncome: "",
  annualFuelRevenue: 0,
  anuualCStoreRevenue: 0,
  annualBayRevenue: 0,
  annualRestaurantRevenue: 0,

  // Hotel
  averageDailyRate: 0,
  revPar: "",
  multiplier: 0,
});
