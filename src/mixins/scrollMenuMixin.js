const scrollMenuMixin = (parameter) => ({
  created() {
    this.$eventBus.$on('noScrollMenu', () => {
      const home = document.querySelector(`#${parameter}`);
      home.style.overflow = 'hidden';
      home.style.height = '100vh';
    });
    this.$eventBus.$on('scrollMenu', () => {
      const home = document.querySelector(`#${parameter}`);
      home.style.overflow = 'scroll';
      home.style.height = 'auto';
    });
  },
  beforeDestroy() {
    this.$eventBus.$off('noScrollMenu');
    this.$eventBus.$off('scrollMenu');
  },
});

export default scrollMenuMixin;
