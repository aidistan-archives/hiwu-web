<template lang="jade">
.gallery-line.am-padding-horizontal-sm.am-padding-vertical-xs
  a(v-link="link")
    header.am-cf
      img.am-img-responsive.am-circle.am-fl.am-margin-right(:src="data.hiwuUser.avatar")
      .am-vertical-align.am-fr(style="height: 40px;")
        .am-vertical-align-middle.am-text-sm(style="padding-top: 3px;") {{ data.items.length }} 件
      .am-vertical-align(style="height: 40px;")
        .am-vertical-align-middle {{ data.hiwuUser.nickname }}「{{ data.name }}」
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

<style lang="scss" scoped>
@import '../variables.scss';

.gallery-line {
  background-color: #fff;

  > a { color: inherit; }

  header {
    img { max-height: 40px; }
    .am-fr { color: $grey; }
  }
}
</style>
