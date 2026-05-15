<template>

  <section id="home">
    <HeroSection :showSite="props.showSite" />
  </section>

  <section id="about">
    <About />
  </section>

  <section id="portfolio">
    <PortfolioGallery />
  </section>

  <section id="contact">
    <ContactForm />
  </section>

</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import About from '../components/About.vue'
import PortfolioGallery from '../components/PortfolioGallery.vue'
import ContactForm from '../components/ContactForm.vue'

const props = defineProps({
  showSite: Boolean
})
</script>