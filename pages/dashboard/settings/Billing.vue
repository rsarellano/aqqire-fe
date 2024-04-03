<template>
  <div class="h-full lg:p-6">
    <div
      class="h-full p-4 space-y-5 text-gray-700 rounded px-7 lg:p-6 lg:px-12 bg-slate-100">
      <h1 class="text-3xl font-bold">Billing & Invoices</h1>

      <div class="!mb-8 italic text-sm text-blue-500">
        This workspace’s Basic Plan is set to $34 per month and will renew on
        July 9, 2021.
      </div>

      <h2 class="text-xl font-bold">Billing Information</h2>

      <div class="flex justify-between pb-1 border-b border-gray-300">
        <p class="text-sm font-semibold text-gray-600">Payment Method</p>
        <div class="flex items-center gap-1">
          <p class="text-sm text-gray-500">Mastercard ending 9282</p>
          <Button text class="font-semibold" severity="help" size="small">
            Edit
          </Button>
        </div>
      </div>

      <div class="flex justify-between pb-1 border-b border-gray-300">
        <p class="text-sm font-semibold text-gray-600">Billing Interval</p>
        <div class="flex items-center gap-1">
          <p class="text-sm text-gray-500">Annually</p>
          <Button text class="font-semibold" severity="help" size="small">
            Edit
          </Button>
        </div>
      </div>

      <div class="flex justify-between pb-1 border-b border-gray-300">
        <p class="text-sm font-semibold text-gray-600">VAT/GST Number</p>
        <div class="flex items-center gap-1">
          <p class="text-sm text-gray-500">UK849700927</p>
          <Button text class="font-semibold" severity="help" size="small">
            Edit
          </Button>
        </div>
      </div>

      <div class="flex justify-between pb-1 border-b border-gray-300">
        <p class="text-sm font-semibold text-gray-600">Your Address</p>
        <div class="flex items-center gap-1">
          <p class="text-sm text-gray-500">
            34 Savoy Street, London, UK, 24E8X
          </p>
          <Button text class="font-semibold" severity="help" size="small">
            Edit
          </Button>
        </div>
      </div>

      <div class="flex justify-between pb-1 border-b border-gray-300">
        <p class="text-sm font-semibold text-gray-600">Billing Address</p>
        <div class="flex items-center gap-1">
          <p class="text-sm text-gray-500">hello@cruip.com</p>
          <Button text class="font-semibold" severity="help" size="small">
            Edit
          </Button>
        </div>
      </div>

      <!-- Invoices -->
      <h2 class="text-xl font-bold">Invoices</h2>

      <DataTable :value="data" :tableStyle="{ 'min-width': '50rem' }">
        <Column field="year" header="Year">
          <template #body="slotProps">
            <div>{{ slotProps.data.year }}</div>
          </template>
        </Column>

        <Column header="Plan">
          <template #body="slotProps">
            <div>{{ slotProps.data.plan }}</div>
          </template></Column>

        <Column field="amount" header="Amount">
          <template #body="slotProps">
            $ {{ slotProps.data.amount }}
          </template>
        </Column>

        <Column field="actions">
          <template #body="slotProps">
            <div class="flex justify-end gap-2">
              <Button text class="font-semibold" severity="help" size="small">
                HTML
              </Button>

              <Button text class="font-semibold" severity="help" size="small">
                PDF
              </Button>
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
  const data = ref([
    {
      year: "2024",
      plan: "Basic Plan -  Annually",
      amount: 349.00,
    },
    {
      year: "2024",
      plan: "Basic Plan -  Annually",
      amount: 349.00,
    },
    {
      year: "2024",
      plan: "Basic Plan -  Annually",
      amount: 349.00,
    },
  ]);
</script>
