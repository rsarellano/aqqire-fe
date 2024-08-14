<template>
  <div class="relative z-0 inline-flex">
    <button
      ref="trigger"
      class="inline-flex items-center justify-center px-2 py-1 rounded-full shadow-md group hover:text-slate-200 bg-slate-50"
      aria-haspopup="true"
      @click.prevent="dropdownOpen = !dropdownOpen"
      :aria-expanded="dropdownOpen">
      <div v-if="isImage">
        <img
          class="object-cover w-8 h-8 rounded-full"
          alt="Q"
          :src="userProfile.profileImage" />
      </div>
      <div v-else>
        <div class="w-8 h-8 bg-blue-800 rounded-full hover:opacity-80">
          <span
            class="flex items-center justify-center h-full text-xs tracking-wider text-white">
            {{ userProfile.profileImage }}
          </span>
        </div>
      </div>

      <div class="flex items-center truncate">
        <span
          class="hidden ml-3 font-sans text-sm font-semibold truncate md:flex text-stone-700 group-hover:text-slate-800">
          {{ userProfile.firstName }}
        </span>

        <svg
          class="w-3 h-3 ml-2 fill-current shrink-0 text-slate-900"
          viewBox="0 0 12 12">
          <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
        </svg>
      </div>
    </button>
    <div></div>
    <div>
      <transition
        enter-active-class="transition duration-200 ease-out transform"
        enter-from-class="-translate-y-2 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-out"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <div
          v-show="dropdownOpen"
          class="origin-top-right z-10 absolute top-full min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
          :class="align === 'right' ? 'right-0' : 'left-0'">
          <div class="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200">
            <div class="font-sans font-light tracking-wide text-slate-900">
              <span>{{ userProfile.email }}</span>
            </div>
            <div class="font-sans text-xs capitalize text-slate-600">
              <span>{{ userProfile.role }}</span>
            </div>
          </div>
          <ul
            ref="dropdown"
            @focusin="dropdownOpen = true"
            @focusout="dropdownOpen = false">
            <li>
              <NuxtLink
                class="flex items-center w-full px-3 py-1 text-sm font-medium text-blue-700 hover:text-blue-900 hover:bg-slate-100"
                to="/"
                @click="dropdownOpen = false">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="flex items-center w-full px-3 py-1 text-sm font-medium text-blue-700 hover:text-blue-900 hover:bg-slate-100"
                to="broker-home"
                @click="dropdownOpen = false">
                Dashboard
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="flex items-center w-full px-3 py-1 text-sm font-medium text-blue-700 hover:text-blue-900 hover:bg-slate-100"
                to="/dashboard/settings/account"
                @click="dropdownOpen = false">
                Account
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="flex items-center w-full px-3 py-1 text-sm font-medium text-blue-700 hover:text-blue-900 hover:bg-slate-100"
                to="/dashboard/properties"
                @click="dropdownOpen = false">
                My Listings
              </NuxtLink>
            </li>
            <li>
              <button
                class="flex items-center w-full px-3 py-1 text-sm font-medium text-rose-500 hover:text-rose-600 hover:bg-slate-100"
                @click="handleSignOut()"
                >                
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
  //added authentication to access user specific functions 
  import { useAuth } from '#imports'
  const { signOut, token, data, status, lastRefreshedAt } = useAuth()
  //sample extraction of user details from auth data
  const userProfile = {
    // profileImage: "https://picsum.photos/200/300?grayscale",
    profileImage: data.value?.picture,
    firstName: data.value!.first_name,
    email: data.value.username,
    role: data.value.role,
  };
  //handle user signout
  const handleSignOut = async () => {
    signOut();
    //navigate to homepage or login page
    navigateTo('/');
    // navigateAuthenticatedTo: '/'
    // await store.dispatch("logout");
    // router.push({ path: "/" });
    // if (route.path === "/") {
    //   window.location.reload();
    // }
  };

  const props = defineProps({
    align: String,
  });
 
  const dropdownOpen = ref(false);
  const trigger = ref();
  const dropdown = ref();

  // const router = useRouter();
  // const route = useRoute();
  // const store = useStore();
  // const userProfile = reactive({
  //   email: computed(() =>
  //     store.state.userProfile.email ? store.state.userProfile.email : null
  //   ),
  //   firstName: computed(() =>
  //     store.state.userProfile.firstName
  //       ? store.state.userProfile.firstName
  //       : null
  //   ),
  //   role: computed(() =>
  //     store.state.userProfile.role ? store.state.userProfile.role : null
  //   ),
  //   profileImage: computed(() =>
  //     store.state.userProfile.profileImage
  //       ? store.state.userProfile.profileImage
  //       : null
  //   ),
  // });

  // Test for with image link

  const isImage = computed(() => {
    const profileImage = userProfile.profileImage
      ? userProfile.profileImage
      : "?";
    return (
      (profileImage.length > 2 && profileImage.includes("https")) ||
      profileImage.includes("data") ||
      profileImage.includes("s3")
    );
  });



  // close on click outside
  const clickHandler = ({ target }: Event) => {
    if (
      !dropdownOpen.value ||
      dropdown.value.contains(target) ||
      trigger.value.contains(target)
    )
      return;
    dropdownOpen.value = false;
  };

  // close if the esc key is pressed
  const keyHandler = ({ key }: KeyboardEvent) => {
    if (!dropdownOpen.value || key !== "Escape") return;
    dropdownOpen.value = false;
  };

  onMounted(() => {
    document.addEventListener("click", clickHandler);
    document.addEventListener("keydown", keyHandler);
  });

  onUnmounted(() => {
    document.removeEventListener("click", clickHandler);
    document.removeEventListener("keydown", keyHandler);
  });
</script>
