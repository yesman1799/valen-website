<template>
  <footer class="bg-gradient-to-t from-gray-200 to-gray-100 py-16 mt-20">
    <div class="container mx-auto px-4 text-center">
      <img src="/images/logo.jpg" alt="Valen logo" class="mx-auto mb-8 h-14">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
        <div>
          <h3 class="text-xl font-bold mb-2 text-secondary">Kontakt</h3>
          <p>📞 777 564 235</p>
          <p>✉️ valen2009@seznam.cz</p>
          <p>🌍 www.valen.cz</p>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-2 text-secondary">Adresa</h3>
          <p>VALEN s.r.o.</p>
          <p>Nad Prachandou 840</p>
          <p>Dobříš 263 01</p>
          <p>IČO: 28954149</p>
          <p>DIČ: CZ28954149</p>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-2 text-secondary">Navigace</h3>
          <router-link to="/about" class="block hover:text-secondary">O nás</router-link>
          <router-link to="/services" class="block hover:text-secondary">Služby</router-link>
          <router-link to="/references" class="block hover:text-secondary">Reference</router-link>
          <router-link to="/equipment" class="block hover:text-secondary">Technika</router-link>
          <router-link to="/contact" class="block hover:text-secondary">Kontakt</router-link>
        </div>
      </div>
      <p class="text-gray-500 text-sm mt-12">&copy; 2025 VALEN s.r.o. Všechna práva vyhrazena.</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
