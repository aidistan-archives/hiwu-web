<template lang="jade">
#login.view
  #login-topbar
    topbar(:left-link="{ path: '.' }", left-icon="times")
  .am-g.am-margin-top-xl.am-padding-xl
    .am-u-sm-6.am-u-sm-centered
      img.am-img-responsive.am-center(src="/logo-1024.png", alt="物境未觉")
  .am-g
    .am-u-sm-10.am-u-sm-centered
      form.am-form
        .am-form-group
          input(type="text", v-model="username", placeholder="用户名")
        .am-form-group
          input(type="password", v-model="password", placeholder="密码")
          a(v-link="{ path: '.' }")
            .am-form-help.am-text-right 忘记密码
        .am-form-group
          a.am-btn.am-btn-primary.am-btn-block(@click="login") 登陆
</template>

<script>
export default {
  data: function() {
    return {
      username: '',
      password: ''
    };
  },
  ready: function() {
    $('#login').height($(window).height());
  },
  methods: {
    login: function() {
      if (this.username === '') return;

      var self = this
      self.$http.post('http://palace.server.hiwu.ren/api/HiwuUsers/simpleLogin?username=' + self.username, function (data, status, request) {
        self.$root.login(data);
        self.$route.router.go({ name: 'mine' });
      });
    }
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
