<template>
    <div id="canvas">
      <NavBar></NavBar>
      <canvas ref="canvas" id="sandbox"></canvas>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

import Circle from './webgl/circle';

export default {
  name: 'Playground',
  components: {
    NavBar,
  },
  data() {
    return {
      canvas: null,
      context: null,
    };
  },
  mounted() {
    const balls = [];
    const vm = this;
    vm.canvas = vm.$refs.canvas;
    vm.context = vm.canvas.getContext('2d');

    for (let i = 0; i < 20; i += 1) {
      const r = Math.floor(Math.random() * 30) + 15;
      const x = Math.random() * (vm.canvas.width - r * 2) + r;
      const y = Math.random() * (vm.canvas.height - r * 2) + r;
      const c = '#ff534a';
      balls.push(new Circle(x, y, r, c));
    }

    // add dark circle on click
    vm.canvas.addEventListener('click', (e) => {
      const r = Math.floor(Math.random() * 30) + 15;
      balls.push(new Circle(e.clientX, e.clientY, r, '#292929'));
    });

    function Update() {
      vm.context.clearRect(0, 0, vm.canvas.width, vm.canvas.height);

      for (let i = 0; i < balls.length; i += 1) {
        const ball = balls[i];
        ball.animate();
      }

      requestAnimationFrame(Update);
    }
    Update();
  },
};
</script>
