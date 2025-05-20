<template>
  <section class="text-center">
    <h2 class="text-4xl font-bold text-secondary mb-6">O Nás</h2>
    <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="(about, index) in abouts"
        :key="index"
        class="relative p-8 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-md animate-fade-in-up"
      >
        <h3 class="text-2xl font-bold text-secondary mb-4">{{ about.title }}</h3>
        <p class="text-gray-600">{{ about.description }}</p>
      </div>
    </div>
    <div class="mt-10 max-w-3xl mx-auto">
      <p class="text-lg text-gray-700">
        Společnost VALEN s.r.o. se specializuje na stavební práce v oblasti kanalizací, vodovodů, rekonstrukcí silnic a výstavby rodinných domů. Naše zkušenosti, moderní technika a individuální přístup z nás dělají spolehlivého partnera pro každý projekt.
      </p>
      <div class="mt-8">
        <router-link
          to="/about"
          class="inline-block bg-secondary text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-primary transition"
        >
          Více o nás
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const abouts = [
      {
        title: 'Profesionalita',
        description: 'Dbáme na kvalitu práce, dodržování technologických postupů a spokojenost zákazníka.'
      },
      {
        title: 'Moderní technika',
        description: 'Používáme moderní stroje a technologie, které zajišťují efektivitu a špičkové výsledky.'
      },
      {
        title: 'Individuální přístup',
        description: 'Ke každému projektu přistupujeme s maximální péčí a respektem k požadavkům klienta.'
      }
    ];

    return {
      abouts
    };
  }
};
</script>

<style scoped>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease forwards;
}

.container {
  max-width: 1200px;
}
</style>
