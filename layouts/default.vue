<template>
  <div>
    <Header />
    <div class="_margin"></div>
    <main>
      <NuxtPage class="container  " />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>