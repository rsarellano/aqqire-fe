// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    jwtSecret: "",
    campaignApiKey: process.env.CAMPAIGN_API_KEY,
    campaignClientId: process.env.CAMPAIGN_CLIENT_ID,
    public: {
      API_BASE_URL: process.env.API_BASE_URL || "http://localhost:5000",
      googleApi: "",
      mapId: "",
    },
  },

  debug: false,

  //plausible script head rendering
  head: {
    script: [
      {
        src: "https://analytics.aqqire.com/js/script.js",
        defer: true,
        "data-domain": "www3.aqqire.com",
      },
    ],
  },

  alias: {
    "@": "/<srcDir>",
  },

  devtools: { enabled: false },

  modules: [
    "@nuxtjs/tailwindcss",
    "@formkit/nuxt",
    "nuxt-primevue",
    "@sidebase/nuxt-auth",
    "@nuxtjs/plausible",
    "@productdevbook/chatwoot",
    "@nuxt/eslint",
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

  plausible: {
    // Prevent tracking on localhost
    //ignoredHostnames: ['localhost'],
    ignoredHostnames: [],
    domain: "www3.aqqire.com",
    apiHost: "https://analytics.aqqire.com",
    autoPageviews: true,
    trackLocalhost: true,
    autoOutboundTracking: true,
    logIgnoredEvents: true,
  },

  chatwoot: {
    init: {
      //access token kF6A8Z1hXhsT7e3ERwrGGUne
      websiteToken: "oDAiucBY2iF4Z2CFFDQVKfnp",
      baseUrl: "https://chat.aqqire.com",
    },
    settings: {
      locale: "en",
      position: "right",
      launcherTitle: "Hello Chat",
      // ... more settings
    },
    partytown: false,
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

  compatibilityDate: "2024-09-20",
})
