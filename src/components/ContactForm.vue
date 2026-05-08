<template>
  <section id="contact" class="c-contact gradient-bg">

    <!-- заголовок с двумя словами, второе слово выделено -->
    <h2 class="c-title">
      {{ t().contact.title.split(' ')[0] }}
      <span>{{ t().contact.title.split(' ')[1] }}</span>
    </h2>

    <!-- подзаголовок секции -->
    <p class="c-sub">
      {{ t().contact.subtitle }}
    </p>

    <div class="c-wrapper">

      <!-- левая часть с контактной информацией -->
      <div class="c-left c-reveal c-from-left">

        <h3>{{ t().contact.leftTitle }}</h3>

        <!-- описание левой части -->
        <p class="c-desc">
          {{ t().contact.leftText }}
        </p>

        <!-- блок с контактной информацией -->
        <div class="c-info">

          <!-- элемент с email -->
          <div class="c-info-item">
            <!-- иконка email -->
            <div class="c-info-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 6h18v12H3z" fill="none" stroke="currentColor" stroke-width="1.5"/>
                <path d="M3 6l9 7 9-7" fill="none" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </div>

            <!-- текст с email адресом -->
            <div class="c-info-text">
              <span class="c-label">{{ t().contact.emailLabel }}</span>
              <p>martynovskaaalina93@gmail.com</p>
            </div>
          </div>

          <!-- элемент с местоположением -->
          <div class="c-info-item">
            <!-- иконка локации -->
            <div class="c-info-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 21s-6-5.5-6-10a6 6 0 1 1 12 0c0 4.5-6 10-6 10z"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"/>
                <circle cx="12" cy="11" r="2.5" fill="currentColor"/>
              </svg>
            </div>

            <!-- текст с городом -->
            <div class="c-info-text">
              <span class="c-label">{{ t().contact.locationLabel }}</span>
              <p>{{ t().contact.city }}</p>
            </div>
          </div>

        </div>

        <!-- блок с социальными сетями -->
        <div class="c-socials">

          <!-- ссылка на github -->
          <a href="https://github.com/Alina-eng-art" target="_blank">
            <svg viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M12 .5A12 12 0 0 0 0 12.7c0 5.5 3.4 10.2 8.2 11.8.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.6 2.5 2.6 1.8.1-.7.4-1.2.7-1.5-2.7-.3-5.6-1.4-5.6-6.3 0-1.4.5-2.5 1.2-3.4-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.4 1.3a11.7 11.7 0 0 1 6.2 0c2.4-1.6 3.4-1.3 3.4-1.3.6 1.6.2 2.9.1 3.2.8.9 1.2 2 1.2 3.4 0 4.9-2.9 6-5.6 6.3.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12.2 12.2 0 0 0 24 12.7 12 12 0 0 0 12 .5z"/>
            </svg>
          </a>

          <!-- ссылка на telegram -->
          <a href="https://t.me/alinaigrn" target="_blank">
            <svg viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M21.9 2.3L2.6 9.6c-1.3.5-1.3 1.2-.2 1.5l4.9 1.5 11.3-7.1c.5-.3 1-.1.6.3l-9.1 8.2-.3 4.9c.4 0 .6-.2.9-.4l2.1-2 4.4 3.2c.8.4 1.3.2 1.5-.7l3.5-16.3c.3-1.1-.4-1.6-1.3-1.2z"/>
            </svg>
          </a>

          <!-- ссылка на linkedin -->
          <a href="https://www.linkedin.com/in/alinaigrn/" target="_blank">
            <svg viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M4.98 3.5C4.98 4.9 3.87 6 2.5 6S0 4.9 0 3.5 1.11 1 2.5 1s2.48 1.1 2.48 2.5zM.2 8h4.6v14H.2V8zm7.6 0h4.4v1.9h.1c.6-1.1 2-2.3 4.2-2.3 4.5 0 5.3 3 5.3 6.9V22h-4.6v-6.6c0-1.6 0-3.7-2.3-3.7s-2.6 1.8-2.6 3.6V22H7.8V8z"/>
            </svg>
          </a>

          <!-- ссылка на instagram -->
          <a href="https://instagram.com/alina.igrn" target="_blank">
            <svg viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zM18 6.3a1.2 1.2 0 1 0 1.2 1.2A1.2 1.2 0 0 0 18 6.3z"/>
            </svg>
          </a>

        </div>

        <!-- блок со статусом доступности -->
        <div class="c-available-blue">
          <!-- строка со статусом и точкой -->
          <div class="c-available-line">
            <span class="c-dot-blue"></span>
            {{ t().contact.available }}
          </div>

          <!-- описание доступности -->
          <p>
            {{ t().contact.availableText }}
          </p>
        </div>

      </div>

      <!-- правая часть с формой -->
      <div class="c-right c-reveal c-from-right">

        <!-- форма обратной связи -->
        <form class="c-form" @submit.prevent="handleSubmit">

          <!-- поле для имени -->
          <input 
            type="text" 
            :placeholder="t().contact.name" 
            v-model="name" 
            required
          >

          <!-- поле для email -->
          <input 
            type="email" 
            :placeholder="t().contact.email" 
            v-model="email" 
            required
          >

          <!-- поле для темы -->
          <input 
            type="text" 
            :placeholder="t().contact.subject"
          >

          <!-- поле для сообщения -->
          <textarea 
            :placeholder="t().contact.message" 
            v-model="message"
          ></textarea>

          <!-- кнопка отправки -->
          <button type="submit">
            {{ t().contact.button }}
          </button>

        </form>

      </div>

    </div>

  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { t } from "../i18n.js";

// переменные для хранения данных формы
const name = ref('')
const email = ref('')
const message = ref('')

// функция обработки отправки формы
const handleSubmit = () => {
  alert(`Thanks ${name.value}! Message sent 🚀`)
}

// инициализация анимаций при загрузке компонента
onMounted(() => {

  // выбираем все элементы которые нужно анимировать
  const elements = document.querySelectorAll('.c-reveal, .c-title')

  // создаём observer для отслеживания видимости элементов
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // если элемент видно, добавляем класс с задержкой
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('c-show')
        }, 150)
      }
    })
  }, {
    threshold: 0.4,
    rootMargin: "0px 0px -100px 0px"
  })

  elements.forEach(el => observer.observe(el))

  // отдельный observer для заголовка с другими параметрами
  const title = document.querySelector('.c-title')

  if (title) {
    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // если заголовок видно, добавляем класс show
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('c-show')
          }, 100)
        }
      })
    }, {
      threshold: 0.5
    })

    titleObserver.observe(title)
  }

})
</script>