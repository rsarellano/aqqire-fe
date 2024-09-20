export default defineNuxtRouteMiddleware((to) => {
  const { status } = useAuth()

  if (status.value === "authenticated") setPageLayout("default")
  else {
    setPageLayout("none")
  }
})
