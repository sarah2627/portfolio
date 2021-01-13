<template>
  <div class="projets">

    <transition-group name="list"
                      v-bind:css="false"
                      v-on:before-enter="beforeEnter"
                      v-on:enter="enter" appear>

      <div class="card"
            v-for="(dataProjet, index) in DataProjet.projets"
            :key="dataProjet.id"
            :data-index="index"
            :style="{backgroundImage:`url(${dataProjet.imgSrc})`}">

        <router-link :to="{name : 'projet', params: {
                      title: dataProjet.title,
                      id: index }}">

          <div class="projet"
                @mouseover="dataProjet.hover=true"
                @mouseleave="dataProjet.hover=false"
                @click="dataProjet.hover=false"
                :class="{active: dataProjet.hover}">
            <h2> {{dataProjet.title}} </h2>
            {{dataProjet.subTitle}}
          </div>

          </router-link>
      </div>

    </transition-group>
  </div>
</template>

<script>
import DataProjet from '@/assets/data/projet.json';

export default {
  name: 'Slider',
  data() {
    return {
      DataProjet,
    };
  },
  methods: {
    beforeEnter(e) {
      e.style.opacity = 0;
      e.style.transform = 'translate(-50px, -30px)';
    },
    enter(e, done) {
      const delay = e.dataset.index * 300;
      setTimeout(() => {
        e.style.opacity = 1;
        e.style.transform = 'translate(0, 0)';
        done();
      }, delay);
    },
  },
};
</script>
