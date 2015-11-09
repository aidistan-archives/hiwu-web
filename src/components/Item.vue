<template lang="jade">
.item.am-cf.am-text-xs
  a(v-link="{ path: '/items/' + data.id }")
    img.am-img-responsive.am-fl(:src="data.photos[0].url")
    .name.am-fl(:style="{width: textWidth + 'px'}") {{ data.name }}
    .desc.am-fl(:style="{width: textWidth + 'px'}") {{ short_desc }}
</template>

<script>
export default {
  data: function() {
    return {
      textWidth: 0
    };
  },
  props: {
    data: {
      default: {
        name: '',
        description: '',
        photos: [{ url: '' }]
      }
    }
  },
  computed: {
    short_desc: function() {
      var charNumPerLine = Math.floor(this.textWidth / parseInt($('.item').css('font-size')));
      var shortDescription = this.data.description.slice(0, charNumPerLine * 3 - 6);
      return (shortDescription.length < this.data.description.length ? shortDescription + '...' : shortDescription);
    }
  },
  attached: function() {
    this.textWidth = $('.item').width() - $('.item img').width();
  }
}
</script>

<style lang="scss">
@import '../variables.scss';

.item {
  background-color: #fff;

  a { color: inherit; }
  img { height: 9em; }
  .name { font-size: 1.2em; padding: 0.5em; }
  .desc { padding: 0.5em; }
}

.item + .item { margin-top: 1em; }
</style>
