<template>
  <section class="text-center">
    <div class="mb-12">
      <h2 class="text-3xl md:text-4xl font-extrabold text-textDark">Naše Technika</h2>
      <div class="mt-3 w-14 h-1 bg-secondary rounded-full mx-auto"></div>
      <p class="mt-4 text-gray-500 max-w-xl mx-auto text-sm">Moderní vozový park pro každý typ stavebního projektu</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="(item, index) in equipment"
        :key="index"
        class="bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 group"
      >
        <div class="bg-white overflow-hidden" style="height: 200px;">
          <img
            :src="item.image"
            :alt="item.name"
            class="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div class="h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent mx-4"></div>
        <div class="p-5 text-left">
          <span class="text-xs text-secondary font-semibold uppercase tracking-wider">{{ item.type }}</span>
          <h3 class="text-base font-bold text-textDark mt-1">{{ item.name }}</h3>
        </div>
      </div>
    </div>

    <div class="mt-12">
      <router-link
        to="/equipment"
        class="inline-block bg-secondary text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-sm"
      >
        Celá technika
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const equipment = [
      { name: 'Pásový bagr CAT 323', type: 'Pásový bagr', image: '/equipment/cat_323.jpg' },
      { name: 'Nákladní automobil Scania G400', type: 'Nákladní automobil', image: '/equipment/scania_g400.jpg' },
      { name: 'Mercedes Actros 6x4', type: 'Nákladní automobil', image: '/equipment/mercedes_actros_6x4.jpg' },
    ];
    return { equipment };
  }
};
</script>
