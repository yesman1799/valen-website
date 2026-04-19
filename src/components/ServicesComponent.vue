<template>
  <section class="text-center">
    <div class="mb-12">
      <h2 class="text-3xl md:text-4xl font-extrabold text-secondary">Naše Služby</h2>
      <div class="mt-3 w-14 h-1 bg-secondary rounded-full mx-auto"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1 group text-left"
      >
        <div class="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
          <svg class="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round" :d="service.icon" />
          </svg>
        </div>
        <h3 class="text-lg font-bold text-secondary mb-3">{{ service.title }}</h3>
        <p class="text-gray-500 text-sm leading-relaxed">{{ service.description }}</p>
      </div>
    </div>

    <div class="mt-12">
      <router-link
        to="/services"
        class="inline-block bg-secondary text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-sm"
      >
        Všechny služby
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const services = [
      {
        title: 'Kanalizace a Vodovod',
        description: 'Výstavba, opravy a rekonstrukce vodovodních a kanalizačních sítí se zaměřením na preciznost a kvalitu.',
        icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
      },
      {
        title: 'Rekonstrukce Silnic',
        description: 'Komplexní obnovy vozovek, pokládky asfaltů, obrubníků a dlažeb s ohledem na dlouhou životnost.',
        icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'
      },
      {
        title: 'Zemní práce',
        description: 'Kompletní zemní a výkopové práce pro stavební účely, hloubení základů, odvoz materiálu.',
        icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
      }
    ];

    return { services };
  }
};
</script>
