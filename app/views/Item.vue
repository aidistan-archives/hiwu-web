<template lang="jade">
#item
  #item-topbar
    topbar.am-margin-bottom(:title="data.name", :left-link="{ name: 'gallery', params: { gallery_id: data.galleryId } }")
  #item-photo.am-container
    img.am-img-responsive.am-center(:src="photo")
    footer.am-padding-xs(v-if="data.photos.length > 1")
      .am-g.am-g-collapse.am-margin-horizontal
        .am-u-sm-2.am-u-lg-1.am-u-end(v-for="photo in data.photos", style="padding: 1px;")
          image-square(:src="photo.url", @click="change(photo.url)")
  #item-desc.am-container.am-margin-top-xl
    h2.am-margin-bottom-sm {{ data.name }}
    .am-text-xs {{ date }}
    .am-text-xs {{ data.city }}
    p.am-text-sm.am-margin-top-sm {{ data.description }}
</template>

<script>
var qs = require('querystring');

export default {
  data: function() {
    return {
      data: {
        name: '',
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
    }
  },
  created: function () {
    var self = this;

    self.$http.get(self.$root.apiUrl + '/Items/' + self.$route.params.item_id + '/publicView?' + qs.stringify({
      access_token: self.$root.accessToken
    }), function (data, status, request) {
      self.data = data;
      self.photo = data.photos[0].url;
    });
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

#item {
  overflow-x: hidden;
  overflow-y: scroll;
}

#item-photo {
  position: relative;

  img { width: 100%; }

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    img {
      cursor: pointer;
    }
  }
}

#item-desc p {
  color: $grey;
}
</style>
