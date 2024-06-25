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

  css: ['~/assets/css/style.css'],

  // hooks: {
  //   'render:routeContext'(context) {
  //     const { $config } = useNuxtApp()

  //     // Use $config or other properties from Nuxt instance here
  //     console.log($config)
  //   }
  // }

})