<template>
    <div class="projetHero">
      <h1 data-aos="flip-up" data-aos-duration="2000" appear> {{title}} </h1>
      <h2 data-aos="flip-up"
          data-aos-duration="2000"
          data-aos-delay="200"
          appear> {{subTitle}} </h2>
    </div>
</template>

<script>
export default {
  name: 'ProjetHero',
  props: {
    title: String,
    subTitle: String,
  },
};
</script>
