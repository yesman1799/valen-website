import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ContactView from '@/views/ContactView.vue'
import ReferencesView from '@/views/ReferencesView.vue'
import EquipmentView from '@/views/EquipmentView.vue';
import ReferenceDetailView from '@/views/ReferenceDetailView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/services', name: 'Services', component: ServicesView },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/references', name: 'References', component: ReferencesView },
  { path: '/equipment', name: 'Equipment', component: EquipmentView },
  { path: '/reference/:id', name: 'ReferenceDetail', component: ReferenceDetailView }, // <-- přidaná linka
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
