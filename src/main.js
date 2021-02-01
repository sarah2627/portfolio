import Vue from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App.vue';
import router from './router';
import store from './store';

// To disable you are running in develoment mode in the console
Vue.config.productionTip = false;

// Use eventBus for component communication
Vue.prototype.$eventBus = new Vue();

new Vue({
  router,
  store,
  created() {
    AOS.init();
  },
  render: (h) => h(App),
}).$mount('#app');
