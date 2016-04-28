<template lang="jade">
#archive
  #archive-topbar.am-margin-bottom-sm
    topbar(title="往期博物展", :left-link="{ name: 'today' }")
  #archive-content.am-container.am-padding-0
    .am-text-center.am-margin-xl(v-if="$loadingRouteData")
      span.am-icon-circle-o-notch.am-icon-spin.am-icon-lg
      h3.am-margin-top-xl 正在努力加载中...
    template(v-if="!$loadingRouteData", v-for="(date, galleries) in data")
      .am-u-sm-12.am-margin-sm.am-margin-bottom-xs
        .archive-date.am-text-sm {{ date }}
      .am-u-sm-12.am-u-md-6.am-u-lg-4.am-u-end(v-for="gallery in galleries")
        gallery(:data="gallery", :link="{ name: 'gallery', params: { gallery_id: gallery.id } }")
        .archive-seperator(v-show="$index < galleries.length - 1")
</template>

<script>
export default {
  data: function() {
    return {
      data: {}
    };
  },
  route: {
    activate: function(transition) {
      this.$root.configJweixin({
        share_content: {
          title: '往期博物展 - 物境未觉',
          desc: '物境未觉，与您一起发现时光里的珍物，共建游历初心的物件文化，感受万物欢喜，体会万物动情！',
          link: window.location.href,
          imgUrl: 'http://hiwu.ren/logo-black-1024.png'
        }
      });

      transition.next();
    },
    data: function(transition) {
      var self = this;

      self.$http.get(
        self.$root.apiUrl + '/SelectedGalleries/publicView'
      ).then(function(res) {
        self.data = {};

        for (var entry of res.data) {
          var date = entry.date_y + '年' + entry.date_m + '月';
          if (self.data[date] === undefined) self.data[date] = [];
          self.data[date].push(entry.gallery);
        }

        transition.next();
      });
    }
  },
  components: {
    topbar: require('../components/Topbar.vue'),
    gallery: require('../components/GalleryLine.vue')
  }
}
</script>

<style lang="scss">
@import '../variables.scss';

.archive-date {
  color: $grey;
}

.archive-seperator {
  background: transparent;
  height: 2px;
  border-left:16px solid #fff;
  border-right:16px solid #fff;
}
</style>
