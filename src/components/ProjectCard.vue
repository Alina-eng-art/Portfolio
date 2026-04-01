<template>
  <div class="project-card" @click="openDetails">
    
    <h3 class="project-card-title">{{ title }}</h3>
    <p class="project-card-text">{{ description }}</p>
    <p class="project-tech">{{ tech }}</p>

    <img 
      v-if="image" 
      :src="image" 
      alt="project image" 
      class="project-card-image" 
    />

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

const openDetails = () => {
  if (props.link) {
    window.open(props.link, '_blank')
  }
}

const openGithub = () => {
  if (props.github) {
    window.open(props.github, '_blank')
  }
}
</script>