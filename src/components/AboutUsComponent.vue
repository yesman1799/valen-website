<template>
  <section class="bg-white py-16 text-center">
    <div class="container mx-auto px-6 max-w-4xl">
      <h2 class="text-4xl font-bold text-secondary mb-4">O nás</h2>
      <p class="text-lg text-gray-700 leading-relaxed">
        Stavební firma Valen s.r.o. vznikla v roce 2009 a specializuje se na rekonstrukce
        a novostavby objektů pro bydlení a služby. Naše firma dbá na kvalitu,
        tradici a profesionální přístup.
      </p>
      <router-link to="/about">
        <button class="mt-6 bg-primary text-black px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition">
          Více o nás
        </button>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUsComponent'
}
</script>
