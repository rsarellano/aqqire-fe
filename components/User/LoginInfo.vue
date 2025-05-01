<template>
  <div class="flex flex-col gap-4 text-slate-600">
    <h1 class="pb-4 text-2xl font-semibold border-b border-slate-200">
      Login Information
    </h1>

    <!-- Email -->
    <div>
      <p
        v-if="!checkRoute"
        class="italic text-red-500">
        Be extra careful when
        <button
          v-tooltip="'Click to edit'"
          class="p-1 px-2 font-bold text-white bg-red-500 rounded cursor-pointer"
          @click="disabled = !disabled">
          EDITING
        </button>
        this field.
      </p>
      <FormKit
        v-model="model!.email"
        type="email"
        label="Email"
        :disabled="disabled" />
    </div>

    <h2 class="pb-3 text-xl font-semibold border-b border-slate-200">
      User Role
    </h2>
    <!-- User Role(?) -->
    <div class="flex flex-wrap gap-4 p-1">
      <div class="flex gap-2">
        <Checkbox
          v-model="model!.active"
          binary
          name="active" />
        <label
          for="active"
          class="capitalize">
          Active
        </label>
      </div>

      <div class="flex gap-2">
        <Checkbox
          v-model="model!.staff"
          binary
          name="staff" />
        <label
          for="staff"
          class="capitalize">
          Staff
        </label>
      </div>

      <div class="flex gap-2">
        <Checkbox
          v-model="model!.superuser"
          binary
          name="superuser" />
        <label
          for="superuser"
          class="capitalize">
          Superuser
        </label>
      </div>

      <div class="flex gap-2">
        <Checkbox
          v-model="model!.broker"
          binary
          name="broker" />
        <label
          for="broker"
          class="capitalize">
          Broker
        </label>
      </div>
    </div>

    <div class="flex flex-col gap-4 p-1 grow">
      <h2 class="pb-3 text-xl font-semibold border-b border-slate-200">
        Account Type
      </h2>
      <FormKit
        v-model="model!.account_type"
        type="radio"
        :options="packages"
        decorator-icon="circle"
        options-class="flex flex-col gap-8 capitalize md:flex-row" />
    </div>

    <!-- <div class="flex flex-col gap-8 md:flex-row"> -->
    <!-- User Type(?) -->
    <!-- <div class="flex flex-col gap-4 p-1 grow">
        <h2 class="pb-3 text-xl font-semibold border-b border-slate-200">User Type</h2>
        <FormKit v-model="model!.userType" type="radio" :options="types" decorator-icon="circle"
          options-class="flex flex-col justify-between gap-4 capitalize md:flex-row" />
      </div> -->

    <!-- User Package(?) -->

    <!-- </div> -->
  </div>
</template>

<script setup lang="ts">
  import type { User } from "~/types/user"
  const disabled = ref(true)
  const roles = ["active", "staff", "superuser", "company admin"]
  const types = ["broker", "owner", "buyer"]
  const packages = ["limited", "premium"]

  const route = useRoute()
  const checkRoute = route.path.includes("/add")

  onMounted(() =>
    checkRoute ? (disabled.value = false) : (disabled.value = true)
  )
  const model = defineModel<User>()
</script>
