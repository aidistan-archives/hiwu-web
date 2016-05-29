<template lang="jade">
#app
  router-view
  #modal.am-modal.am-modal-no-btn(tabindex="-1")
    .am-modal-dialog
      .am-modal-hd {{ modal.title }}
        a.am-close.am-close-spin(href="javascript: void(0)", data-am-modal-close="true") &times;
      .am-modal-bd
</template>

<script>
export default {
  data: function () {
    return {
      userId: this.$utils.getCookie('userId') || null,
      accessToken: this.$utils.getCookie('accessToken') || null,
      oauth2: {
        weixin: 'wx92f55323cbadd8e8',
        weibo: '3167931574'
      },
      modal: {}
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
  methods: {
    popup: function (title) {
      this.modal = {
        title: title
      }

      window.$('#modal').modal({
        closeViaDimmer: 0
      })
    },
    login: function (accessToken) {
      this.userId = accessToken.userId
      this.$utils.setCookie('userId', accessToken.userId, 30)
      this.accessToken = accessToken.id
      this.$utils.setCookie('accessToken', accessToken.id, 30)
    },
    logout: function () {
      this.userId = null
      this.$utils.setCookie('userId', '', 0)
      this.accessToken = null
      this.$utils.setCookie('accessToken', '', 0)
    },
    configJweixin: function (options) {
      let wx = window.wx

      this.$http({
        url: this.$root.apiUrl + '/Hiwu/jweixinSignature',
        method: 'GET',
        params: {
          url: window.location.href.split('#')[0]
        }
      }).then((res) => {
        wx.config(window.$.extend(res.data, {
          jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone'
          ]
        }))

        wx.ready(() => {
          if (options.share_content) {
            wx.onMenuShareTimeline(options.share_content)
            wx.onMenuShareAppMessage(options.share_content)
            wx.onMenuShareQQ(options.share_content)
            wx.onMenuShareWeibo(options.share_content)
            wx.onMenuShareQZone(options.share_content)
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
}

.am-container {
  max-width: 1200px;
}
</style>
