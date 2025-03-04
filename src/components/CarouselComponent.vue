<template>
  <div class="relative w-full h-screen overflow-hidden">
    <!-- Carousel -->
    <carousel 
      :autoplay="5000" 
      :wrap-around="true" 
      v-model="currentSlide" 
      class="w-full h-full"
    >
      <slide v-for="(image, index) in images" :key="index">
        <div 
          class="w-full h-screen bg-cover bg-center" 
          :style="{ backgroundImage: `url(${image})` }"
        ></div>
      </slide>
    </carousel>

    <!-- Indicators -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
      <span 
        v-for="(image, index) in images" 
        :key="index" 
        class="h-3 w-3 rounded-full transition-all duration-300"
        :class="currentSlide === index ? 'bg-secondary w-6' : 'bg-gray-300'"
      ></span>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'CarouselComponent',
  components: { Carousel, Slide },
  setup() {
    const images = ref([
      '/images/construction1.jpg',
      '/images/construction2.jpg',
      '/images/construction3.jpg'
    ])
    const currentSlide = ref(0)

    return {
      images,
      currentSlide
    }
  }
})
</script>

<style scoped>
/* Ensure full-height slides */
.carousel__slide {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

/* Indicators styling */
.carousel__pagination {
  position: absolute !important;
  bottom: 20px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
}
</style>
