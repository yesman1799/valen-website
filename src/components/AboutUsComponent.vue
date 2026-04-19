<template>
  <section class="text-center">
    <!-- Section heading -->
    <div class="mb-12">
      <h2 class="text-3xl md:text-4xl font-extrabold text-textDark">O nás</h2>
      <div class="mt-3 w-14 h-1 bg-secondary rounded-full mx-auto"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="(about, index) in abouts"
        :key="index"
        class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1 group"
      >
        <!-- Icon -->
        <div class="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary/20 transition-colors">
          <svg class="w-7 h-7 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round" :d="about.icon" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-textDark mb-3">{{ about.title }}</h3>
        <p class="text-gray-500 leading-relaxed text-sm">{{ about.description }}</p>
      </div>
    </div>

    <!-- Stats row -->
    <div class="mt-14 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
      <div v-for="stat in stats" :key="stat.label" class="text-center">
        <p class="text-4xl font-extrabold text-secondary">{{ stat.value }}</p>
        <p class="text-sm text-gray-500 mt-1">{{ stat.label }}</p>
      </div>
    </div>

    <div class="mt-12">
      <router-link
        to="/about"
        class="inline-block bg-secondary text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-sm"
      >
        Více o nás
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const abouts = [
      {
        title: 'Profesionalita',
        description: 'Dbáme na kvalitu práce, dodržování technologických postupů a spokojenost každého zákazníka.',
        icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
      },
      {
        title: 'Moderní technika',
        description: 'Používáme moderní stroje a technologie, které zajišťují efektivitu a špičkové výsledky na každé stavbě.',
        icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
      },
      {
        title: 'Individuální přístup',
        description: 'Ke každému projektu přistupujeme s maximální péčí a respektem k požadavkům a přáním klienta.',
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
      }
    ];

    const stats = [
      { value: '15+', label: 'Let na trhu' },
      { value: '500+', label: 'Dokončených projektů' },
      { value: '100%', label: 'Spokojených klientů' },
    ];

    return { abouts, stats };
  }
};
</script>
