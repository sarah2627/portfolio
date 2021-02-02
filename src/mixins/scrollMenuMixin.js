const scrollMenuMixin = (parameter) => ({
  created() {
    // blocks the scroll when the menu is open
    this.$eventBus.$on('noScrollMenu', () => { // listening to the event
      const home = document.querySelector(`#${parameter}`);
      home.style.overflow = 'hidden';
      home.style.height = '100vh';
    });
    // restores the scroll when the menu is open
    this.$eventBus.$on('scrollMenu', () => { // listening to the event
      const home = document.querySelector(`#${parameter}`);
      home.style.overflow = 'scroll';
      home.style.height = 'auto';
    });
  },
  beforeDestroy() {
    // stop listening to the event
    this.$eventBus.$off('noScrollMenu');
    this.$eventBus.$off('scrollMenu');
  },
});

export default scrollMenuMixin;
