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
          class="w-full h-screen bg-cover bg-center relative" 
          :style="{ backgroundImage: `url(${image})` }"
        >
          <!-- Overlay -->
          <div class="absolute inset-0 bg-black bg-opacity-40"></div>

          <!-- Text Section -->
          <div class="absolute inset-0 flex items-center justify-start px-8">
            <div class="text-left text-white max-w-2xl">
              <h1 class="text-4xl md:text-5xl font-bold mb-6">VALEN s.r.o.</h1>
              <p class="text-lg md:text-xl mb-6">
                Spolehlivý partner pro kanalizace, rekonstrukce a výstavbu domů. Stavíme na kvalitě, technologiích a férovém přístupu.
              </p>
              <router-link
                to="/about"
                class="inline-block bg-secondary text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-primary transition"
              >
                Více o nás
              </router-link>
            </div>
          </div>
        </div>
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
      '/images/Sidlo.jpg'
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
