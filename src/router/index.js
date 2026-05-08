// импортируем функции для создания маршрутизатора
import { createRouter, createWebHistory } from 'vue-router'
// импортируем главный компонент
import Home from '../views/Home.vue'

// массив с маршрутами приложения
const routes = [
  {
    // корневой путь перенаправляется на /home
    path: '/',
    redirect: '/home'
  },
  {
    // маршрут для главной страницы
    path: '/home',
    component: Home
  }
]

// создаём маршрутизатор с историей браузера
const router = createRouter({
  history: createWebHistory(),
  routes
})

// экспортируем маршрутизатор для использования в приложении
export default router