<template>
  <div id="footer">
    <div class="get-in-touch">
      <h2> Work together ? </h2>
      <h3> <router-link to="/contact"> Let's talk </router-link> </h3>
      <div class="wrapper-contact">
        <div class="contact">
          <a href="mailto:veysset.sarah@gmail.com">
            <span>
              veysset.sarah@gmail.com
            </span>
          </a>
          <br/>
          <p>
            Currently in Paris XI, France
          </p>
        </div>
        <div class="social-media">
          <ul>
            <SwitchAnimation class="is-white" v-for="social in socials"
                                                  v-bind:key="social.id"
                                                  v-bind:href="social.href"
                                                  v-bind:text="social.text">
            </SwitchAnimation>
          </ul>
        </div>
      </div>
    </div>

        <!-- <div class="footer">
            <div class="email" :href="'mailto:veysset.sarah@gmail.com'">
                veysset.sarah@gmail.com
            </div>
            <div>
                <ul>
                    <li> <a :href="'https://www.linkedin.com/in/sarah-veysset-48a227143/'"> Linkedin </a> </li>
                    <li> <a :href="'https://github.com/sarah2627'"> Github </a> </li>
                    <li> <a :href="'https://www.behance.net/veyssetsar7efe'"> Behance </a> </li>
                </ul>
            </div>
            <div class="back-to-top-wrapper">
                <a href="#top" class="back-to-top-link" aria-label="Scroll to Top">
                    Top &#8593;
                </a>
            </div>
        </div> -->
    </div>
</template>

<script>
import SwitchAnimation from '@/components/SwitchAnimation.vue';

export default {
  components: {
    SwitchAnimation,
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
};
</script>
