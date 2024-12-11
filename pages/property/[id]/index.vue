<template>
  <div
    class="container flex flex-col items-center justify-center gap-2 p-4 mx-auto xs:max-w-80 bg-slate-50">
    <Galleria
      v-model:active-index="activeIndex"
      circular
      auto-play
      :show-thumbnails="false"
      show-item-navigators
      :value="images"
      :responsive-options="responsiveOptions"
      container-class="w-full xs:w-6/7">
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          class="w-full !max-h-[44rem] h-full" >
      </template>
    </Galleria>

    <!-- Share -->
    <PropertyShare />
    <PropertyBasicInfo
      :name="data?.name"
      :city="data?.city"
      :address="data?.address"
      :asset="data?.asset_type"
      :state="data?.state_name"
      :cap-rate="data?.mongodata?.cap_rate"
      :price="data?.mongodata?.price" />
    <PropertyDescription :description="data?.mongodata?.summary" />

    <section class="flex flex-col w-full gap-4 p-1 md:max-w-6xl lg:flex-row">
      <div class="space-y-2 max-h-min grow">
        <PropertyDetails
          :price="data?.mongodata?.price"
          :type="data?.asset_type"
          :floors="data?.mongodata?.floors"
          :units="data?.mongodata?.units" />
        <PropertyFeatures :features />
        <PropertyDocuments :files />
        <PropertyNearby :places />
        <!-- Descriptioon -->
        <section class="flex flex-col w-full h-full gap-4 mt-2 md:max-w-6xl">
          <!-- Recently Added Section -->
          <h2
            class="w-full p-4 text-xl font-bold text-center bg-white md:text-left">
            Other Properties from this broker
          </h2>
          <PropertyRecommendedProperties />
        </section>
      </div>
      <div class="flex flex-col grow gap-2 lg:max-w-[35%]">
        <PropertyContactRight />
        <!-- Mortgage -->
        <PropertyMortgage />

        <!-- Square Ad section -->
        <div
          v-if="isPremium === false"
          class="overflow-hidden rounded-md aspect-square">
          <img
            :src="squareAd"
            alt="size-full rounded-md" >
        </div>
      </div>
    </section>

    <PropertyLocation />

    <section class="w-full max-w-6xl mt-2 space-y-2">
      <h2
        class="p-4 pb-4 text-2xl font-bold uppercase bg-white rounded-md text-slate-700">
        Contact Broker
      </h2>

      <!-- Buyer Details -->
      <div class="flex flex-col w-full gap-2 md:flex-row">
        <PropertyContactRight />

        <!-- Seller Details -->
        <PropertyBroker
          :first-name="data?.user_first_name"
          :last-name="data?.user_last_name" />
      </div>

      <section class="flex flex-col w-full h-full gap-4 mt-2 md:max-w-6xl">
        <h2
          class="w-full p-4 text-xl font-bold text-center bg-white md:text-left">
          Other Properties from Aqqire
        </h2>
        <PropertyRecommendedProperties />
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { getRandomImage, images as RandomImages } from "~/pages/data"
  import { isPremium } from "~/store/isPremium"
  import { useRuntimeConfig } from "#app"
  const apiUrl = useRuntimeConfig().public.API_BASE_URL

  type Property = {
    id: number
    name: string
    property_type: string
    asset_type: string
    address: string
    city: string
    state_name: string
    updated_at: string
    created_at: string
    user_first_name: string
    user_last_name: string
    clicks: number
    views: number
    impressions: number
    active: boolean
    user_email: string
    mongodata: {
      _id: string
      adr: string
      ppr: number
      url: string
      city: string
      name: string
      slug: string
      sold: boolean
      tags: string[]
      user: string
      year: number
      brand: string
      isNew: boolean
      price: string
      state: string
      units: number
      views: number
      active: boolean
      broker: any[]
      ca_pdf: string
      clicks: number
      floors: number
      revPar: string
      address: string
      archive: boolean
      ca_type: string
      country: string
      demands: {
        name: string | null
        website: string | null
      }[]
      summary: string
      archived: boolean
      cap_rate: number
      featured: boolean
      interest: string
      keywords: string[]
      latitude: number
      postedBy: string
      promoted: boolean
      totalRev: string
      zip_code: number
      buildings: number
      createdAt: string
      histories: {
        eventDate: string | null
        eventDesc: string | null
      }[]
      longitude: number
      occupancy: string
      sale_type: string
      updatedAt: string
      asset_type: string
      expiration: string | null
      financials: {
        full: {
          fnoi: number
          add_backs: number
          adjusted_noi: number
          room_revenue: number
          other_revenue: number
          total_revenue: number
          operating_expense: number
        }
        partial: {
          fnoi: number
          add_backs: number
          adjusted_noi: number
          room_revenue: number
          other_revenue: number
          total_revenue: number
          operating_expense: number
        }
        projected: {
          fnoi: number
          add_backs: number
          adjusted_noi: number
          room_revenue: number
          other_revenue: number
          total_revenue: number
          operating_expense: number
        }
      }
      highlights: string
      multiplier: number
      activatedAt: string
      impressions: number
      end_bid_time: {
        a: string
        hh: string
        mm: string
      }
      price_in_int: number
      property_type: string
      selling_point: string
      market_summary: string
      year_renovated: number
      financial_files: any[]
      property_images: string[]
      lastBrokerUpdate: string
      financial_summary: string
      auction_start_time: {
        a: string
        hh: string
        mm: string
      }
      financial_file_type: string
      financial_highlights: string
      marketing_description: string
    }
  }

  definePageMeta({
    auth: false,
  })

  // Ad Urls
  const squareAd =
    "https://fastly.picsum.photos/id/400/400/400.jpg?hmac=ZpVLXxjX2uH3yZ4ClS0-ZMzDF7HCRSLmkw0w0iRjvKs"

  const route = useRoute()
  const { data } = await useFetch<Property>(
    `${apiUrl}/property/${route.params.id}`
  )
  const images = [
    {
      itemImageSrc: RandomImages[0],
      thumbnailImageSrc: RandomImages[0],
      alt: "Description for Image 1",
      title: "Title 1",
    },
    {
      itemImageSrc: RandomImages[1],
      thumbnailImageSrc: RandomImages[1],
      alt: "Description for Image 2",
      title: "Title 2",
    },
    {
      itemImageSrc: RandomImages[2],
      thumbnailImageSrc: RandomImages[2],
      alt: "Description for Image 3",
      title: "Title 3",
    },
    {
      itemImageSrc: RandomImages[3],
      thumbnailImageSrc: RandomImages[3],
      alt: "Description for Image 4",
      title: "Title 4",
    },
    {
      itemImageSrc: RandomImages[4],
      thumbnailImageSrc: RandomImages[4],
      alt: "Description for Image 5",
      title: "Title 5",
    },
  ]

  const responsiveOptions = [
    {
      breakpoint: "1300px",
      numVisible: 4,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ]

  const files = ref([
    {
      name: "Floor Plan",
      link: "",
    },
    {
      name: "Deed of Sale",
      link: "",
    },
    {
      name: "Transcript of Record",
      link: "",
    },
    {
      name: "Floor Plan Roof",
      link: "",
    },
    {
      name: "Floor Plan Basement",
      link: "",
    },
  ])
  const places = ref([
    {
      name: "Gas Station",
      distance: "3.11 Miles",
    },
    {
      name: "KFC",
      distance: "3.27 Miles",
    },
    {
      name: "Mcdonalds",
      distance: "3.11 Miles",
    },
    {
      name: "Target",
      distance: "1 Mile",
    },
    {
      name: "Costco Wholesale",
      distance: "2.11 Miles",
    },
    {
      name: "Bestbuy",
      distance: "7.11 Miles",
    },
    {
      name: "Meredith General Hospital",
      distance: "7.11 Miles",
    },
  ])
  const features = ref([
    "Gas Station",
    "Basketball Court",
    "Gym",
    "Home Theater",
    "Air Conditioned",
    "Pet Friendly",
    "Free Parking",
    "Swimming Pool",
    "Wheelchair Friendly",
  ])
  const activeIndex = ref(2)
</script>
