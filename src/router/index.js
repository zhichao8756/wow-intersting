import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import CarMotion from '@/views/CarMotion.vue'
import WaveMenu from '@/views/WaveMenu.vue'
import SvgMenu from '@/views/SvgMenu.vue'

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
    },
    {
      path: '/svgMenu',
      name: 'svgMenu',
      component: SvgMenu
    }
  ]
})

export default Router
