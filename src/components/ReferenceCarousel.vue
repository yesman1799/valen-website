<template>
  <section class="text-center">
    <h2 class="text-4xl font-bold text-secondary mb-6">Reference</h2>
    <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="(reference, index) in references"
        :key="index"
        class="group relative p-8 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fade-in-up"
      >
        <h3 class="text-2xl font-bold text-secondary mb-4">{{ reference.title }}</h3>
        <p class="text-gray-600">{{ reference.description }}</p>
      </div>
    </div>
    <div class="mt-10">
      <router-link to="/references" class="inline-block bg-secondary text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-primary transition">
        Více referencí
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const references = [
      {
        title: 'Strakonická',
        description: 'Výstavba kanalizace a vodovodu, zemní práce, pokládka obrubníků.'
      },
      {
        title: 'Dvorecký most',
        description: 'Provádění kanalizace na silnici II. třídy v oblasti Podolského nábřeží.'
      },
      {
        title: 'Řeporyje',
        description: 'Realizace kanalizační a vodovodní přípojky pro rodinné domy.'
      }
    ];

    return {
      references
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
