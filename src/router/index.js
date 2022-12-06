import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import CarMotion from '@/views/CarMotion.vue'
import WaveMenu from '@/views/WaveMenu.vue'

const Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/carMotion',
      name: 'carMotion',
      component: CarMotion
    },
    {
      path: '/waveMenu',
      name: 'waveMenu',
      component: WaveMenu
    }
  ]
})

export default Router
