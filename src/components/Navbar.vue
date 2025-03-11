<template>
  <header class="absolute top-0 left-0 w-full bg-white shadow-md py-4 z-50">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <!-- Brand Name -->
      <router-link to="/" class="text-2xl font-bold text-secondary">
        <img src="/images/logo.jpg" alt="Logo" class="h-12" />
      </router-link>

      <!-- Navigation -->
      <nav>
        <ul class="flex space-x-6 text-lg text-textDark">
          <li>
            <router-link to="/about" class="hover:text-primary transition">O nás</router-link>
          </li>
          <li>
            <router-link to="/services" class="hover:text-primary transition">Naše služby</router-link>
          </li>
          <li>
            <router-link to="/references" class="hover:text-primary transition">Reference</router-link>
          </li>
          <li>
          <router-link to="/equipment" class="hover:text-primary transition">Technika</router-link>
          </li>
          <li>
            <router-link to="/contact" class="hover:text-primary transition">Kontakt</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
