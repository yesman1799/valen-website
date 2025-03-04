import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ContactView from '@/views/ContactView.vue'
import ReferencesView from '@/views/ReferencesView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/services', name: 'Services', component: ServicesView },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/references', name: 'References', component: ReferencesView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
