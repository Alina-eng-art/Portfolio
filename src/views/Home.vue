<template>
  <section class="home">
    <!-- НЕ ВСТАВЛЯЕМ Navbar или Header здесь -->
    <HeroSection />
    <PortfolioGallery />
  </section>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import PortfolioGallery from '../components/PortfolioGallery.vue'
</script>

<style scoped>
.home {
  padding: 0;
}
</style>
