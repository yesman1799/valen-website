<template>
  <div class="container mx-auto p-8 text-center">
    <h2 class="text-3xl sm:text-4xl font-extrabold mb-12 text-secondary tracking-wide">Vybraná Technika</h2>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <div v-for="(machine, index) in selectedMachines" :key="index" 
           class="bg-white border border-gray-300 p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
        <img :src="getImage(machine.image)" :alt="machine.name" 
             class="w-full h-56 object-cover rounded-xl mb-6 shadow-md">
        <h3 class="text-2xl font-semibold text-gray-900 uppercase tracking-wider">{{ machine.name }}</h3>
      </div>
    </div>
    
    <div class="mt-12">
      <router-link to="/equipment" class="bg-primary text-black px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition">
        Zobrazit všechnu techniku
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedMachines: [
        { name: 'Mercedes Arocs', image: 'mercedes_arocs_1.jpg' },
        { name: 'CASE Pásové Rypadlo', image: 'case_pasove.jpg' },
        { name: 'Kolový Dumper', image: 'kolovy_dumper.jpg' }
      ]
    };
  },
  methods: {
    getImage(fileName) {
      return new URL(`/src/assets/equipment/${fileName}`, import.meta.url).href;
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
