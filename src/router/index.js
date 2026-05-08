// импортируем функции для создания маршрутизатора
import { createRouter, createWebHashHistory } from 'vue-router'

// импортируем главный компонент
import Home from '../views/Home.vue'

// массив маршрутов
const routes = [
  {
    path: '/',
    component: Home
  }
]

// создаём маршрутизатор
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// экспортируем маршрутизатор
export default router