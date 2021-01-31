<template>
  <div id="projet">
    <div class="projet">
      <div class="content-back">
        <button @click="$router.go(-1)"> </button>
      </div>
      <ProjetHero :title="project.title" :subTitle="project.subTitle"></ProjetHero>
      <CircleTextPath :circleTextPath="project.circleTextPath"></CircleTextPath>
      <section>
        <div class="background-image-projet" data-aos="zoom-out" data-aos-duration="2000">
          <img :src="require(`@/assets/${project.imgCoverProjet}`)"/>
        </div>
      </section>
      <section id="presentation-projet">
        <div class="text-presentation-projet">
          <div class="the-challenge" data-aos="flip-up" data-aos-duration="2000" appear>
            The challenge
          </div>
          <div class="description" data-aos="fade-up" data-aos-duration="2000" appear>
            <p> {{ project.text }} </p>
            <a :href="project.link" target="_blank" class="cta">
              <span> Launch project </span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section id="presentation-images-projet">
        <div class="background-image-projet">
          <div class="hero">
            <div class="layer-1 layer parallax" data-depth="250">
              <img src="../assets/cosme-literie-1.png">
            </div>
            <div class="layer-2 layer parallax" data-depth="-250">
              <img src="../assets/cosme-literie-3.png">
            </div>
            <div class="layer-3 layer parallax" data-depth="350">
              <img src="../assets/cosme-literie-2.png">
            </div>
            <div class="layer-4 layer parallax" data-depth="-50">
              <img src="../assets/cosme-literie-4.png">
            </div>
          </div>
        </div>
      </section>
      <section id="presentation-technos-projet">
        <div class="text-presentation-technos-projet">
            <h3>
              {{ project.nbLangages }} web languages <br/>
              {{ project.nbLogiciels }} softwares
            </h3>
            <p>
              {{ project.langages }}
              {{ project.logiciels }}
            </p>
        </div>
      </section>
      <section id="get-in-touch">
        <div class="get-in-touch">
          <h2> Work together ? </h2>
          <h3> Let's talk </h3>
          <div class="wrapper-contact">
            <div class="contact">
              <p>
                veysset.sarah@gmail.com <br/>
                ----- <br/>
                Paris, centre <br/>
                -- <br/>
                Private Policy
              </p>
            </div>
            <div class="social-media">
              <ul>
                <li> <a :href="'https://www.linkedin.com/in/sarah-veysset-48a227143/'"> Linkedin </a> </li>
                <li> <a :href="'https://github.com/sarah2627'"> Github </a> </li>
                <li> <a :href="'https://www.behance.net/veyssetsar7efe'"> Behance </a> </li>
              </ul>
            </div>
          </div>
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
import ProjetHero from '@/components/ProjetHero.vue';
import CircleTextPath from '@/components/CircleTextPath.vue';
import DataProjet from '@/assets/data/projet.json';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    ProjetHero,
    CircleTextPath,
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
