<template>
  <!-- главная секция с героем и анимациями -->
  <HeroSection :showSite="props.showSite" />

  <!-- секция с информацией обо мне -->
  <About />
  <!-- секция с портфолио и проектами -->
  <PortfolioGallery />
  <!-- секция с формой контактов -->
  <ContactForm />
</template>

<script setup>
// импортируем все основные секции страницы
import HeroSection from '../components/HeroSection.vue'
import About from '../components/About.vue'
import PortfolioGallery from '../components/PortfolioGallery.vue'
import ContactForm from '../components/ContactForm.vue'

// получаем пропс showSite из родительского компонента
const props = defineProps({
  showSite: Boolean // флаг что интро закончилось и сайт виден
})
</script>