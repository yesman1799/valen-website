<template>
  <div class="container mx-auto p-6 sm:p-8 pt-32 sm:pt-40 md:pt-48">
    <h1 class="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-secondary tracking-wide">Naše Služby</h1>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
      <div v-for="service in services" :key="service.name" 
           class="bg-gradient-to-br from-gray-50 to-white shadow-lg rounded-2xl p-6 sm:p-8 border-l-4 border-secondary hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden flex flex-col justify-center items-center text-center">
        <div class="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-10"></div>
        <h2 class="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-textDark relative z-10">{{ service.name }}</h2>
        <p class="text-sm sm:text-base md:text-lg text-gray-700 relative z-10">{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { name: 'Rekonstrukce', description: 'Komplexní renovace budov, zahrnující opravy, modernizace a zlepšení energetické účinnosti.' },
        { name: 'Inženýrské sítě', description: 'Realizace a rekonstrukce kanalizačních, vodovodních a dalších inženýrských sítí pro infrastrukturu.' },
        { name: 'Zemní práce', description: 'Profesionální výkopové a terénní úpravy, příprava základů a modelace terénu pro stavební projekty.' },
        { name: 'Stavba Rodinného domu na klíč', description: 'Kompletní výstavba rodinných domů na klíč – od projektové dokumentace po finální realizaci.' },
        { name: 'Bourací práce', description: 'Demolice stavebních objektů s důrazem na bezpečnost a ekologickou likvidaci odpadu.' },
        { name: 'Rekonstrukce Ulic', description: 'Obnova městských komunikací, pokládka asfaltu, dlažby a modernizace dopravní infrastruktury.' }
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