<template lang="jade">
#archive.view
  #archive-topbar
    topbar(title="往期博物展", left-link="/today", has-border="true")
  #archive-content
    .archive-date.am-text-sm.am-margin-sm.am-margin-bottom-xs 2015年
    gallery.am-margin-sm(v-for="entry in data", :data="entry.gallery", :link="{ name: 'archive_gallery', params: { gallery_id: entry.gallery.id } }")
  #archive-child.view-wrapper
    router-view
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
  ready: function() {
    $('#archive').height($(window).height());
  },
  components: {
    topbar: require('../components/Topbar.vue'),
    gallery: require('../components/GalleryLine.vue')
  }
}
</script>

<style lang="scss">
@import '../stylesheets/variables.scss';

#archive {
  overflow-x: hidden;
  overflow-y: scroll;
}

.archive-date {
  color: $grey;
}
</style>
