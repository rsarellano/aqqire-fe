// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    jwtSecret: "",
    public: {
      googleApi: "",
      mapId: "",
    },
  },
  debug: true,
  alias: {
    "@": "/<srcDir>",
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@formkit/nuxt",
    "nuxt-primevue",
    "@sidebase/nuxt-auth",
  ],
  build: {
    transpile: ["jsonwebtoken"],
  },
  formkit: {
    autoImport: true,
    configFile: "./formkit.config.ts",
  },
  tailwindcss: {
    exposeConfig: true,
    configPath: "./tailwind.config",
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
  auth: {
    provider: {
      type: "local",
      isEnabled: true,
      //@todo: from .env - vary depending on dev/prod environment (will apply after generation of prod dist is fixed )
      // baseURL: process.env.AUTH_ORIGIN,
      baseURL: "/api/auth",
      endpoints: {
        signIn: { path: "/login", method: "post" },
        signOut: { path: "/logout", method: "post" },
        signUp: { path: "/register", method: "post" },
        getSession: { path: "/user", method: "get" },
      },
      pages: {
        login: "/",
      },
      token: {
        signInResponseTokenPointer: "/token/accessToken",
      },
      session: {
        dataType: {
          id: "string",
          email: "string",
          name: "string",
          role: "'admin' | 'guest' | 'account'",
          subscriptions: "{ id: number, status: 'ACTIVE' | 'INACTIVE' }[]",
        },
        dataResponsePointer: "/",
      },
    },
    session: {
      // Whether to refresh the session every time the browser window is refocused.
      // enableRefreshOnWindowFocus: true,
      enableRefreshOnWindowFocus: false,
      // Whether to refresh the session every `X` milliseconds. Set this to `false` to turn it off. The session will only be refreshed if a session already exists.
      // enableRefreshPeriodically: 5000
      enableRefreshPeriodically: false,
    },
    globalAppMiddleware: {
      isEnabled: true,
    },
  },
})
