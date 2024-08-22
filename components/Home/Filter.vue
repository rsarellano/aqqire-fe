<template>
  <div class="p-4 bg-blue-500 lg:pt-8">
    <div class="container md:mx-auto">
      <div class="flex items-start justify-between gap-2">
        <InputText
          placeholder="Search property name"
          class="w-3/4"
          v-model="name" />
        <Button
          class="flex-grow border border-white rounded-lg h-min"
          @click="search">
          Search Properties
        </Button>
      </div>

      <Accordion
        class="w-full py-2"
        v-if="advancedSearch">
        <AccordionTab>
          <template #header>
            <div class="ml-auto">Advanced Search Options</div>
          </template>
          <div class="grid grid-cols-1 gap-2 md:grid-cols-3">
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
          </div>
        </AccordionTab>
      </Accordion>
      <button
        v-else
        @click="advancedSearch = !advancedSearch"
        class="py-2 text-xs text-white">
        Advanced Search Options
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  const name = ref()
  const type = ref("")
  const state = ref("")
  const price = ref("")
  const advancedSearch = ref(false)
  const router = useRouter()

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
  ]
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
  ]
  const price_ranges = ["Any", "10,000 - 20,000", "20,001 - 30,000"]

  const checkType = computed(() => (type.value === "" ? true : false))

  const search = () => {
    router.push({ path: "/properties", query: { name: name.value } })
  }
</script>
