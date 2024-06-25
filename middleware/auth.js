export default defineNuxtRouteMiddleware(async (to, from) => {
    const nuxtApp = useNuxtApp()
    let user
    try {
        user = await fetchUser()
    } catch (e) {
        user = null
    }
    if (!user) {
        return nuxtApp.runWithContext(() => navigateTo('/auth'))
    }

    // export default defineNuxtRouteMiddleware((to, from) => {
    //     const { $config } = useNuxtApp()
      
    //     // Use $config or other properties from Nuxt instance here
    //     console.log($config)
    //   })
})