<template>
  <header class="fixed top-0 left-0 w-full bg-white shadow-md py-4 z-50">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <!-- Brand Name -->
      <router-link to="/" class="text-2xl font-bold text-secondary flex items-center">
        <img src="/images/logo.jpg" alt="Logo" class="h-14 sm:h-16" />
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="hidden md:block">
        <ul class="flex space-x-6 text-lg text-textDark">
          <li><router-link to="/about" class="hover:text-primary transition">O nás</router-link></li>
          <li><router-link to="/services" class="hover:text-primary transition">Naše služby</router-link></li>
          <li><router-link to="/references" class="hover:text-primary transition">Reference</router-link></li>
          <li><router-link to="/equipment" class="hover:text-primary transition">Technika</router-link></li>
          <li><router-link to="/contact" class="hover:text-primary transition">Kontakt</router-link></li>
        </ul>
      </nav>
      
      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden text-3xl focus:outline-none">
        ☰
      </button>
      
      <!-- Mobile Navigation -->
      <div v-if="menuOpen" class="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col space-y-4 p-6 text-lg font-semibold text-textDark">
        <router-link to="/about" class="hover:text-primary transition" @click="toggleMenu">O nás</router-link>
        <router-link to="/services" class="hover:text-primary transition" @click="toggleMenu">Naše služby</router-link>
        <router-link to="/references" class="hover:text-primary transition" @click="toggleMenu">Reference</router-link>
        <router-link to="/equipment" class="hover:text-primary transition" @click="toggleMenu">Technika</router-link>
        <router-link to="/contact" class="hover:text-primary transition" @click="toggleMenu">Kontakt</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1400px;
}
</style>
