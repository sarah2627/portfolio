<template>
  <div id="app">
    <NavBar></NavBar>
    <transition name="fade" mode="out-in">
        <router-view/>
    </transition>
    <Footer></Footer>
  </div>
</template>

<style>
  @import './style/reset.css';
  @import './style/style.css';
</style>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'app',
  components: {
    NavBar,
    Footer,
  },
};
</script>
