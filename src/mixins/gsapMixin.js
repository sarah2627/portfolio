import Gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

Gsap.registerPlugin(ScrollTrigger);

export default {
  created() {
    this.Gsap = Gsap;
  },
  mounted() {
    this.Gsap.to('.cross', {
      rotation: 360,
      duration: 3,
      ease: 'none',
      repeat: -1,
    });
  },
};
