<template>
  <div class="container mx-auto p-6 page-content">
    <h1 class="text-4xl font-bold text-center text-primary mb-10">Naše Stavební Technika</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="equipment in equipments" :key="equipment.name" class="bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="image-container">
          <img :src="'/images/' + equipment.image" :alt="equipment.name" class="object-cover">
        </div>
        <div class="p-4">
          <h2 class="text-xl font-semibold text-primary">{{ equipment.name }}</h2>
          <p class="text-gray-600">{{ equipment.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      equipments: [
        { name: 'Bobcat nakladač', image: 'bobcat.jpg', description: 'Kompaktní a všestranný nakladač pro manipulaci s materiálem.' },
        { name: 'Yanmar minibagr', image: 'yanmar.jpg', description: 'Malý pásový bagr vhodný pro precizní výkopové práce.' },
        { name: 'CAT 323 pásový bagr', image: 'cat323.jpg', description: 'Výkonný hydraulický bagr pro těžké zemní práce.' },
        { name: 'Mercedes-Benz Arocs sklápěč', image: 'mercedes-arocs.jpg', description: 'Robustní sklápěč určený pro přepravu sypkých materiálů.' },
        { name: 'Scania G400 sklápěč', image: 'scania.jpg', description: 'Těžký nákladní vůz pro odvoz zeminy a sutí.' }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.page-content {
  padding-top: 100px; /* Adjust if needed */
  padding-bottom: 50px; /* Ensures spacing above footer */
}

.image-container {
  width: 100%;
  height: 250px; /* Increased height for better image display */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the full image fits nicely without being distorted */
}
</style>
