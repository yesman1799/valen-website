<template>
  <div class="container mx-auto p-6 sm:p-8 pt-32 sm:pt-40 md:pt-48">
    <h1 class="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-secondary tracking-wide">Kontakt</h1>
    
    <div class="bg-white shadow-xl rounded-lg p-4 sm:p-6 md:p-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
      <!-- Contact Information -->
      <div class="w-full md:w-1/2 text-center md:text-left">
        <h2 class="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">VALEN s.r.o.</h2>
        <p class="text-base sm:text-lg text-gray-700 mb-1 sm:mb-2">IČO: 28954149</p>
        <p class="text-base sm:text-lg text-gray-700 mb-1 sm:mb-2">DIČ: CZ28954149</p>
        <p class="text-base sm:text-lg text-gray-700 mb-1 sm:mb-2">Nad Prachandou 840</p>
        <p class="text-base sm:text-lg text-gray-700 mb-1 sm:mb-2">Dobříš 263 01</p>
        <p class="text-base sm:text-lg text-gray-700 mb-1 sm:mb-2">📞 <a href="tel:777564235" class="text-secondary hover:underline">777 564 235</a></p>
        <p class="text-base sm:text-lg text-gray-700 mb-1 sm:mb-2">✉️ <a href="mailto:valen2009@seznam.cz" class="text-secondary hover:underline">valen2009@seznam.cz</a></p>
        <p class="text-base sm:text-lg text-gray-700">🌍 <a href="https://www.valen.cz" target="_blank" class="text-secondary hover:underline">www.valen.cz</a></p>
      </div>
      
      <!-- Map Section with Pin -->
      <div class="w-full md:w-1/2">
        <iframe 
          class="w-full h-48 sm:h-64 rounded-lg shadow-md" 
          src="https://www.openstreetmap.org/export/embed.html?bbox=14.1824125,49.7864381,14.1924125,49.7964381&layer=mapnik&marker=49.7914381,14.1874125" 
          allowfullscreen>
        </iframe>
      </div>
    </div>
    
    <!-- Contact Form -->
    <div class="bg-gray-100 shadow-md rounded-lg p-4 sm:p-6 md:p-10 mt-8 sm:mt-10">
      <h2 class="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">Napište nám</h2>
      <form @submit.prevent="sendEmail" class="flex flex-col space-y-3 sm:space-y-4">
        <input v-model="name" type="text" placeholder="Vaše jméno" class="p-2 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
        <input v-model="email" type="email" placeholder="Váš e-mail" class="p-2 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
        <textarea v-model="message" placeholder="Vaše zpráva" rows="4" class="p-2 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
        <button type="submit" class="bg-secondary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-primary transition">Odeslat zprávu</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    sendEmail() {
      const mailtoLink = `mailto:valen2009@seznam.cz?subject=Kontakt z webu&body=${encodeURIComponent(`Jméno: ${this.name}\nE-mail: ${this.email}\nZpráva: ${this.message}`)}`;
      window.location.href = mailtoLink;
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
