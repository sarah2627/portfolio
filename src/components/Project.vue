<template>
  <div id="project">
    <NavBar></NavBar>
    <div class="project">
      <div
        class="content-back"
        @mouseover="emitGlobalMouseOver()"
        @mouseleave="emitGlobalMouseLeave()"
      >
        <button @click="$router.go(-1)"> </button>
      </div>
      <ProjectHero :title="projectPath.title" :subTitle="projectPath.subTitle"></ProjectHero>
      <CircleTextPath :circleTextPath="projectPath.circleTextPath"></CircleTextPath>
      <section>
        <div class="background-image-project" data-aos="zoom-out" data-aos-duration="2000">
          <img class="computer" :src="require(`@/assets/${projectPath.imgCoverProject}`)"/>
          <img class="mobile" :src="require(`@/assets/${projectPath.imgSrc}`)"/>
        </div>
      </section>
      <section id="presentation-project">
        <div
          class="text-presentation-project"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-center"
        >
          <div class="the-challenge">
            The challenge
          </div>
          <div class="description">
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
        <div class="background-phone">
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
            <h3
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-anchor-placement="center-center"
            >
              {{ projectPath.nbLanguages }} web languages <br/>
              {{ projectPath.nbSoftwares }} softwares
            </h3>
            <p data-aos="fade-up" data-aos-duration="2000">
              {{ projectPath.languages }} <br/>
              {{ projectPath.softwares }}
            </p>
        </div>
      </section>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import ProjectHero from '@/components/ProjectHero.vue';
import CircleTextPath from '@/components/CircleTextPath.vue';
import DataProject from '@/assets/data/project.json';
import Footer from '@/components/Footer.vue';

import scrollMenuMixin from '@/mixins/scrollMenuMixin';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    NavBar,
    ProjectHero,
    CircleTextPath,
    Footer,
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
    // function for shorten the path
    projectPath() {
      const { id } = this.$route.params;
      return DataProject.projects[id];
    },
  },
  mounted() {
    // animation of scroll for the parallax effect
    gsap.utils.toArray('.parallax').forEach((layer) => {
      const animation = gsap.timeline();
      const { depth } = layer.dataset;
      const movement = -depth * 6;
      gsap.set(layer, { y: movement });
      animation.to(layer, { y: 0, duration: 1 });

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
  methods: {
    // using the bus event to create animation on the cursor when we hover something
    // here we are only emitting that cursor hovers something
    emitGlobalMouseOver() {
      this.$eventBus.$emit('cursorOver');
    },
    // using the bus event to create animation on the cursor when we hover something
    // here we are only emitting that cursor no longer hovers something
    emitGlobalMouseLeave() {
      this.$eventBus.$emit('cursorLeave');
    },
  },
  mixins: [scrollMenuMixin('project')],
};
</script>
