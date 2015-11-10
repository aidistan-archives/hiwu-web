<template lang="jade">
#archive.am-margin-sm
  topbar(title="往期博物展", left-link="/today", has-border="true")
  .archive-date.am-text-sm.am-margin-bottom-xs 2015年
  archive-line(v-for="entry in data", :data="entry.gallery")
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
    archiveLine: require('../components/ArchiveLine.vue')
  }
}
</script>

<style lang="scss">
@import '../stylesheets/variables.scss';

.archive-date {
  color: $grey;
}
</style>
