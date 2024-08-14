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

  <div class="flex items-center justify-center mt-12">
    <div class="flex flex-col items-center space-y-4">
      <div class="flex space-x-2">
        <input v-model="query" placeholder="Search..." class="w-[28rem] px-4 py-2 border rounded" />
        <button @click="search" class="w-64 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Search</button>
      </div>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <ul>
          <li v-for="record in records" :key="record.id">{{ record.name }}</li>
        </ul>
        <div class="flex space-x-2 mt-4">
          <button @click="prevPage" :disabled="page <= 1" class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50">Previous</button>
          <button @click="nextPage" class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  const query = ref('')
  const records = ref([])
  const page = ref(1)
  const items = ref(20)
  const loading = ref(false)

  const fetchResults = async () => {
    loading.value = true
    const { data, error } = await useFetch(`https://api3.aqqire.com/search`, {
      params: {
        q: query.value,
        page: page.value,
        items: items.value
        }
    })

    if (!error.value) {
      records.value = data.value.data
    }
    loading.value = false
  }

  const search = () => {
    page.value = 1  // Reset to first page on new search
    fetchResults()
  }

  const prevPage = () => {
    if (page.value > 1) {
      page.value -= 1
      fetchResults()
    }
  }

  const nextPage = () => {
    page.value += 1
    fetchResults()
  }

  watch([query, page, items], fetchResults, { immediate: true })

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
