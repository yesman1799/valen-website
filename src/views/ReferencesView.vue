<template>
  <div class="container mx-auto p-6 pt-32">
    <h1 class="text-4xl font-extrabold text-center mb-12 text-secondary tracking-wide">
      Naše Reference
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
        :class="['px-4 py-2 rounded-full border font-semibold transition', selectedCategory === 'Vše' ? 'bg-secondary text-white' : 'bg-white text-secondary border-secondary']"
      >
        Vše
      </button>
    </div>

    <div class="flex flex-col gap-8">
      <div 
        v-for="reference in filteredReferences" 
        :key="reference.id"
        class="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
        @click="goToReference(reference.id)"
      >
        <div class="p-6 flex-1">
          <h2 class="text-2xl font-bold text-secondary mb-2">{{ reference.name }}</h2>
          <p class="text-gray-600 mb-2">{{ reference.shortDescription }}</p>
          <p v-if="reference.subcontractor" class="text-sm text-gray-500">Subdodavatel: {{ reference.subcontractor }}</p>
          <p v-if="reference.period" class="text-sm text-gray-400 mt-1">Období: {{ reference.period }}</p>
        </div>
        <img 
          :src="reference.image" 
          alt="reference image" 
          class="w-full md:w-64 h-48 object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script>
import references from '@/data/references.json';
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';

export default {
  setup() {
    const router = useRouter();
    const selectedCategory = ref('Vše');

    const categories = [...new Set(references.map(ref => ref.type))];

    const selectCategory = (category) => {
      selectedCategory.value = category;
    };

    const filteredReferences = computed(() => {
      if (selectedCategory.value === 'Vše') {
        return references;
      }
      return references.filter(ref => ref.type === selectedCategory.value);
    });

    const goToReference = (id) => {
      router.push(`/reference/${id}`);
    };

    return {
      references,
      categories,
      selectedCategory,
      selectCategory,
      filteredReferences,
      goToReference
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
