<template>
  <footer class="bg-gray-900 text-gray-400 pt-16 pb-8 mt-20">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

        <!-- Brand -->
        <div>
          <img src="/images/logo.jpg" alt="Valen logo" class="h-12 w-auto mb-4 brightness-0 invert opacity-80" />
          <p class="text-sm leading-relaxed text-gray-500">
            Spolehlivý stavební partner pro zemní práce, kanalizace, rekonstrukce komunikací a výstavbu.
          </p>
        </div>

        <!-- Kontakt -->
        <div>
          <h3 class="text-white font-bold mb-4 text-sm uppercase tracking-wider">Kontakt</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="tel:777564235" class="hover:text-primary transition flex items-center gap-2">
                <svg class="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                777 564 235
              </a>
            </li>
            <li>
              <a href="mailto:valen2009@seznam.cz" class="hover:text-primary transition flex items-center gap-2">
                <svg class="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                valen2009@seznam.cz
              </a>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span>Nad Prachandou 840, Dobříš 263 01<br>IČO: 28954149</span>
            </li>
          </ul>
        </div>

        <!-- Navigace -->
        <div>
          <h3 class="text-white font-bold mb-4 text-sm uppercase tracking-wider">Navigace</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="link in links" :key="link.path">
              <router-link :to="link.path" class="hover:text-primary transition">{{ link.name }}</router-link>
            </li>
          </ul>
        </div>

      </div>

      <div class="border-t border-gray-800 pt-6 text-center text-xs text-gray-600">
        &copy; {{ new Date().getFullYear() }} VALEN s.r.o. Všechna práva vyhrazena.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {
    const links = [
      { name: 'O nás', path: '/about' },
      { name: 'Služby', path: '/services' },
      { name: 'Reference', path: '/references' },
      { name: 'Technika', path: '/equipment' },
      { name: 'Kontakt', path: '/contact' },
    ];
    return { links };
  }
};
</script>

<style scoped>
.container { max-width: 1200px; }
</style>
