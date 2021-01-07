<template>
    <div id="nav">
        <div class="wrap">
            <div id="hamburger" v-on:click="displayMenu()">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div id="logo">
                <router-link to="/">
                    <img alt="Logo Sarah Veysset" src="../assets/logo-sarah-veysset.svg"/>
                </router-link>
            </div>
            <nav id="menu">
                <li v-on:click="closeMenu()"><router-link to="/">Home</router-link></li>
                <li class="about" v-on:click="closeMenu()">
                  <router-link to="/about">About</router-link>
                </li>
                <li v-on:click="closeMenu()"><router-link to="/contact">Contact</router-link></li>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      load: false,
    };
  },
  methods: {
    displayMenu() {
      const body = document.getElementsByTagName('body')[0];
      // eslint-disable-next-line no-unused-expressions
      (!body.classList.contains('display_menu')) ? body.classList.add('display_menu') : body.classList.remove('display_menu');
    },
    closeMenu() {
      const body = document.getElementsByTagName('body')[0];
      if (body.classList.contains('display_menu')) {
        body.classList.remove('display_menu');
      }
    },
  },
};
</script>
