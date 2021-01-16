<template>
  <div id="app">
    <CursorAnimation></CursorAnimation>
    <NavBar></NavBar>
    <transition :name="transitionName" mode="out-in">
        <router-view></router-view>
    </transition>
    <svg class="cross" xmlns="http://www.w3.org/2000/svg" ref="test" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
    <Footer></Footer>
  </div>
</template>

<style>
  @import './style/reset.css';
  @import './style/style.css';
  @import './style/navbar.css';
  @import './style/footer.css';
</style>

<script>
import NavBar from '@/components/NavBar.vue';
import CursorAnimation from '@/components/CursorAnimation.vue';
import Footer from '@/components/Footer.vue';

import gsapMixin from '@/mixins/gsapMixin';

const DEFAULT_TRANSITION = 'fade';

export default {
  name: 'app',
  data() {
    return {
      transitionName: DEFAULT_TRANSITION,
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;
      const changeColorApp = document.querySelector('#app');
      changeColorApp.style.background = 'white';
      if (transitionName === 'slide') {
        changeColorApp.style.background = '#ff534a';
        const toDepth = to.path.length;
        const fromDepth = from.path.length;
        transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      }
      if (from.meta.transitionName === 'fade') {
        transitionName = 'fade';
        changeColorApp.style.background = 'white';
      }
      this.transitionName = transitionName || DEFAULT_TRANSITION;
      next();
    });
  },
  mixins: [gsapMixin],
  components: {
    NavBar,
    CursorAnimation,
    Footer,
  },
};
</script>
