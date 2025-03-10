<template>
  <section class="relative w-full h-screen">
    <!-- Carousel Component -->
    <CarouselComponent />

    <!-- Hero Section Content (Fixed Layering) -->
    <div class="absolute inset-0 flex flex-col justify-center items-start text-white px-10 z-10">
      <h1 class="text-5xl font-bold mb-4">Rekonstrukce a novostavba objektů</h1>
      <p class="text-lg mb-6">Kvalita, tradice a spolehlivost od roku 2009</p>
      <router-link to="/contact">
        <button class="bg-primary text-black px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition">
          Objednat
        </button>
      </router-link>
    </div>
  </section>

  <!-- About Us Section -->
  <AboutUsComponent />

  <!-- Services Section -->
  <ServicesComponent />

  <!-- Reference Carousel Section -->
  <ReferenceCarousel />

  <!-- Equipment Preview Section -->
  <EquipmentPreview />
</template>

<script>
import CarouselComponent from '@/components/CarouselComponent.vue'
import AboutUsComponent from '@/components/AboutUsComponent.vue'
import ServicesComponent from '@/components/ServicesComponent.vue'
import ReferenceCarousel from '@/components/ReferenceCarousel.vue'
import EquipmentPreview from '@/components/EquipmentPreview.vue';

export default {
  name: 'HomeView',
  components: { 
    CarouselComponent,
    AboutUsComponent,
    ServicesComponent,
    ReferenceCarousel,
    EquipmentPreview
  }
}
</script>
