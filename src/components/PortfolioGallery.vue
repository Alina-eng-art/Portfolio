<template>
  <section id="portfolio" class="portfolio-section">
    
    <h2>Мої роботи</h2>

    <!-- 🔥 НОВОЕ: описание -->
    <p class="portfolio-subtitle">
      Ось деякі з моїх останніх проєктів. Натисніть, щоб дізнатись більше
    </p>

    <div class="portfolio-grid">
      <ProjectCard
        title="Landing Page"
        description="Сучасний landing page на Vue"
        image="https://picsum.photos/401/200"
        tech="Vue • CSS • Vite"
        link="https://alina-eng-art.github.io/404-Junior-Found/"
        github="https://github.com/your-repo"
      />

      <ProjectCard
        title="Portfolio"
        description="Персональний сайт портфоліо"
        image="https://picsum.photos/401/200"
        tech="Vue • Router • UI"
        link="https://alina-eng-art.github.io/Portfolio/"
        github="https://github.com/your-repo"
      />

      <ProjectCard
        title="Shop UI"
        description="Інтерфейс інтернет-магазину"
        image="https://picsum.photos/402/200"
        tech="Vue • API • CSS"
        link="https://alina-eng-art.github.io/Calculator/"
        github="https://github.com/your-repo"
      />

      <ProjectCard
        title="Dashboard"
        description="Адмін панель"
        image="https://picsum.photos/403/200"
        tech="Vue • Charts • UI"
        link="https://example.com"
        github="https://github.com/your-repo"
      />
    </div>

    <!-- 🔥 НОВОЕ: CTA -->
    <div class="portfolio-cta">
      <p>Хочете такий сайт? Зв’яжіться зі мною</p>
      <button class="hero-btn">Написати</button>
    </div>
    
  </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'
</script>