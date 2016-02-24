<template lang="jade">
#item
  #item-topbar
    topbar.am-margin-bottom-sm(title="物品详情", :left-link="{ name: 'gallery', params: { gallery_id: data.galleryId } }")
    .am-text-center.am-margin-xl(v-if="$loadingRouteData")
      i.am-icon-circle-o-notch.am-icon-spin.am-icon-lg
      h3.am-margin-top-xl 正在努力加载中...
    .am-container.am-padding-0(v-else)
      #item-photo.am-u-sm-12.am-u-md-9.am-u-lg-6.am-u-sm-centered
        img.am-img-responsive.am-center(:src="photo")
        .am-g.am-g-collapse.am-margin-top(v-if="data.photos.length > 1")
          .am-u-sm-2.am-u-md-1.am-u-end(v-for="photo in data.photos")
            image-square(:src="photo.url", @click="change(photo.url)")
      #item-desc.am-u-sm-12.am-u-md-9.am-u-lg-6.am-u-sm-centered.am-margin-top-sm.am-padding-top
        h2.am-text-xl.am-margin-bottom-0 {{ data.name }}
        .am-margin-bottom-lg {{ date }} {{ data.city }}
        p(v-for="desc in descriptions") {{ desc }}
</template>

<script>
var qs = require('querystring');

export default {
  data: function() {
    return {
      data: {
        name: '加载中...',
        description: '',
        hiwuUser: { avatar: '' },
        photos: [{ url: '' }],
        comments: []
      },
      photo: ''
    };
  },
  computed: {
    date: function() {
      var date = '';
      if (this.data.date_y > 0)
        date += this.data.date_y + '年';
      if (this.data.date_m > 0)
        date += this.data.date_m + '月';
      if (this.data.date_d > 0)
        date += this.data.date_d + '日';
      return date;
    },
    descriptions: function() {
      return this.data.description.split('\n');
    }
  },
  route: {
    data: function(transition) {
      var self = this;

      self.$http.get(self.$root.apiUrl + '/Items/' + self.$route.params.item_id + '/publicView?' + qs.stringify({
        access_token: self.$root.accessToken
      }), function (data, status, request) {
        self.data = data;
        self.photo = data.photos[0].url;

        self.$root.configJweixin({
          share_content: {
            title: self.data.name + ' - 物境未觉',
            desc: self.data.description.toString(),
            link: window.location.href,
            imgUrl: self.photo + '@!200x200'
          }
        });

        transition.next();
      });
    }
  },
  methods: {
    change: function(url) {
      this.photo = url;
    }
  },
  components: {
    topbar: require('../components/Topbar.vue'),
    'image-square': require('../components/ImageSquare.vue'),
  }
}
</script>

<style lang="scss">
@import '../variables.scss';

#item-desc {
  background-color: #fff;

  p { color: $grey; }

  p:last-child {
    margin-bottom: 0px;
    padding-bottom: 1.6rem;
  }
}
</style>
