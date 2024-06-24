<template>
  <div>
    <NuxtLayout>
      <Header/>
      <NuxtPage />
      <Footer/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Главная страница',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  // script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>
