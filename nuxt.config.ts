// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  // hooks: {
  //   'render:routeContext'(context) {
  //     const { $config } = useNuxtApp()
  //     // Use $config or other properties from Nuxt instance here
  //     console.log($config)
  //   }
  // }
  css: ['~/assets/css/style.css'],

  modules: ["@nuxtjs/i18n"],
  i18n: {
    // Module Options
    vueI18n: './i18n.config.ts'
  }
})