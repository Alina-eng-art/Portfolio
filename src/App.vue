<template>

  <!-- интро экран с приветствием -->
  <WelcomeIntro @finished="showSite = true" />

  <!-- навигационная панель показывается после интро -->
  <Navbar v-if="showSite" />

  <!-- основной контент сайта -->
  <div :class="{ 'site-visible': showSite }" class="site">

    <!-- маршруты приложения (домашняя страница и т.д.) -->
    <router-view :showSite="showSite" />

    <!-- футер в конце сайта -->
    <Footer />

  </div>

</template>

<script setup>
import { ref } from "vue";

// импортируем компоненты
import Navbar from './components/Navbar.vue'
import WelcomeIntro from './components/WelcomeIntro.vue'
import Footer from './components/Footer.vue'

// переменная для отслеживания видимости сайта после интро
const showSite = ref(false);
</script>

<style>

/* основной контейнер с минимальной высотой экрана */
.site {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* контент растягивается чтобы займать доступное место */
.site > *:not(footer) {
  flex: 1;
}

/* начальное состояние - сайт невидим */
.site {
  opacity: 0;
  transition: opacity 1.2s ease;
}

/* сайт становится видим после интро */
.site-visible {
  opacity: 1;
}

</style>