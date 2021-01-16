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
        <Grid title="Web"></Grid>
        <CreativeButton></CreativeButton>
      </div>
    </div>
</template>

<script>
import Grid from '@/components/Grid.vue';
import CreativeButton from '@/components/CreativeButton.vue';

export default {
  name: 'Home',
  components: {
    Grid,
    CreativeButton,
  },
};
</script>
