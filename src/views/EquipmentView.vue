<template>
  <div class="container mx-auto p-6 pt-32">
    <h1 class="text-4xl font-extrabold text-center mb-12 text-secondary tracking-wide">
      Stavební Technika
    </h1>

    <div class="flex flex-wrap justify-center gap-4 mb-10">
      <button
        v-for="category in categories"
        :key="category"
        @click="selectCategory(category)"
        :class="['px-4 py-2 rounded-full border font-semibold transition', selectedCategory === category ? 'bg-secondary text-white' : 'bg-white text-secondary border-secondary']"
      >
        {{ category }}
      </button>
      <button
        @click="selectCategory('Vše')"
        :class="['px-4 py-2 rounded-full border font-semibold transition', selectedCategory === 'Vše' ? 'bg-secondary text-white' : 'bg-white text-primary border-primary']"
      >
        Vše
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div 
        v-for="item in filteredEquipment" 
        :key="item.id"
        class="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 overflow-hidden transition-transform transform hover:scale-105"
      >
        <img :src="item.image" alt="equipment image" class="w-full h-64 md:h-72 object-cover rounded-t-2xl">
        <div class="p-6">
          <h2 class="text-2xl font-bold text-secondary mb-4">{{ item.name }}</h2>
          <p class="text-gray-600 mb-4">{{ item.description }}</p>
          <button @click="toggleSpecs(item.id)" class="flex items-center gap-2 text-secondary hover:underline font-semibold">
            <span>{{ openSpecId === item.id ? 'Skrýt parametry' : 'Zobrazit parametry' }}</span>
            <svg :class="openSpecId === item.id ? 'transform rotate-180 transition-transform' : 'transform rotate-0 transition-transform'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <transition name="fade">
            <div v-if="openSpecId === item.id" class="mt-4">
              <ul class="text-sm text-gray-600 list-disc pl-5">
                <li v-for="(value, key) in item.specs" :key="key">
                  <strong>{{ key }}:</strong> {{ value }}
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import equipment from '@/data/equipment.json';
import { ref, computed } from 'vue';

export default {
  setup() {
    const selectedCategory = ref('Vše');
    const openSpecId = ref(null);

    const categories = [...new Set(equipment.map(eq => eq.type))];

    const selectCategory = (category) => {
      selectedCategory.value = category;
    };

    const toggleSpecs = (id) => {
      openSpecId.value = openSpecId.value === id ? null : id;
    };

    const filteredEquipment = computed(() => {
      if (selectedCategory.value === 'Vše') {
        return equipment;
      }
      return equipment.filter(eq => eq.type === selectedCategory.value);
    });

    return {
      equipment,
      categories,
      selectedCategory,
      selectCategory,
      filteredEquipment,
      toggleSpecs,
      openSpecId
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
