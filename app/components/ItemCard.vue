<template lang="jade">
.item-card.am-cf.am-text-xs
  a(v-link="link")
    image-square.am-fl(:src="data.photos[0].url", :href="link")
    .name.am-text-sm.am-fl(:style="textStyle") {{ data.name }}
    .desc.am-text-xs.am-fl(:style="textStyle") {{ short_desc }}
</template>

<script>
export default {
  props: ['data', 'link'],
  data: function() {
    return {
      textStyle: {
        width: 0,
        visibility: 'hidden'
      }
    };
  },
  computed: {
    short_desc: function() {
      var charNumPerLine = Math.floor(parseInt(this.textStyle.width) / 12);
      var shortDescription = this.data.description.slice(0, charNumPerLine * 3 - 8);
      return (shortDescription.length < this.data.description.length ? shortDescription + '...' : shortDescription);
    }
  },
  attached: function() {
    var self = this;

    setTimeout(function() {
      self.textStyle.width = $('.item-card').width() - $('.item-card .image-square').width() + 'px';
      self.textStyle.visibility = 'visible';
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
  background-color: #fff;

  > a { color: inherit; }
  .image-square { width: 10em; height: 10em; }
  .name {
    font-weight: bold;
    padding: 0.75em;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .desc {
    padding: 0.75em;
  }
}
</style>
