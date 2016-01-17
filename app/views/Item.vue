<template lang="jade">
#item
  #item-topbar
    topbar.am-margin-bottom(:title="data.name", :left-link="{ name: 'gallery', params: { gallery_id: data.galleryId } }")
    .am-text-center.am-margin-xl(v-if="$loadingRouteData")
      i.am-icon-circle-o-notch.am-icon-spin.am-icon-lg
      h3.am-margin-top-xl 正在努力加载中...
    .am-container.am-g-collapse(v-else)
      #item-photo.am-u-sm-12.am-u-md-9.am-u-lg-6.am-u-sm-centered
        img.am-img-responsive.am-center(:src="photo")
        footer.am-g.am-g-collapse.am-padding-xs(v-if="data.photos.length > 1")
          .am-u-sm-2.am-u-md-1.am-u-end(v-for="photo in data.photos", style="padding: 1px;")
            image-square(:src="photo.url", @click="change(photo.url)")
      #item-desc.am-u-sm-12.am-u-md-9.am-u-lg-6.am-u-sm-centered.am-margin-top
        h2.am-margin-bottom-sm {{ data.name }}
        .am-text-xs {{ date }}
        .am-text-xs {{ data.city }}
        p.am-text-sm.am-margin-top-sm(v-for="desc in descriptions") {{ desc }}
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
        date += this.data.date_y + ' 年';
      if (this.data.date_m > 0)
        date += '.' + this.data.date_m + ' 月';
      if (this.data.date_d > 0)
        date += '.' + this.data.date_d + ' 日';
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
  ready: function() {
    $('#item').height($(window).height());
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

#item-photo {
  position: relative;

  img { width: 100%; }

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}

#item-desc p { color: $grey; }
</style>
