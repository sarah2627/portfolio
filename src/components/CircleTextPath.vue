<template>
  <div class="read-more">
    <div id="text">
      <div class="circle">
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
          <path id="curve" fill="none" d="M 50, 50 m -37, 0
                                          a 37,37 0 1,1 74,0
                                          a 37,37 0 1,1 -74,0" />
          <text>
            <textPath xlink:href="#curve">
              {{ circleTextPath }}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'CircleTextPath',
  props: {
    circleTextPath: String,
  },

  mounted() {
    const dev = {};
    dev.interactions = {
      button() {
        const $button = document.querySelector('#text');
        gsap.set($button, {
          top: Math.floor(Math.random() * (window.innerHeight - $button.offsetHeight)),
          left: Math.floor(Math.random() * (window.innerWidth - $button.offsetWidth)),
          opacity: 1,
        });
        // eslint-disable-next-line no-unused-vars
        const rotate = gsap.timeline({
          scrollTrigger: {
            trigger: 'html',
            scrub: 0.2,
            start: 'top top',
            end: '+=10000',
          },
        }).to($button, {
          rotation: 360 * 5,
          duration: 1,
          ease: 'none',
        });
      },
    };
    dev.interactions.button();
  },
};
</script>
