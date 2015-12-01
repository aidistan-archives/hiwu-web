<template lang="jade">
#mine.view
  #mine-topbar.am-padding-sm
    a(v-link="{ name: 'today' }")
      img.am-margin-sm.am-round(src="/logo-48.png", alt="今日博物展", width="25.6", height="25.6")
    #mine-info.am-cf
      img.am-circle.am-fl.am-margin-right(:src="data.avatar", height="48")
      .am-text-lg {{ data.nickname }}
      .am-text-xs {{ data.description }}
    #mine-stat.am-margin-top
      span.am-margin-vertical.am-padding-xs.am-padding-horizontal.am-round.am-text-sm
        span {{ data.galleries.length }} 长廊
        span.am-margin-right-lg
        span {{ itemNum }} 物品
  #mine-galleries
    gallery.am-margin-sm.am-margin-bottom(v-for="gallery in data.galleries", :data="gallery")
</template>

<script>
var querystring = require('querystring');

export default {
  data: function() {
    return {
      data: {
        nickname: '',
        description: '',
        avatar: '',
        galleries: []
      }
    };
  },
  computed: {
    itemNum: function() {
      var num = 0;
      for (var gallery of this.data.galleries) {
        num += gallery.items.length;
      }
      return num;
    }
  },
  created: function (done) {
    var self = this;

    self.$http.get('http://palace.server.hiwu.ren/api/HiwuUsers/' + self.$root.userId + '?' + querystring.stringify({
      access_token: self.$root.accessToken,
      filter: JSON.stringify({
        include: {
          galleries: [
            { items: ['photos'] },
            'hiwuUser'
          ]
        }
      })
    }), function (data, status, request) {
      self.data = data;
    });
  },
  ready: function() {
    $('#mine').height($(window).height());
  },
  components: {
    topbar: require('../components/Topbar.vue'),
    gallery: require('../components/GalleryCard.vue')
  }
}
</script>

<style lang="scss">
@import '../stylesheets/variables.scss';

#mine {
  overflow-x: hidden;
  overflow-y: scroll;
}

#mine-topbar {
  position: relative;

  > a {
    position: absolute;
    top: 0;
    right: 0;

    > img {
      background: $primary;
    }
  }
}

#mine-stat > span {
  background-color: #fff;
}
</style>
