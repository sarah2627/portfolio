<template>
  <div id="home">
    <div class="home">
      <div class="introduction">
        <h1>
          <span>
            Hello, I am Sarah Veysset <br/> a front end developper <br/> from Paris
          </span>
        </h1>
      </div>
      <Slider title="Web"></Slider>
      <CreativeButton></CreativeButton>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue';
import CreativeButton from '@/components/CreativeButton.vue';

export default {
  name: 'Home',
  components: {
    Slider,
    CreativeButton,
  },
};
</script>
