
<template>
  <div>
    <DashboardNav />
      <iframe plausible-embed src="https://analytics.aqqire.com/share/www3.aqqire.com?auth=uVFe60JAexBE9YYCPwnsn&embed=true&theme=light" scrolling="no" frameborder="0" loading="lazy" style="width: 1px; min-width: 100%; height: 1600px;"></iframe>
  </div>
</template>

<script lang="ts" setup>
  useHead({
    script: [
      {
        src: 'https://analytics.aqqire.com/js/embed.host.js',
        async: true,
      },
    ],
  })
</script>

<style>

</style>
