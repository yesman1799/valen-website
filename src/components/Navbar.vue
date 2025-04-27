<template>
  <nav class="fixed top-0 w-full bg-white shadow-md z-50">
    <div class="container mx-auto flex items-center justify-between p-4">
      <router-link to="/" class="flex items-center">
        <img src="/images/logo.jpg" alt="Valen logo" class="h-14 w-auto" />
      </router-link>

      <div class="hidden md:flex items-center gap-8">
        <router-link 
          v-for="link in links" 
          :key="link.name" 
          :to="link.path" 
          class="text-black hover:text-secondary text-lg font-semibold transition"
        >
          {{ link.name }}
        </router-link>
      </div>

      <div class="md:hidden">
        <button @click="toggleMenu" class="text-black focus:outline-none">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>

    <div v-if="menuOpen" class="md:hidden bg-white shadow-md">
      <div class="flex flex-col items-center py-4">
        <router-link 
          v-for="link in links" 
          :key="link.name" 
          :to="link.path" 
          class="text-black hover:text-secondary text-lg font-semibold py-2"
          @click="closeMenu"
        >
          {{ link.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const links = [
      { name: 'O nás', path: '/about' },
      { name: 'Služby', path: '/services' },
      { name: 'Reference', path: '/references' },
      { name: 'Technika', path: '/equipment' },
      { name: 'Kontakt', path: '/contact' }
    ];

    const menuOpen = ref(false);

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    const closeMenu = () => {
      menuOpen.value = false;
    };

    return {
      links,
      menuOpen,
      toggleMenu,
      closeMenu
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
