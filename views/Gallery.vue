<template lang="jade">
#gallery.view
  #gallery-topbar
    topbar.am-margin-bottom(:title="data.name", :left-link="{ path: '..' }")
  #gallery-header.am-margin
    .am-g.am-margin-vertical
      .am-u-sm-5.am-u-sm-centered
        img.am-img-responsive.am-circle.am-center(:src="data.hiwuUser.avatar")
    h2.am-margin-vertical.am-text-center {{ data.hiwuUser.nickname }}「{{ data.name }}」
    p.am-text-sm {{ data.description }}
  #gallery-items
    item.am-margin(v-for="item in data.items", :data="item", :link="{ path: 'items/' + item.id, append: true }")
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
@import '../variables.scss';

#gallery {
  overflow-x: hidden;
  overflow-y: scroll;
}

#gallery-header p.am-text-sm {
  color: $grey;
  text-align: justify;
}
</style>
