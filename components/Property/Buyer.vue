<template>
  <div class="flex-1 p-8 space-y-4 bg-white rounded-md">
    <div class="flex flex-col">
      <div class="text-xl font-bold text-slate-700">Name:</div>
      <div class="font-semibold md:text-xl text-slate-500">Neil Infante</div>
    </div>

    <div>
      <div class="text-xl font-bold text-slate-700">Phone:</div>
      <div class="font-semibold md:text-xl text-slate-500">(63) 121-7141</div>
    </div>

    <div>
      <div class="pb-4 text-xl font-bold text-slate-700">Message:</div>
      <FormKit type="textarea" />
    </div>
    <Button class="w-full">Send Message</Button>
  </div>
</template>
