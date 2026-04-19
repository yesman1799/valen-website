<template>
  <footer class="bg-gray-900 text-gray-400 pt-14 pb-8 mt-20">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Top: logo + tagline centered -->
      <div class="flex flex-col items-center mb-12">
        <div class="bg-white rounded-xl px-5 py-3 mb-4 shadow-sm">
          <img src="/images/logo.jpg" alt="Valen logo" class="h-10 w-auto" />
        </div>
        <p class="text-gray-500 text-sm text-center max-w-xs">
          Spolehlivý stavební partner pro zemní práce, kanalizace a rekonstrukce komunikací.
        </p>
      </div>

      <!-- Grid: 3 columns, centered on desktop -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm mb-12">

        <!-- Kontakt -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 class="text-white font-bold mb-4 text-xs uppercase tracking-widest">Kontakt</h3>
          <ul class="space-y-3">
            <li>
              <a href="tel:777564235" class="hover:text-primary transition flex items-center justify-center md:justify-start gap-2">
                <svg class="w-4 h-4 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                777 564 235
              </a>
            </li>
            <li>
              <a href="mailto:valen2009@seznam.cz" class="hover:text-primary transition flex items-center justify-center md:justify-start gap-2">
                <svg class="w-4 h-4 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                valen2009@seznam.cz
              </a>
            </li>
          </ul>
        </div>

        <!-- Adresa -->
        <div class="flex flex-col items-center text-center">
          <h3 class="text-white font-bold mb-4 text-xs uppercase tracking-widest">Adresa</h3>
          <ul class="space-y-1.5 text-gray-500">
            <li class="text-gray-300 font-medium">VALEN s.r.o.</li>
            <li>Nad Prachandou 840</li>
            <li>Dobříš 263 01</li>
            <li class="pt-1">IČO: 28954149</li>
            <li>DIČ: CZ28954149</li>
          </ul>
        </div>

        <!-- Navigace -->
        <div class="flex flex-col items-center md:items-end text-center md:text-right">
          <h3 class="text-white font-bold mb-4 text-xs uppercase tracking-widest">Navigace</h3>
          <ul class="space-y-2.5">
            <li v-for="link in links" :key="link.path">
              <router-link :to="link.path" class="hover:text-primary transition">{{ link.name }}</router-link>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="border-t border-gray-800 pt-6 text-center text-xs text-gray-600">
        &copy; {{ new Date().getFullYear() }} VALEN s.r.o. — Všechna práva vyhrazena.
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
