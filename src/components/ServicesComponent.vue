<template>
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-secondary text-center mb-8">Naše služby</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Service 1 -->
        <div class="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition">
          <h3 class="text-xl font-semibold text-secondary mb-2">Zednické práce</h3>
          <p class="text-gray-600">Kompletní realizace zděných konstrukcí a opravy.</p>
        </div>

        <!-- Service 2 -->
        <div class="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition">
          <h3 class="text-xl font-semibold text-secondary mb-2">Novostavby</h3>
          <p class="text-gray-600">Realizace moderních rodinných domů a komerčních objektů.</p>
        </div>

        <!-- Service 3 -->
        <div class="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition">
          <h3 class="text-xl font-semibold text-secondary mb-2">Rekonstrukce</h3>
          <p class="text-gray-600">Komplexní rekonstrukce interiérů a exteriérů.</p>
        </div>

        <!-- Service 4 (optional) -->
        <div class="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition">
          <h3 class="text-xl font-semibold text-secondary mb-2">Střešní konstrukce</h3>
          <p class="text-gray-600">Montáž a opravy střech různých typů.</p>
        </div>
      </div>

      <div class="text-center mt-8">
        <router-link to="/services">
          <button class="bg-primary text-black px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition">
            Zobrazit všechny služby
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesComponent'
}
</script>
