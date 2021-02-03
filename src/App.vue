<template>
  <div id="app">
    <div
      class="playground"
      @click="goPlayground"
      @mouseover="emitGlobalMouseOver()"
      @mouseleave="emitGlobalMouseLeave()">
      <button> <img src="@/assets/button-playground.svg"/> </button>
    </div>
    <CursorAnimation></CursorAnimation>
    <transition :name="transitionName" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>

<style>
  @import './style/reset.css';
  @import './style/style.css';
</style>

<script>
import CursorAnimation from '@/components/CursorAnimation.vue';

const DEFAULT_TRANSITION = 'opacity';

export default {
  name: 'app',
  components: {
    CursorAnimation,
  },
  data() {
    return {
      transitionName: DEFAULT_TRANSITION,
    };
  },
  created() {
    // allows you to define the direction of the transition: left or right
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;
      const changeColorApp = document.querySelector('#app');
      changeColorApp.style.background = 'white';

      // if the name of the transition is slide
      if (transitionName === 'slide') {
        changeColorApp.style.background = '#ff534a';
        const toDepth = to.path.length;
        const fromDepth = from.path.length;
        transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      }

      // if the name of the transition from which one comes (project page) is opacity
      if (from.meta.transitionName === 'opacity') {
        transitionName = 'opacity';
        changeColorApp.style.background = 'white';
      }
      this.transitionName = transitionName || DEFAULT_TRANSITION;
      next();
    });
  },
  methods: {
    // display or remove the playground (canvas)
    goPlayground() {
      const path = '/Playground';
      if (this.$route.path !== path) {
        this.$router.push(path);
      } else {
        this.$router.go(-1);
      }
    },
    // using the bus event to create animation on the cursor when we hover something
    // here we are only emitting that cursor hovers something
    emitGlobalMouseOver() {
      this.$eventBus.$emit('cursorOver');
    },
    // using the bus event to create animation on the cursor when we hover something
    // here we are only emitting that cursor no longer hovers something
    emitGlobalMouseLeave() {
      this.$eventBus.$emit('cursorLeave');
    },
  },
};
</script>
