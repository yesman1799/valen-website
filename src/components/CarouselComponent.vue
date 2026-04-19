<template>
  <div class="relative w-full h-screen overflow-hidden">
    <carousel
      :autoplay="6000"
      :wrap-around="true"
      v-model="currentSlide"
      class="w-full h-full"
    >
      <slide v-for="(image, index) in images" :key="index">
        <div
          class="w-full h-screen bg-cover bg-center relative"
          :style="{ backgroundImage: `url(${image})` }"
        >
          <!-- Gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent"></div>

          <!-- Content -->
          <div class="absolute inset-0 flex items-center">
            <div class="px-8 md:px-20 max-w-3xl">
              <p class="text-primary font-semibold tracking-widest uppercase text-sm mb-4 opacity-0 animate-fadein" style="animation-delay:0.1s">Stavební společnost</p>
              <h1 class="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 opacity-0 animate-fadein" style="animation-delay:0.25s">
                VALEN<br><span class="text-primary">s.r.o.</span>
              </h1>
              <p class="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed opacity-0 animate-fadein" style="animation-delay:0.4s">
                Spolehlivý partner pro zemní práce, kanalizace, rekonstrukce komunikací a výstavbu. Stavíme na kvalitě a férovém přístupu.
              </p>
              <div class="flex flex-wrap gap-4 opacity-0 animate-fadein" style="animation-delay:0.55s">
                <router-link
                  to="/references"
                  class="bg-secondary text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-lg"
                >
                  Naše reference
                </router-link>
                <router-link
                  to="/contact"
                  class="bg-white/15 backdrop-blur-sm text-white border border-white/30 px-8 py-3.5 rounded-xl font-semibold hover:bg-white/25 transition-all duration-200"
                >
                  Kontaktujte nás
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </slide>
    </carousel>

    <!-- Slide indicators -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
      <span
        v-for="(image, index) in images"
        :key="index"
        class="h-1.5 rounded-full transition-all duration-400 cursor-pointer"
        :class="currentSlide === index ? 'bg-primary w-8' : 'bg-white/40 w-4'"
        @click="currentSlide = index"
      ></span>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-2 text-white/50 text-xs tracking-widest uppercase">
      <span>Scroll</span>
      <div class="w-px h-10 bg-white/30 animate-pulse"></div>
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
    const images = ref(['/images/Sidlo.jpg'])
    const currentSlide = ref(0)
    return { images, currentSlide }
  }
})
</script>

<style scoped>
.carousel__slide {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

@keyframes fadein {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fadein {
  animation: fadein 0.7s ease forwards;
}
</style>
