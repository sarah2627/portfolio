<template>
  <div id="cursor" :class="['g-cursor']">
    <div :style="cursorCircle" class="g-cursor-circle"></div>
    <div class="g-cursor-point" ref="point" :style="cursorPoint"></div>
  </div>
</template>

<script>
export default {
  name: 'CursorAnimation',
  data() {
    return {
      xChild: 0,
      yChild: 0,
      xParent: 0,
      yParent: 0,
      hover: false,
    };
  },
  computed: {
    cursorCircle() {
      return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`;
    },
    cursorPoint() {
      return `transform: translateX(calc(-33% + (${this.xChild - 3}px))) translateY(calc(-33% + (${this.yChild - 3}px))) translateZ(0) translate3d(0, 0, 0);`;
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

    changeName(name) {
      // name will be automatically transported to the parameter.
      this.name = name;
    },
  },
  mounted() {
    document.addEventListener('mousemove', this.moveCursor);
  },
  created() {
    this.$eventBus.$on('cursorOver', () => {
      const cursorPoint = document.querySelector('.g-cursor-point');
      cursorPoint.style.width = '30px';
      cursorPoint.style.height = '30px';
    });
    this.$eventBus.$on('cursorLeave', () => {
      const cursorPoint = document.querySelector('.g-cursor-point');
      cursorPoint.style.width = '10px';
      cursorPoint.style.height = '10px';
    });
  },
  beforeDestroy() {
    this.$eventBus.$off('cursorHover');
  },
};
</script>
