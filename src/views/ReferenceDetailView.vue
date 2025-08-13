<template>
  <div class="container mx-auto p-6 pt-32">
    <button @click="goBack" class="flex items-center text-secondary hover:text-primary mb-6">
      ← Zpět na reference
    </button>

    <div v-if="reference" class="bg-white rounded-2xl shadow-md p-8">
      <h1 class="text-4xl font-bold text-secondary mb-6">{{ reference.name }}</h1>
      <p class="text-gray-700 mb-4">{{ reference.longDescription }}</p>

      <div v-if="reference.period" class="text-sm text-gray-500 mb-2">
        <strong>Období:</strong> {{ reference.period }}
      </div>

      <div v-if="reference.subcontractor" class="text-sm text-gray-500 mb-4">
        <strong>Generální dodavetel:</strong> {{ reference.subcontractor }}
      </div>

      <!-- Zde je jediná změna - místo 2x stejného obrázku iterujeme přes images[] -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          v-for="(img, i) in getImages(reference)"
          :key="i"
          :src="img"
          :alt="`${reference.name} – foto ${i+1}`"
          class="w-full h-64 object-cover rounded-xl"
        />
      </div>
    </div>
    
    <div v-else class="text-center text-gray-500">
      Reference nebyla nalezena.
    </div>
  </div>
</template>

<script>
import references from '@/data/references.json';
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const id = parseInt(route.params.id);

    const reference = computed(() => references.find(ref => ref.id === id));

    const goBack = () => {
      router.push('/references');
    };

    // Nová metoda na získání fotek
    const getImages = (ref) => {
      const imgs = Array.isArray(ref?.images)
        ? ref.images
        : (ref?.image ? [ref.image] : []);
      return [...new Set(imgs.filter(Boolean))];
    };

    return {
      reference,
      goBack,
      getImages
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 1000px;
}
</style>
