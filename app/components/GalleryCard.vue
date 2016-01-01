<template lang="jade">
a.gallery-card.am-padding-xs(v-link="{ name: 'gallery', params: { gallery_id: data.id } }")
  header.am-cf.am-padding-horizontal-xs.am-margin-bottom-xs
    .thumb.am-fl
      img.am-img-responsive.am-circle.am-fl(:src="data.hiwuUser.avatar")
    .title.am-vertical-align.am-fl.am-margin-horizontal-sm(:style='titleStyle')
      span.am-vertical-align-middle {{ data.hiwuUser.nickname }}「{{ data.name }}」
    .badge.am-vertical-align.am-fr
      span.am-vertical-align-middle.am-text-sm {{ data.items.length }} 件
  .am-g.am-g-collapse
    .am-u-sm-4.am-u-md-3.am-u-lg-2.am-u-end(v-for="item in featureItems", style="padding: 1px;")
      image-square(:src="item.photos[0].url", :href="{ name: 'item', params: { item_id: item.id } }")
</template>

<script>
export default {
  data: function() {
    return {
      titleStyle: { width: '0px' }
    };
  },
  props: ['data'],
  computed: {
    featureItems: function() {
      return this.data.items.slice(0, $(window).width() > 640 ? 12 : 9);
    }
  },
  attached: function() {
    this.titleStyle.width = $(this.$el).width() - 80 - 20 - 12 + 'px';
  },
  components: {
    'image-square': require('../components/ImageSquare.vue')
  }
}
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.gallery-card {
  display: block;

  color: inherit;
  background-color: #fff;

  header {
    .thumb, .badge { width: 40px; }
    .thumb, .title, .badge { height: 40px; }

    .title span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .badge span{
      padding-top: 3px;
      text-align: right;
      color: $grey;
    }
  }
}
</style>
