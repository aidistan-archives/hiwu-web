<template lang="jade">
#gallery.am-margin-sm
  topbar.am-margin-bottom(:left-link="{ name: 'today' }")
  .am-g.am-margin-bottom
    .am-u-sm-3.am-u-sm-centered
      img.am-img-responsive.am-circle.am-center(:src="data.hiwuUser.avatar")
  p.am-text-lg.am-text-center {{ data.hiwuUser.nickname }}『{{ data.name }}』
  p.am-text-xs {{ data.description }}
  item(v-for="item in data.items", :data="item")
</template>

<script>
export default {
  data: function() {
    return {
      data: {
        name: '',
        description: '',
        items: [],
        hiwuUser: { avatar: '' }
      }
    };
  },
  created: function (done) {
    var self = this

    self.$http.get('http://palace.server.hiwu.ren/api/Galleries/' + self.$route.params.id + '/publicView', function (data, status, request) {
      self.data = data;
    });
  },
  components: {
    topbar: require('../components/Topbar.vue'),
    item: require('../components/Item.vue')
  }
}
</script>

<style lang="scss">
// @import '../stylesheets/variables.scss';

</style>
