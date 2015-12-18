<template lang="jade">
router-view
</template>

<script>
export default {
  data: function() {
    return {
      userId: null,
      accessToken: null,
      oauth2: {
        weixin: 'wx92f55323cbadd8e8',
        weibo: '3167931574'
      }
    };
  },
  computed: {
    apiUrl: function() {
      // Extract the api url from window.location or give it directly
      if (false) {
        return window.location.protocol + '//' + window.location.host + '/api';
      } else {
        return 'http://hiwu.ren/api';
      }
    }
  },
  ready: function() {
    this.userId = this.getCookie('userId');
    this.accessToken = this.getCookie('accessToken');
  },
  methods: {
    login: function(accessToken) {
      this.userId = accessToken.userId;
      this.setCookie('userId', accessToken.userId, 30);
      this.accessToken = accessToken.id;
      this.setCookie('accessToken', accessToken.id, 30);
    },
    logout: function() {
      this.userId = null;
      this.setCookie('userId', '', 0);
      this.accessToken = null;
      this.setCookie('accessToken', '', 0);
    },
    setCookie: function(name, value, expireDate) {
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + expireDate);
      document.cookie = name + '=' + escape(value) + ((expireDate == null) ? '' : ';expires=' + exdate.toGMTString());
    },
    getCookie: function(name) {
      if (document.cookie.length > 0) {
        var start = document.cookie.indexOf(name + '=');
        if (start !== -1) {
          start = start + name.length + 1;
          var end = document.cookie.indexOf(';', start)
          if (end === -1) end = document.cookie.length;
          return unescape(document.cookie.substring(start, end));
        }
      }
      return null;
    }
  }
}
</script>

<style lang="scss">
@import './variables.scss';

body {
  background-color: black;
}

.view {
  max-width: 540px;
  margin: 0 auto;
  background-image: url('/background.jpg');
}

.view-wrapper {
  @include layer-fl;
}
</style>
