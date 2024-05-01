<template>
  <div class="flex flex-col gap-8 lg:flex-row md:p-4">
    <!-- Left -->
    <div class="space-y-2 grow">
      <UserLoginInfo />
      <UserGeneralInfo />
      <UserPassword />
    </div>

    <!-- Right -->
    <div class="space-y-2 grow">
      <UserCompanyLogo />
      <UserLicenseInfo />
      <UserAffiliates />
      <UserCc />
      <UserProfilePicture />
      <UserProfessional />
      <UserKeywords />
      <Button>Update User</Button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
