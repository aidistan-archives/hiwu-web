<template lang="jade">
a.item-card.am-g.am-g-collapse(v-link="link")
  .am-u-sm-4
    .am-margin-sm
      image-square(:src="data.photos[0].url", :href="link")
  .am-u-sm-8
    .am-margin-sm
      h3.am-text-lg {{ data.name }}
    .am-margin-sm {{ shortDescription }}
</template>

<script>
export default {
  data: function() {
    return {
      shortDescription: ''
    };
  },
  props: ['data', 'link'],
  attached: function() {
    var self = this;

    setTimeout(function() {
      var eles = $(self.$el).find('.am-margin-sm');

      var lineNum = Math.floor(($(eles[0]).height() - $(eles[1]).height() - 20) / 25.6);
      var charNumPerLine = Math.floor($(eles[2]).width() / 16);

      self.shortDescription = self.data.description.slice(0, (charNumPerLine - 1) * lineNum);
      if (self.shortDescription.length < self.data.description.length) {
        self.shortDescription += '...';
      }
    }, 50);
  },
  components: {
    'image-square': require('../components/ImageSquare.vue')
  }
}
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.item-card {
  display: block;
  color: inherit;
  background-color: #fff;

  h3.am-text-lg {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-desc {
    height: 100%;
  }
}
</style>
