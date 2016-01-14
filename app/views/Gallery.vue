<template lang="jade">
#gallery
  #gallery-topbar
    topbar.am-margin-bottom(:title="data.name", :left-link="{ name: 'today' }")
  .am-text-center.am-margin-xl(v-if="$loadingRouteData")
    i.am-icon-circle-o-notch.am-icon-spin.am-icon-lg
    h3.am-margin-top-xl 正在努力加载中...
  .am-container(v-else)
    #gallery-header.am-g.am-margin-vertical
      .am-u-sm-5.am-u-sm-centered
        img.am-img-responsive.am-circle.am-center(:src="data.hiwuUser.avatar")
      .am-u-sm-12
        h2.am-margin-vertical.am-text-center {{ title }}
        p.am-text-sm {{ data.description }}
    #gallery-items.am-g
      .am-u-sm-12.am-u-lg-6.am-u-end(v-for="item in data.items")
        item.am-margin-bottom-sm(:data="item", :link="{ name: 'item', params: { item_id: item.id } }")
</template>

<script>
export default {
  data: function() {
    return {
      data: {
        name: '加载中...',
        description: '',
        items: [],
        hiwuUser: { nickname: '', avatar: '' }
      }
    };
  },
  computed: {
    title: function() {
      return this.data.hiwuUser.nickname + '「' + this.data.name + '」';
    }
  },
  route: {
    data: function(transition) {
      var self = this;

      self.$http.get(self.$root.apiUrl + '/Galleries/' + self.$route.params.gallery_id + '/publicView', function (data, status, request) {
        self.data = data;

        self.$root.configJweixin({
          share_content: {
            title: self.title + ' - 物境未觉',
            desc: self.data.description,
            link: window.location.toString(),
            imgUrl: self.data.hiwuUser.avatar
          }
        });

        transition.next();
      });
    }
  },
  ready: function() {
    $('#gallery').height($(window).height());
  },
  components: {
    topbar: require('../components/Topbar.vue'),
    item: require('../components/ItemCard.vue')
  }
}
</script>

<style lang="scss">
@import '../variables.scss';

#gallery {
  overflow-x: hidden;
  overflow-y: scroll;
}

#gallery-header p {
  color: $grey;
  text-align: justify;
}
</style>
