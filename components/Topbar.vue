<template lang="jade">
.topbar
  .am-text-center {{ title }}
  a.left(v-show="leftLink", v-link="leftLink")
    .am-text-lg(:class="['am-icon-' + leftIcon]")
  a.right(v-show="rightLink", v-link="rightLink")
    .am-text-lg(:class="['am-icon-' + rightIcon]")
  hr.am-margin-top-sm.am-margin-bottom-sm(v-show="hasBorder")
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    leftLink: {
      default: false
    },
    leftIcon: {
      type: String,
      default: 'chevron-left'
    },
    rightLink: {
      default: false
    },
    rightIcon: {
      type: String,
      default: 'chevron-right'
    },
    hasBorder: {
      default: false
    }
  }
}
</script>

<style lang="scss">
@import '../stylesheets/variables.scss';

.topbar {
  position: relative;

  a {
    color: inherit;
    position: absolute;
    top: 0;

    &.left  { left: 0 }
    &.right { right: 0 }
  }

  hr {
    border-bottom: solid 2px $light-grey;
  }
}
</style>
