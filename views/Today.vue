<template lang="jade">
#today.view
  #today-topbar
    topbar(title="今日博物展", left-link="/archive", left-icon="bars", has-border="true")
    img.am-margin-sm.am-round(@click="rightLink", src="/logo-48.png", alt="登陆", width="25.6", height="25.6")
  #today-galleries
    gallery.am-margin-sm.am-margin-bottom(v-for="entry in data", :data="entry.gallery")
  #today-child.view-wrapper
    router-view
</template>

<script>
export default {
  data: function() {
    return {
      data: {}
    };
  },
  created: function(done) {
    var self = this

    self.$http.get('http://palace.server.hiwu.ren/api/Today/publicView', function (data, status, request) {
      self.data = data;
    });
  },
  ready: function() {
    $('#today').height($(window).height());
  },
  methods: {
    rightLink: function() {
      if (this.$root.userId) {
        this.$route.router.go({ name: 'mine' });
      } else {
        this.$route.router.go({ name: 'today_login' });
      }
    }
  },
  components: {
    topbar: require('../components/Topbar.vue'),
    gallery: require('../components/GalleryCard.vue')
  }
}
</script>

<style lang="scss">
@import '../stylesheets/variables.scss';

#today {
  overflow-x: hidden;
  overflow-y: scroll;
}

#today-topbar {
  position: relative;

  > img {
    background: $primary;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
