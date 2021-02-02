import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    meta: { transitionName: 'slide' },
    component: Home,
  },
  {
    path: '/project/:id/:title',
    name: 'project',
    meta: { transitionName: 'opacity' },
    component: () => import('../components/Project.vue'),
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
  {
    path: '/playground',
    name: 'Playground',
    meta: { transitionName: 'opacity' },
    component: () => import('../components/Playground.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
