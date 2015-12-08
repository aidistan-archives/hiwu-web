<template lang="jade">
#item.view
  #item-photo.am-margin-horizontal-sm.am-margin-top-sm
    img.am-img-responsive.am-center(:src="data.photos[0].url")
    header.am-g.am-margin-top-sm
      .am-u-sm-2
        a.am-icon-chevron-left.am-link-muted(v-link="{ path: '..' }")
    footer.am-g.am-margin-bottom-sm
      .am-u-sm-2
        .am-text-sm.am-text-center {{ date }} <br/> {{ data.city }}
      .am-u-sm-2
        img.am-img-responsive.am-circle(:src="data.hiwuUser.avatar")
  #item-desc.am-margin-horizontal-sm.am-padding
    h3 {{ data.name }}
    p.am-text-xs {{ data.description }}
    span#item-desc-like(@click="like")
      i.am-icon-heart.am-text-danger.am-margin-right-sm(v-show="data.liked")
      i.am-icon-heart-o.am-margin-right-sm(v-show="!data.liked")
      span {{ data.likes  }}
    span.am-margin-right
    span#item-desc-comment(@click="toggle")
      i.am-icon-comment-o.am-margin-right-sm
      span {{ data.comments.length }}
    span.am-icon-ellipsis-h.am-fr
  #item-comments.am-margin-sm.am-text-sm
    template(v-for="comment in data.comments")
      .am-magrin-sm <strong>{{ comment.hiwuUser.nickname }}</strong>：{{ comment.content }}
  #item-box.am-padding-bottom-xs.am-padding-horizontal-sm(v-show="box")
    input.am-form-field.am-input-sm(v-model="comment", placeHolder="请输入评论内容", @keyup.enter="submit")
  #item-box-holder(v-show="box")
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
      box: false,
      comment: ''
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
  created: function () {
    this.refresh();
  },
  ready: function() {
    $('#item').height($(window).height());
  },
  methods: {
    refresh: function() {
      var self = this;

      self.$http.get(self.$root.apiUrl + '/Items/' + self.$route.params.item_id + '/publicView?' + qs.stringify({
        access_token: self.$root.accessToken
      }), function (data, status, request) {
        self.data = data;
      });
    },
    like: function() {
      var self = this;

      if (self.$root.userId) {
        (self.data.liked ? self.$http.delete : self.$http.put).apply(self.$http, [
          self.$root.apiUrl + '/HiwuUsers/' + self.$root.userId + '/likes/rel/' + self.data.id + '/?' + qs.stringify({
            access_token: self.$root.accessToken
          }),
          self.refresh
        ]);
      }
    },
    toggle: function() {
      this.box = !this.box;
    },
    submit: function() {
      var self = this;
      if (self.$root.userId) {
        console.log(self.comment)

        self.$http.post(self.$root.apiUrl + '/Items/' + self.data.id + '/comments?' + qs.stringify({
          access_token: self.$root.accessToken
        }), {
          content: self.comment
        }, self.refresh);

        self.box = false;
        self.comment = '';
      }
    }
  },
  components: {
    topbar: require('../components/Topbar.vue')
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

  header {
    position: absolute;
    top: 0;
  }

  footer {
    position: absolute;
    bottom: 0;

    .am-text-sm {
      color: $grey-light;
      background-color: rgba($grey-dark, 0.4);
    }
  }
}

#item-desc {
  background-color: #A0E7EB;
  span {
    color: $grey;
    cursor: pointer;
  }
}

#item-box {
  position: fixed;
  bottom: 0;
  width: 100%;
}

#item-box-holder {
  height: 33px;
}
</style>
