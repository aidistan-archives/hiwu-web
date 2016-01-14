<template lang="jade">
#today
  #today-topbar
    topbar(title="每日博物展", :left-link="{ name: 'archive' }", left-icon="bars")
  #today-banner
    .css56cffdd6423.am-text-lg.am-text-center.am-margin-vertical-xl
      span 物境未觉，与您一起发现时光里的珍物
      br
      span 共建游历初心的物件文化
      br
      span 感受万物欢喜，体会万物动情
    #today-apply.am-text-center.am-margin-vertical-xl(v-link="{ name: 'apply' }")
      span.am-padding.am-padding-horizontal-lg
        img.am-margin-right-xs(src="../assets/logo-black-48.png", alt="申请", width="32", height="32")
        span.am-padding-right-lg 申请建立我的博物馆
  #today-galleries.am-container
    template(v-if="data !== null")
      gallery.am-margin-sm(v-for="entry in data", :data="entry.gallery")
    template(v-else)
      .am-text-center.am-margin-xl.am-padding-xl
        i.am-icon-spinner.am-icon-spin.am-icon-lg.am-margin-top-xl
        h3 正在努力加载中...
</template>

<script>
export default {
  data: function() {
    return {
      data: null
    };
  },
  route: {
    activate: function(transition) {
      this.$root.configJweixin({
        share_content: {
          title: '每日博物展 - 物境未觉',
          desc: '物境未觉，与您一起发现时光里的珍物，共建游历初心的物件文化，感受万物欢喜，体会万物动情！',
          link: window.location.toString(),
          imgUrl: 'http://palace.server.hiwu.ren/logo-black-1024.png'
        }
      });

      transition.next();
    },
    data: function(transition) {
      var self = this;

      self.$http.get(self.$root.apiUrl + '/SelectedGalleries/publicView', function(data, status, request) {
        self.data = data.slice(0, 8);
      });

      transition.next();
    }
  },
  components: {
    topbar: require('../components/Topbar.vue'),
    gallery: require('../components/GalleryCard.vue')
  }
}
</script>

<style lang="scss">
@import '../variables.scss';

#today-apply {
  cursor: pointer;

  span {
    background-image: url('../assets/btn-background.png');
    background-size: 100% 100%;
  }
}
</style>
