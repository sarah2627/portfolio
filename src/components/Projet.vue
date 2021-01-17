<template>
  <div id="projet">
    <div class="projet">
      <Hero :title="project.title"></Hero>
      <div class="presentation-projet">
        <button class="content-back" @click="$router.go(-1)"> </button>
        <h2> {{ project.subTitle }} </h2>
        <div class="resume-projet">
          <div class="img-projet">
            <img :src="require(`@/assets/${project.imgCoverProjet}`)"/>
          </div>
          <div class="text-projet">
            <p class="text"> {{ project.text }} </p>
          </div>
          <div class="switch-image-projet">
            <img class="switch"
              :src="require(`@/assets/${project.buttonSwitchProjet}`)"/>
            <img class="first-img close-up"
              :src="require(`@/assets/${project.closeUpProjet}`)"/>
            <img class="second-img close-up"
              :src="require(`@/assets/${project.closeUpProjet}`)"/>
            <img class="close-up"
              :src="require(`@/assets/${project.closeUpProjet}`)"/>
          </div>
          <div class="technos-projet">
            <p class="langage">
              <span> Langages utilisés : </span>
              {{ project.langages }}
            </p>
            <p class="logiciel">
              <span> Logiciels utilisés : </span>
              {{ project.logiciels }}
            </p>
          </div>
        </div>
      </div>
      <svg class="cross" ref="test" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import DataProjet from '@/assets/data/projet.json';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    Hero,
  },
  data() {
    return {
      DataProjet,
      projet: {},
      loading: true,
      animation: null,
    };
  },
  computed: {
    project() {
      const { id } = this.$route.params;
      return DataProjet.projets[id];
    },
  },
  mounted() {
    this.animation = gsap.to(this.$refs.test, {
      rotation: 360,
      duration: 3,
      ease: 'none',
      repeat: -1,
    });
  },
  beforeDestroy() {
    if (this.animation) {
      this.animation.kill();
    }
  },
};
</script>
