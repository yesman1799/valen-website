<template>
  <section class="text-center">
    <h2 class="text-4xl font-bold text-secondary mb-6">Technika</h2>
    <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="(item, index) in equipment"
        :key="index"
        class="group relative bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fade-in-up overflow-hidden"
      >
        <img :src="item.image" alt="equipment" class="w-full h-52 object-cover">
        <div class="p-6">
          <h3 class="text-2xl font-bold text-secondary mb-4">{{ item.name }}</h3>
          <p class="text-gray-600 text-sm">{{ item.description }}</p>
        </div>
      </div>
    </div>
    <div class="mt-10">
      <router-link to="/equipment" class="inline-block bg-secondary text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-primary transition">
        Celá technika
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const equipment = [
      {
        name: 'Pásový bagr CAT 323',
        description: 'Pásový bagr, 23 tun',
        image: '/equipment/cat_323.jpg'
      },
      {
        name: 'Pásový bagr Yanmar SV60',
        description: 'Kompaktní pásový bagr, 6 tun',
        image: '/equipment/yanmar_sv60.jpg'
      },
      {
        name: 'Dumper',
        description: 'Stavební dopravník materiálu',
        image: '/equipment/dumper.jpg'
      }
    ];

    return {
      equipment
    };
  }
};
</script>

<style scoped>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease forwards;
}
</style>
