<template>
  <div class="py-10 bg-gray-100">
    <h2 class="text-3xl font-bold text-center text-primary mb-6">Vybraná Technika</h2>
    <div class="flex flex-wrap justify-center gap-6">
      <div
        v-for="machine in featuredMachines"
        :key="machine.id"
        class="bg-white rounded-lg shadow-lg overflow-hidden w-80 transition transform hover:scale-105"
      >
        <img :src="machine.image" :alt="machine.name" class="w-full h-40 object-cover" />
        <div class="p-4">
          <h3 class="text-lg font-semibold text-secondary">{{ machine.name }}</h3>
        </div>
      </div>
    </div>
    <div class="text-center mt-6">
      <router-link to="/equipment">
        <button class="bg-primary text-black px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition">
            Zobrazit Veškerou Techniku
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      featuredMachines: [
        { id: 1, name: 'Bobcat nakladač', image: '/images/bobcat.jpg' },
        { id: 2, name: 'CAT 323 pásový bagr', image: '/images/cat323.jpg' },
        { id: 3, name: 'Mercedes-Benz Arocs', image: '/images/mercedes-arocs.jpg' }
      ]
    };
  }
};
</script>
