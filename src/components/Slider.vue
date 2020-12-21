<template>
  <div class="projets">
    <div class="card"
        v-for="projet in projets"
        :key="projet.id"
        :style="{backgroundImage:`url(${projet.imgSrc})`}">
          <div class="projet"
            @mouseover="hover=true"
            @mouseleave="hover=false"
            :class="{active: hover}">
            <router-link :to="{name: 'Projets', params: 'id: projet.id'}">
              <h2> {{projet.title}} </h2>
              {{projet.subTitle}}
            </router-link>
          </div>
      </div>
  </div>
</template>

<script>
import CosmeMiniature from '../assets/cosme-miniature.png';
import DashboardMiniature from '../assets/dashboard-miniature.png';
import KolorzMiniature from '../assets/kolorz-miniature.png';

export default {
  name: 'Slider',
  props: {
    title: String,
  },
  data() {
    return {
      hover: false,
      projets: [
        {
          id: 0,
          title: 'Cosme Literie',
          subTitle: 'Creation of a website',
          imgSrc: CosmeMiniature,
        },
        {
          id: 1,
          title: 'Festiv\'',
          subTitle: 'Creation of a dashboard',
          imgSrc: DashboardMiniature,
        },
        {
          id: 2,
          title: 'Kolorz Festival',
          subTitle: 'Creation of a web mockup',
          imgSrc: KolorzMiniature,
        },
        {
          id: 3,
          title: 'Cosme Literie',
          subTitle: 'Creation of their new website',
          imgSrc: CosmeMiniature,
        },
        {
          id: 4,
          title: 'Cosme Literie',
          subTitle: 'Creation of their new website',
          imgSrc: CosmeMiniature,
        },
        {
          id: 5,
          title: 'Cosme Literie',
          subTitle: 'Creation of their new website',
          imgSrc: CosmeMiniature,
        },
        {
          id: 6,
          title: 'Cosme Literie',
          subTitle: 'Creation of their new website',
          imgSrc: CosmeMiniature,
        },
        {
          id: 7,
          title: 'Cosme Literie',
          subTitle: 'Creation of their new website',
          imgSrc: CosmeMiniature,
        },
        {
          id: 8,
          title: 'Cosme Literie',
          subTitle: 'Creation of their new website',
          imgSrc: CosmeMiniature,
        },
      ],
    };
  },
};
</script>
