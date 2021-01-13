<template>
  <div id="app">
    <div :class="['g-cursor', { 'g-cursor_hover': hover }]">
      <div :style="cursorCircle" class="g-cursor__circle"></div>
      <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
    </div>
    <NavBar></NavBar>
    <transition :name="transitionName"
                mode="out-in"
                v-on:enter="enter"
                v-on:leave="leave">
        <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<style>
  @import './style/reset.css';
  @import './style/style.css';
</style>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

const DEFAULT_TRANSITION = 'fade';

export default {
  name: 'app',
  data() {
    return {
      xChild: 0,
      yChild: 0,
      xParent: 0,
      yParent: 0,
      hover: false,
      transitionName: DEFAULT_TRANSITION,
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      const transitionName = to.meta.transitionName
            || from.meta.transitionName || DEFAULT_TRANSITION;
      this.transitionName = transitionName || DEFAULT_TRANSITION;
      next();
    });
  },
  computed: {
    cursorCircle() {
      return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`;
    },
    cursorPoint() {
      return `transform: translateX(${this.xChild - 3}px) translateY(${this.yChild - 3}px) translateZ(0) translate3d(0, 0, 0);`;
    },
  },
  methods: {
    moveCursor(e) {
      this.xChild = e.clientX;
      this.yChild = e.clientY;
      setTimeout(() => {
        this.xParent = e.clientX - 25;
        this.yParent = e.clientY - 25;
      }, 100);
    },
    enter(e, done) {
      console.log('enter');
      e.style.opacity = 1;
      e.style.animationDuration = '5s';
      done();
    },
    leave(e, done) {
      console.log('leave');
      // e.style.animationName = 'test';
      // e.style.opacity = 0;
      // e.style.animationDuration = '8s';
      done();
    },
  },
  mounted() {
    document.addEventListener('mousemove', this.moveCursor);
    document.querySelector('.about').addEventListener('click', () => {
      this.clickCursor = true;
    });
  },
  components: {
    NavBar,
    Footer,
  },
};
</script>
