import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// window.onload = () => {
//   setTimeout(() => {
//     const card = document.querySelectorAll('.card');
//     for (let i = 0; i < card.length; i += 1) {
//       card[i].style.opacity = '1';
//     }
//   }, 10);
// };

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
