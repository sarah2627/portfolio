<template>
  <!-- <transition name="fade" mode="out-in" v-on:enter="enter" -->
  <!-- v-on:after-enter="afterEnter" v-on:before-leave="beforeLeave"> -->
    <div id="projet">
      <div class="projet">
          <Hero :title="DataProjet.projets[projet.id].title"></Hero>
          <svg class="cross" xmlns="http://www.w3.org/2000/svg" ref="test" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <div class="presentation-projet">
              <button class="content-back" @click="$router.go(-1)"> </button>
              <h2> {{ DataProjet.projets[projet.id].subTitle }} </h2>
              <div class="resume-projet">
                <div class="img-projet">
                  <img :src="DataProjet.projets[projet.id].imgSrc"/>
                </div>
                <div class="text-projet">
                  <p class="text"> {{ DataProjet.projets[projet.id].text }} </p>
                  <p class="langage">
                    <span> Langages utilisés : </span>
                    {{ DataProjet.projets[projet.id].langages }}
                  </p>
                  <p class="logiciel">
                    <span> Logiciels utilisés : </span>
                    {{ DataProjet.projets[projet.id].logiciels }}
                  </p>
                </div>
              </div>
          </div>
      </div>
    </div>
  <!-- </transition> -->
</template>

<script>
import Hero from '@/components/Hero.vue';
import DataProjet from '@/assets/data/projet.json';

import gsapMixin from '@/mixins/gsapMixin';

export default {
  components: {
    Hero,
  },
  data() {
    return {
      DataProjet,
      projet: {},
      loading: true,
      prevHeight: 0,
    };
  },
  created() {
    // récupérer les données lorsque la vue est créée et
    // que les données sont déjà observées
    this.fetchData();
  },
  watch: {
    // appeler encore la méthode si la route change
    $route: 'fetchData',
  },
  methods: {
    async fetchData() {
      this.loading = true;
      this.projet = await Promise.resolve({ id: this.$route.params.id });
      this.loading = false;
    },
    beforeLeave(e) {
      this.prevHeight = getComputedStyle(e).height;
    },
    enter(e) {
      const { height } = getComputedStyle(e);

      e.style.height = this.prevHeight;

      setTimeout(() => {
        e.style.height = height;
      });
    },
    afterEnter(e) {
      e.style.height = 'auto';
    },
  },
  mixins: [gsapMixin],
};
</script>
