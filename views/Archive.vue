<template lang="jade">
#archive.view
  #archive-topbar
    topbar(title="往期博物展", left-link="/today")
  #archive-content
    template(v-for="(date, galleries) in data")
      .archive-date.am-text-sm.am-margin-sm.am-margin-bottom-xs {{ date }}
      gallery.am-margin-sm(v-for="gallery in galleries", :data="gallery", :link="{ name: 'archive_gallery', params: { gallery_id: gallery.id } }")
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
    var self = this;

    self.$http.get(self.$root.apiUrl + '/Today/publicView', function (data, status, request) {
      self.data = {};
      for (var entry of data) {
        var date = entry.date_y + '年' + entry.date_m + '月';
        if (self.data[date] === undefined) self.data[date] = [];
        self.data[date].push(entry.gallery);
      }
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
@import '../variables.scss';

#archive {
  overflow-x: hidden;
  overflow-y: scroll;
}

.archive-date {
  color: $grey;
}
</style>
