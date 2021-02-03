<template>
  <div id="nav">
    <div class="overlay" v-on:click="displayMenu()"></div>
    <div class="wrap">
      <div class="navbar">
        <div id="logo">
          <router-link to="/">
            <img
              alt="Logo Sarah Veysset"
              src="../assets/logo-sarah-veysset.svg"
              @mouseover="emitGlobalMouseOver()"
              @mouseleave="emitGlobalMouseLeave()"/>
          </router-link>
        </div>
        <button
          class="btn-burger"
          v-on:click="displayMenu()"
          @mouseover="emitGlobalMouseOver()"
          @mouseleave="emitGlobalMouseLeave()">
          <span class="bar bar--1"> </span>
          <span class="bar bar--2"> </span>
        </button>
      </div>
    </div>
    <transition name="menu">
      <nav v-if="isClicked">
        <div class="wrapper-menu">
          <div class="social-media">
            <h1> Social media </h1>
            <div class="switch-animation">
              <ul>
                  <SwitchAnimation class="is-darkGrey" v-for="social in socials"
                                                   v-bind:key="social.id"
                                                   v-bind:href="social.href"
                                                   v-bind:text="social.text">
                  </SwitchAnimation>
               </ul>
            </div>
          </div>
          <div class="menu">
            <h1> Menu </h1>
            <div class="switch-animation">
              <ul>
                <SwitchAnimation class="is-darkGrey" v-for="menu in menus"
                                                 v-bind:key="menu.id"
                                                 v-bind:routePath="menu.routePath"
                                                 v-bind:text="menu.text"
                                                 :method="displayMenu">
                </SwitchAnimation>
              </ul>
            </div>
          </div>
        </div>
        <div class="get-in-touch">
          <h1> Get in touch </h1>
          <MailAnimation class="is-darkGrey"></MailAnimation>
        </div>
      </nav>
    </transition>
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
      isClicked: false,
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
      menus: [
        {
          id: 1,
          routePath: '/',
          text: 'home',
        },
        {
          id: 2,
          routePath: '/about',
          text: 'about',
        },
        {
          id: 3,
          routePath: '/contact',
          text: 'contact',
        },
      ],
    };
  },
  methods: {
    // using the bus event to block the scroll when the menu is open
    // here we are only emitting that the menu is open
    emitNoScrollMenu() {
      this.$eventBus.$emit('noScrollMenu');
    },
    // using the bus event to deblock the scroll when the menu is open
    // here we are only emitting that the menu is close
    emitScrollMenu() {
      this.$eventBus.$emit('scrollMenu');
    },
    // method to display the menu or not and the overlay
    displayMenu() {
      const burger = document.querySelector('.btn-burger');
      const overlay = document.querySelector('.overlay');
      if (this.isClicked === false) {
        this.isClicked = true;
        burger.classList.add('active');
        overlay.style.display = 'block';
        this.emitNoScrollMenu();
      } else {
        this.isClicked = false;
        burger.classList.remove('active');
        overlay.style.display = 'none';
        this.emitScrollMenu();
      }
    },
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
