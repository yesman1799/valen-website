<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Page header -->
    <div class="pt-32 pb-12 px-6 text-center bg-white border-b border-gray-100">
      <h1 class="text-4xl font-extrabold text-secondary tracking-tight mb-3">Kontakt</h1>
      <div class="w-14 h-1 bg-secondary rounded-full mx-auto"></div>
      <p class="mt-4 text-gray-500 max-w-xl mx-auto">Jsme tu pro vás — ozvěte se nám</p>
    </div>

    <div class="max-w-5xl mx-auto px-6 py-12">
    <div class="bg-white shadow-sm rounded-2xl border border-gray-100 p-6 sm:p-10 flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
      <!-- Contact Information -->
      <div class="w-full md:w-1/2 text-center md:text-left">
        <h2 class="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">VALEN s.r.o.</h2>
        <p class="text-base sm:text-lg text-gray-700 mb-1 sm:mb-2">IČO: 28954149</p>
        <p class="text-base sm:text-lg text-gray-700 mb-1 sm:mb-2">DIČ: CZ28954149</p>
        <p class="text-base sm:text-lg text-gray-700 mb-1 sm:mb-2">Malá Hraštice 168</p>
        <p class="text-base sm:text-lg text-gray-700 mb-1 sm:mb-2">Malá Hraštice, PSČ 262 03</p>
        <p class="text-base sm:text-lg text-gray-700 mb-1 sm:mb-2">📞 <a href="tel:777564235" class="text-secondary hover:underline">777 564 235</a></p>
        <p class="text-base sm:text-lg text-gray-700 mb-1 sm:mb-2">✉️ <a href="mailto:valen2009@seznam.cz" class="text-secondary hover:underline">valen2009@seznam.cz</a></p>
        <p class="text-base sm:text-lg text-gray-700">🌍 <a href="https://www.valen.cz" target="_blank" class="text-secondary hover:underline">www.valen.cz</a></p>
      </div>
      
      <!-- Map Section with Pin -->
      <div class="w-full md:w-1/2">
        <iframe 
          class="w-full h-48 sm:h-64 rounded-lg shadow-md" 
          src="https://www.openstreetmap.org/export/embed.html?bbox=14.1824125,49.7864381,14.1924125,49.7964381&layer=mapnik&marker=49.8118389,14.2875086" 
          allowfullscreen>
        </iframe>
      </div>
    </div>
    
    <!-- Contact Form -->
    <div class="bg-white shadow-sm rounded-2xl border border-gray-100 p-6 sm:p-10">
      <h2 class="text-2xl font-bold text-secondary mb-6 text-center">Napište nám</h2>

      <form @submit.prevent="sendEmail" class="flex flex-col gap-4 max-w-lg mx-auto">
        <input v-model="name" type="text" placeholder="Vaše jméno" class="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary text-sm transition">
        <input v-model="email" type="email" placeholder="Váš e-mail" class="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary text-sm transition">
        <textarea v-model="message" placeholder="Vaše zpráva" rows="5" class="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary text-sm transition resize-none"></textarea>

        <input v-model="hp_field" type="text" autocomplete="off" tabindex="-1" class="hidden" />
        <div id="cf-turnstile" class="hidden"></div>

        <button type="submit" :disabled="sending" class="bg-secondary text-white py-3.5 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-sm disabled:opacity-60">
          {{ sending ? 'Odesílám…' : 'Odeslat zprávu' }}
        </button>
      </form>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      // anti‑spam
      hp_field: '',         // honeypot (musí zůstat prázdný)
      captchaToken: '',     // Turnstile token
      sending: false
    };
  },
  mounted() {
    // Neviditelná Cloudflare Turnstile (sitekey z .env)
    const siteKey = import.meta.env.VITE_TURNSTILE_SITEKEY || '';
    if (window.turnstile && siteKey) {
      window.turnstile.render('#cf-turnstile', {
        sitekey: siteKey,
        callback: (t) => (this.captchaToken = t),
        'expired-callback': () => (this.captchaToken = ''),
        'error-callback': () => (this.captchaToken = '')
      });
    }
  },
  methods: {
    async sendEmail() {
      // základní validace (frontend)
      if (this.name.trim().length < 2) return alert('Zadejte jméno.');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) return alert('Zadejte platný e‑mail.');
      if (this.message.trim().length < 10) return alert('Zpráva je příliš krátká.');

      const apiBase = import.meta.env.VITE_API_BASE || '';
      if (!apiBase) return alert('Chybí VITE_API_BASE – nastav v .env.');

      this.sending = true;
      try {
        const payload = {
          name: this.name.trim(),
          email: this.email.trim(),
          message: this.message.trim(),
          hp_field: this.hp_field,          // honeypot
          captchaToken: this.captchaToken   // Turnstile token
        };

        const res = await fetch(`${apiBase}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        });

        const data = await res.json();
        if (!res.ok || !data.ok) throw new Error(data?.message || 'Odeslání selhalo.');

        // úspěch – nic vizuálně nepřidávám; jen alert + reset
        alert('Děkujeme, zpráva byla odeslána.');
        this.name = this.email = this.message = '';
        if (window.turnstile && import.meta.env.VITE_TURNSTILE_SITEKEY) {
          window.turnstile.reset('#cf-turnstile');
          this.captchaToken = '';
        }
      } catch (e) {
        alert(e.message || 'Něco se pokazilo při odesílání.');
      } finally {
        this.sending = false;
      }
    }
  }
};
</script>

<style scoped>
.container { max-width: 1200px; }
</style>
