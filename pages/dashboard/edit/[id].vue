<template>
  <div class="flex flex-col gap-4 p-4 px-12">
    <h1 class="px-2 text-2xl font-bold capitalize">
      Edit {{ route.params.id }}
    </h1>

    <template v-if="propertyType">
      <BrokerEditBasicInfo />
      <BrokerEditLocation />

      <h2
        class="pb-4 text-2xl font-bold text-gray-700 capitalize border-b border-gray-700">
        {{ propertyType }} Detailed Information
      </h2>

      <!-- APN -->
      <FormKit
        label="Apn ID (Assessor's Parcel Number ID)"
        type="text"
        label-class="pb-1 text-2xl uppercase" />

      <BrokerEditDetailHotel v-if="propertyType === 'Hotel'" />
      <BrokerEditDetailGas v-if="propertyType === 'Gas Station'" />
      <BrokerEditDetailRetail v-if="propertyType === 'Retail'" />
      <BrokerEditDetailIndustrial v-if="propertyType === 'Industrial'" />
      <BrokerEditDetailMulti v-if="propertyType === 'Multi-Family'" />
      <BrokerEditDetailRestaurant v-if="propertyType === 'Restaurant'" />
      <BrokerEditDetailHealth v-if="propertyType === 'Health'" />
      <BrokerEditDetailOffice v-if="propertyType === 'Office'" />
      <BrokerEditDetailSpecial v-if="propertyType === 'Special'" />

      <BrokerEditMarketInfo />

      <h2
        class="pb-4 text-2xl font-bold text-gray-700 capitalize border-b border-gray-700">
        {{ propertyType }} Financial Information
      </h2>

      <BrokerEditFinancialHotel v-if="propertyType === 'hotel'" />
      <BrokerEditFinancialGas v-if="propertyType === 'gas'" />
      <BrokerEditFinancialRetail v-if="propertyType === 'retail'" />
      <BrokerEditFinancialMulti v-if="propertyType === 'multi-family'" />
      <BrokerEditFinancialRestaurant v-if="propertyType === 'restaurant'" />
      <BrokerEditFinancialHealth v-if="propertyType === 'health'" />
      <BrokerEditFinancialOffice v-if="propertyType === 'office'" />
      <BrokerEditFinancialSpecial v-if="propertyType === 'special'" />

      <Button>Create Property</Button>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { data } from "~/components/Broker/Edit/store";
  onMounted(() => {
    setTimeout(() => {
      data.value = [
        {
          name: "hello",
          age: 14,
        },
      ];
      console.log(`data change: ${data.value[0].name}`);
    }, 3000);
  });
  const route = useRoute();
  const propertyTypes = [
    "Hotel",
    "Gas-Station",
    "Retail",
    "Multi-Family",
    "Land",
    "Industrial",
    "Restaurant",
    "Health",
    "Office",
    "Special",
  ];
  console.log(route.params.id === "hotel");
  const propertyType = ref("hotel");
</script>
