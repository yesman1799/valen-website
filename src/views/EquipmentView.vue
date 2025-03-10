<template>
  <div class="page-content">
    <h1 class="text-4xl font-bold text-center text-secondary mb-8">Naše Stavební Technika</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="machine in machines"
        :key="machine.id"
        class="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105"
      >
        <img :src="machine.image" :alt="machine.name" class="w-full h-60 object-cover" />
        <div class="p-4">
          <h2 class="text-xl font-semibold text-secondary">{{ machine.name }}</h2>
          <p class="text-gray-600">{{ machine.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      machines: [
        { id: 1, name: 'Bobcat nakladač', description: 'Kompaktní a všestranný nakladač pro manipulaci s materiálem.', image: '/images/bobcat.jpg' },
        { id: 2, name: 'Yanmar minibagr', description: 'Malý pásový bagr vhodný pro precizní výkopové práce.', image: '/images/yanmar.jpg' },
        { id: 3, name: 'CAT 323 pásový bagr', description: 'Výkonný hydraulický bagr pro těžké zemní práce.', image: '/images/cat323.jpg' },
        { id: 4, name: 'Mercedes-Benz Arocs sklápěč', description: 'Robustní sklápěč určený pro přepravu sypkých materiálů.', image: '/images/mercedes-arocs.jpg' },
        { id: 5, name: 'Scania G400 sklápěč', description: 'Těžký nákladní vůz pro odvoz zeminy a sutin.', image: '/images/scania.jpg' }
      ]
    };
  }
};
</script>
