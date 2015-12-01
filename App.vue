<template lang="jade">
router-view
</template>

<script>
export default {
  computed: {
    userId: function() {
      var userId = this.getCookie('userId');
      if (userId === '') {
        return null;
      } else {
        return userId;
      }
    },
    accessToken: function() {
      var accessToken = this.getCookie('accessToken');
      if (accessToken === '') {
        return null;
      } else {
        return accessToken;
      }
    }
  },
  methods: {
    login: function(accessToken) {
      this.setCookie('userId', accessToken.userId, 30);
      this.setCookie('accessToken', accessToken.id, 30);
    },
    logout: function() {
      this.setCookie('userId', '', 0);
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
  background-color: $grey-lighter;
}

.view {
  background-color: $grey-lighter;
}

.view-wrapper {
  @include layer-fl;
}
</style>
