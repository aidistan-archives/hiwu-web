<template lang="jade">
.topbar.am-cf.am-margin-sm
  .am-fl L
  .am-fr R
  .am-text-center {{ title }}
</template>

<script>
export default {
  props: {
    title: {
      // type: String,
      default: 'Untitled'
    }
  }
}
</script>

<style lang="scss">
@import '../variables.scss';

.topbar {
  border-bottom: solid 1px $grey;
}
</style>
