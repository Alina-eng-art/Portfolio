<template>
<section id="home" class="hero gradient-bg" :class="{ show: isVisible }">

  <div class="hero-container">

    <!-- левая часть с текстом и кнопками -->
    <div class="hero-content">

      <!-- главный заголовок с тремя строками -->
      <h1>
        <span class="title-line left">ALINA</span><br>
        <span class="title-line right">{{ t().hero.title1 }}</span><br>
        <span class="title-line left">{{ t().hero.title2 }}</span>
      </h1>

      <!-- печатающийся текст с навыками -->
      <p class="subtitle fade-in">{{ typedText }}</p>
      <!-- описание -->
      <p class="description fade-in">{{ t().hero.description }}</p>

      <!-- кнопки для перехода к проектам и контактам -->
      <div class="hero-buttons fade-in">
        <!-- кнопка для перехода к портфолио -->
        <button class="hero-btn" @click="scrollToProjects">
          {{ t().hero.projects }}
        </button>

        <!-- кнопка для перехода к контактам -->
        <button class="hero-btnn" @click="scrollToContact">
          {{ t().hero.contact }}
        </button>
      </div>

      <!-- статус доступности -->
      <div class="status fade-in">
        <span class="dot"></span>
        {{ t().hero.status }}
      </div>

      <!-- стек технологий -->
      <div class="tech-stack fade-in">
        <span>Vue</span>
        <span>JavaScript</span>
        <span>CSS</span>
        <span>UI/UX</span>
      </div>

    </div>

    <!-- правая часть с кодом и мини проектами -->
    <div class="hero-image">

      <!-- карточка с кодом основной информации -->
      <div class="code-card main" :class="{ show: cardsVisible[0] }">
        <code>
const developer = {
  name: "Alina",
  role: "Frontend Developer",
  skills: ["Vue", "JS", "CSS"]
}
        </code>
      </div>

      <!-- карточка с функцией открытия проекта -->
      <div class="code-card card2" :class="{ show: cardsVisible[1] }">
        <code>
function openProject(link) {
  window.open(link, "_blank")
}
        </code>
      </div>

      <!-- карточка с vue компонентом -->
      <div class="code-card card3" :class="{ show: cardsVisible[2] }">
        <code>
&lt;ProjectCard v-for="p in projects"/&gt;
        </code>
      </div>

      <!-- карточка про анимации -->
      <div class="code-card card1" :class="{ show: cardsVisible[3] }">
        <code>
const ui = "smooth animations"
        </code>
      </div>

      <!-- карточка про производительность -->
      <div class="code-card card4" :class="{ show: cardsVisible[4] }">
        <code>
.performance = "fast"
        </code>
      </div>

      <!-- карточка про чистоту кода -->
      <div class="code-card card5" :class="{ show: cardsVisible[5] }">
        <code>
.cleanCode = true
        </code>
      </div>

      <!-- блок с мини проектами -->
      <div class="project-mini">
        <!-- ссылка на проект magnetic glow orb -->
        <a
          href="https://alina-eng-art.github.io/Magnetic-Glow-Orb/"
          target="_blank"
          class="mini-card"
          :class="{ show: miniVisible[0] }"
        >
          <h4>Magnetic Glow Orb</h4>
          <p>JS • CSS • UI</p>
          <span>View →</span>
        </a>

        <!-- ссылка на проект калькулятор -->
        <a
          href="https://alina-eng-art.github.io/Calculator/"
          target="_blank"
          class="mini-card"
          :class="{ show: miniVisible[1] }"
        >
          <h4>Calculator</h4>
          <p>JS • Logic</p>
          <span>View →</span>
        </a>

        <!-- ссылка на проект block blast игра -->
        <a
          href="https://alina-eng-art.github.io/Block-Blast2/"
          target="_blank"
          class="mini-card"
          :class="{ show: miniVisible[2] }"
        >
          <h4>Block Blast</h4>
          <p>Game • JS</p>
          <span>Play →</span>
        </a>
      </div>

    </div>

  </div>

</section>
</template>

<script setup>
import { ref, watch } from "vue";
import { t } from "../i18n.js";

// получаем пропс showSite из родительского компонента
const props = defineProps({
  showSite: Boolean
});

// переменная для отслеживания видимости основного контента
const isVisible = ref(false);
// массив для отслеживания видимости каждой карточки с кодом
const cardsVisible = ref([false, false, false, false, false, false]);

// массив для отслеживания видимости мини проектов
const miniVisible = ref([false, false, false]);

// переменная для хранения печатаемого текста
const typedText = ref("");

// фразы которые будут печататься по очереди
const phrases = [
  "Vue • JS • CSS",
  "frontend • UI • UX",
  "code • design • motion"
];

// индекс текущей фразы
let phraseIndex = 0;
// индекс текущего символа в фразе
let charIndex = 0;
// флаг для отслеживания удаления текста
let isDeleting = false;

// функция для эффекта печатания текста
const typeEffect = () => {
  const current = phrases[phraseIndex];

  // если не удаляем текст, добавляем символы
  if (!isDeleting) {
    typedText.value = current.substring(0, charIndex++);

    // если фраза полностью напечатана, начинаем удалять
    if (charIndex > current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    // удаляем текст по одному символу
    typedText.value = current.substring(0, charIndex--);

    // если текст полностью удален, переходим к следующей фразе
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  // задержка между символами при печати и удалении
  setTimeout(typeEffect, isDeleting ? 40 : 70);
};

// следим за изменением пропса showSite для запуска анимаций
watch(
  () => props.showSite,
  (val) => {
    if (val) {

      // показываем основной контент с задержкой
      setTimeout(() => {
        isVisible.value = true;
      }, 100);

      // показываем карточки с кодом поочередно
      cardsVisible.value.forEach((_, i) => {
        setTimeout(() => {
          cardsVisible.value[i] = true;
        }, 300 + i * 200);
      });

      // начинаем печать текста с задержкой
      setTimeout(() => {
        typeEffect();
      }, 800);

      // показываем мини проекты поочередно
      setTimeout(() => {
        miniVisible.value.forEach((_, i) => {
          setTimeout(() => {
            miniVisible.value[i] = true;
          }, i * 250);
        });
      }, 1200);

    }
  },
  { immediate: true }
);

// функция для гладкой прокрутки к портфолио
const scrollToProjects = () => {
  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
}

// функция для гладкой прокрутки к контактам
const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>