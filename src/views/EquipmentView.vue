<template>
  <div class="min-h-screen bg-gray-50">

    <!-- Page Header -->
    <div class="pt-32 pb-10 px-6 text-center">
      <h1 class="text-4xl font-extrabold text-textDark tracking-tight mb-3">
        Stavební Technika
      </h1>
      <p class="text-gray-500 text-lg max-w-xl mx-auto">
        Moderní vozový park pro zemní práce, dopravu materiálu a stavební provoz.
      </p>
    </div>

    <!-- Category Filter -->
    <div class="flex flex-wrap justify-center gap-3 px-6 mb-10">
      <button
        @click="selectCategory('Vše')"
        :class="[
          'px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200',
          selectedCategory === 'Vše'
            ? 'bg-secondary text-white border-secondary shadow-md'
            : 'bg-white text-gray-600 border-gray-200 hover:border-secondary hover:text-secondary'
        ]"
      >
        Vše <span class="ml-1 text-xs opacity-70">({{ equipment.length }})</span>
      </button>
      <button
        v-for="category in categories"
        :key="category"
        @click="selectCategory(category)"
        :class="[
          'px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200',
          selectedCategory === category
            ? 'bg-secondary text-white border-secondary shadow-md'
            : 'bg-white text-gray-600 border-gray-200 hover:border-secondary hover:text-secondary'
        ]"
      >
        {{ category }}
        <span class="ml-1 text-xs opacity-70">({{ equipment.filter(e => e.type === category).length }})</span>
      </button>
    </div>

    <!-- Equipment Grid -->
    <div class="max-w-7xl mx-auto px-6 pb-20">
      <transition-group name="grid-fade" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <div
          v-for="item in filteredEquipment"
          :key="item.id"
          class="bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col group"
        >
          <!-- Image Area -->
          <div class="relative bg-white overflow-hidden" style="height: 240px;">
            <img
              :src="item.image"
              :alt="item.name"
              class="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            />
            <!-- Category Badge -->
            <span class="absolute top-3 left-3 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              {{ item.type }}
            </span>
          </div>

          <!-- Divider -->
          <div class="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-4"></div>

          <!-- Content -->
          <div class="p-5 flex flex-col flex-1">
            <h2 class="text-lg font-bold text-textDark mb-3 leading-tight">{{ item.name }}</h2>

            <!-- Key specs always visible — first 2 -->
            <div class="grid grid-cols-2 gap-2 mb-4">
              <div
                v-for="(value, key) in getTopSpecs(item.specs, 2)"
                :key="key"
                class="bg-gray-50 rounded-xl px-3 py-2"
              >
                <p class="text-xs text-gray-400 font-medium truncate">{{ key }}</p>
                <p class="text-sm font-bold text-textDark truncate">{{ value }}</p>
              </div>
            </div>

            <!-- Toggle for full specs -->
            <button
              v-if="Object.keys(item.specs).length > 2"
              @click="toggleSpecs(item.id)"
              class="flex items-center gap-1.5 text-secondary text-sm font-semibold hover:underline mb-3 w-fit"
            >
              <svg
                :class="openSpecId === item.id ? 'rotate-180' : 'rotate-0'"
                class="w-4 h-4 transition-transform duration-200"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              {{ openSpecId === item.id ? 'Skrýt parametry' : 'Všechny parametry' }}
            </button>

            <!-- All specs expanded -->
            <transition name="fade">
              <div v-if="openSpecId === item.id" class="border-t border-gray-100 pt-3 mt-1">
                <table class="w-full text-sm">
                  <tbody>
                    <tr
                      v-for="(value, key) in item.specs"
                      :key="key"
                      class="border-b border-gray-50 last:border-0"
                    >
                      <td class="py-1.5 pr-3 text-gray-400 font-medium w-1/2">{{ key }}</td>
                      <td class="py-1.5 text-textDark font-semibold">{{ value }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </transition>
          </div>
        </div>
      </transition-group>

      <!-- Empty state -->
      <div v-if="filteredEquipment.length === 0" class="text-center text-gray-400 py-20 text-lg">
        Žádná technika v této kategorii.
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
      openSpecId.value = null;
    };

    const toggleSpecs = (id) => {
      openSpecId.value = openSpecId.value === id ? null : id;
    };

    const getTopSpecs = (specs, count) => {
      return Object.fromEntries(Object.entries(specs).slice(0, count));
    };

    const filteredEquipment = computed(() => {
      if (selectedCategory.value === 'Vše') return equipment;
      return equipment.filter(eq => eq.type === selectedCategory.value);
    });

    return {
      equipment,
      categories,
      selectedCategory,
      selectCategory,
      filteredEquipment,
      toggleSpecs,
      openSpecId,
      getTopSpecs,
    };
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.grid-fade-enter-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.grid-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.grid-fade-leave-active {
  transition: opacity 0.2s ease;
  position: absolute;
}
.grid-fade-leave-to {
  opacity: 0;
}
</style>
