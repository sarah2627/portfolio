<template>
  <li :class="textColor">
    <!-- for the social media -->
    <a v-if="href" :href="href" target="blank">
      <span :data-text="text">
        {{ text }}
      </span>
    </a>
    <!-- for the menu -->
    <router-link v-else :to="routePath">
      <span :data-text="text" v-on:click="displayMenu()">
        {{ text }}
      </span>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    textColor: String,
    id: Number,
    href: String,
    routePath: {
      type: String,
      default: '',
    },
    text: String,
    method: {
      type: Function,
    },
  },
  methods: {
    displayMenu() {
      if (this.method) {
        this.method();
      }
    },
  },
};
</script>
