<template>
  <section class="page-content bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-extrabold text-center text-secondary mb-14">
        Naše služby
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="(service, index) in services"
          :key="index"
          v-intersect="(isVisible) => visibleItems[index] = isVisible"
          :class="[
            'bg-white text-center p-8 rounded-xl shadow-lg border transition-all duration-700 ease-out transform',
            visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
            'border-blue-800'
          ]"
          :style="{ transitionDelay: `${index * 500}ms` }"
        >
          <h3 class="text-2xl font-semibold text-blue-800 mb-4">{{ service.title }}</h3>
          <p class="text-black">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const services = [
  { title: 'Zemní práce', description: 'Kompletní zemní a výkopové práce pro stavební účely.' },
  { title: 'Výstavba domů', description: 'Realizace rodinných a bytových domů na klíč.' },
  { title: 'Demolice', description: 'Profesionální demolice budov s odvozem odpadu.' },
  { title: 'Inženýrské sítě', description: 'Výstavba a napojení vodovodů, kanalizací a elektrosítí.' },
  { title: 'Pronájem techniky', description: 'Půjčujeme stavební stroje včetně obsluhy.' },
  { title: 'Zpevněné plochy', description: 'Pokládka dlažby, chodníků a výstavba komunikací.' },
]

const visibleItems = reactive(Array(services.length).fill(false))
</script>
