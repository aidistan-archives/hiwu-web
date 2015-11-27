<template lang="jade">
.item-card.am-cf.am-text-xs
  a(v-link="link")
    img.am-img-responsive.am-fl(:src="data.photos[0].url")
    .name.am-fl(:style="textStyle") {{ data.name }}
    .desc.am-fl(:style="textStyle") {{ short_desc }}
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
      var shortDescription = this.data.description.slice(0, charNumPerLine * 3 - 6);
      return (shortDescription.length < this.data.description.length ? shortDescription + '...' : shortDescription);
    }
  },
  attached: function() {
    var self = this;

    setTimeout(function() {
      self.textStyle.width = $('.item-card').width() - $('.item-card img').width() + 'px';
      self.textStyle.visibility = 'visible';
    }, 50);
  }
}
</script>

<style lang="scss">
// @import '../stylesheets/variables.scss';

.item-card {
  background-color: #fff;

  > a { color: inherit; }
  img { height: 9em; }
  div { padding: 0.5em; }
  .name {
    font-size: 1.2em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
