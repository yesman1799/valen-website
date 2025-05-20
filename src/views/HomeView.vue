<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <CarouselComponent />

    <!-- About Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <AboutUsComponent />
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <ServicesComponent />
      </div>
    </section>

    <!-- References Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <ReferenceCarousel />
      </div>
    </section>

    <!-- Equipment Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <EquipmentPreview />
      </div>
    </section>
  </div>
</template>

<script>
import CarouselComponent from '@/components/CarouselComponent.vue';
import AboutUsComponent from '@/components/AboutUsComponent.vue';
import ServicesComponent from '@/components/ServicesComponent.vue';
import ReferenceCarousel from '@/components/ReferenceCarousel.vue';
import EquipmentPreview from '@/components/EquipmentPreview.vue';

export default {
  components: {
    CarouselComponent,
    AboutUsComponent,
    ServicesComponent,
    ReferenceCarousel,
    EquipmentPreview
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
