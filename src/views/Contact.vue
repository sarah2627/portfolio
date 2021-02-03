<template>
  <div id="contact">
    <NavBar></NavBar>
    <div class="contact">
      <Hero title="Contact"></Hero>
      <div class="text-contact" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
        <a href="mailto:veysset.sarah@gmail.com">
          <img
            src="../assets/send-me-mail.svg"
            @mouseover="emitGlobalMouseOver()"
            @mouseleave="emitGlobalMouseLeave()"
          />
        </a>
        <p>
          I am not currently looking for full-time opportunities,
          but is always open to collaborations and other fun stuff.
          If you’re interested in discussing a project, making something great together,
          or simply getting in touch please send an email. <br/>
          Portfolio, character references, and other information available on request via email.
        </p>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Hero from '@/components/Hero.vue';
import Footer from '@/components/Footer.vue';

import scrollMenuMixin from '@/mixins/scrollMenuMixin';

export default {
  components: {
    NavBar,
    Hero,
    Footer,
  },
  methods: {
    // using the bus event to create animation on the cursor when we hover something
    // here we are only emitting that cursor hovers something
    emitGlobalMouseOver() {
      this.$eventBus.$emit('cursorOver');
    },
    // using the bus event to create animation on the cursor when we hover something
    // here we are only emitting that cursor no longer hovers something
    emitGlobalMouseLeave() {
      this.$eventBus.$emit('cursorLeave');
    },
  },
  mixins: [scrollMenuMixin('contact')],
};

</script>
