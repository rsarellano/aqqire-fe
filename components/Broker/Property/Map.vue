<template>
  <div class="flex flex-col">
    <div class="relative">
      <FormKit
        v-model="autocompleteInput"
        :delay="180"
        type="text"
        placeholder="Search for a location"
        @input="searchPlace"
      />
      <div
        v-if="autocompleteInput"
        class="absolute inset-x-0 z-50 flex flex-col w-full top-11"
      >
        <button
          v-for="place in autoCompletePlaces"
          class="p-2 text-left bg-white border hover:text-white hover:bg-blue-500"
          @click="addPin(place.location)"
        >
          <i class="pi pi-map-marker"/>
          <span class="font-bold text-slate-700">{{ place.displayName }}</span>
        </button>
      </div>
    </div>
    <div
      id="map"
      ref="mainMap"
      class="w-full h-[30rem] rounded-md"
    />
  </div>
</template>

<script setup lang="ts">
  /// <reference types="@types/google.maps" />
  import { Loader } from "@googlemaps/js-api-loader"
  import type { Property } from "../../../types/property"

  const model = defineModel<Property>()
  let map: google.maps.Map
  const defaultLocation = { lat: 37.7749, lng: -122.4194 } // San Francisco
  const mainMap = ref()
  const pin = ref()
  const autocompleteInput = ref()
  const autoCompletePlaces = ref()
  const config = useRuntimeConfig()

  const loader = new Loader({
    apiKey: config.public.googleApi,
    version: "weekly",
    libraries: ["core", "maps", "places"],
  })

  const searchPlace = async () => {
    if (!autocompleteInput.value) return (autoCompletePlaces.value = null)

    const Test = await loader.importLibrary("places")

    const { places } = await Test.Place.searchByText({
      textQuery: autocompleteInput.value,
      fields: [
        "displayName",
        "location",
        "addressComponents",
        "formattedAddress",
      ],
      language: "en-US",
      maxResultCount: 8,
      region: "us",
      useStrictTypeFiltering: false,
    })
    autoCompletePlaces.value = places
  }

  const addPin = (coordinates: { lat: number; lng: number }) => {
    // Reset the pin when clicking another coordinate
    pin.value.map = null

    // Jump to coordinates when clicked
    map.setCenter(coordinates)

    // Put another pin after clearing the old pin and removing the infoWindow
    pin.value.position = coordinates
    pin.value.map = map
    model.value!.coordinates = coordinates

    // Clear input after click
    autocompleteInput.value = null
  }

  onMounted(async () => {
    const [{ Map, InfoWindow }, { AdvancedMarkerElement }] = await Promise.all([
      loader.importLibrary("maps"),
      loader.importLibrary("marker"),
    ])

    map = new Map(mainMap.value, {
      center: defaultLocation,
      zoom: 14,
      mapId: config.public.mapId,
    })

    // Tooltip when first opening the map at the page
    const infoWindow = new InfoWindow({
      content: "Click on map to pin your property location",
      position: defaultLocation,
    })

    // add a pin at default location
    pin.value = new AdvancedMarkerElement({
      map,
      gmpDraggable: true,
      position: defaultLocation,
    })

    infoWindow.open(map)

    // Add pin to clicked location
    map.addListener("click", (mapsMouseEvent: google.maps.MapMouseEvent) => {
      // Reset the pin when clicking another coordinate
      pin.value.map = null
      // Close info window
      infoWindow.close()

      // Put another pin after clearing the old pin and removing the infoWindow
      pin.value.position = mapsMouseEvent.latLng
      pin.value.map = map
      model.value!.coordinates = pin.value.position
    })
  })
</script>
