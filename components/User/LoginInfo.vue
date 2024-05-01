<template>
  <div class="flex gap-4 flex-col text-slate-600">
    <h1 class="text-2xl font-semibold pb-4 border-b border-slate-200"
      >Login Information</h1
    >

    <!-- Email -->
    <div>
      <p class="text-red-500 italic">
        Be extra careful when
        <span
          @click.ctrl="disabled = !disabled"
          class="font-bold cursor-pointer"
          v-tooltip="'Ctrl + Click to edit'"
        >
          EDITING
        </span>
        this field.
      </p>
      <FormKit
        type="email"
        label="Email"
        :disabled="disabled"
      />
    </div>

    <h2 class="text-xl font-semibold border-b border-slate-200 pb-3"
      >User Role</h2
    >
    <!-- User Role(?) -->
    <div class="flex gap-4 flex-wrap p-1">
      <div
        v-for="(role, key) of roles"
        :key="key"
        class="flex gap-2"
      >
        <Checkbox
          v-model="userRoles"
          :inputId="key"
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

    <div class="flex gap-8 md:flex-row flex-col">
      <div class="flex grow flex-col gap-4 p-1">

        <!-- User Type(?) -->
        <h2 class="text-xl font-semibold border-b border-slate-200 pb-3"
          >User Type</h2
        >
        <FormKit
          v-model="userType"
          type="radio"
          :options="types"
          decorator-icon="circle"
          options-class="flex justify-between capitalize md:flex-row flex-col gap-4"
        />
      </div>

      <!-- User Package(?) -->
      <div class="flex grow flex-col gap-4 p-1">
        <h2 class="text-xl font-semibold border-b border-slate-200 pb-3"
          >User Package</h2
        >
        <FormKit
          v-model="userPackage"
          type="radio"
          :options="packages"
          decorator-icon="circle"
          options-class="flex justify-between capitalize md:flex-row flex-col gap-4"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const disabled = ref(true)
  const roles = ['active', 'staff', 'superuser', 'company admin']
  const types = ['broker', 'owner', 'buyer']
  const packages = ['limited', 'standard', 'premium']
  const userRoles = ref([''])
  const userType = ref('')
  const userPackage = ref('')
</script>
