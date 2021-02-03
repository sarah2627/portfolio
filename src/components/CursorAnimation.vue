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
      offset: 3,
      scale: 1,
      hover: false,
    };
  },
  computed: {
    // allows you to update the position of the large cursor circle
    cursorCircle() {
      return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`;
    },
    // allows you to update the position of the point cursor
    cursorPoint() {
      return `transform: translateX(${this.xChild - this.offset}px) translateY(${this.yChild - this.offset}px) translateZ(0) translate3d(0, 0, 0) scale(${this.scale});`;
    },
  },
  methods: {
    // adds an offset to the point when the mouse moves
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
  },
  created() {
    // adds an event bus to animate the cursor point on the hover of an element
    this.$eventBus.$on('cursorOver', () => {
      this.scale = 2.5;
      this.offset = 3.5;
    });
    // remove an event bus to animate the cursor point on the hover of an element
    this.$eventBus.$on('cursorLeave', () => {
      this.scale = 1;
      this.offset = 3;
    });
  },
  beforeDestroy() {
    this.$eventBus.$off('cursorHover');
    this.$eventBus.$off('cursorLeave');
  },
};
</script>
