import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// To disable you are running in develoment mode in the console
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
