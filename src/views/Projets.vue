<template>
    <div id="projets">
        test
    </div>
</template>

<script>
export default {
  name: 'Projets',
  props: {
    p_id: { type: Number },
  },
  data() {
    return {
      id: this.p_id,
      activeItem: 0,
    };
  },
};
</script>
