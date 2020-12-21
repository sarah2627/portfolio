<template>
    <div class="hero">
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
