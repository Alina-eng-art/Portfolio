<template>
  <div class="project-card" @click="openProject">
    
    <h3 class="project-card-title">{{ title }}</h3>

    <p class="project-card-text">{{ description }}</p>

    <!-- 🔥 технологии -->
    <p class="project-tech">{{ tech }}</p>

    <img 
      v-if="image" 
      :src="image" 
      alt="project image" 
      class="project-card-image" 
    />

    <!-- 🔥 кнопки -->
    <div class="project-buttons">
      <button @click.stop="openDetails">Детальніше</button>
      <button @click.stop="openGithub">GitHub</button>
    </div>

  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  image: String,
  tech: String,
  link: String,
  github: String
})

/* 🔥 клик по всей карточке → открывает сайт проекта */
const openProject = () => {
  if (props.link) {
    window.open(props.link, '_blank')
  } else {
    alert('Ссылка на проект не указана')
  }
}

/* 🔥 GitHub */
const openGithub = () => {
  if (props.github) {
    window.open(props.github, '_blank')
  } else {
    alert('GitHub не указан')
  }
}

/* 🔥 Детальніше (сейчас можно открыть тот же проект или сделать будущую страницу) */
const openDetails = () => {
  if (props.link) {
    // можно открыть отдельную страницу проекта
    window.open(props.link, '_blank')
  } else {
    alert('Деталі проекту будуть додані 🚀')
  }
}
</script>