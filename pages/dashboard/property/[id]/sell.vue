<template>
  <div class="flex flex-col max-w-2xl gap-6 mx-auto text-lg">
    <h1 class="text-4xl font-bold">Mark Property as Sold</h1>
    <p class="my-4 text-2xl font-semibold">Congratulations, John Doe</p>
    <p>
      To increase the number of
      <span class="font-bold text-main">"Sold Properties"</span> on your
      profile page, please provide the following information so that we can
      confim the sale. Increasing this number will add credibility to your
      profile page.
    </p>

    <div class="space-y-4">
      <p class="text-xs italic font-bold">
        This information is for internal use only and will not be sold or shared
        with third parties.
      </p>
      <p class="text-xs italic font-bold">
        Please know that by omitting the closing price, your total transaction
        amount will not increase. To increase your transaction amount while not
        displaying the closing price, you may choose "Private"
      </p>
    </div>

    <FormKit
      type="date"
      required
      label="Close Date"
      help="Click the Icon select a date"
      suffix-class="cursor-pointer"
    />

    <FormKit
      type="radio"
      label="Make Public or Private"
      required
      :options="['Public', 'Private']"
      decorator-icon="circle"
      options-class="flex gap-2"
    />
    <div class="flex gap-2">
      <FormKit
        label="Sale Price"
        prefix-icon="dollar"
        placeholder="Ex: 1,500,000"
      />
      <FormKit
        label="Cap Rate"
        placeholder="Ex: 6.46%"
      />
    </div>

    <FormKit
      v-model="lead"
      type="radio"
      label="Origin of lead that resulted in this sale"
      required
      :options="[
        'Aqqire',
        'Social Media',
        'Word of Mouth',
        'LoopNet',
        'Personal Website',
        'Company Website',
        'Phone',
        'Others',
      ]"
      decorator-icon="circle"
    />
    <FormKit
      v-if="lead === 'Others'"
      type="text"
      label="If Others please specify"
    />

    <div class="flex flex-col gap-2">
      <Button>Confirm and Increase my Numbers</Button>
      <Button severity="danger">
        No thanks. Don't increase my stats, archive this Property.
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  const lead = ref()
</script>
