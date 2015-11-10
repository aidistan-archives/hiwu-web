<template lang="jade">
.item.am-cf.am-text-xs
  a(v-link="{ name: 'item', params: { id: data.id } }")
    img.am-img-responsive.am-fl(:src="data.photos[0].url")
    .name.am-fl(:style="textStyle") {{ data.name }}
    .desc.am-fl(:style="textStyle") {{ short_desc }}
</template>

<script>
export default {
  data: function() {
    return {
      textStyle: {
        width: 0,
        visibility: 'hidden'
      }
    };
  },
  props: ['data'],
  computed: {
    short_desc: function() {
      var charNumPerLine = Math.floor(parseInt(this.textStyle.width) / 12);
      var shortDescription = this.data.description.slice(0, charNumPerLine * 3 - 6);
      return (shortDescription.length < this.data.description.length ? shortDescription + '...' : shortDescription);
    }
  },
  attached: function() {
    var self = this;

    setTimeout(function() {
      self.textStyle.width = $('.item').width() - $('.item img').width() + 'px';
      self.textStyle.visibility = 'visible';
    }, 50);
  }
}
</script>

<style lang="scss">
// @import '../variables.scss';

.item {
  background-color: #fff;

  > a { color: inherit; }
  img { height: 9em; }
  .name { font-size: 1.2em; padding: 0.5em; }
  .desc { padding: 0.5em; }
}

.item + .item { margin-top: 1em; }
</style>
