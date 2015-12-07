<template lang="jade">
#login.view
  #login-topbar
    topbar(:left-link="{ path: '.' }", left-icon="times")
  .am-g.am-margin-top-xl.am-padding-xl
    .am-u-sm-6.am-u-sm-centered
      img.am-img-responsive.am-center(src="/logo-1024.png", alt="物境未觉")
  .am-g
    .am-u-sm-10.am-u-sm-centered
      a.am-btn.am-btn-success.am-btn-lg.am-btn-block.am-margin-bottom-lg(:href="weixinLink")
        i.am-icon-weixin.am-margin-right-sm
        span 微信登陆
      a.am-btn.am-btn-danger.am-btn-lg.am-btn-block.am-margin-bottom-lg(:href="weiboLink")
        i.am-icon-weibo.am-margin-right-sm
        span 微博登陆
</template>

<script>
var qs = require('querystring');

export default {
  data: function() {
    return {
      username: '',
      password: ''
    };
  },
  computed: {
    weixinLink: function() {
      return 'https://open.weixin.qq.com/connect/qrconnect?' + qs.stringify({
        appid: this.$root.oauth2.weixin,
        redirect_uri: window.location.href,
        response_type: 'code',
        scope: 'snsapi_login',
        state: 'weixin'
      }) + '#wechat_redirect';
    },
    weiboLink: function() {
      return 'https://api.weibo.com/oauth2/authorize?' + qs.stringify({
        client_id: this.$root.oauth2.weibo,
        redirect_uri: window.location.href,
        state: 'weibo'
      });
    }
  },
  created: function() {
    var self = this
    var params = qs.parse(window.location.hash.split('?')[1]);
    if (params.state === 'weixin' && params.code) {
      self.$http.post(self.$root.apiUrl + '/HiwuUsers/weixinLogin?code=' + params.code, function (data, status, request) {
        self.$root.login(data);
        self.$route.router.go({ name: 'today' });
      });
    } else if (params.state === 'weibo' && params.code) {
      self.$http.post(self.$root.apiUrl + '/HiwuUsers/weiboLogin?username=' + params.code, function (data, status, request) {
        self.$root.login(data);
        self.$route.router.go({ name: 'today' });
      });
    }
  },
  ready: function() {
    $('#login').height($(window).height());
  },
  components: {
    topbar: require('../components/Topbar.vue')
  }
}
</script>

<style lang="scss">
// @import '../variables.scss';

#login {
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
