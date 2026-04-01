<template>
  <Navbar />       <!-- единственный Navbar -->
  <router-view />  <!-- сюда подставляются страницы -->
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>
