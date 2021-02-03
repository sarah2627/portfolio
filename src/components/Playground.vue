<template>
    <div id="canvas">
      <NavBar></NavBar>
      <div class="title">
        <h1>
          Welcome to the playground
        </h1>
        <h2>
          Click on the window for more
        </h2>
      </div>
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
    // we recuperate the canvas
    vm.canvas = vm.$refs.canvas;
    // we recuperate the context of the canva: here 2D
    vm.context = vm.canvas.getContext('2d');

    // resize the canvas to the size of the window
    function resizeCanvas() {
      vm.canvas.width = window.innerWidth;
      vm.canvas.height = window.innerHeight;
    }

    // call function resize when the window is resized
    window.addEventListener('resize', resizeCanvas, false);

    for (let i = 0; i < 20; i += 1) {
      // definition of a random size
      const r = Math.floor(Math.random() * 30) + 15;
      // definition of a random position in x
      const x = Math.random() * (vm.canvas.width - r * 2) + r;
      // definition of a random position in y
      const y = Math.random() * (vm.canvas.height - r * 2) + r;
      // definition of the color
      const c = '#ff534a';
      // creation of a new circle
      balls.push(new Circle(x, y, r, c));
    }

    // add dark circle on click
    vm.canvas.addEventListener('click', (e) => {
      const r = Math.floor(Math.random() * 30) + 15;
      balls.push(new Circle(e.clientX, e.clientY, r, '#292929'));
    });

    function Update() {
      // removes all drawn content
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
