<template>
  <div id="nav">
    <div class="overlay"></div>
    <div class="wrap">
      <div class="navbar">
        <div id="logo">
          <router-link to="/home">
            <img alt="Logo Sarah Veysset" src="../assets/logo-sarah-veysset.svg"/>
          </router-link>
        </div>
        <button class="btn-burger" v-on:click="displayMenu()">
          <span class="bar bar--1"> </span>
          <span class="bar bar--2"> </span>
        </button>
      </div>
    </div>
    <transition name="menu">
      <nav v-if="isClicked">
        <div class="wrapper-menu">
          <div>
            <h1> SOCIAL MEDIA </h1>
            <div class="social-media">
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
            <h1> MENU </h1>
            <div class="social-media">
              <ul>
                <SwitchAnimation class="is-darkGrey" v-for="menu in menus"
                                                 v-bind:key="menu.id"
                                                 v-bind:routePath="menu.routePath"
                                                 v-bind:text="menu.text">
                </SwitchAnimation>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </transition>
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
          routePath: '/home',
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
    displayMenu() {
      const burger = document.querySelector('.btn-burger');
      const overlay = document.querySelector('.overlay');
      if (this.isClicked === false) {
        this.isClicked = true;
        burger.classList.add('active');
        overlay.style.display = 'block';
      } else {
        this.isClicked = false;
        burger.classList.remove('active');
        overlay.style.display = 'none';
      }
    },
  },
};
</script>
