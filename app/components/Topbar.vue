<template lang="jade">
.topbar
  .am-text-center.am-padding-sm.font-csjzbk {{ title }}
    a.am-fl.am-icon-fw(v-show="leftLink", v-link="leftLink", :class="['am-icon-' + leftIcon]")
    a.am-fr(v-link="{ name: 'today' }", :style="{ visibility: rightIcon ? 'visible' : 'hidden' }")
      img(src="../assets/logo-primary-48.png", alt="申请", width="25.6", height="25.6")
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
    rightIcon: {
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.topbar {
  position: relative;

  color: $primary;
  background: rgba($grey-darker, 0.85);
  letter-spacing: 1px;
  box-shadow: 0 1px 3px $grey-dark;

  a { color: inherit; }
  a.am-fl { color: $grey; }
}
</style>
