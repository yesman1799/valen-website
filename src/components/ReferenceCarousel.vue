<template>
  <section class="text-center">
    <div class="mb-12">
      <h2 class="text-3xl md:text-4xl font-extrabold text-secondary">Vybrané Reference</h2>
      <div class="mt-3 w-14 h-1 bg-secondary rounded-full mx-auto"></div>
      <p class="mt-4 text-gray-500 max-w-xl mx-auto text-sm">Realizované projekty po celé České republice</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <router-link
        v-for="(ref, index) in references"
        :key="index"
        :to="`/reference/${ref.id}`"
        class="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
        style="height: 260px;"
      >
        <img
          :src="ref.image"
          :alt="ref.title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-5 text-left">
          <span class="text-xs text-primary font-semibold uppercase tracking-wider">{{ ref.year }}</span>
          <h3 class="text-white font-bold text-lg mt-1 leading-tight">{{ ref.title }}</h3>
        </div>
      </router-link>
    </div>

    <div class="mt-12">
      <router-link
        to="/references"
        class="inline-block bg-secondary text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-sm"
      >
        Všechny reference
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const references = [
      {
        id: 1,
        title: 'Aviatická letiště',
        year: '2025',
        image: '/images/d7_muk_aviaticka_lavka_letiste_praha_1.jpg'
      },
      {
        id: 28,
        title: 'Dobříš – Rekonstrukce Truhlářské ulice',
        year: '2025',
        image: '/images/dobris_truhlarsk_1.png'
      },
      {
        id: 18,
        title: 'Viladům Kobylisy – Zemní práce',
        year: '2024',
        image: '/images/novostavba_viladomu_kobylisy_zemni_prace_1.jpg'
      }
    ];

    return { references };
  }
};
</script>
