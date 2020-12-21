<template>
  <div class="home">
    <div class="introduction">
      <h1>
        <span>
          Hello, I am Sarah Veysset <br/> a front end developper <br/> from Paris
        </span>
      </h1>
    </div>
    <Slider title="Web"></Slider>
    <div class="letstalk">
      <router-link to="/contact">
        <a>
          <span>L</span>
          <span>E</span>
          <span>T</span>
          <span>S</span>
          <span>_</span>
          <span>T</span>
          <span>A</span>
          <span>L</span>
          <span>K</span>
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue';

export default {
  name: 'Home',
  components: {
    Slider,
  },
};
</script>
