<template>
  <div class="py-4 pt-8 mx-auto space-y-2 text-gray-700 max-w-7xl">
    <div class="flex gap-10">
      <!-- Image -->
      <div class="size-1/3">
        <img
          :src="data?.profile_pic"
          class="size-full"
          alt="test" />
      </div>
      <!-- Info -->
      <div class="space-y-4 grow">
        <h2 class="text-4xl font-bold capitalize">
          {{ data?.first_name }} {{ data?.last_name }}
        </h2>

        <!-- Address -->
        <div class="text-lg">
          <div class="text-2xl font-semibold">Address:</div>
          <div class="capitalize">
            <template v-if="data?.mongodata?.street_address">
              {{ data?.mongodata.street_address + ", " }}
            </template>
            <template v-if="data?.mongodata?.city">
              {{ data?.mongodata?.city + ", " }}
            </template>
            <template v-if="data?.mongodata?.states_region">
              {{ data?.mongodata?.states_region }}
            </template>
          </div>
        </div>

        <!-- Work -->
        <div class="text-lg">
          <div class="text-2xl font-semibold">Work:</div>
          <div class="">
            Managing Partner at Leisure Real Estate Advisors, LLC
          </div>
        </div>

        <!-- Member Since -->
        <div class="text-lg">
          <div class="text-2xl font-semibold">Member Since:</div>
          <div class="">
            {{ formatISODate(data?.mongodata.createdAt) }}
          </div>
        </div>

        <!-- License Numbers -->
        <div class="text-lg">
          <div class="text-2xl font-semibold">License Number(s):</div>
          <div class="flex gap-2 py-2">
            <Chip
              v-for="(number, key) in [
                '00008591',
                '00072896',
                '040019575',
                '33804000',
                '1999017315',
                '098074',
                '158956',
                '17298',
              ]"
              :label="'#' + number"
              :key="key" />
          </div>
        </div>

        <!-- Ask a question -->
        <div class="text-lg">
          <div class="text-2xl font-semibold">Ask a Question?:</div>
          <a href="#contact">
            <Button
              severity="secondary"
              class="my-2">
              Contact Me
            </Button>
          </a>
        </div>
      </div>
    </div>

    <!-- Profile Description -->
    <h2 class="text-4xl font-bold">Profile Description</h2>
    <div class="py-2">
      <p>
        Brent is one of the co-founding members of Leisure Real Estate Advisors
        LLC with over 25 years of investment real estate and hotel brokerage
        experience. Since its first listing in 1998 and under the direction of
        Mr. Jaynes, the company has become one of the regional & national
        leaders in hotel brokerage. Collectively, the Leisure Real Estate
        Advisors brokerage group represents over $1.5 billion in transactions.
        Individually, Mr. Jaynes is responsible for over $750 million in sales.
        Mr. Jaynes received his undergraduate training from Kansas State
        University and his doctorate with honors at the University of
        Missouri-Kansas City, where he also served as assistant professor for
        graduate students. He has been an active member of the community as a
        volunteer in local civic organizations. Mr. Jaynes has served as
        president and board member of the Overland Park South Rotary Club, and
        chairman of the Corporate Woods Jazz Festival. More recently, he has
        co-chaired the Jazz in the Woods 5 & 10K Run. He has also served on a
        number of non-profit boards, including the Kansas City Christian Academy
        Board of Directors. For over 30 years, Mr. Jaynes has volunteered as
        youth football coach, grades 5th through 8th. He also enjoys training at
        a Krav Maga self defense academy.
      </p>
    </div>

    <div class="w-full space-y-8">
      <!-- Currently Active listings -->
      <h2 class="text-4xl font-bold">Currently Active Listings</h2>
      <div
        class="flex gap-2 md:max-h-[35rem] h-32 flex-grow overflow-auto w-full md:max-w-full no-scrollbar">
        <PropertyCardSmall />
        <PropertyCardSmall />
        <PropertyCardSmall />
        <PropertyCardSmall />
        <PropertyCardSmall />
        <PropertyCardSmall />
        <PropertyCardSmall />
      </div>

      <h2 class="text-4xl font-bold">Sold Properties</h2>
      <div
        class="flex gap-2 md:max-h-[35rem] h-32 flex-grow overflow-auto w-full md:max-w-full no-scrollbar">
        <PropertyCardSmall />
        <PropertyCardSmall />
        <PropertyCardSmall />
        <PropertyCardSmall />
        <PropertyCardSmall />
        <PropertyCardSmall />
        <PropertyCardSmall />
      </div>
    </div>
    <h2
      class="pt-8 text-4xl font-bold text-center"
      id="contact">
      Ask a question
    </h2>
    <div class="flex flex-col w-full max-w-4xl p-4 mx-auto">
      <FormKit
        label="Name"
        placeholder="Name" />
      <FormKit
        type="email"
        label="Email"
        placeholder="Email" />
      <FormKit
        type="textarea"
        label="Message" />
      <Button>Send Message</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRuntimeConfig } from "#app";
  const apiUrl = useRuntimeConfig().public.API_BASE_URL;

  export interface User {
    id: number
    email: string
    first_name: string
    last_name: string
    account_type: string
    profile_pic: string
    role: string
    work_type: string
    active: boolean
    broker: boolean
    owner: boolean
    staff: boolean
    superuser: boolean
    mongodata: Mongodata
  }

  export interface Mongodata {
    _id: string
    zip: string
    city: string
    role: string
    salt: string
    unit: string
    email: string
    phone: string
    staff: boolean
    state: string
    active: boolean
    states_region: string
    can_post: boolean
    from_url: string
    keywords: string[]
    nickname: string
    on_trial: boolean
    password: string
    createdAt: string
    last_name: string
    superuser: boolean
    updatedAt: string
    first_name: string
    icontactId: string
    profile_pic: string
    account_type: string
    complete_name: string
    activate_token: string
    databank_limit: number
    license_number: any[]
    street_address: string
    forgot_password: boolean
    hideSoldProperty: boolean
    databank_used_space: number
    hideHistoryProperty: boolean
    profile_description: string
    click_report_instruction: boolean
  }

  definePageMeta({
    middleware: ['check-layout'],
    auth: false,
  })
  const route = useRoute()

  const { data, refresh, execute } = await useFetch<User>(
    `${apiUrl}/broker/profile/view/${route.params.id}`
  )
</script>
