<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Page header -->
    <div class="pt-32 pb-12 px-6 text-center bg-white border-b border-gray-100">
      <h1 class="text-4xl font-extrabold text-secondary tracking-tight mb-3">O nás</h1>
      <div class="w-14 h-1 bg-secondary rounded-full mx-auto"></div>
      <p class="mt-4 text-gray-500 max-w-xl mx-auto">Stavíme na zkušenostech, moderní technice a férovém přístupu</p>
    </div>

    <!-- Main content -->
    <div class="max-w-6xl mx-auto px-6 py-16">
      <div class="flex flex-col md:flex-row items-center gap-12 mb-16">
        <img src="/images/about-us.jpg" alt="O nás" class="w-full md:w-1/2 rounded-2xl shadow-lg object-cover" style="max-height:420px;" />
        <div class="md:w-1/2">
          <h2 class="text-2xl font-bold text-secondary mb-4">Kdo jsme</h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            VALEN s.r.o. je stavební společnost s dlouholetou historií a zkušenostmi v oblasti výstavby, rekonstrukcí a zemních prací.
            Naše firma se specializuje na moderní technologie, kvalitní materiály a precizní práci, abychom zajistili spokojenost našich klientů.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Naším cílem je dodávat <strong class="text-textDark">spolehlivá a profesionální</strong> stavební řešení na míru potřebám našich zákazníků.
            Díky zkušenostem a špičkové technice zajišťujeme efektivní realizaci každého projektu.
          </p>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div v-for="stat in stats" :key="stat.label" class="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
          <p class="text-5xl font-extrabold text-secondary mb-2">{{ stat.value }}</p>
          <p class="text-gray-500 font-medium">{{ stat.label }}</p>
        </div>
      </div>

      <!-- Why us -->
      <div class="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
        <h2 class="text-2xl font-bold text-secondary text-center mb-8">Proč si vybrat nás?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="reason in reasons" :key="reason.title" class="flex flex-col items-center text-center">
            <div class="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" :d="reason.icon" />
              </svg>
            </div>
            <h3 class="font-bold text-secondary mb-2">{{ reason.title }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">{{ reason.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const stats = [
      { value: '15+', label: 'Let zkušeností' },
      { value: '500+', label: 'Dokončených projektů' },
      { value: '100%', label: 'Spokojených zákazníků' },
    ];

    const reasons = [
      {
        title: 'Zkušenosti a kvalita',
        description: 'Více než 15 let praxe ve stavebnictví zaručuje precizní provedení každé zakázky.',
        icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
      },
      {
        title: 'Moderní technika',
        description: 'Vlastní vozový park a stavební stroje umožňují efektivní realizaci i náročných projektů.',
        icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
      },
      {
        title: 'Termíny a transparentnost',
        description: 'Dodržujeme sjednané termíny a zákazníka průběžně informujeme o stavu projektu.',
        icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
      }
    ];

    return { stats, reasons };
  }
};
</script>
