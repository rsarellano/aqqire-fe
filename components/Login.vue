<template>
  <div class="items-center justify-center hidden card md:flex">
    <NuxtLink to="/login">
      <Button type="button" class="mb-2 fill-white">Login</Button>
    </NuxtLink>

    <!--

          <Button
      type="button"
      class="mb-2 fill-white"
      label="Sign In / Sign Up"
      @click="toggle"
      aria-haspopup="true"
      aria-controls="login_menu" />

    <Menu ref="menu" id="login_menu" :popup="true" class="p-4 md:w-72">
      <template #start>
        <div class="flex flex-col py-2">
          <FormKit name="login" type="text" label="Username or Email" />
          <FormKit name="password" type="password" label="Password" />
          <Button type="button" label="Sign In" class="text-xs" />
        </div>
      </template>

      <template #end>
        <div class="py-2 border-t border-gray-500/40">
          <NuxtLink
            to="/register"
            class="text-xs hover:text-blue-500 hover:underline underline-offset-4">
            Don't have an account? Register now!
          </NuxtLink>
        </div>
      </template>
    </Menu> -->
  </div>
</template>

<script setup lang="ts">
  const menu = ref();

  const toggle = (event: Event) => {
    menu.value.toggle(event);
  };
</script>
