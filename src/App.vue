<template>
  <!-- Navbar всегда сверху -->
  <Navbar />

  <!-- Здесь подставляются страницы через маршруты -->
  <router-view />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>
