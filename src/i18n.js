import { ref } from 'vue'

// переменная для текущего языка, получаем из localStorage или используем английский по умолчанию
export const lang = ref(localStorage.getItem('lang') || 'en')

// объект со всеми переводами для двух языков
export const translations = {
  en: {

    /* ================= ГЕРОЙ СЕКЦИЯ ================= */
    hero: {
      title1: "FRONTEND",
      title2: "DEVELOPER",
      subtitle: "modern • creative • responsive",

      description: "Hi! I'm Alina, a front-end developer who combines code with design to create modern, interactive, and visually appealing websites.",

      projects: "View Projects ↓",
      contact: "Contact",
      status: "Available for freelance"
    },

    /* ================= О СЕБЕ ================= */
    about: {
      title: "About me",
      subtitle: "Frontend Developer • UI/UX lover",

      text: "I am a front-end developer who creates modern and intuitive websites with a focus on design and user experience. I enjoy working with animations, details, and interface logic. In addition to websites, I create interactive projects and browser games. I am constantly improving my skills and strive to create stylish, fast, and high-quality projects.",

      skills: "Skills",
      frontend: "Frontend",
      tools: "Tools",
      soft: "Soft Skills",

      softSkills: {
        communication: "Communication",
        teamwork: "Team work",
        creativity: "Creativity"
      },

      experience: "Experience",

      exp1title: "Frontend development",
      exp1text: "Development of responsive websites, interactive interfaces and animations, as well as creation of browser games in JavaScript.",

      exp2title: "UI/UX Design",
      exp2text: "Creating UI/UX design: well-structured layout, intuitive navigation and modern visual style."
    },

    /* ================= ПОРТФОЛИО ================= */
    portfolio: {
      title: "My works",
      subtitle: "Here are some of my latest projects",

      filters: {
        projects: "Projects",
        certificates: "Certificates",
        tech: "Tech Stack"
      },

      details: "Details",
      cta: "Want a site like this? Contact me",
      button: "Write"
    },

    /* ================= КОНТАКТЫ ================= */
    contact: {
      title: "Contact Me",
      subtitle: "Have a project in mind or just want to say hi? My inbox is always open.",

      leftTitle: "Let's work together",
      leftText: "I'm always looking for exciting new projects. Whether you need a website, a web app, or just want to collaborate — feel free to reach out!",

      emailLabel: "Email",
      locationLabel: "Location",

      city: "Odesa, Ukraine",

      available: "Available for work",
      availableText: "Open to freelance projects, internships, or full-time opportunities.",

      name: "Your Name",
      email: "Email Address",
      subject: "Subject",
      message: "Tell me about your project...",

      button: "Send Message"
    },

    // информация футера
    footer: {
      rights: "© 2026 Alina Dev. All rights reserved."
    },

    // навигационные ссылки
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact"
    },

  },

  ua: {

    /* ================= ГЕРОЙ СЕКЦИЯ ================= */
    hero: {
      title1: "ФРОНТЕНД",
      title2: "РОЗРОБНИК",
      subtitle: "сучасний • креативний • адаптивний",

      description: "Привіт! Я Аліна — фронтенд-розробниця, яка поєднує код з дизайном для створення сучасних, інтерактивних та візуально привабливих вебсайтів.",

      projects: "Мої роботи ↓",
      contact: "Контакти",
      status: "Відкрита до фрилансу"
    },

    /* ================= О СЕБЕ ================= */
    about: {
      title: "Про мене",
      subtitle: "Фронтенд розробник • UI/UX дизайн",

      text: "Я фронтенд-розробниця, яка створює сучасні та інтуїтивні вебсайти з акцентом на дизайн і користувацький досвід. Мені подобається працювати з анімаціями, деталями та логікою інтерфейсів. Окрім сайтів, я створюю інтерактивні проєкти та браузерні ігри. Я постійно вдосконалюю свої навички та прагну створювати стильні, швидкі та якісні проєкти.",

      skills: "Навички",
      frontend: "Фронтенд",
      tools: "Інструменти",
      soft: "Софт скіли",

      softSkills: {
        communication: "Комунікація",
        teamwork: "Командна робота",
        creativity: "Креативність"
      },

      experience: "Досвід",

      exp1title: "Фронтенд розробка",
      exp1text: "Розробка адаптивних вебсайтів, інтерактивних інтерфейсів та анімацій, а також створення браузерних ігор на JavaScript.",

      exp2title: "UI/UX дизайн",
      exp2text: "Створення UI/UX дизайну: продумана структура, зручна навігація та сучасний вигляд сайтів."
    },

    /* ================= ПОРТФОЛИО ================= */
    portfolio: {
      title: "Мої роботи",
      subtitle: "Ось деякі з моїх останніх проєктів",

      filters: {
        projects: "Проєкти",
        certificates: "Сертифікати",
        tech: "Технологічний стек"
      },

      details: "Детальніше",
      cta: "Хочеш такий сайт? Напиши мені",
      button: "Написати"
    },

    /* ================= КОНТАКТЫ ================= */
    contact: {
      title: "Зв'язатися зі мною",
      subtitle: "Є ідея проєкту або просто хочеш привітатися? Моя пошта завжди відкрита.",

      leftTitle: "Давайте працювати разом",
      leftText: "Я завжди відкрита до нових цікавих проєктів. Якщо вам потрібен сайт, веб-додаток або просто хочете співпрацювати — напишіть мені!",

      emailLabel: "Пошта",
      locationLabel: "Локація",

      city: "Одеса, Україна",

      available: "Відкрита до роботи",
      availableText: "Готова до фрилансу, стажування або повної зайнятості.",

      name: "Ваше ім'я",
      email: "Email",
      subject: "Тема",
      message: "Розкажіть про свій проєкт...",

      button: "Надіслати"
    },

    // информация футера
    footer: {
      rights: "© 2026 Alina Dev. Всі права захищені."
    },

    // навигационные ссылки
    nav: {
      home: "Головна",
      about: "Про мене",
      projects: "Проєкти",
      contact: "Контакти"
    },

  }

}

// функция для получения переводов текущего языка
export const t = () => translations[lang.value]

// функция для смены языка и сохранения в localStorage
export const setLang = (l) => {
  lang.value = l
  localStorage.setItem('lang', l)
}