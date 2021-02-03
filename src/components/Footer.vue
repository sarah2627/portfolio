<template>
  <div id="footer">
    <div class="get-in-touch">
      <div
        class="back-to-top-wrapper"
        @mouseover="emitGlobalMouseOver()"
        @mouseleave="emitGlobalMouseLeave()">
        <a href="#top" class="back-to-top-link" aria-label="Scroll to Top">
          &#8593;
        </a>
      </div>
      <h2> Work together ? </h2>
      <h3 @mouseover="emitGlobalMouseOver()" @mouseleave="emitGlobalMouseLeave()">
        <router-link to="/contact">
            Let's talk
        </router-link>
      </h3>
      <div class="wrapper-contact">
        <div class="footer-contact">
          <MailAnimation class="is-white"></MailAnimation>
          <br/>
          <p>
            Currently in Paris XI, France
          </p>
        </div>
        <div class="switch-animation">
          <ul>
            <SwitchAnimation
              class="is-white"
              v-for="social in socials"
              v-bind:key="social.id"
              v-bind:href="social.href"
              v-bind:text="social.text">
            </SwitchAnimation>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwitchAnimation from '@/components/SwitchAnimation.vue';
import MailAnimation from '@/components/MailAnimation.vue';

export default {
  components: {
    SwitchAnimation,
    MailAnimation,
  },
  data() {
    return {
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
};
</script>
