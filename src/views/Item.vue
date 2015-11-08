<template lang="jade">
topbar(:title="data.name")
#item.am-margin-sm
  #item-photo
    img.am-img-responsive.am-center(:src="data.photos[0].url")
    #item-photo-above.am-g.am-margin-bottom-sm
      .am-u-sm-10.am-text-sm
        div {{ date }}
        div {{ data.city }}
      .am-u-sm-2
        img.am-img-responsive.am-center(:src="data.hiwuUser.avatar")
  #item-desc.am-padding
    strong.am-text-sm {{ data.name }}
    p.am-text-xs {{ data.description }}
  #item-actions.am-padding-sm
    .am-g.am-text-center
      .am-u-sm-4
        span.am-icon-heart.am-margin-right-sm
        span {{ data.likes  }} 人喜欢
      .am-u-sm-4
        span.am-icon-comment.am-margin-right-sm
        span {{ data.comments.length }} 条评论
      .am-u-sm-4
        i.am-icon-ellipsis-h
  #item-comments
    template(v-for="comment in data.comments") {{ comment }}
</template>

<script>
export default {
  data: function() {
    return {
      data: {}
    };
  },
  computed: {
    date: function() {
      var date = '';
      if (this.data) {
        date += this.data.date_y;
        if (this.data.date_m > 0)
          date += '.' + this.data.date_m;
        if (this.data.date_d > 0)
          date += '.' + this.data.date_d;
      }
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
@import '../variables.scss';

#item-photo {
  position: relative;
}

#item-photo-above {
  position: absolute;
  bottom: 0;
}

#item-desc {
  background-color: #A0E7EB;
}

#item-actions {
  color: $grey;
  border-bottom: solid 1px $light-grey;
}
</style>
