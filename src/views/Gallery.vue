<template lang="jade">
topbar
#gallery.am-margin-sm
  #gallery-photo
    .am-g.am-margin-bottom
      .am-u-sm-3.am-u-sm-centered
        img.am-img-responsive.am-circle.am-center(:src="data.hiwuUser.avatar")
    p.am-text-lg.am-text-center {{ data.hiwuUser.nickname }}『{{ data.name }}』
    p.am-text-xs {{ data.description }}
  #gallery-items
    template(v-for="item in data.items")
      item(:data="item")
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
  computed: {
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
@import '../variables.scss';

</style>
