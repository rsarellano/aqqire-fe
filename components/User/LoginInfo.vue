<template>
  <div class="flex flex-col gap-4 text-slate-600">
    <h1 class="pb-4 text-2xl font-semibold border-b border-slate-200"
      >Login Information</h1
    >

    <!-- Email -->
    <div>
      <p
        class="italic text-red-500"
        v-if="!checkRoute"
      >
        Be extra careful when
        <button
          @click="disabled = !disabled"
          class="p-1 px-2 font-bold text-white bg-red-500 rounded cursor-pointer"
          v-tooltip="'Click to edit'"
        >
          EDITING
        </button>
        this field.
      </p>
      <FormKit
        type="email"
        v-model="model!.email"
        label="Email"
        :disabled="disabled"
      />
    </div>

    <h2 class="pb-3 text-xl font-semibold border-b border-slate-200"
      >User Role</h2
    >
    <!-- User Role(?) -->
    <div class="flex flex-wrap gap-4 p-1">
      <div
        v-for="(role, key) of roles"
        :key="key"
        class="flex gap-2"
      >
        <Checkbox
          v-model="model!.userRoles"
          name="category"
          :value="role"
        />
        <label
          :for="role"
          class="capitalize"
          >{{ role }}</label
        >
      </div>
    </div>

    <div class="flex flex-col gap-8 md:flex-row">
      <div class="flex flex-col gap-4 p-1 grow">
        <!-- User Type(?) -->
        <h2 class="pb-3 text-xl font-semibold border-b border-slate-200"
          >User Type</h2
        >
        <FormKit
          v-model="model!.userType"
          type="radio"
          :options="types"
          decorator-icon="circle"
          options-class="flex flex-col justify-between gap-4 capitalize md:flex-row"
        />
      </div>

      <!-- User Package(?) -->
      <div class="flex flex-col gap-4 p-1 grow">
        <h2 class="pb-3 text-xl font-semibold border-b border-slate-200"
          >User Package</h2
        >
        <FormKit
          v-model="model!.userPackage"
          type="radio"
          :options="packages"
          decorator-icon="circle"
          options-class="flex flex-col justify-between gap-4 capitalize md:flex-row"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { User } from '~/types/user'
  const disabled = ref(true)
  const roles = ['active', 'staff', 'superuser', 'company admin']
  const types = ['broker', 'owner', 'buyer']
  const packages = ['limited', 'standard', 'premium']

  const route = useRoute()
  const checkRoute = route.path.includes('/add')
  
  onMounted(() => {
    checkRoute ? (disabled.value = false) : (disabled.value = true)
  })
  const model = defineModel<User>()
</script>
