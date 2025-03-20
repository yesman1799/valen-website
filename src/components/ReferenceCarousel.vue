<template>
  <section class="bg-white py-16 text-center">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-secondary mb-8">REFERENCE</h2>

      <!-- Improved Carousel -->
      <carousel 
        :items-to-show="3"
        :wrap-around="true"
        :autoplay="5000"
        v-model="currentSlide"
        class="relative"
      >
        <slide v-for="(reference, index) in references" :key="index">
          <div 
            class="relative w-full flex justify-center transition-transform duration-300" 
            :class="{ 'scale-110': currentSlide === index, 'scale-90 opacity-60': currentSlide !== index }"
          >
            <!-- Reference Image -->
            <img :src="reference.image" class="rounded-lg shadow-lg w-4/5 h-72 object-cover">

            <!-- Overlay Text -->
            <p class="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-bold bg-black/60 px-4 py-1 rounded">
              {{ reference.title }}
            </p>
          </div>
        </slide>

        <!-- Custom Navigation Arrows -->
        <template #addons>
          <navigation>
            <template #prev>
              <button class="carousel__prev">❮</button>
            </template>
            <template #next>
              <button class="carousel__next">❯</button>
            </template>
          </navigation>
        </template>
      </carousel>

      <!-- Button to View All References -->
      <div class="mt-8">
        <router-link to="/references">
          <button class="bg-primary text-black px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition">
            Zobrazit Reference
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'ReferenceCarousel',
  components: { Carousel, Slide, Navigation },
  setup() {
    const references = ref([
      { title: "Rekonstrukce silnce v Mokrovratech", image: "/images/construction1.jpg" },
      { title: "Rekonstrukce ulice průběžné", image: "/images/construction2.jpg" },
      { title: "Dokončená novostavba", image: "/images/construction3.jpg" }
    ])
    const currentSlide = ref(0)

    return { references, currentSlide }
  }
})
</script>

<style scoped>
/* Custom styles */
.carousel__slide {
  display: flex;
  justify-content: center;
}

/* Center image is larger */
.scale-110 {
  transform: scale(1.1);
  opacity: 1;
}
.scale-90 {
  transform: scale(0.9);
  opacity: 0.6;
}

/* Custom Navigation Arrows */
.carousel__prev, .carousel__next {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
}
</style>
