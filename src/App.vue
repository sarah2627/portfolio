<template>
  <div id="app">
    <CursorAnimation></CursorAnimation>
    <NavBar></NavBar>
    <transition :name="transitionName" mode="out-in">
        <router-view></router-view>
    </transition>
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
  components: {
    NavBar,
    CursorAnimation,
    Footer,
  },
};
</script>
