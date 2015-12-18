<template lang="jade">
#today.view
  #gallery-topbar
    topbar(title="每日博物展", left-link="/archive", left-icon="bars")
  #gallery-banner
    .css56cffdd6423.am-text-lg.am-text-center.am-margin-vertical-xl
      span 物境未觉，与您一起发现时光里的珍物
      br
      span 共建游历初心的物件文化
      br
      span 感受万物欢喜，体会万物动情
    #today-apply.am-text-center.am-margin-vertical-xl(v-link="{ name: 'apply' }")
      span.am-padding.am-padding-horizontal-lg
        img.am-margin-right-xs(src="/logo-48.png", alt="申请", width="32", height="32")
        span.am-padding-right-lg 申请建立我的博物馆
  #today-galleries
    template(v-if="data.length > 0")
      gallery.am-margin-sm(v-for="entry in data", :data="entry.gallery")
    template(v-else)
      .am-text-center.am-margin-xl.am-padding-xl
        i.am-icon-spinner.am-icon-spin.am-icon-lg.am-margin-top-xl
        h3 正在努力加载中...
  #today-child.view-wrapper
    router-view
</template>

<script>
export default {
  data: function() {
    return {
      data: {}
    };
  },
  created: function(done) {
    var self = this

    self.$http.get(self.$root.apiUrl + '/Today/publicView', function (data, status, request) {
      self.data = data;
    });
  },
  ready: function() {
    $('#today').height($(window).height());
  },
  components: {
    topbar: require('../components/Topbar.vue'),
    gallery: require('../components/GalleryCard.vue')
  }
}
</script>

<style lang="scss">
@import '../variables.scss';

#today {
  overflow-x: hidden;
  overflow-y: scroll;
}

#today-apply {
  cursor: pointer;

  span {
    background-image: url('/btn-background.png');
    background-size: 100% 100%;
  }
}
</style>
