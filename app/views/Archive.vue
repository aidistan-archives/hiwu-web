<template lang="jade">
#archive
  #archive-topbar
    topbar(title="往期博物展", :left-link="{ name: 'today' }")
  #archive-content.am-container
    template(v-for="(date, galleries) in data")
      .archive-date.am-text-sm.am-margin-sm.am-margin-bottom-xs {{ date }}
      .am-g.am-g-collapse
        .am-u-sm-12.am-u-md-6.am-u-lg-4.am-u-end(v-for="gallery in galleries")
          gallery.am-margin-sm(:data="gallery", :link="{ name: 'gallery', params: { gallery_id: gallery.id } }")
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
  components: {
    topbar: require('../components/Topbar.vue'),
    gallery: require('../components/GalleryLine.vue')
  }
}
</script>

<style lang="scss">
@import '../variables.scss';

.archive-date {
  color: $grey;
}
</style>
