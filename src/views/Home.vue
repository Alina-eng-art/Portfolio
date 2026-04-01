<template>
  <!-- Hero -->
  <HeroSection />


  <!-- Portfolio / Projects -->
  <PortfolioGallery />

  <!-- About -->
  <About />
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import PortfolioGallery from '../components/PortfolioGallery.vue'
import About from '../components/About.vue'
</script>

<style scoped>
/* Убираем обертку home */
</style>
