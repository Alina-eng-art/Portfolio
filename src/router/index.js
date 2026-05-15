import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../components/About.vue'
import PortfolioGallery from '../components/PortfolioGallery.vue'
import ContactForm from '../components/ContactForm.vue'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/about',
    component: About,
    name: 'about'
  },
  {
    path: '/portfolio',
    component: PortfolioGallery,
    name: 'portfolio'
  },
  {
    path: '/contact',
    component: ContactForm,
    name: 'contact'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router