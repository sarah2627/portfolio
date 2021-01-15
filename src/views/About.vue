<template>
  <div id="about">
    <!-- <div class="overlay"></div> -->
    <Hero title="About me 😊"></Hero>
    <div class="presentation">
      <p>
        Passionnée du domaine du multimédia, je me suis tout naturellement orientée
        vers le secteur de la création au sein d'un DUT MMI après avoir obtenu mon bac.
        Grâce à mon implication et mon travail, j'ai ensuite pu intégrer l'école
        d'ingénieurs IMAC situé à côté de Paris. Spécialisé dans le pôle web
        pour ma troisième année, j’ai pu créer de nombreuses réalisations pour
        divers projets scolaires, professionnels et personnels. ✨
      </p>
      <br/>
      <p>
        Attentive, curieuse et appliquée, je sais donner le meilleur
        de moi-même dans ce que j’aime. Ce que j'aime, allier à la fois
        mes compétences techniques et artistiques afin de créer
        des interfaces efficaces, propres et optimisées. 💻
      </p>
      <br/>
      <p>
        C'est pourquoi je suis à la recherche de mon stage
        de fin d'étude d'école d'ingénieurs pour une durée de
        6 mois en tant qu'intégratrice web / développeuse web front-end. 🚀
      </p>
    </div>
    <img src="../assets/photo-about-me.jpg"/>
    <div class="experience-formation">
      <div>
        <h2> Work experience </h2>
        <div class="card experience" v-for="experience in experiences" :key="experience.id">
          <h3> {{experience.title}} </h3>
          <p> {{experience.content}} </p>
        </div>
      </div>
      <div>
        <h2> Formation </h2>
        <div class="card formation" v-for="formation in formations" :key="formation.id">
          <h3> {{formation.title}} </h3>
          <p> {{formation.content}} </p>
        </div>
      </div>
      <div>
        <h2> Pour en savoir plus </h2>
        <div>
          <h3> Télécharger mon CV ↓ </h3>
          <a href="../assets/CV_VEYSSET_Sarah.pdf" target="_blank">CV</a>
        </div>
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
  data() {
    return {
      hover: false,
      experiences: [
        {
          id: 0,
          title: 'Cosme Literie',
          content: 'June - September 2020 • Front end developer',
        },
        {
          id: 1,
          title: 'Gerflor France',
          content: 'April - June 2018 • Graphic design & audiovisual assistant',
        },
        {
          id: 2,
          title: 'Burinter Communication',
          content: 'January - February 2017 • Graphic design assistant',
        },
      ],
      formations: [
        {
          id: 0,
          title: 'IMAC engineering school',
          content: '2018 - Present • Web speciality • Paris',
        },
        {
          id: 1,
          title: 'DUT Multimedia and Internet jobs (MMI)',
          content: '2016 - 2018 • Web / Audiovisual / Graphic design / Communication • Valedictorian • Toulon',
        },
      ],
    };
  },
};
</script>
