<template lang="jade">
#me.view
  #me-topbar
    topbar(title="馆长设置", :left-link="{ path: '.' }", has-border="true")
  #me-basic.am-panel.am-margin-sm
    .am-panel-bd
      a.am-link-muted
        .am-vertical-align(style="height:48px")
          .am-vertical-align-middle
            span.am-fl 头像
            i.am-fr.am-icon-angle-right.am-icon-sm
          img.am-fr.am-circle.am-margin-right-xl(:src="data.avatar", height="48", width="48")
      hr
      a.am-link-muted(@click="promptNickname")
        .am-cf
          span.am-fl 昵称
          i.am-fr.am-icon-angle-right.am-icon-sm
          span.am-fr.am-margin-right-lg {{ data.nickname }}
      hr
      a.am-link-muted(@click="promptDescription")
        .am-cf
          span.am-fl 简介
          i.am-fr.am-icon-angle-right.am-icon-sm
          span.am-fr.am-margin-right-lg {{ data.description }}
  #me-more.am-panel.am-margin-sm
    .am-panel-bd
      //- a.am-link-muted(v-link="{ path: './me' }") 意见反馈
      //- hr
      a.am-link-muted(@click="logout")
        div 注销登陆
  #me-prompt.am-modal.am-modal-prompt(tabindex="-1")
    .am-modal-dialog
      .am-modal-hd {{ modalTitle }}
      .am-modal-bd
        input.am-modal-prompt-input(type="text", v-model="modalInput")
      .am-modal-footer
        span.am-modal-btn(data-am-modal-cancel) 取消
        span.am-modal-btn(data-am-modal-confirm) 提交
</template>

<script>
var querystring = require('querystring');

export default {
  data: function() {
    return {
      data: {},
      modalTitle: '',
      modalInput: ''
    };
  },
  created: function (done) {
    var self = this;

    self.$http.get(self.$root.apiUrl + '/HiwuUsers/' + self.$root.userId + '?' + querystring.stringify({
      access_token: self.$root.accessToken
    }), function (data, status, request) {
      self.data = data;
    });
  },
  ready: function() {
    $('#me').height($(window).height());
  },
  methods: {
    promptNickname: function() {
      var self = this;
      self.modalTitle = '更新昵称';
      self.modalInput = self.data.nickname;
      $('#me-prompt').modal({onConfirm: function() {
        self.$http.put(self.$root.apiUrl + '/HiwuUsers/' + self.$root.userId + '?' + querystring.stringify({
          access_token: self.$root.accessToken
        }), {
          nickname: self.modalInput
        }, function (data, status, request) {
          self.data = data;
        });
      }});
    },
    promptDescription: function() {
      var self = this;
      self.modalTitle = '更新简介';
      self.modalInput = self.data.description;
      $('#me-prompt').modal({onConfirm: function() {
        self.$http.put(self.$root.apiUrl + '/HiwuUsers/' + self.$root.userId + '?' + querystring.stringify({
          access_token: self.$root.accessToken
        }), {
          description: self.modalInput
        }, function (data, status, request) {
          self.data = data;
        });
      }});
    },
    logout: function() {
      this.$root.logout();
      this.$route.router.go({ name: 'today' });
    }
  },
  components: {
    topbar: require('../components/Topbar.vue'),
    gallery: require('../components/GalleryCard.vue')
  }
}
</script>

<style lang="scss">
@import '../variables.scss';

#me {
  overflow-x: hidden;
  overflow-y: scroll;

  a.am-link-muted {
    cursor: pointer;
  }
}

#me-basic a:first-child {
  .am-vertical-align,
  .am-vertical-align-middle {
    position: relative;
    width: 100%;
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
