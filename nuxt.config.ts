// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  debug: true,
  alias: {
    "@": "/<srcDir>",
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@formkit/nuxt", "nuxt-primevue"],
  formkit: {
    autoImport: true,
    configFile: "./formkit.config.ts",
  },
  tailwindcss: {
    exposeConfig: true,
  },
  primevue: {
    options: {
      unstyled: true,
      ripple: true,
    },
    importPT: { as: "Lara", from: "../presets/lara/index.js" },
    components: {
      include: "*",
      exclude: ["Editor", "Chart"],
    },
  },
});
