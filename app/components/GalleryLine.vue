<template lang="jade">
a.gallery-line.am-padding-horizontal-sm.am-padding-vertical-xs.am-cf(v-link="link")
  img.am-img-responsive.am-circle.am-fl(:src="data.hiwuUser.avatar")
  .am-vertical-align.am-fl
    .title.am-vertical-align-middle.am-padding-horizontal(:style='titleStyle') {{ title }}
  .am-vertical-align.am-fr
    .badge.am-vertical-align-middle.am-text-sm {{ data.items.length }} 件
</template>

<script>
export default {
  data: function() {
    return {
      titleStyle: { width: '0px' }
    };
  },
  props: ['data', 'link'],
  computed: {
    title: function() {
      return this.data.hiwuUser.nickname + '「' + this.data.name + '」';
    }
  },
  attached: function() {
    this.titleStyle.width = $(this.$el).find('.am-fr').position().left - $(this.$el).find('.am-vertical-align.am-fl').position().left + 'px';
  }
}
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.gallery-line {
  display: block;

  color: inherit;
  background-color: #fff;

  img, .am-vertical-align { height: 40px; }

  .title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .badge {
    color: $grey;
    padding-top: 3px;
  }
}
</style>
