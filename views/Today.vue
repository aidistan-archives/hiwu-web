<template lang="jade">
#today.view
  #today-topbar
    topbar(title="每日博物展", left-link="/archive", left-icon="bars", has-border="true")
    a.am-round.am-margin-sm(v-link="rightLink")
      img(src="/logo-48.png", alt="登陆", width="25.6", height="25.6")
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
  computed: {
    rightLink: function() {
      return { name: this.$root.userId ? 'today_me' : 'today_oauthLogin' };
    }
  },
  created: function(done) {
    var self = this

    self.$http.get(self.$root.apiUrl + '/Today/publicView', function (data, status, request) {
      self.data = data;
    });
  },
  ready: function() {
    $('#today').height($(window).height());
  },
  components: {
    topbar: require('../components/Topbar.vue'),
    gallery: require('../components/GalleryCard.vue')
  }
}
</script>

<style lang="scss">
@import '../variables.scss';

#today {
  overflow-x: hidden;
  overflow-y: scroll;
}

#today-topbar {
  position: relative;

  a:last-child {
    background: $primary;
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
