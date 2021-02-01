<template>
    <div id="home">
      <div class="home">
        <div class="introduction">
          <h1>
            <span>
              Hi, I'm Sarah Veysset, <br/>
              a creative engineer specialising <br/>
              in front-end development
            </span>
          </h1>
        </div>
        <Grid title="Web"></Grid>
      </div>
    </div>
</template>

<script>
import Grid from '@/components/Grid.vue';

export default {
  name: 'Home',
  components: {
    Grid,
  },
};
</script>
