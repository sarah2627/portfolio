<template>
    <div id="projet">
        <Hero :title="this.$route.params.title"></Hero>
        <div class="presentation-projet">
            <button class="content-back" @click="$router.go(-1)"> </button>
            <h2> {{ DataProjet.projets[this.$route.params.id].subTitle }} </h2>
            <div class="resume-projet">
              <div class="text-projet">
                <p class="text"> {{ DataProjet.projets[this.$route.params.id].text }} </p>
                <p class="langage">
                  <span> Langages utilisés : </span>
                  {{ DataProjet.projets[this.$route.params.id].langages }}
                </p>
                <p class="logiciel">
                  <span> Logiciels utilisés : </span>
                  {{ DataProjet.projets[this.$route.params.id].logiciels }}
                </p>
              </div>
              <div class="img-projet">
                <img :src="DataProjet.projets[this.$route.params.id].imgSrc"/>
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
    };
  },
};
</script>
