<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <div class="flex-grow">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  }
}
</script>
