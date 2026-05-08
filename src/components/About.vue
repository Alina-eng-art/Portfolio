<template>
  <section id="about" class="about gradient-bg">
    <div class="about-container">

      <!-- левая часть секции с текстом и навыками -->
      <div class="about-left reveal from-top-left">

        <div class="about-text reveal from-top-left">
          <!-- заголовок и описание -->
          <h2>{{ t().about.title }}</h2>
          <p class="about-subtitle">{{ t().about.subtitle }}</p>
          <p>{{ t().about.text }}</p>
        </div>

        <div class="skills-container reveal from-bottom-left">
          <h3>{{ t().about.skills }}</h3>

          <!-- блок с навыками frontend -->
          <div class="skill-block reveal from-bottom-left">
            <h4>{{ t().about.frontend }}</h4>

            <!-- полоса прогресса для html -->
            <div class="skill-bar">
              <span>HTML</span>
              <div class="bar"><div class="fill" style="width:90%"></div></div>
            </div>

            <!-- полоса прогресса для css -->
            <div class="skill-bar">
              <span>CSS</span>
              <div class="bar"><div class="fill" style="width:85%"></div></div>
            </div>

            <!-- полоса прогресса для javascript -->
            <div class="skill-bar">
              <span>JavaScript</span>
              <div class="bar"><div class="fill" style="width:75%"></div></div>
            </div>

            <!-- полоса прогресса для vue.js -->
            <div class="skill-bar">
              <span>Vue.js</span>
              <div class="bar"><div class="fill" style="width:70%"></div></div>
            </div>
          </div>

          <!-- блок с навыками инструментов -->
          <div class="skill-block reveal from-bottom-left">
            <h4>{{ t().about.tools }}</h4>

            <!-- полоса прогресса для git -->
            <div class="skill-bar">
              <span>Git</span>
              <div class="bar"><div class="fill" style="width:70%"></div></div>
            </div>

            <!-- полоса прогресса для figma -->
            <div class="skill-bar">
              <span>Figma</span>
              <div class="bar"><div class="fill" style="width:65%"></div></div>
            </div>

            <!-- полоса прогресса для vs code -->
            <div class="skill-bar">
              <span>VS Code</span>
              <div class="bar"><div class="fill" style="width:85%"></div></div>
            </div>
          </div>

          <!-- блок с мягкими навыками -->
          <div class="skill-block reveal from-bottom-left">
            <h4>{{ t().about.soft }}</h4>

            <!-- генерируем карточки мягких навыков из объекта перевода -->
            <div class="skills">
              <div 
                class="skill reveal from-bottom-left"
                v-for="skill in Object.values(t().about.softSkills)"
                :key="skill"
              >
                {{ skill }}
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- правая часть секции с фото и опытом -->
      <div class="about-right reveal from-top-right">

        <!-- фото профиля -->
        <img src="../assets/profile.jpg" alt="about" class="reveal from-top-right">

        <!-- контейнер с опытом работы -->
        <div class="exp-container reveal from-bottom-right">
          <h3>{{ t().about.experience }}</h3>

          <!-- карточки с описанием опыта -->
          <div class="exp-cards">
            <!-- первая карточка опыта -->
            <div class="exp-card reveal from-top-right">
              <h4>{{ t().about.exp1title }}</h4>
              <p>{{ t().about.exp1text }}</p>
            </div>

            <!-- вторая карточка опыта -->
            <div class="exp-card reveal from-bottom-right">
              <h4>{{ t().about.exp2title }}</h4>
              <p>{{ t().about.exp2text }}</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, nextTick, watch } from 'vue'
import { t, lang } from '../i18n'

// создаём observer для отслеживания видимости элементов на странице
const initObserver = () => {
  // выбираем все элементы с классом reveal
  const elements = document.querySelectorAll('.reveal')

  // создаём новый observer с функцией обратного вызова
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // если элемент в зоне видимости, добавляем класс show для анимации
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      }
    })
  }, {
    // запускаем анимацию когда 20% элемента видно на экране
    threshold: 0.2
  })

  // начинаем следить за каждым элементом
  elements.forEach(el => observer.observe(el))
}

// инициализируем observer когда компонент загружен
onMounted(() => {
  initObserver()
})

// при изменении языка пересоздаём observer для новых элементов
watch(lang, async () => {
  await nextTick()
  initObserver()
})
</script>