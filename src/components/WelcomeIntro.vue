<template>
  <div
    v-show="visible"
    class="intro-overlay gradient-bg"
    :class="{ 'force-hide': isHiding }"
  >

    <!-- контейнер с анимированными иконками -->
    <div class="intro-icons">
      <div
        class="intro-icon"
        v-for="(i, index) in 3"
        :key="index"
        :style="{ animationDelay: `${index * 0.3}s` }"
      >

        <!-- иконка с кодом (< >) -->
        <svg v-if="index === 0" viewBox="0 0 24 24" fill="none">
          <path d="M8 6L3 12L8 18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M16 6L21 12L16 18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>

        <!-- иконка со слоями/стеком -->
        <svg v-if="index === 1" viewBox="0 0 24 24" fill="none">
          <path d="M4 7L12 3L20 7L12 11L4 7Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"/>

          <path d="M4 12L12 16L20 12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"/>

          <path d="M4 16L12 20L20 16"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>

        <!-- иконка молнии -->
        <svg v-if="index === 2" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14H11L10 22L20 10H12Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>

      </div>
    </div>

    <!-- блок с текстом который появляется постепенно -->
    <div class="intro-text">
      <!-- первая строка с маленькими словами -->
      <div class="line small">
        <span
          v-for="(w, i) in smallWords"
          :key="i"
          :class="{ show: step >= i + 1 }"
        >
          {{ w }}
        </span>
      </div>

      <!-- вторая строка с большими словами -->
      <div class="line big">
        <span
          v-for="(w, i) in bigWords"
          :key="i"
          :class="{ show: step >= i + 4 }"
        >
          {{ w }}
        </span>
      </div>
    </div>

    <!-- чип с печатающимся текстом -->
    <div class="dev-chip" :class="{ show: typedText.length > 0 }">
      <div class="chip-inner">

        <!-- иконка статуса в чипе -->
        <div class="chip-icon">
          <div class="dot"></div>
        </div>

        <!-- текст который печатается -->
        <div class="chip-text">
          {{ typedText }}
          <span class="cursor">|</span>
        </div>

      </div>
    </div>

    <!-- полоса прогресса загрузки -->
    <div class="progress">
      <div class="progress-bar" ref="progressBar"></div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits } from "vue";

// генерируем событие когда интро закончилось
const emit = defineEmits(["finished"]);

// флаг видимости оверлея
const visible = ref(true);
// флаг для скрытия оверлея
const isHiding = ref(false);

// счётчик этапов появления текста
const step = ref(0);
// печатаемый текст
const typedText = ref("");
// ссылка на элемент полоски прогресса
const progressBar = ref(null);

// первая строка текста (маленькие слова)
const smallWords = ["WELCOME", "TO", "MY"];
// вторая строка текста (большие слова)
const bigWords = ["PORTFOLIO", "WEBSITE"];
// текст который будет печататься буква за буквой
const fullText = "devgreg.com";

onMounted(() => {

  // появление слов по очереди с задержкой
  [...smallWords, ...bigWords].forEach((_, i) => {
    setTimeout(() => {
      step.value = i + 1;
    }, 600 + i * 300);
  });

  // запуск полоски прогресса
  setTimeout(() => {
    if (progressBar.value) {
      progressBar.value.style.width = "20%";
    }
  }, 500);

  // печать текста и синхронизация прогресса
  setTimeout(() => {
    let i = 0;

    // плавный переход для полоски прогресса
    if (progressBar.value) {
      progressBar.value.style.transition = "width 0.15s linear";
    }

    // интервал для печати каждой буквы
    const interval = setInterval(() => {
      if (i < fullText.length) {

        // добавляем следующую букву
        typedText.value += fullText[i];
        i++;

        // вычисляем прогресс в зависимости от напечатанных букв
        const progress = 20 + (i / fullText.length) * 80;

        // обновляем полоску прогресса
        if (progressBar.value) {
          progressBar.value.style.width = progress + "%";
        }

      } else {
        // когда весь текст напечатан, останавливаем интервал
        clearInterval(interval);

        // устанавливаем полоску на 100%
        if (progressBar.value) {
          progressBar.value.style.width = "100%";
        }

        // небольшая задержка перед скрытием оверлея
        setTimeout(() => {
          isHiding.value = true;
        }, 500);

        // генерируем событие что интро закончилось
        setTimeout(() => {
          emit("finished");
        }, 3000);
      }
    }, 90);

  }, 2000);

});
</script>