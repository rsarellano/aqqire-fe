export const msgSidebarOpen = ref(true)
export const sidebarOpen = ref(true)
export const messages = ref<
  {
    message: string
  }[]
>([])

export const togglePanel = () => {
  sidebarOpen.value = !sidebarOpen.value
}
