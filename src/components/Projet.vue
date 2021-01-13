<template>
    <div id="projet">
        <Hero :title="DataProjet.projets[projet.id].title"></Hero>
         <svg class="cross-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
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
</template>

<script>
import Hero from '@/components/Hero.vue';
import DataProjet from '@/assets/data/projet.json';

export default {
  components: {
    Hero,
  },
  data() {
    return {
      DataProjet,
      projet: {},
      loading: true,
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
  },
  mounted() {
    this.gsap.to('.cross-1', {
      rotate: '+=360',
      scrollTrigger: {
        trigger: '.cross-1',
        start: 'bottom bottom',
        end: 'bottom top',
        pin: false,
        scrub: 0.5,
      },
    });
  },
};
</script>
