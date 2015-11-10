<template lang="jade">
.topbar.am-cf.am-margin-sm
  .am-fl
    a(v-show="leftLink", v-link="leftLink")
      .am-text-lg(:class="['am-icon-' + leftIcon]")
  .am-fr
    a(v-show="rightLink", v-link="rightLink")
      .am-text-lg(:class="['am-icon-' + rightIcon]")
  .am-text-center {{ title }}
</template>

<script>
export default {
  props: {
    leftLink: {
      default: false
    },
    leftIcon: {
      type: String,
      default: 'chevron-left'
    },
    rightLink: {
      type: String,
      default: false
    },
    rightIcon: {
      type: String,
      default: 'chevron-right'
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import '../variables.scss';

.topbar {
//   border-bottom: solid 1px $grey;
  a { color: inherit; }
}
</style>
