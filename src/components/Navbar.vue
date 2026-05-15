<template>
  <header class="navbar" :class="{ show: isVisible }">
    <div class="nav-container">

      <!-- логотип с иконкой -->
      <div class="logo">
         <img src="/logo.png" alt="logo" class="logo-icon" />
         <span>Alina.dev</span>
      </div>

      <!-- навигационные ссылки -->
<nav :class="['nav-links', { open: isOpen }]">
  <router-link to="/">{{ t().nav.home }}</router-link>
  <router-link to="/about">{{ t().nav.about }}</router-link>
  <router-link to="/portfolio">{{ t().nav.projects }}</router-link>
  <router-link to="/contact">{{ t().nav.contact }}</router-link>
</nav>
      
      <!-- переключатель языков -->
      <div class="lang-switch">
        <button 
          :class="{ active: lang === 'en' }"
          @click="setLang('en')"
        >
          EN
        </button>

        <button 
          :class="{ active: lang === 'ua' }"
          @click="setLang('ua')"
        >
          UA
        </button>
      </div>

      <!-- кнопка меню для мобильных устройств -->
      <div class="burger" @click="toggleMenu">
        ☰
      </div>

    </div>
  </header>
</template>

<script>
import { lang, setLang, t } from '../i18n'

export default {
  name: "Navbar",

  data() {
    return {
      isOpen: false,
      lang,
      t,
      isVisible: false
    }
  },

  mounted() {
    setTimeout(() => {
      this.isVisible = true
    }, 100)
  },

  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
    closeMenu() {
      this.isOpen = false
    },
    setLang(l) {
      setLang(l)
    },
    scrollToSection(id) {
      this.closeMenu()
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>


<style scoped>

/* стили основного хедера/навбара */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px; 
  z-index: 1000;

  background: rgba(15, 32, 39, 0.6);
  backdrop-filter: blur(12px);

  border-bottom: 1px solid rgba(255,255,255,0.1);

  /* начальное состояние - хедер сверху экрана */
  transform: translateY(-100px);
  opacity: 0;

  /* плавный переход при появлении */
  transition: 
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.6s ease;
}

/* хедер видно на странице */
.navbar.show {
  transform: translateY(0);
  opacity: 1;
}

/* контейнер с содержимым навбара */
.nav-container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;

  padding: 0 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

/* стили логотипа */
.logo {
  position: relative;
  display: flex;
  align-items: center;

  font-size: 22px;
  font-weight: 700;
  color: #fff;

  padding-left: 60px;
}

/* иконка логотипа */
.logo-icon {
  position: absolute;
  left: 0;
  top: 58%;

  transform: translateY(-50%) scale(1.6);

  height: 40px;
  width: auto;

  object-fit: contain;

  flex-shrink: 0;
}

/* контейнер навигационных ссылок */
.nav-links {
  display: flex;
  gap: 30px;
}

/* стили навигационных ссылок */
.nav-links a {
  text-decoration: none;
  color: #cbd5e1;
  font-size: 14px;
  position: relative;
  transition: 0.3s;
}

/* эффект при наведении на ссылку */
.nav-links a:hover {
  color: #4facfe;
}

/* линия под ссылкой при наведении */
.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 0%;
  height: 2px;
  background: linear-gradient(90deg, #4facfe, #00f2fe);
  transition: 0.3s;
}

/* линия появляется при наведении */
.nav-links a:hover::after {
  width: 100%;
}

/* кнопка бургера для мобильных */
.burger {
  display: none;
  font-size: 26px;
  color: white;
  cursor: pointer;
}

/* адаптивные стили для мобильных устройств */
@media (max-width: 768px) {

  /* показываем кнопку бургера */
  .burger {
    display: block;
  }

  /* навигация скрыта и позиционируется абсолютно */
  .nav-links {
    position: absolute;
    top: 60px;
    right: 0;

    background: rgba(15, 32, 39, 0.95);
    backdrop-filter: blur(10px);

    flex-direction: column;
    width: 200px;
    padding: 20px;
    gap: 15px;

    transform: translateX(100%);
    transition: 0.3s;
  }

  /* навигация видна когда меню открыто */
  .nav-links.open {
    transform: translateX(0);
  }

  /* логотип на мобильных */
  .logo {
    left: -60px;
    align-items: center;
  }

  /* кнопка бургера отступ */
  .burger {
    margin-right: -45px;
  }
}

</style>