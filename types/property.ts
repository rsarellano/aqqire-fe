/// <reference types="@types/google.maps" />

export type Property = {
  propertyType: string;
  // Basic Info
  property_name: string;
  property_price: number;
  saleType: string;
  brand: string;
  id: number;

  // Location
  international: boolean;
  property_address: string;
  property_city: string;
  property_state: string;
  zip: string;
  coordinates: {
    lat: number;
    lng: number;
  };

  // Common Info
  buildingSizeinSqFt: string;
  numberOfBuildings: string;
  numberOfUnits: string;
  numberOfFloors: string;
  yearBuilt: string;
  yearRenovated: string;
  lotSizeAcre: string;
  permitZoning: string;
  netRentableArea: string;
  buildingClass: string;
  netLease: string;
  tenancy: string;
  apnId: string;
  pricePerSquareFt: string;
  netOperatingIncome: string;
  capRate: string;
  occupancy: string;
  grossRentalIncome: string;
  netRentalIncome: string;

  // Market Info
  investmentHighlights: string;
  propertySummary: string;
  marketSummary: string;
  trafficCount: string;

  // Gas
  mpd: string;
  gasOptions: string[];
  baysIncome: string;
  annualFuelRevenue: string;
  annualCStoreRevenue: string;
  annualBayRevenue: string;
  annualRestaurantRevenue: string;

  // Hotel
  averageDailyRate: string;
  revPar: string;
  multiplier: string;

  brokers: string[];
};
