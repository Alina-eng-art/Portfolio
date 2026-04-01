import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../components/About.vue'
import Projects from '../components/PortfolioGallery.vue'
import Contact from '../components/ContactForm.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHashHistory(), // 👈 ВАЖНО
  routes
})

export default router