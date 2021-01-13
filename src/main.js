import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import gsap from '../node_modules/gsap';
import ScrollTrigger from '../node_modules/gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

Vue.config.productionTip = false;

Vue.mixin({
  created() {
    this.gsap = gsap;
  },
});

new Vue({
  router,
  store,
  gsap,
  render: (h) => h(App),
}).$mount('#app');
