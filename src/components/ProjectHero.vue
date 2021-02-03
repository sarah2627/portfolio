<template>
    <div class="projectHero">
      <h1 data-aos="fade-up" data-aos-duration="2000" appear> {{title}} </h1>
      <h2
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="200"
        appear
      >
        {{subTitle}}
      </h2>
    </div>
</template>

<script>
export default {
  name: 'ProjectHero',
  props: {
    title: String,
    subTitle: String,
  },
};
</script>
