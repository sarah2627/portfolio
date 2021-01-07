<template>
  <div class="projets">
    <div class="card"
        v-for="projet in projets"
        :key="projet.id"
        :style="{backgroundImage:`url(${projet.imgSrc})`}">
        <router-link :to="{name : 'projet', params: {
          id: projet.id,
          title: projet.title,
          subTitle: projet.subTitle,
          imgSrc: projet.imgSrc,
          text: projet.text,
          langages: projet.langages,
          logiciels: projet.logiciels}}">
          <div class="projet"
            @mouseover="projet.hover=true"
            @mouseleave="projet.hover=false"
            :class="{active: projet.hover}">
              <h2> {{projet.title}} </h2>
              {{projet.subTitle}}
          </div>
        </router-link>
      </div>
  </div>
</template>

<script>
import CosmeMiniature from '../assets/cosme-miniature.png';
import DashboardMiniature from '../assets/dashboard-miniature.png';
import KolorzMiniature from '../assets/kolorz-miniature.png';

export default {
  name: 'Slider',
  data() {
    return {
      projets: [
        {
          id: 0,
          title: 'Cosme Literie',
          subTitle: 'Création d\'un site Internet',
          text: 'Lors de ma deuxième année en école d\'ingénieurs j\'ai pu effectuer un stage d\'une durée de 3 mois au sein de Cosme literie. Cosme literie est une startup dynamique spécialisée dans le développement de la literie naturelle et conçue en France. J\'ai travaillé sur la conception du nouveau site Internet de l\'entreprise qui commençait à être dépassé en terme de technologies et de design. J\'ai aussi pu participer à la création d\'éléments de design pour le site via les logiciels Photoshop et Illustrator.',
          langages: 'Langages utilisés : HTML/SCSS/Bootstrap, Vanilla JS/jQuery, Smarty.',
          logiciels: 'Logiciels utilisés : SourceTree, BitBucket, FileZilla & Sketch pour la programmation et Adobe Illustrator & Photoshop pour le graphisme',
          imgSrc: CosmeMiniature,
          hover: false,
        },
        {
          id: 1,
          title: 'Festiv\'',
          subTitle: 'Création d\'un dashboard',
          imgSrc: DashboardMiniature,
          text: 'Lors d\'un cours de web pendant ma deuxième année en école d\'ingénieurs, j\'ai pu réaliser en collaboration avec des peronnes de ma clase un dashboard sur les festivals en France. Le but du projet était de récupérer des informations via une API et d\'afficher les données via différents graphiques, textes ou statistiques. Mon rôle dans ce projet a été de créer l\'architecture globale du projet et certains des graphiques.',
          langages: 'Langages utilisés : HTML/SCSS/Bootstrap, VueJs.',
          logiciels: 'Logiciels utilisés : Git, Github, Figma pour la partie prrogrammtion et Adobe Illustrator pour le graphisme',
          hover: false,
        },
        {
          id: 2,
          title: 'Kolorz Festival',
          subTitle: 'Création d\'une maquette web',
          imgSrc: KolorzMiniature,
          hover: false,
        },
        {
          id: 3,
          title: 'Meleohana',
          subTitle: 'Création d\'un site de streaming musical',
          imgSrc: CosmeMiniature,
          hover: false,
        },
        {
          id: 4,
          title: 'Cosme Literie',
          subTitle: 'Creation of their new website',
          imgSrc: CosmeMiniature,
          hover: false,
        },
        {
          id: 5,
          title: 'Cosme Literie',
          subTitle: 'Creation of their new website',
          imgSrc: CosmeMiniature,
          hover: false,
        },
        {
          id: 6,
          title: 'Cosme Literie',
          subTitle: 'Creation of their new website',
          imgSrc: CosmeMiniature,
          hover: false,
        },
        {
          id: 7,
          title: 'Cosme Literie',
          subTitle: 'Creation of their new website',
          imgSrc: CosmeMiniature,
          hover: false,
        },
        {
          id: 8,
          title: 'Cosme Literie',
          subTitle: 'Creation of their new website',
          imgSrc: CosmeMiniature,
          hover: false,
        },
      ],
    };
  },
};
</script>
