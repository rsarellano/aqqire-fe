import { ref } from "vue";

export const sidebarExpanded = ref(false);

export const toggleSidebar = () => {
  sidebarExpanded.value = !sidebarExpanded.value;
  console.log(sidebarExpanded.value)
};
