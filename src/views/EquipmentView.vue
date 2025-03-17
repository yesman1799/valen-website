<template>
  <div class="container mx-auto p-6 sm:p-8 pt-32 sm:pt-40 md:pt-48">
    <h1 class="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-secondary tracking-wide">Naše Technika</h1>
    
    <section v-for="(category, index) in equipmentCategories" :key="index" class="mb-12">
      <h2 class="text-2xl sm:text-3xl font-semibold text-gray-800 border-b-4 border-blue-500 pb-2 mb-6 uppercase">{{ category.name }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(machine, idx) in category.machines" :key="idx" 
             class="bg-white border border-gray-300 p-4 sm:p-5 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          <img :src="getImage(machine.image)" :alt="machine.name" 
               class="w-full h-44 sm:h-52 object-cover rounded-lg mb-4 shadow-md">
          <h3 class="text-lg sm:text-xl font-semibold text-gray-900 text-center uppercase tracking-wider">{{ machine.name }}</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      equipmentCategories: [
        {
          name: 'Pásové rypadla',
          machines: [
            { name: 'Yanmar Pásové Rypadlo', image: 'yanmar_pasove.jpg' },
            { name: 'CASE Pásové Rypadlo', image: 'case_pasove.jpg' }
          ]
        },
        {
          name: 'Kolové rypadla',
          machines: [
            { name: 'Bobcat Kolové Rypadlo', image: 'bobcat_kolove.jpg' },
            { name: 'CASE Kolové Rypadlo', image: 'case_kolove.jpg' }
          ]
        },
        {
          name: 'Nákladní automobily',
          machines: [
            { name: 'Mercedes Arocs', image: 'mercedes_arocs_1.jpg' },
            { name: 'Mercedes Arocs', image: 'mercedes_arocs_2.jpg' },
            { name: 'Scania G400', image: 'scania_g400.jpg' }
          ]
        },
        {
          name: 'Ostatní stroje',
          machines: [
            { name: 'Kolový Dumper', image: 'kolovy_dumper.jpg' }
          ]
        }
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
