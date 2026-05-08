<template>
  <div class="portfolio-card">

    <!-- изображение проекта -->
    <img :src="image" alt="project" />

    <!-- заголовок проекта -->
    <h3>{{ title }}</h3>
    <!-- описание проекта -->
    <p>{{ description }}</p>
    <!-- используемые технологии -->
    <span class="tech">{{ tech }}</span>

    <!-- блок с кнопками для проекта -->
    <div class="buttons">
      <!-- кнопка для открытия полного проекта -->
      <a :href="link" target="_blank">
        <button class="details">
          {{ t().portfolio.details }}
        </button>
      </a>

      <!-- кнопка для открытия github репозитория -->
      <a :href="github" target="_blank">
        <button class="github">GitHub</button>
      </a>
    </div>

  </div>
</template>

<script setup>
// импортируем функцию для получения переводов
import { t } from '../i18n'

// определяем пропсы которые получает компонент
defineProps({
  title: String, // название проекта
  description: String, // описание проекта
  image: String, // путь к изображению проекта
  tech: String, // используемые технологии
  link: String, // ссылка на проект
  github: String // ссылка на github репозиторий
})
</script>