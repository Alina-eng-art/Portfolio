<template>
  <section id="portfolio" class="portfolio-section gradient-bg">

    <!-- заголовок портфолио -->
    <h2 class="reveal from-top-left">{{ t().portfolio.title }}</h2>

    <!-- подзаголовок портфолио -->
    <p class="portfolio-subtitle reveal from-top-right">
      {{ t().portfolio.subtitle }}
    </p>

    <!-- кнопки для переключения между табами -->
    <div class="tabs reveal from-top-left">
      <!-- кнопка для всех проектов -->
      <button 
        :class="{ active: activeFilter === 'All' }"
        @click="activeFilter = 'All'"
      >
        Projects
      </button>

      <!-- кнопка для сертификатов -->
      <button 
        :class="{ active: activeFilter === 'Certificates' }"
        @click="activeFilter = 'Certificates'"
      >
        Certificates
      </button>

      <!-- кнопка для технологий -->
      <button 
        :class="{ active: activeFilter === 'Tech' }"
        @click="activeFilter = 'Tech'"
      >
        Tech Stack
      </button>
    </div>

    <!-- сетка проектов -->
    <div v-show="activeFilter === 'All'" class="portfolio-grid">
      <ProjectCard
        v-for="(project, i) in projects"
        :key="project.title"
        v-bind="project"
        class="reveal"
        :class="getCorner(i)"
      />
    </div>

    <!-- сетка сертификатов -->
    <div v-show="activeFilter === 'Certificates'" class="certificates-grid">
      <div 
        class="cert-card reveal"
        v-for="(cert, i) in certificates"
        :key="cert.title"
        :class="getCorner(i)"
      >
        <!-- номер сертификата -->
        <div class="cert-number">{{ cert.id }}</div>

        <!-- информация сертификата -->
        <div class="cert-info">
          <h4>{{ cert.title }}</h4>
          <p>{{ cert.org }} • {{ cert.year }}</p>
        </div>
      </div>
    </div>

    <!-- вкладка со стеком технологий -->
    <div v-show="activeFilter === 'Tech'" class="tech-wrapper">

      <!-- секция frontend технологий -->
      <h4 class="stack-title reveal from-top-left">FRONT-END (CLIENT-SIDE)</h4>
      <div class="stack-grid">
        <!-- карточка html -->
        <div class="tech-card reveal from-bottom-left"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"><span>HTML</span></div>
        <!-- карточка css -->
        <div class="tech-card reveal from-bottom-left"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"><span>CSS</span></div>
        <!-- карточка javascript -->
        <div class="tech-card reveal from-bottom-left"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"><span>JavaScript</span></div>
        <!-- карточка vue -->
        <div class="tech-card reveal from-bottom-left"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"><span>Vue</span></div>
        <!-- карточка react -->
        <div class="tech-card reveal from-bottom-left"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"><span>React</span></div>
        <!-- карточка tailwind -->
        <div class="tech-card reveal from-bottom-left"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"><span>Tailwind</span></div>
        <!-- карточка vite -->
        <div class="tech-card reveal from-bottom-left"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg"><span>Vite</span></div>
      </div>

      <!-- секция backend технологий -->
      <h4 class="stack-title reveal from-top-right">BACK-END (SERVER-SIDE)</h4>
      <div class="stack-grid">
        <!-- карточка node.js -->
        <div class="tech-card reveal from-bottom-right"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"><span>Node.js</span></div>
        <!-- карточка express -->
        <div class="tech-card reveal from-bottom-right"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"><span>Express</span></div>
        <!-- карточка firebase -->
        <div class="tech-card reveal from-bottom-right"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"><span>Firebase</span></div>
      </div>

      <!-- секция баз данных -->
      <h4 class="stack-title reveal from-top-left">DATABASE LAYER</h4>
      <div class="stack-grid">
        <!-- карточка mongodb -->
        <div class="tech-card reveal from-bottom-left"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"><span>MongoDB</span></div>
        <!-- карточка postgresql -->
        <div class="tech-card reveal from-bottom-left"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"><span>PostgreSQL</span></div>
      </div>

      <!-- секция инструментов -->
      <h4 class="stack-title reveal from-top-right">TOOLS</h4>
      <div class="stack-grid">
        <!-- карточка git -->
        <div class="tech-card reveal from-bottom-right"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"><span>Git</span></div>
        <!-- карточка vs code -->
        <div class="tech-card reveal from-bottom-right"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"><span>VS Code</span></div>
        <!-- карточка figma -->
        <div class="tech-card reveal from-bottom-right"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"><span>Figma</span></div>
      </div>

    </div>

    <!-- блок с призывом к действию -->
    <div class="portfolio-cta reveal from-bottom-right">
      <p>{{ t().portfolio.cta }}</p>

      <!-- кнопка для открытия telegram -->
      <button class="hero-btn1" @click="openTelegram">
        {{ t().portfolio.button }}
      </button>
    </div>

  </section>
</template>


<script setup>
import { ref, computed, onMounted } from 'vue'
import { t } from '../i18n'
import ProjectCard from './ProjectCard.vue'

// импортируем изображения проектов
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'

// переменная для отслеживания активного таба
const activeFilter = ref('All')

// функция для открытия telegram с предзаполненным сообщением
const openTelegram = () => {
  const message = encodeURIComponent(
    "Hi Alina! I saw your portfolio and want to work with you 🚀"
  )
  window.open(`https://t.me/alinaigrn?text=${message}`, '_blank')
}

// массив с проектами портфолио
const projects = [
  {
    title: "🧠 Memory Game",
    description: "Find all pairs as fast as you can.",
    image: img1,
    tech: "Vue • JS • CSS",
    category: "Vue",
    link: "https://alina-eng-art.github.io/memory-game/",
    github: "https://github.com/Alina-eng-art/memory-game.git"
  },
  {
    title: "💻 UI Experience",
    description: "Interactive UI with smooth motion and clean design.",
    image: img2,
    tech: "JavaScript • GSAP • CSS",
    category: "JS",
    link: "https://alina-eng-art.github.io/UI-Experience/",
    github: "https://github.com/Alina-eng-art/UI-Experience.git"
  },
  {
    title: "☁️ Weather App",
    description: "Weather app with map and forecast",
    image: img3,
    tech: "React • API • Leaflet • Tailwind",
    category: "React",
    link: "https://alina-eng-art.github.io/Weather-app/",
    github: "https://github.com/Alina-eng-art/Weather-app.git"
  },
  {
    title: "🚗 Smart Vehicle UI",
    description: "Interactive car dashboard UI with animations.",
    image: img4,
    tech: "React • Vite • UI Animation • CSS",
    category: "React",
    link: "https://alina-eng-art.github.io/Smart-Vehicle-UI/",
    github: "https://github.com/Alina-eng-art/Smart-Vehicle-UI.git"
  },
  {
    title: "🎬 Movie App",
    description: "Movie Search App",
    image: img5,
    tech: "Vue • Vite • API • CSS",
    category: "Vue",
    link: "https://alina-eng-art.github.io/movie-app/",
    github: "https://github.com/Alina-eng-art/movie-app.git"
  },
  {
    title: "🐍 Snake Telegram Bot",
    description: "Гра в Telegram WebApp з рейтингом",
    image: img6,
    tech: "JS • Canvas • WebApp • Node.js • REST API",
    category: "Fullstack",
    link: "https://t.me/alina_rpg_bot",
    github: "https://github.com/Alina-eng-art/telegram-snake-game.git"
  }
]

// массив с сертификатами
const certificates = [
  {
    id: "01",
    title: "Web Development & Mobile App Design",
    org: "ActInLearning, Inc.",
    year: "2024"
  },
  {
    id: "02",
    title: "Google UX Design Professional Certificate",
    org: "Google",
    year: "2024"
  },
  {
    id: "03",
    title: "Android Development",
    org: "Coursera",
    year: "2024"
  },
  {
    id: "04",
    title: "Front-End Developer Professional Certificate",
    org: "Coursera",
    year: "2024"
  },
  {
    id: "05",
    title: "Back-End Developer Professional Certificate",
    org: "Coursera",
    year: "2024"
  }
]

// вычисляемое свойство для фильтрации проектов по категориям
const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects
  } else {
    return projects.filter(
      project => project.category === activeFilter.value
    )
  }
})

// функция для возврата класса угла для каждого элемента
const getCorner = (i) => {
  const corners = [
    'from-top-left',
    'from-top-right',
    'from-bottom-left',
    'from-bottom-right'
  ]
  return corners[i % 4]
}

// инициализация observer для анимаций при прокрутке
onMounted(() => {
  // выбираем все элементы с классом reveal
  const elements = document.querySelectorAll('.reveal')

  // создаём observer для отслеживания видимости элементов
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // если элемент в зоне видимости, добавляем класс show
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      }
    })
  }, {
    threshold: 0.15 // триггер при 15% видимости элемента
  })

  // начинаем следить за каждым элементом
  elements.forEach(el => observer.observe(el))
})

</script>