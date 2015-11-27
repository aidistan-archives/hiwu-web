<template lang="jade">
.gallery-line.am-padding-horizontal-sm.am-padding-vertical-xs
  a(v-link="link")
    header.am-cf
      img.am-img-responsive.am-circle.am-fl.am-margin-right(:src="data.hiwuUser.avatar")
      .am-vertical-align.am-fr(style="height: 45px;")
        .am-vertical-align-middle {{ data.items.length }}
      .am-vertical-align(style="height: 45px;")
        .am-vertical-align-middle {{ data.hiwuUser.nickname }} 『{{ data.name }}』
</template>

<script>
export default {
  props: ['data', 'link'],
  computed: {
    featureItems: function() {
      return this.data.items.slice(0, 9);
    }
  }
}
</script>

<style lang="scss">
@import '../stylesheets/variables.scss';

.gallery-line {
  background-color: #fff;

  > a { color: inherit; }
  header {
    img { max-height: 45px; }
    .am-fr { color: $grey; }
  }
}
</style>
