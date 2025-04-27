<template>
  <section class="text-center">
    <h2 class="text-4xl font-bold text-secondary mb-6">Naše Služby</h2>
    <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="group relative p-8 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fade-in-up"
      >
        <h3 class="text-2xl font-bold text-secondary mb-4">{{ service.title }}</h3>
        <p class="text-gray-600">{{ service.description }}</p>
      </div>
    </div>
    <div class="mt-10">
      <router-link to="/services" class="inline-block bg-secondary text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-primary transition">
        Více o službách
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const services = [
      {
        title: 'Kanalizace a Vodovod',
        description: 'Výstavba, opravy a rekonstrukce vodovodních a kanalizačních sítí se zaměřením na preciznost a kvalitu.'
      },
      {
        title: 'Rekonstrukce Silnic',
        description: 'Komplexní obnovy vozovek, pokládky asfaltů, obrubníků a dlažeb s ohledem na dlouhou životnost.'
      },
      {
        title: 'Výstavba Rodinných Domů',
        description: 'Výstavba moderních rodinných domů od základů až po finální dokončení, individuální přístup ke každému projektu.'
      }
    ];

    return {
      services
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
