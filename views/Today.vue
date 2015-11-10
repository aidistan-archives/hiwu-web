<template lang="jade">
#today.am-margin-sm
  topbar(title="今日博物展", left-link="/today", left-icon="bars", has-border="true")
  gallery(v-for="entry in data", :data="entry.gallery")
</template>

<script>
export default {
  data: function() {
    return {
      data: {}
    };
  },
  created: function (done) {
    var self = this

    self.$http.get('http://palace.server.hiwu.ren/api/Today/publicView', function (data, status, request) {
      self.data = data;
    });
  },
  components: {
    topbar: require('../components/Topbar.vue'),
    gallery: require('../components/Gallery.vue')
  }
}
</script>

<style lang="scss">
// @import '../stylesheets/variables.scss';

</style>
