<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Page header -->
    <div class="pt-32 pb-12 px-6 text-center bg-white border-b border-gray-100">
      <h1 class="text-4xl font-extrabold text-textDark tracking-tight mb-3">Naše Služby</h1>
      <div class="w-14 h-1 bg-secondary rounded-full mx-auto"></div>
      <p class="mt-4 text-gray-500 max-w-xl mx-auto">Komplexní stavební řešení od zemních prací po dokončovací práce</p>
    </div>

    <!-- Services grid -->
    <div class="max-w-6xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(service, index) in services"
          :key="index"
          v-intersect="(isVisible) => visibleItems[index] = isVisible"
          :class="[
            'bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition-all duration-700 ease-out transform',
            visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
          :style="{ transitionDelay: `${index * 80}ms` }"
        >
          <div class="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-5">
            <svg class="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" :d="service.icon" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-textDark mb-3">{{ service.title }}</h3>
          <p class="text-gray-500 text-sm leading-relaxed">{{ service.description }}</p>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-16 bg-secondary rounded-2xl p-10 text-center text-white">
        <h2 class="text-2xl font-bold mb-3">Máte zájem o spolupráci?</h2>
        <p class="text-white/80 mb-6 max-w-md mx-auto">Kontaktujte nás a připravíme vám nezávaznou nabídku na míru.</p>
        <router-link
          to="/contact"
          class="inline-block bg-white text-secondary font-bold px-8 py-3.5 rounded-xl hover:bg-gray-50 transition"
        >
          Kontaktujte nás
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const services = [
  {
    title: 'Zemní práce',
    description: 'Kompletní zemní a výkopové práce pro stavební účely, hloubení základů, terénní úpravy a odvoz materiálu.',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
  },
  {
    title: 'Výstavba domů',
    description: 'Realizace rodinných a bytových domů na klíč, od základů po finální dokončení.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  },
  {
    title: 'Demolice',
    description: 'Profesionální demolice budov a konstrukcí s kompletním odvozem a likvidací odpadu.',
    icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
  },
  {
    title: 'Inženýrské sítě',
    description: 'Výstavba a napojení vodovodů, kanalizací a dalších inženýrských sítí pro bytovou i průmyslovou výstavbu.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
  },
  {
    title: 'Pronájem techniky',
    description: 'Půjčujeme moderní stavební stroje včetně obsluhy — bagry, sklápěče, válce a další.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
  },
  {
    title: 'Zpevněné plochy',
    description: 'Pokládka dlažby, výstavba chodníků, parkovišť a komunikací s dlouhou životností.',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'
  },
]

const visibleItems = reactive(Array(services.length).fill(false))
</script>
