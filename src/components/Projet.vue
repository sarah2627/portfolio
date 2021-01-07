<template>
    <div id="projet">
        <Hero :title="this.$route.params.title"></Hero>
        <div class="presentation-projet">
            <a @click="$router.go(-1)"> ← Back </a>
            <h2> {{ this.$route.params.subTitle }} </h2>
            <div class="resume-projet">
              <p> {{ this.$route.params.text }} </p>
              <p> {{ this.$route.params.langages }} </p>
              <p> {{ this.$route.params.logiciels }} </p>
              <img :src="this.$route.params.imgSrc"/>
            </div>
        </div>
    </div>
</template>

<script>
import Hero from '@/components/Hero.vue';

export default {
  components: {
    Hero,
  },
};
</script>
