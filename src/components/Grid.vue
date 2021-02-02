<template>
  <div class="projects">
    <transition-group v-bind:css="false" v-on:before-enter="beforeEnter" v-on:enter="enter" appear>
      <div class="card"
            v-for="(dataProject, index) in DataProject.projects"
            :key="dataProject.id"
            :data-index="index"
            :style="{backgroundImage:`url('${require('@/assets/' + dataProject.imgSrc)}')`}"
            @mouseover="emitGlobalMouseOver()"
            @mouseleave="emitGlobalMouseLeave()">
        <router-link :to="{name : 'project', params: { title: dataProject.title, id: index }}">
          <div class="project" :class="{active: dataProject.hover}"
                               @mouseover="dataProject.hover=true"
                               @mouseleave="dataProject.hover=false"
                               @click="dataProject.hover=false">
            <h2> {{dataProject.title}} </h2>
            <p> {{dataProject.subTitle}} </p>
          </div>
        </router-link>
      </div>
    </transition-group>
  </div>
</template>

<script>
import DataProject from '@/assets/data/project.json';

export default {
  name: 'Grid',
  data() {
    return {
      DataProject,
    };
  },
  methods: {
    beforeEnter(e) {
      e.style.opacity = 0;
      e.style.transform = 'translate(-50px, -30px)';
    },
    // applies transitions on the miniatures with a time delay
    enter(e, done) {
      const delay = e.dataset.index * 300;
      setTimeout(() => {
        e.style.opacity = 1;
        e.style.transform = 'translate(0, 0)';
        done();
      }, delay);
    },
    emitGlobalMouseOver() {
      this.$eventBus.$emit('cursorOver');
    },
    emitGlobalMouseLeave() {
      this.$eventBus.$emit('cursorLeave');
    },
  },
};
</script>
