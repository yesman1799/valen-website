<template>
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-secondary text-center mb-8">Kontaktní formulář</h2>
      <form class="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto">
        <div class="mb-4">
          <label class="block mb-2 font-bold text-secondary">Jméno a příjmení</label>
          <input type="text" class="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-primary">
        </div>
        <div class="mb-4">
          <label class="block mb-2 font-bold text-secondary">Telefon</label>
          <input type="tel" class="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-primary">
        </div>
        <div class="mb-4">
          <label class="block mb-2 font-bold text-secondary">Email</label>
          <input type="email" class="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-primary">
        </div>
        <button class="w-full bg-primary text-black p-3 rounded hover:bg-yellow-500 transition">
          Odeslat
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactView'
}
</script>
