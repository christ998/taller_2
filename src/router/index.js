import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TopRated from '../views/TopRated'
import FilmParticular from '../views/FilmParticular'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/toprated',
    name: 'TopRated',
    component: TopRated
  },
  {
    path: '/:id',
    component: FilmParticular,
    name: 'FilmParticular',
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
