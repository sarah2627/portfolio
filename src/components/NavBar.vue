<template>
  <!-- <transition name="navbar" appear>
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
                <li v-on:click="displayMenu()">
                  <router-link to="/">Home</router-link>
                </li>
                <li class="about" v-on:click="displayMenu()">
                  <router-link to="/about">About</router-link>
                </li>
                <li v-on:click="displayMenu()">
                  <router-link to="/contact">Contact</router-link>
                </li>
            </nav>
        </div>
    </div>
  </transition> -->
  <div id="nav">
    <div class="wrap">
      <div class="navbar">
        <div id="logo">
          <router-link to="/">
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
      <nav v-if="isClicked" class="menu">
        <ul>
          <transition-group v-bind:css="false" v-on:before-enter="beforeEnter"
            v-on:enter="enter" v-on:after-enter="afterEnter" appear>
            <li v-for="(item, index) in menuItems" :key="`item-${index}`"
                @mouseover="selectItem(index)"
                @mouseleave="selectItem(-1)"
                :class="{'selected': item.selected, 'dimmed': item.dimmed}" class="menu-item">
              <router-link :to="{path: item.label}" v-on:click="displayMenu()">
                <span class="char"
                      v-for="(char, charIndex) in item.chars"
                      :key="`char-${charIndex}`"
                      :ref="`char-${index}-${charIndex}`">
                  {{char}}
                </span>
                <span class="arrow"> ➔ </span>
              </router-link>
            </li>
          </transition-group>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       load: false,
//     };
//   },
//   methods: {
//     displayMenu() {
//       const body = document.getElementsByTagName('body')[0];
//       // eslint-disable-next-line no-unused-expressions
//       (!body.classList.contains('display_menu')) ? body.classList.add('display_menu')
// : body.classList.remove('display_menu');
//     },
//   },
// };

import { gsap } from 'gsap';

const itemsList = ['/home', '/about', '/contact'];
const LEFT = -1;
const RIGHT = 1;

export default {
  data() {
    return {
      selectedItem: -1,
      isClicked: false,
    };
  },
  methods: {
    selectItem(id) {
      this.selectedItem = id;

      this.menuItems.forEach((item, index) => {
        const direction = item.selected ? LEFT : RIGHT;
        this.animateChars(index, item.label.length, direction);
      });
    },
    animateChars(id, charLength, direction) {
      for (let i = 0; i < charLength; i += 1) {
        const refId = `char-${id}-${i}`;
        const char = this.$refs[refId];
        gsap.killTweensOf(char);
        gsap.to(char, 0.5, {
          scaleX: direction,
        });
      }
    },
    displayMenu() {
      const burger = document.querySelector('.btn-burger');
      const wrap = document.querySelector('.wrap');
      if (this.isClicked === false) {
        this.isClicked = true;
        burger.classList.add('active');
        wrap.style.transition = '1s ease';
        wrap.style.background = '#ff534a';
      } else {
        this.isClicked = false;
        burger.classList.remove('active');
        wrap.style.background = '#ffffff';
      }
    },
    beforeEnter(e) {
      e.style.opacity = 0;
      e.style.transform = 'translate(-500px, -300px)';
    },
    enter(e, done) {
      const delay = 1500;
      setTimeout(() => {
        e.style.opacity = 0.5;
        e.style.transform = 'translate(-300px, -100px)';
        done();
      }, delay);
    },
    afterEnter(e) {
      e.style.opacity = 1;
      e.style.transform = 'translate(0, 0)';
    },
  },
  computed: {
    menuItems() {
      return itemsList.map((item, index) => {
        const isSelected = this.selectedItem === index;
        const otherButtonIsSelected = this.selectedItem !== -1;
        return {
          label: item,
          selected: isSelected,
          dimmed: !isSelected && otherButtonIsSelected,
          chars: item.split(''),
        };
      });
    },
  },
};
</script>
