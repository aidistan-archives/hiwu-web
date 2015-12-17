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
        .img-wrapper(:style="{ backgroundImage: 'url(' + item.photos[0].url + ')' }", v-link="{ path: 'items/' + item.id, append: true }")
</template>

<script>
export default {
  props: ['data'],
  computed: {
    featureItems: function() {
      return this.data.items.slice(0, 9);
    }
  },
  attached: function() {
    $('.gallery-card .am-u-sm-4').height($('.gallery-card .am-u-sm-4').width());
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

  .img-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
}
</style>
