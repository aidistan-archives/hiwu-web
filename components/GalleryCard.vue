<template lang="jade">
.gallery-card.am-padding-sm
  a(v-link="{ path: 'galleries/' + data.id, append: true }")
    header.am-cf.am-margin-bottom-sm
      img.am-img-responsive.am-circle.am-fl.am-margin-right(:src="data.hiwuUser.avatar")
      .am-vertical-align.am-fr(style="height: 45px;")
        .am-vertical-align-middle {{ data.items.length }}
      .am-vertical-align(style="height: 45px;")
        .am-vertical-align-middle {{ data.hiwuUser.nickname }} 『{{ data.name }}』
    .am-g.am-g-collapse
      .am-u-sm-4(v-for="item in featureItems")
        a(v-link="{ path: 'items/' + item.id, append: true }")
          img.am-img-responsive(:src="item.photos[0].url", style="padding: 1px;")
</template>

<script>
export default {
  props: ['data'],
  computed: {
    featureItems: function() {
      return this.data.items.slice(0, 9);
    }
  }
}
</script>

<style lang="scss">
@import '../stylesheets/variables.scss';

.gallery-card {
  background-color: #fff;

  > a { color: inherit; }
  header {
    img { max-height: 45px; }
    .am-fr { color: $grey; }
  }
}
</style>
