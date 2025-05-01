<template>
  <div
    v-for="item in data?.Results"
    class="p-4 border border-blue-500">
    <div class="flex gap-2 text-xs">
      <p class="p-1 px-2 text-white bg-blue-500 rounded-full w-min">
        {{ item.CampaignID }}
      </p>

      <div class="flex items-center gap-2">
        <p class="font-bold text-blue-500">
          <i class="pi pi-envelope"></i>
          {{ item.TotalRecipients }}
        </p>
        <p class="">{{ formatISODate(item.SentDate) }}</p>
      </div>
    </div>
    <p class="text-2xl font-bold">{{ item.Subject }}</p>
    <p class="text-xl font-bold">{{ item.Name }}</p>
    <p>From Name: {{ item.FromName }}</p>
    <div class="flex gap-4">
      <p>From: {{ item.FromEmail }}</p>
      <p>To: {{ item.ReplyTo }}</p>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex gap-2">
        <a
          :href="item.WebVersionURL"
          class="text-blue-500 hover:underline"
          target="_blank">
          Preview Template
        </a>
        <a
          :href="item.WebVersionTextURL"
          class="text-blue-500 hover:underline"
          target="_blank">
          Preview Text
        </a>
      </div>
      <NuxtLink
        :to="{
          name: 'campaign-id',
          params: {
            id: item.CampaignID,
          },
          query: {
            name: item.Name,
          },
        }"
        class="p-2 px-4 ml-auto text-white bg-blue-500 rounded-full">
        Go to Campaign Details
      </NuxtLink>
    </div>
  </div>
</template>
