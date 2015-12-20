<template lang="jade">
.gallery-card.am-padding-xs
  a(v-link="{ path: 'galleries/' + data.id, append: true }")
    header.am-cf.am-padding-horizontal-xs.am-margin-bottom-xs
      img.am-img-responsive.am-circle.am-fl.am-margin-right(:src="data.hiwuUser.avatar")
      .am-vertical-align.am-fr(style="height: 40px;")
        .am-vertical-align-middle.am-text-sm(style="padding-top: 3px;") {{ data.items.length }} 件
      .am-vertical-align(style="height: 40px;")
        .am-vertical-align-middle {{ data.hiwuUser.nickname }}「{{ data.name }}」
    .am-g.am-g-collapse
      .am-u-sm-4.am-u-end(v-for="item in featureItems", style="padding: 1px;")
        image-square(:src="item.photos[0].url", :href="{ path: 'items/' + item.id, append: true }")
</template>

<script>
export default {
  props: ['data'],
  computed: {
    featureItems: function() {
      return this.data.items.slice(0, 9);
    }
  },
  components: {
    'image-square': require('../components/ImageSquare.vue')
  }
}
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.gallery-card {
  background-color: #fff;

  > a { color: inherit; }

  header {
    img { max-height: 40px; }
    .am-fr { color: $grey; }
  }
}
</style>
