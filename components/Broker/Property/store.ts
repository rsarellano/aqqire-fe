export const store = ref({
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
})

export const resetFields = () => {
  store.value = {
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
  }
}
