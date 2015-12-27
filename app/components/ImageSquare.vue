<template lang="jade">
a.image-square(:style="style", v-link="href")
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    href: {
      default: null
    }
  },
  computed: {
    style: function() {
      return {
        backgroundImage: 'url(' + this.src + '@!200x200)'
      }
    }
  },
  attached: function() {
    $(this.$el).height($(this.$el).width());
  }
}
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.image-square {
  display: block;
  position: relative;

  width: 100%;
  height: 100%;

  cursor: pointer;

  background-position: center;
  background-size: cover;
}
</style>
