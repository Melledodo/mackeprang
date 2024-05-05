import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonligShopper from '@/PersonligShopper.vue'
import TirsdagsKlumme from '@/TirsdagsKlumme.vue'
import OmMig from '@/OmMig.vue'
import BookHer from '@/BookHer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/personligshopper',
      name: 'personligshopper',
      component: PersonligShopper
    },
    {
      path: '/tirsdagsklumme',
      name: 'tirsdagsklumme',
      component: TirsdagsKlumme
    },
    {
      path: '/ommig',
      name: 'ommig',
      component: OmMig 
    },
    {
      path: '/bookher',
      name: 'bookher',
      component: BookHer
    }
  ]
})

export default router
