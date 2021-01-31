<template>
    <div class="preloader">
        <div class="preloader__status">
            <div status class="preloader__status-text">I'm {{loaded}} % done!</div>
            <div class="preloader__status-loader">
                <div loader :style="loadStyle" class="preloader__status-bar"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      loaded: 0,
      loading: null,
      loadStyle: {
        width: '0%',
      },
    //   statusElem: $('[status]'),
    //   loader: $('[loader]'),
    //   body: $('body'),
    };
  },
  ready() {
    // this.preloader = $(this.$el);
    this.removeScrolling();
    this.startLoading();
  },
  watch: {
    loaded() {
      this.loadStyle.width = `${this.loaded}%`;
    },
  },
  methods: {
    removeScrolling() {
      this.body.css('overflow', 'hidden');
    },
    startLoading() {
      this.loading = setInterval(this.load, 20);
    },
    load() {
      // eslint-disable-next-line no-unused-expressions
    //   this.loaded < 100 ? this.loaded++ : this.doneLoading();
    },
    doneLoading() {
      clearInterval(this.loading);
      this.updateStatus();
    },
    updateStatus() {
      this.statusElem.text('Lets get crazay !');
      this.loader.fadeOut();
      this.animatePreloader();
    },
    removePreloader() {
      this.preloader.remove();
      this.body.removeAttr('style');
      this.animateWebsite();
    },
    animateWebsite() {
      console.log('lets get pretty');
    },
    // animatePreloader() {
    //   let app = this,
    //       height = this.preloader.height(),
    //       properties = {'margin-top': `-${height}`},
    //   options = {
    //             duration: 1000,
    //             easing: 'swing',
    //             complete(){
    //                app.removePreloader()
    //             }
    //          };
    //      this.preloader.delay(500).animate(properties, options)
    //   },
  },
};
</script>
