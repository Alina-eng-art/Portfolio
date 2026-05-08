<template>
  <footer class="footer">

    <div class="footer-content">

      <!-- логотип футера -->
      <div class="footer-logo">
        Alina.dev
      </div>

      <!-- навигационные ссылки -->
      <div class="footer-links">
        <a href="#home">{{ t().nav.home }}</a>
        <a href="#about">{{ t().nav.about }}</a>
        <a href="#portfolio">{{ t().nav.projects }}</a>
        <a href="#contact">{{ t().nav.contact }}</a>
      </div>

      <!-- ссылки на социальные сети -->
      <div class="footer-socials">
        <a href="https://github.com/Alina-eng-art" target="_blank">GitHub</a>
        <a href="https://t.me/alinaigrn" target="_blank">Telegram</a>
        <a href="https://instagram.com/alina.igrn" target="_blank">Instagram</a>
      </div>

    </div>

    <!-- информация об авторских правах внизу -->
    <div class="footer-bottom">
      {{ t().footer.rights }}
    </div>

  </footer>
</template>

<script setup>
// импортируем функцию для получения переводов
import { t } from "../i18n.js";
</script>


<style scoped>

/* стили основного контейнера футера */
.footer {
  padding: 40px 20px 20px;
  margin-top: 0;

  background: rgba(5, 15, 30, 0.9);
  backdrop-filter: blur(12px);

  border-top: 1px solid rgba(255,255,255,0.08);
  color: white;
}

/* контейнер с основным содержимым футера */
.footer-content {
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  flex-wrap: wrap;
}

/* стили логотипа */
.footer-logo {
  font-size: 20px;
  font-weight: 700;
  color: #00d9ff;

  text-shadow: 0 0 10px rgba(0, 217, 255, 0.6);
}

/* контейнер навигационных ссылок */
.footer-links {
  display: flex;
  gap: 25px;
}

/* стили навигационных ссылок */
.footer-links a {
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s;
}

/* эффект при наведении на навигационные ссылки */
.footer-links a:hover {
  color: #00d9ff;
}

/* контейнер социальных ссылок */
.footer-socials {
  display: flex;
  gap: 15px;
}

/* стили социальных ссылок */
.footer-socials a {
  color: rgba(255,255,255,0.6);
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s;
}

/* эффект при наведении на социальные ссылки */
.footer-socials a:hover {
  color: #00d9ff;
}

/* стили информации об авторских правах */
.footer-bottom {
  margin-top: 30px;
  margin-left: -140px;
  text-align: center;
  font-size: 13px;
  opacity: 0.5;
}

/* адаптивные стили для мобильных устройств */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
  .footer-bottom {
    margin-left: 0px;
  }
}

</style>