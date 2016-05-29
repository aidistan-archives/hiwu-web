<template lang="jade">
#app
  router-view
  #modal.am-modal.am-modal-no-btn(tabindex="-1")
    .am-modal-dialog
      .am-modal-hd {{ modalTitle }}
        a.am-close.am-close-spin(href="javascript: void(0)", data-am-modal-close="true") &times;
      .am-modal-bd
</template>

<script>
var qs = require('querystring')

export default {
  data: function () {
    return {
      userId: null,
      accessToken: null,
      oauth2: {
        weixin: 'wx92f55323cbadd8e8',
        weibo: '3167931574'
      },
      modalTitle: ''
    }
  },
  computed: {
    apiUrl: function () {
      if (process.env.NODE_ENV === 'development') {
        return 'http://hiwu.ren/api'
      } else {
        return window.location.protocol + '//' + window.location.host + '/api'
      }
    }
  },
  ready: function () {
    this.userId = this.getCookie('userId')
    this.accessToken = this.getCookie('accessToken')
  },
  methods: {
    popup: function (title) {
      this.modalTitle = title
      window.$('#modal').modal({
        closeViaDimmer: 0
      })
    },
    login: function (accessToken) {
      this.userId = accessToken.userId
      this.setCookie('userId', accessToken.userId, 30)
      this.accessToken = accessToken.id
      this.setCookie('accessToken', accessToken.id, 30)
    },
    logout: function () {
      this.userId = null
      this.setCookie('userId', '', 0)
      this.accessToken = null
      this.setCookie('accessToken', '', 0)
    },
    setCookie: function (name, value, expireDate) {
      var exdate = new Date()
      exdate.setDate(exdate.getDate() + expireDate)
      document.cookie = name + '=' + escape(value) + ((expireDate == null) ? '' : ';expires=' + exdate.toGMTString())
    },
    getCookie: function (name) {
      if (document.cookie.length > 0) {
        var start = document.cookie.indexOf(name + '=')
        if (start !== -1) {
          start = start + name.length + 1
          var end = document.cookie.indexOf(';', start)
          if (end === -1) end = document.cookie.length
          return unescape(document.cookie.substring(start, end))
        }
      }
      return null
    },
    configJweixin: function (options) {
      var self = this

      self.$http.get(
        self.$root.apiUrl + '/Hiwu/jweixinSignature?' + qs.stringify({
          url: window.location.href.split('#')[0]
        })
      ).then(function (res) {
        window.wx.config(window.$.extend(res.data, {
          jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone'
          ]
        }))

        window.wx.ready(function () {
          if (options.share_content) {
            window.wx.onMenuShareTimeline(options.share_content)
            window.wx.onMenuShareAppMessage(options.share_content)
            window.wx.onMenuShareQQ(options.share_content)
            window.wx.onMenuShareWeibo(options.share_content)
            window.wx.onMenuShareQZone(options.share_content)
          }
        })
      })
    }
  }
}
</script>

<style lang="scss">
@import './variables.scss';

body {
  background-image: url('./assets/background.jpg');
  overflow-x: hidden;
}

.am-container {
  max-width: 1200px;
}
</style>
