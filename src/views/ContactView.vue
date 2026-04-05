<template>
  <div class="container mx-auto p-6 sm:p-8 pt-32 sm:pt-40 md:pt-48">
    <h1 class="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-secondary tracking-wide">Kontakt</h1>
    
    <div class="bg-white shadow-xl rounded-lg p-4 sm:p-6 md:p-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
      <!-- Contact Information -->
      <div class="w-full md:w-1/2 text-center md:text-left">
        <h2 class="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">VALEN s.r.o.</h2>
        <p class="text-base sm:text-lg text-gray-700 mb-1 sm:mb-2">IČO: 28954149</p>
        <p class="text-base sm:text-lg text-gray-700 mb-1 sm:mb-2">DIČ: CZ28954149</p>
        <p class="text-sm font-semibold text-gray-500 mt-3 mb-1">Sídlo:</p>
        <p class="text-base sm:text-lg text-gray-700 mb-1 sm:mb-2">Valen s.r.o., Nad Prachandou 840</p>
        <p class="text-sm font-semibold text-gray-500 mt-3 mb-1">Provozovna:</p>
        <p class="text-base sm:text-lg text-gray-700 mb-1 sm:mb-2">Malá Hraštice 168</p>
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
    <div class="bg-gray-100 shadow-md rounded-lg p-4 sm:p-6 md:p-10 mt-8 sm:mt-10">
      <h2 class="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">Napište nám</h2>

      <!-- beze změny vzhledu -->
      <form @submit.prevent="sendEmail" class="flex flex-col space-y-3 sm:space-y-4">
        <input v-model="name" type="text" placeholder="Vaše jméno" class="p-2 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
        <input v-model="email" type="email" placeholder="Váš e-mail" class="p-2 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
        <textarea v-model="message" placeholder="Vaše zpráva" rows="4" class="p-2 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>

        <!-- HONEYPOT (skryté; nemění layout) -->
        <input v-model="hp_field" type="text" autocomplete="off" tabindex="-1" class="hidden" />

        <!-- Turnstile mount (skrytý; token generuje na pozadí) -->
        <div id="cf-turnstile" class="hidden"></div>

        <button type="submit" :disabled="sending" class="bg-secondary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-primary transition">
          {{ sending ? 'Odesílám…' : 'Odeslat zprávu' }}
        </button>
      </form>
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
