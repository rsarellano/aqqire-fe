export default defineNuxtRouteMiddleware((to) => {
  // @TODO change to ENV
  const isMaintenance = false
  if (isMaintenance) setPageLayout("maintenance")
})
