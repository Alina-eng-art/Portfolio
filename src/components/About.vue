<template>
  <section id="about" class="about">
    <div class="about-container">
      <!-- Левый блок: текст + навыки + досвід -->
      <div class="about-left">
        <div class="about-text">
          <h2>Про мене</h2>
          <p>
            Я фронтенд-розробниця, люблю створювати сучасні вебсайти з приємним дизайном та анімаціями.
          </p>
        </div>

        <div class="about-bottom">
          <!-- Навыки -->
          <div class="skills-container">
            <h3>Навички</h3>
            <div class="skills">
              <div class="skill">HTML</div>
              <div class="skill">CSS</div>
              <div class="skill">JavaScript</div>
              <div class="skill">Vue.js</div>
              <div class="skill">Git</div>
            </div>
          </div>

          <!-- Досвід -->
          <div class="exp-container">
            <h3>Досвід</h3>
            <div class="exp-cards">
              <div class="exp-card">
                <h4>Фронтенд розробка</h4>
                <p>Створення адаптивних вебсайтів, інтерактивні UI та анімації.</p>
              </div>
              <div class="exp-card">
                <h4>Проектний менеджмент</h4>
                <p>Координація команд та планування розробки вебпроєктів.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Правый блок: Фото -->
      <div class="about-right">
        <img src="../assets/profile.jpg" alt="Про мене">
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
