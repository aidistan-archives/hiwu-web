<template lang="jade">
.topbar
  .am-text-center.am-padding-sm {{ title }}
    a.am-fl(v-show="leftLink", v-link="leftLink", :class="['am-icon-' + leftIcon]")
    a.am-fr(v-show="rightLink", v-link="rightLink", :class="['am-icon-' + rightIcon]")
  hr(v-show="hasBorder")
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

<style lang="scss" scoped>
@import '../stylesheets/variables.scss';

.topbar {
  position: relative;

  a { color: inherit; }

  hr {
    margin: 0;
    border-bottom: solid 2px $light-grey;
  }
}
</style>
