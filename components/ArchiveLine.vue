<template lang="jade">
.archive-line.am-padding-sm
  a(v-link="{ name: 'gallery', params: { id: data.id } }")
    header.am-cf
      img.am-img-responsive.am-circle.am-fl.am-margin-right(:src="data.hiwuUser.avatar")
      .am-vertical-align.am-fr(style="height: 45px;")
        .am-vertical-align-middle {{ data.items.length }}
      .am-vertical-align(style="height: 45px;")
        .am-vertical-align-middle {{ data.hiwuUser.nickname }} 『{{ data.name }}』
</template>

<script>
export default {
  props: ['data'],
  computed: {
    featureItems: function() {
      return this.data.items.slice(0, 9);
    }
  }
}
</script>

<style lang="scss">
@import '../stylesheets/variables.scss';

.archive-line {
  background-color: #fff;

  > a { color: inherit; }
  header {
    img { max-height: 45px; }
    .am-fr { color: $grey; }
  }
}

.archive-line + .archive-line { margin-top: 0.5em; }
</style>
