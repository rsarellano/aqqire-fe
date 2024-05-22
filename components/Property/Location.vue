<template>
  <div
    ref="mainMap"
    id="map"
    class="w-full h-[30rem] rounded-md max-w-6xl"
  >
  </div>
</template>

<script setup lang="ts">
  /// <reference types="@types/google.maps" />
  import { Loader } from "@googlemaps/js-api-loader"

  let map: google.maps.Map
  const defaultLocation = { lat: 37.7749, lng: -122.4194 } // San Francisco
  const mainMap = ref()
  const pin = ref()
  const config = useRuntimeConfig()

  const loader = new Loader({
    apiKey: config.public.googleApi,
    version: "weekly",
    libraries: ["core", "maps", "places"],
  })

  onMounted(async () => {
    const [{ Map }, { AdvancedMarkerElement }] = await Promise.all([
      loader.importLibrary("maps"),
      loader.importLibrary("marker"),
    ])

    map = new Map(mainMap.value, {
      center: defaultLocation,
      zoom: 14,
      mapId: config.public.mapId,
    })

    // add a pin at default location when page loads
    pin.value = new AdvancedMarkerElement({
      map,
      gmpDraggable: true,
      position: defaultLocation,
    })
  })
</script>
