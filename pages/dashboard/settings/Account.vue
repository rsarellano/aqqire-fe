<template>
  <div class="h-full md:p-6">
    <div
      class="h-full p-4 space-y-5 text-gray-700 rounded md:px-7 lg:p-6 lg:px-12 bg-slate-100">
      <h1 class="text-3xl font-bold">Account Settings</h1>
      <Avatar
        :image="image"
        size="avatar"
        shape="circle" />
      <FileUpload
        mode="basic"
        accept="image/*"
        chooseLabel="Change Avatar"
        auto
        customUpload
        @uploader="changeImage" />

      <FormKit
        label="First Name"
        v-model="user.first_name"
        outer-class="max-w-sm" />

      <FormKit
        label="Last Name"
        v-model="user.last_name"
        outer-class="max-w-sm" />

      <!-- Email -->
      <FormKit
        label="Email Address"
        v-model="user.email"
        outer-class="max-w-sm"
        :disabled="emailDisabled" />
      <Button
        class="w-full max-w-sm lg:w-max"
        @click="emailDisabled = !emailDisabled">
        Change Email
      </Button>

      <div class="flex flex-col justify-end gap-2 p-4 border-b-2 lg:flex-row">
        <Button
          severity="secondary"
          class="font-semibold"
          @click="refresh">
          Cancel
        </Button>
        <Button
          class="font-semibold"
          @click="updateBasicInfo">
          Save Changes
        </Button>
      </div>

      <!-- Password -->
      <h2 class="text-2xl font-bold">Password</h2>
      <p class="text-sm italic tracking-wide text-gray-500">
        You can set a permanent password if you don't want to use temporary
        login codes.
      </p>

      <ToggleButton
        v-model="changePassword"
        onLabel="Close Password"
        offLabel="Change Password" />

      <template v-if="changePassword">
        <div class="max-w-sm">
          <FormKit
            type="password"
            label="Current Password"
            v-model="password.current"
            suffix-icon="eyeClosed"
            @suffix-icon-click="handleIconClick"
            suffix-icon-class="hover:text-blue-500" />
          <FormKit
            type="password"
            label="New Password"
            v-model="password.newPassword"
            suffix-icon="eyeClosed"
            @suffix-icon-click="handleIconClick"
            suffix-icon-class="hover:text-blue-500" />
          <FormKit
            type="password"
            label="New Password Confirmation"
            v-model="password.newPassword2"
            suffix-icon="eyeClosed"
            @suffix-icon-click="handleIconClick"
            suffix-icon-class="hover:text-blue-500" />

          <div
            class="flex flex-col justify-end gap-2 p-4 border-b-2 lg:flex-row">
            <Button
              severity="secondary"
              class="font-semibold"
              @click="refresh">
              Cancel
            </Button>
            <Button
              class="font-semibold"
              @click="updatePassword">
              Save Changes
            </Button>
          </div>
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
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { FileUploadUploaderEvent } from "primevue/fileupload"
  import { useAuth } from "#imports"

  type FileUrl = File & { objectURL: string }
  const { data } = useAuth()
  const router = useRouter()
  const emailDisabled = ref(true)
  const changePassword = ref(false)
  const smartSync = ref(false)
  const image = ref(data.value?.profile_pic)

  const user = ref({
    first_name: data.value.first_name,
    last_name: data.value.last_name,
    email: data.value.email,
  })

  const password = ref({
    current: "",
    newPassword: "",
    newPassword2: "",
  })

  // TODO connect to backend
  const updateBasicInfo = () => {
    const userInfo = {
      ...data.value,
      ...user.value,
    }
    console.log(userInfo, "usernfo")
  }

  const handleIconClick = (node, e) => {
    node.props.suffixIcon =
      node.props.suffixIcon === "eye" ? "eyeClosed" : "eye"
    node.props.type = node.props.type === "password" ? "text" : "password"
  }

  const updatePassword = () => {
    if (password.value.newPassword !== password.value.newPassword2) {
      console.log("passwords are not the same")
      return
    }
    if (password.value.current === "") {
      console.log("enter your current password")
      return
    }

    console.log(password.value, "usernfo")
  }

  const refresh = async () => {
    router.go(0)
  }

  const changeImage = (event: FileUploadUploaderEvent) => {
    const target = event.files as FileUrl[]
    image.value = target[0].objectURL
  }
</script>
