<template lang="jade">
#item.view
  #item-photo.am-margin-horizontal-sm.am-margin-top-sm
    img.am-img-responsive.am-center(:src="data.photos[0].url")
    #item-photo-header.am-g.am-margin-top-sm
      .am-u-sm-2
        a.am-icon-chevron-left.am-link-muted(v-link="{ path: '..' }")
    #item-photo-footer.am-g.am-margin-bottom-sm
      .am-u-sm-2
        .am-text-sm.am-text-center {{ date }} <br/> {{ data.city }}
      .am-u-sm-2
        img.am-img-responsive.am-circle(:src="data.hiwuUser.avatar")
  #item-desc.am-margin-horizontal-sm.am-padding
    h3 {{ data.name }}
    p.am-text-xs {{ data.description }}
    span.am-icon-heart-o.am-margin-right-sm
    span.am-margin-right {{ data.likes  }}
    span.am-icon-comment-o.am-margin-right-sm
    span {{ data.comments.length }}
    span.am-icon-ellipsis-h.am-fr
  #item-comments.am-margin-sm
    template(v-for="comment in data.comments")
      span <strong>{{ comment.userId }}</strong>：{{ comment.content }}
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

    self.$http.get('http://palace.server.hiwu.ren/api/Items/' + self.$route.params.item_id + '/publicView', function (data, status, request) {
      self.data = data;
    });
  },
  ready: function() {
    $('#item').height($(window).height());
  },
  components: {
    topbar: require('../components/Topbar.vue')
  }
}
</script>

<style lang="scss">
@import '../stylesheets/variables.scss';

#item {
  overflow-x: hidden;
  overflow-y: scroll;
}

#item-photo {
  position: relative;
}

#item-photo-header {
  position: absolute;
  top: 0;
}

#item-photo-footer {
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
