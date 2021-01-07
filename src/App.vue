<template>
  <div id="app">
    <div :class="['test', {'g-cursor_click': clickCursor}]"> </div>
    <div :class="['g-cursor', { 'g-cursor_hover': hover }, {'g-cursor_hide': hideCursor}]">
      <div :style="cursorCircle" class="g-cursor__circle"></div>
      <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
    </div>
    <NavBar></NavBar>
    <transition name="fade" mode="out-in">
        <router-view/>
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

export default {
  name: 'app',
  data() {
    return {
      xChild: 0,
      yChild: 0,
      xParent: 0,
      yParent: 0,
      hover: false,
      hideCursor: true,
      clickCursor: false,
    };
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
  },
  mounted() {
    document.addEventListener('mousemove', this.moveCursor);
    // document.addEventListener('mouseleave', () => {
    //   this.hideCursor = true;
    // });
    document.addEventListener('mouseenter', () => {
      this.hideCursor = false;
    });
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
