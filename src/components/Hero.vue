<template>
    <div class="hero" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
      <h1> {{title}} </h1>
    </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: String,
  },
};
</script>
