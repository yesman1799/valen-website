<template>
  <section class="container mx-auto px-6 py-16">
    <h2 class="text-3xl font-bold text-secondary text-center mb-8">Naše služby</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Card 1 -->
      <div class="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition">
        <h3 class="text-xl font-semibold text-secondary mb-2">Zednické práce</h3>
        <p class="text-gray-600">Kompletní realizace zděných konstrukcí a opravy.</p>
      </div>

      <!-- Card 2 -->
      <div class="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition">
        <h3 class="text-xl font-semibold text-secondary mb-2">Novostavby</h3>
        <p class="text-gray-600">Realizace moderních rodinných domů a komerčních objektů.</p>
      </div>

      <!-- Card 3 -->
      <div class="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition">
        <h3 class="text-xl font-semibold text-secondary mb-2">Rekonstrukce</h3>
        <p class="text-gray-600">Komplexní rekonstrukce interiérů a exteriérů.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesView'
}
</script>
