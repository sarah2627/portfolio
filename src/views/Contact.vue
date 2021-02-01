<template>
  <div id="contact">
    <div class="contact">
      <Hero title="Contact"></Hero>
      <div class="text-contact">
        <a href="mailto:veysset.sarah@gmail.com"> <img src="../assets/send-me-mail.svg"/> </a>
        <p>
          I am not currently looking for full-time opportunities,
          but is always open to collaborations and other fun stuff.
          If you’re interested in discussing a project, making something great together,
          or simply getting in touch please send an email. <br/>
          Portfolio, character references, and other information available on request via email.
        </p>
      </div>
      <Playground></Playground>
    </div>
  </div>
</template>

<script src="@/js/canvas.js"></script>

<script>
import Hero from '@/components/Hero.vue';
import Playground from '../components/Playground.vue';

export default {
  components: {
    Hero,
    Playground,
  },
};

</script>
