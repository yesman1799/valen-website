<template>
  <div class="bg-gray-100 py-16">
    <div class="container mx-auto p-6 sm:p-8 text-center">
      <h2 class="text-3xl sm:text-4xl font-extrabold mb-12 text-secondary tracking-wide">Naše Služby</h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
        <div v-for="service in keyServices" :key="service.name" 
             class="bg-white shadow-lg rounded-xl p-8 border-t-4 border-secondary hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
          <h3 class="text-xl sm:text-2xl font-semibold mb-4 text-textDark">{{ service.name }}</h3>
          <p class="text-base sm:text-lg text-gray-700">{{ service.description }}</p>
        </div>
      </div>
      
      <div class="mt-12">
        <router-link to="/services" 
                     class="px-6 py-3 bg-secondary text-white text-lg font-semibold rounded-lg shadow-md hover:bg-primary transition-all duration-300">
          Zobrazit všechny služby
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyServices: [
        { name: 'Výstavba a rekonstrukce', description: 'Kompletní stavební práce včetně rekonstrukcí budov.' },
        { name: 'Inženýrské sítě', description: 'Realizace kanalizací, vodovodů a dalších sítí.' },
        { name: 'Zemní práce', description: 'Provádíme výkopové a terénní úpravy pro různé projekty.' }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
