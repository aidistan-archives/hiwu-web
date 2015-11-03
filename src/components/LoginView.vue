<template lang="jade">
div.login.am-container
  div.am-u-sm-10.am-u-md-6.am-u-lg-4.am-u-sm-centered
    h1.am-text-center 物境未觉
    div.am-form
      div.am-form-group(v-bind:class="usernameClass")
        label 用户名
        input.am-form-field(type="text", v-model="username", v-on:keyup.enter="focus('input[type=password]')")
      div.am-form-group(v-bind:class="passwordClass")
        label 密码
        input.am-form-field(type="password", v-model="password", v-on:keyup.enter="focus('button')")
      div.am-form-group
        button.am-btn.am-btn-primary.am-btn-block(v-on:click="valid() && login()") 登陆
</template>

<script>
export default {
  data: function() {
    return {
      username: '',
      password: '',
      usernameClass: '',
      passwordClass: ''
    };
  },
  methods: {
    focus: function(ele) {
      $(this.$el).find(ele)[0].focus();
    },
    valid: function() {
      var rtn = true;

      if (this.username === '') {
        rtn = false;
        this.usernameClass = 'am-form-error'
      } else {
        this.usernameClass = 'am-form-success'
      }

      if (this.password === '') {
        rtn = false;
        this.passwordClass = 'am-form-error'
      } else {
        this.passwordClass = 'am-form-success'
      }

      return rtn;
    },
    login: function() {
      alert(this.username + ' ' + this.password);
    }
  }
}
</script>

<style lang="sass">
@import '../variables.scss';

.login {
  margin-top: 162px;
}
</style>
