<template>
  <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
    <div class="container mx-auto flex items-center justify-between px-6 py-3">
      <router-link to="/" class="flex items-center">
        <img src="/images/logo.jpg" alt="Valen logo" class="h-12 w-auto" />
      </router-link>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-1">
        <router-link
          v-for="link in links"
          :key="link.name"
          :to="link.path"
          class="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 text-gray-600 hover:text-secondary hover:bg-secondary/8"
          active-class="text-secondary bg-secondary/10"
        >
          {{ link.name }}
        </router-link>
      </div>

      <!-- Mobile burger -->
      <button @click="toggleMenu" class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition" aria-label="Menu">
        <svg class="w-6 h-6 text-textDark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <transition name="slide-down">
      <div v-if="menuOpen" class="md:hidden bg-white border-t border-gray-100 shadow-lg">
        <div class="flex flex-col px-4 py-3 gap-1">
          <router-link
            v-for="link in links"
            :key="link.name"
            :to="link.path"
            class="px-4 py-3 rounded-lg text-sm font-semibold text-gray-600 hover:text-secondary hover:bg-gray-50 transition"
            active-class="text-secondary bg-secondary/10"
            @click="closeMenu"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </transition>
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
    const toggleMenu = () => { menuOpen.value = !menuOpen.value; };
    const closeMenu = () => { menuOpen.value = false; };
    return { links, menuOpen, toggleMenu, closeMenu };
  }
};
</script>

<style scoped>
.container { max-width: 1200px; }

.slide-down-enter-active, .slide-down-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.slide-down-enter-from, .slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
