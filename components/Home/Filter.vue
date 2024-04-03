<template>
  <div class="p-4 bg-blue-500 lg:pt-8 ">
    <div class="container grid items-stretch w-full grid-cols-1 md:gap-2 md:mx-auto lg:grid-cols-4 md:grid-cols-3">
      <FormKit
        type="select"
        name="property_type"
        :options="property_types"
        placeholder="Select property type"
        outer-class="!max-w-full"
        v-model="type"
        inner-class="p-1 rounded-lg" />
      <FormKit
        type="select"
        name="state"
        placeholder="Select State"
        :options="states"
        v-model="state"
        :disabled="checkType"
        outer-class="!max-w-full"

        wrapper-class="w-full"
        inner-class="p-1 rounded-lg" />

      <FormKit
        type="select"
        name="price_range"
        placeholder="Select price range "
        :options="price_ranges"
        prefix-icon="dollar"
        v-model="price"
        :disabled="checkType"
        outer-class="!max-w-full"

        inner-class="p-1 rounded-lg" />

      <button
        class="p-3 px-6 text-white ease-in-out bg-blue-500 border rounded-md lg:col-span-1 md:col-span-3 uration-200 h-max disabled:bg-gray-400/20 disabled:text-white/20 disabled:cursor-not-allowed hover:text-blue-500 hover:bg-white hover:font-semibold"
        :disabled="checkType">
        Search Properties
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  const property_types = [
    { label: "Hotel", value: "hotel", attrs: { disabled: false } },
    { label: "Gas Station", value: "gas", attrs: { disabled: false } },
    { label: "Retail", value: "retail", attrs: { disabled: false } },
    {
      label: "Multi-Family",
      value: "multi-family",
      attrs: { disabled: false },
    },
    { label: "Land", value: "land", attrs: { disabled: false } },
    { label: "Industrial", value: "industrial", attrs: { disabled: false } },
    { label: "Restaurant", value: "restaurant", attrs: { disabled: false } },
  ];
  const states = [
    "Any",
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
  const price_ranges = ["Any", "10,000 - 20,000", "20,001 - 30,000"];

  const type = ref("");
  const state = ref("");
  const price = ref("");

  const checkType = computed(() => (type.value === "" ? true : false));
</script>
