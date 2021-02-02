<template>
    <div id="home">
      <NavBar></NavBar>
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
      <Footer></Footer>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Grid from '@/components/Grid.vue';
import Footer from '@/components/Footer.vue';

import scrollMenuMixin from '@/mixins/scrollMenuMixin';

export default {
  name: 'Home',
  components: {
    Grid,
    NavBar,
    Footer,
  },
  mixins: [scrollMenuMixin('home')],
};
</script>
