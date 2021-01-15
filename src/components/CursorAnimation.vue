<template>
  <div id="cursor" :class="['g-cursor', { 'g-cursor_hover': hover }]">
    <div :style="cursorCircle" class="g-cursor__circle"></div>
    <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
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
    document.querySelector('.about').addEventListener('click', () => {
      this.clickCursor = true;
    });
  },
};
</script>
