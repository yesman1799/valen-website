<template>
  <div class="container mx-auto p-6 sm:p-8 pt-32 sm:pt-40 md:pt-48">
    <h1 class="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-secondary tracking-wide">Naše Reference</h1>
    
    <div class="flex flex-wrap justify-center gap-4 mb-6">
      <button 
        v-for="category in categories" 
        :key="category" 
        @click="toggleCategory(category)" 
        :class="['px-4 py-2 rounded-lg border font-semibold', selectedCategories.includes(category) ? 'bg-secondary text-white' : 'bg-white text-primary border-primary']"
      >
        {{ category }}
      </button>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      <div v-for="reference in filteredReferences" :key="reference.name" class="bg-white shadow-lg rounded-xl p-6 border-l-4 border-secondary hover:shadow-2xl transition-transform transform hover:scale-105">
        <h2 class="text-xl sm:text-2xl font-semibold mb-3 text-textDark">{{ reference.name }}</h2>
        <p class="text-base sm:text-lg text-gray-700">{{ reference.description }}</p>
        <p class="text-sm text-gray-500 mt-2">Realizace: {{ reference.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        'Kanalizace a vodovod', 
        'Rekonstrukce silnic', 
        'Rodinné domy', 
        'Zemní práce'
      ],
      selectedCategories: [],
      references: [
        { name: 'Strakonická', description: 'Provádění kanalizace a vodovodu, Zemní práce u podchodu, Pokládka silničních obrubníků', category: 'Kanalizace a vodovod', date: '2024-2025' },
        { name: 'Dvorecký most (Podolské nábřeží)', description: 'Provádění kanalizace na silnice II. třídy', category: 'Kanalizace a vodovod', date: '2024' },
        { name: 'Řeporyje (Tělovýchova)', description: 'Provádění kanalizační a vodovodní přípojky pro rodinné domy', category: 'Rodinné domy', date: '2024' },
        { name: 'Slivenec', description: 'Provádění kanalizace po celém městě', category: 'Kanalizace a vodovod', date: '2021-2024' },
        { name: 'Dobříš Obnova povrchů ulice Nová', description: 'Výměna podloží, realizace asfaltů, pokládka dlažby a obrubníků', category: 'Rekonstrukce silnic', date: '2024' },
        { name: 'Dobříš Ulice Šeříková a Levandulová', description: 'Výměna podloží, realizace asfaltů, pokládka obrubníků a dlažby, Sejmutí stromů', category: 'Rekonstrukce silnic', date: '2024' },
        { name: 'Dobříš Naměstí Komenského', description: 'Rekonstrukce celého náměstí, pokládka žulové kostky, osazování stromů', category: 'Rekonstrukce silnic', date: '2024' },
        { name: 'Všenory', description: 'Výstavba rodinného domu (Hrubá stavba)', category: 'Rodinné domy', date: '2024-2025' },
        { name: 'Řevnice', description: 'Výstavba rodinného domu (Hrubá stavba)', category: 'Rodinné domy', date: 'Probíhá' },
        { name: 'Pouště', description: 'Provádění základové desky pod rodinný dům', category: 'Rodinné domy', date: '2024' },
        { name: 'Praha 10 ulice Malešická', description: 'Obnova vodovodního řádu, montáž vodovodu', category: 'Kanalizace a vodovod', date: '2021' },
        { name: 'Příprava území hotel Hybernská', description: 'Veřejná kanalizace a vodovodní přípojky', category: 'Kanalizace a vodovod', date: '2021' },
        { name: 'Kobylisy Na pešinách', description: 'Zemní práce', category: 'Zemní práce', date: '2024' },
        { name: 'Hostivař', description: 'Zemní práce', category: 'Zemní práce', date: '2024' },
        { name: 'Kladno - Vrapická', description: 'Pokládka veřejné kanalizace, realizace asfaltů', category: 'Kanalizace a vodovod', date: '2024' },
        { name: 'Okružní křižovatky Kladno', description: 'Kruhový objezd, pokládka obrubníků, příprava pod asfalty', category: 'Rekonstrukce silnic', date: '2024' }
      ] // Keeping the existing data structure intact
    };
  },
  computed: {
    filteredReferences() {
      if (this.selectedCategories.length === 0) {
        return this.references;
      }
      return this.references.filter(ref => this.selectedCategories.includes(ref.category));
    }
  },
  methods: {
    toggleCategory(category) {
      if (this.selectedCategories.includes(category)) {
        this.selectedCategories = this.selectedCategories.filter(cat => cat !== category);
      } else {
        this.selectedCategories.push(category);
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
