<template>
  <AdminNav />
  <div class="p-4 space-y-8">
    <h1 class="text-4xl font-bold">Create User</h1>
    <!-- Left -->
    <div class="flex flex-col gap-8 lg:flex-row">
      <div class="space-y-2 grow">
        <UserLoginInfo v-model="user" />
        <UserGeneralInfo v-model="user" />
        <UserPassword v-model="user" />
      </div>

      <!-- Right -->
      <div class="space-y-2 grow">
        <UserCompanyLogo v-model="user" />
        <UserLicenseInfo v-model="user" />
        <UserAffiliates v-model="user" />
        <UserCc v-model="user" />
        <UserProfilePicture v-model="user" />
        <UserProfessional v-model="user" />
        <UserKeywords v-model="user" />
        <Button>Update User</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { user } from '~/store/editUserStore'
</script>
