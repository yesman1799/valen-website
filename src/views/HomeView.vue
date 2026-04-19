<template>
  <div class="pt-16">
    <!-- Hero -->
    <CarouselComponent />

    <!-- About -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <AboutUsComponent />
      </div>
    </section>

    <!-- Services -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <ServicesComponent />
      </div>
    </section>

    <!-- References -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <ReferenceCarousel />
      </div>
    </section>

    <!-- Equipment -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
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
  components: { CarouselComponent, AboutUsComponent, ServicesComponent, ReferenceCarousel, EquipmentPreview }
};
</script>

<style scoped>
.container { max-width: 1200px; }
</style>
