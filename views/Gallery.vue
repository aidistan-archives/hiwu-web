<template lang="jade">
#gallery.view
  #gallery-topbar
    topbar.am-margin-bottom(:left-link="{ path: '..' }")
  #gallery-header.am-margin-sm
    .am-g.am-margin-bottom
      .am-u-sm-3.am-u-sm-centered
        img.am-img-responsive.am-circle.am-center(:src="data.hiwuUser.avatar")
    p.am-text-lg.am-text-center {{ data.hiwuUser.nickname }}『{{ data.name }}』
    p.am-text-xs {{ data.description }}
  #gallery-items
    item.am-margin-sm(v-for="item in data.items", :data="item", :link="{ path: 'items/' + item.id, append: true }")
  #gallery-child.view-wrapper
    router-view
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

    self.$http.get(self.$root.apiUrl + '/Galleries/' + self.$route.params.gallery_id + '/publicView', function (data, status, request) {
      self.data = data;
    });
  },
  ready: function() {
    $('#gallery').height($(window).height());
  },
  components: {
    topbar: require('../components/Topbar.vue'),
    item: require('../components/ItemCard.vue')
  }
}
</script>

<style lang="scss">
// @import '../variables.scss';

#gallery {
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
