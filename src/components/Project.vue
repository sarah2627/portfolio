<template>
  <div id="project">
    <div class="project">
      <div class="content-back">
        <button @click="$router.go(-1)"> </button>
      </div>
      <ProjectHero :title="projectPath.title" :subTitle="projectPath.subTitle"></ProjectHero>
      <CircleTextPath :circleTextPath="projectPath.circleTextPath"></CircleTextPath>
      <section>
        <div class="background-image-project" data-aos="zoom-out" data-aos-duration="2000">
          <img :src="require(`@/assets/${projectPath.imgCoverProject}`)"/>
        </div>
      </section>
      <section id="presentation-project">
        <div class="text-presentation-project">
          <div class="the-challenge" data-aos="flip-up" data-aos-duration="2000" appear>
            The challenge
          </div>
          <div class="description" data-aos="fade-up" data-aos-duration="2000" appear>
            <p> {{ projectPath.text }} </p>
            <a :href="projectPath.link" target="_blank" class="cta">
              <span> Launch project </span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section id="presentation-images-project">
        <div class="background-image-project">
          <div class="hero">
            <div class="layer-1 layer parallax" data-depth="250">
              <img :src="require(`@/assets/${projectPath.imgPhone1}`)">
            </div>
            <div class="layer-2 layer parallax" data-depth="-250">
              <img :src="require(`@/assets/${projectPath.imgPhone3}`)">
            </div>
            <div class="layer-3 layer parallax" data-depth="350">
              <img :src="require(`@/assets/${projectPath.imgPhone2}`)">
            </div>
            <div class="layer-4 layer parallax" data-depth="-50">
              <img :src="require(`@/assets/${projectPath.imgPhone4}`)">
            </div>
          </div>
        </div>
      </section>
      <section id="presentation-technos-project">
        <div class="text-presentation-technos-project">
            <h3 data-aos="fade-up" data-aos-duration="2000">
              {{ projectPath.nbLanguages }} web languages <br/>
              {{ projectPath.nbSoftwares }} softwares
            </h3>
            <p data-aos="fade-up" data-aos-duration="2000">
              {{ projectPath.languages }} <br/>
              {{ projectPath.softwares }}
            </p>
        </div>
      </section>
            <!-- <svg class="cross" ref="test" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg> -->
    </div>
  </div>
</template>

<script>
import ProjectHero from '@/components/ProjectHero.vue';
import CircleTextPath from '@/components/CircleTextPath.vue';
import DataProject from '@/assets/data/project.json';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    ProjectHero,
    CircleTextPath,
  },
  data() {
    return {
      DataProject,
      project: {},
      loading: true,
      animation: null,
    };
  },
  computed: {
    projectPath() {
      const { id } = this.$route.params;
      return DataProject.projects[id];
    },
  },
  mounted() {
    // this.animation = gsap.to(this.$refs.test, {
    //   rotate: '360*3',
    //   scrollTrigger: {
    //     trigger: this.$refs.test,
    //     start: 'bottom bottom',
    //     end: 'top top',
    //     pin: false,
    //     scrub: 0.5,
    //   },
    // });
    gsap.utils.toArray('.parallax').forEach((layer) => {
      const animation = gsap.timeline();
      const { depth } = layer.dataset;
      // depth = 250
      const movement = -depth * 6;
      // movement = -250
      gsap.set(layer, { y: movement });
      // y = -250
      animation.to(layer, { y: 0, duration: 1 });
      // là où l'anim démarre

      const scrollargs = {};
      scrollargs.start = 'top 92%';
      scrollargs.scrub = 0;
      scrollargs.animation = animation;

      ScrollTrigger.create(scrollargs);
    });
  },
  beforeDestroy() {
    if (this.animation) {
      this.animation.kill();
    }
  },
};
</script>
