import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { transitionName: 'slide' },
    component: Home,
  },
  {
    path: '/projet/:id/:title',
    name: 'projet',
    meta: { transitionName: 'fade' },
    component: () => import('../components/Projet.vue'),
  },
  {
    path: '/about',
    name: 'About',
    meta: { transitionName: 'slide' },
    component: () => import('../views/About.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    meta: { transitionName: 'slide' },
    component: () => import('../views/Contact.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
