<template>
  <div id="about">
    <NavBar></NavBar>
    <div class="about">
      <Hero title="About me 😊"></Hero>
      <div class="presentation" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
        <p>
          Passionate about the multimedia field, I naturally turned towards
          the creative sector within a DUT MMI after obtaining my baccalaureate.
          Thanks to my involvement and my work, I was then able to join the IMAC
          engineering school located near Paris. Specialising in the web sector
          for my third year, I was able to create numerous projects for various
          school, professional and personal projects. ✨
        </p>
        <br/>
        <p>
          Attentive, curious and diligent, I know how to give the best of myself
          in what I love. What I like, combining both my technical and artistic
          skills to create efficient, clean and optimised interfaces. 💻
        </p>
      </div>
      <img
        src="../assets/photo-about-me.jpg"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="600"
      />
      <div
        class="experience-formation"
        data-aos="fade-up"
        data-aos-duration="800"
      >
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
          <h2> For more information </h2>
          <div class="switch-animation">
            <ul>
              <SwitchAnimation
                class="is-darkGrey"
                v-for="social in socials"
                v-bind:key="social.id"
                v-bind:href="social.href"
                v-bind:text="social.text"
              >
              </SwitchAnimation>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Hero from '@/components/Hero.vue';
import SwitchAnimation from '@/components/SwitchAnimation.vue';
import Footer from '@/components/Footer.vue';

import scrollMenuMixin from '@/mixins/scrollMenuMixin';

export default {
  components: {
    NavBar,
    Hero,
    SwitchAnimation,
    Footer,
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
      socials: [
        {
          id: 1,
          href: 'https://www.linkedin.com/in/sarah-veysset-48a227143/',
          text: 'Linkedin',
        },
        {
          id: 2,
          href: 'https://github.com/sarah2627',
          text: 'Github',
        },
        {
          id: 3,
          href: 'https://www.behance.net/veyssetsar7efe',
          text: 'Behance',
        },
      ],
    };
  },
  mixins: [scrollMenuMixin('about')],
};
</script>
