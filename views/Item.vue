<template lang="jade">
#item.am-margin-sm
  topbar.am-margin-bottom(:title="data.name", :left-link="{ name: 'gallery', params: { id: data.galleryId } }")
  #item-photo
    img.am-img-responsive.am-center(:src="data.photos[0].url")
    #item-photo-above.am-g.am-margin-bottom-sm
      .am-u-sm-2
        .am-text-sm.am-text-center {{ date }} <br/> {{ data.city }}
      .am-u-sm-2
        img.am-img-responsive.am-center(:src="data.hiwuUser.avatar")
  #item-desc.am-padding
    h3 {{ data.name }}
    p.am-text-xs {{ data.description }}
    span.am-icon-heart-o.am-margin-right-sm
    span.am-margin-right {{ data.likes  }}
    span.am-icon-comment-o.am-margin-right-sm
    span {{ data.comments.length }}
    span.am-icon-ellipsis-h.am-fr
  #item-comments
    template(v-for="comment in data.comments") {{ comment }}
</template>

<script>
export default {
  data: function() {
    return {
      data: {
        name: '',
        description: '',
        photos: [{ url: '' }],
        comments: [],
        hiwuUser: { avatar: '' }
      }
    };
  },
  computed: {
    date: function() {
      var date = '';
      if (this.data.date_y > 0)
        date += this.data.date_y;
      // if (this.data.date_m > 0)
      //   date += '.' + this.data.date_m;
      // if (this.data.date_d > 0)
      //   date += '.' + this.data.date_d;
      return date;
    }
  },
  created: function (done) {
    var self = this

    self.$http.get('http://palace.server.hiwu.ren/api/Items/' + self.$route.params.id + '/publicView', function (data, status, request) {
      self.data = data;
    });
  },
  components: {
    topbar: require('../components/Topbar.vue')
  }
}
</script>

<style lang="scss">
@import '../stylesheets/variables.scss';

#item-photo {
  position: relative;
}

#item-photo-above {
  position: absolute;
  bottom: 0;

  .am-text-sm {
    color: $light-grey;
    background-color: rgba($dark-grey, 0.4);
  }
}

#item-desc {
  background-color: #A0E7EB;
  span { color: $grey; }
}
</style>
