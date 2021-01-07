import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { transition: 'fade' },
    component: Home,
  },
  {
    path: '/projet/:title',
    name: 'projet',
    meta: { transition: 'fade' },
    component: () => import('../components/Projet.vue'),
  },
  {
    path: '/about',
    name: 'About',
    meta: { transition: 'fade' },
    component: () => import('../views/About.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    meta: { transition: 'fade' },
    component: () => import('../views/Contact.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
