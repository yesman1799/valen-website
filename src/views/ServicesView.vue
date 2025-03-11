<template>
  <div class="page-content">
    <div class="container mx-auto p-6">
      <h1 class="text-4xl font-bold text-center text-secondary mb-10">Naše Služby</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div class="bg-white shadow-lg rounded-lg p-6 border-l-4 border-primary">
          <h2 class="text-2xl font-semibold mb-4 text-textDark">Inženýrské sítě</h2>
          <ul class="list-disc list-inside text-textDark">
            <li>Výkop a pokládka kanalizace a Vodovodu (Komplet)</li>
          </ul>
        </div>
        
        <div class="bg-white shadow-lg rounded-lg p-6 border-l-4 border-secondary">
          <h2 class="text-2xl font-semibold mb-4 text-textDark">Rekonstrukce Ulic</h2>
          <ul class="list-disc list-inside text-textDark">
            <li>Obnova povrchu</li>
            <li>Pokládka zámkové dlažby, Obrubníků</li>
            <li>Realizace Asfaltů</li>
          </ul>
        </div>
        
        <div class="bg-white shadow-lg rounded-lg p-6 border-l-4 border-accent">
          <h2 class="text-2xl font-semibold mb-4 text-textDark">Bourací práce</h2>
          <ul class="list-disc list-inside text-textDark">
            <li>Demolice mostů</li>
            <li>Demolice rodinných a bytových domů</li>
          </ul>
        </div>
        
        <div class="bg-white shadow-lg rounded-lg p-6 border-l-4 border-primary">
          <h2 class="text-2xl font-semibold mb-4 text-textDark">Stavba Rodinného domu na klíč</h2>
          <ul class="list-disc list-inside text-textDark">
            <li>Hrubá stavba</li>
            <li>Tesařské práce</li>
            <li>Zednické práce</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "ServicesView",
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
