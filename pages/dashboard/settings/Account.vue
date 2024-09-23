<template>
  <div class="h-full md:p-6">
    <div
      class="h-full p-4 space-y-5 text-gray-700 rounded md:px-7 lg:p-6 lg:px-12 bg-slate-100"
    >
      <h1 class="text-3xl font-bold">Account Settings</h1>
      <Avatar :image="image" size="avatar" shape="circle" />
      <FileUpload
        mode="basic"
        accept="image/*"
        chooseLabel="Change Avatar"
        auto
        customUpload
        @uploader="changeImage"
      />

      <FormKit label="First Name" outer-class="max-w-sm" />
      <FormKit label="Last Name" outer-class="max-w-sm" />

      <!-- Email -->
      <FormKit
        label="Email Address"
        outer-class="max-w-sm"
        :disabled="emailDisabled"
      />
      <Button
        class="w-full max-w-sm lg:w-max"
        @click="emailDisabled = !emailDisabled"
      >
        Change Email
      </Button>

      <!-- Password -->
      <h2 class="text-2xl font-bold">Password</h2>
      <p class="text-sm italic tracking-wide text-gray-500">
        You can set a permanent password if you don't want to use temporary
        login codes.
      </p>

      <ToggleButton
        v-model="changePassword"
        onLabel="Close Password"
        offLabel="Change Password"
      />

      <template v-if="changePassword">
        <div class="max-w-sm">
          <FormKit label="Current Password" />
          <FormKit label="New Password" />
          <FormKit label="New Password Confirmation" />
        </div>
      </template>

      <!--
      <h2 class="text-2xl font-bold">Smart Sync Update for Mac</h2>
      <p class="text-sm italic tracking-wide text-gray-500">
        With this update, online-only files will no longer appear to take up
        hard drive space.
      </p>
      <InputSwitch v-model="smartSync" />
      -->

      <div class="flex flex-col justify-end gap-2 p-4 border-t-2 lg:flex-row">
        <Button severity="secondary" class="font-semibold">Cancel</Button>
        <Button class="font-semibold">Save Changes</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FileUploadUploaderEvent } from "primevue/fileupload";
type FileUrl = File & { objectURL: string };

const image = ref("https://picsum.photos/id/237/200/300");
const emailDisabled = ref(true);
const changePassword = ref(false);
const smartSync = ref(false);

const changeImage = (event: FileUploadUploaderEvent) => {
  const target = event.files as FileUrl[];
  image.value = target[0].objectURL;
};
</script>
