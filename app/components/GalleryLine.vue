<template lang="jade">
a.gallery-line.am-padding-horizontal-sm.am-padding-vertical-xs.am-cf(v-link="link")
  .thumb.am-fl
    img.am-img-responsive.am-circle.am-fl(:src="data.hiwuUser.avatar")
  .title.am-vertical-align.am-fl.am-margin-horizontal-sm(:style='titleStyle')
    span.am-vertical-align-middle {{ title }}
  .badge.am-vertical-align.am-fr
    span.am-vertical-align-middle.am-text-sm {{ data.items.length }} 件
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
    this.titleStyle.width = $(this.$el).width() - 80 - 20 - 1 + 'px';
  }
}
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.gallery-line {
  display: block;

  color: inherit;
  background-color: #fff;

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
</style>
