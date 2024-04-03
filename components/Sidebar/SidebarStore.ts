import { ref } from "vue";

export const sidebarExpanded = ref(true);

export const toggleSidebar = () => {
  sidebarExpanded.value = !sidebarExpanded.value;
  console.log(sidebarExpanded.value)
};
