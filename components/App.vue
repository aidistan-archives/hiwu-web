<template lang="jade">
router-view
</template>

<script>
export default {
  data: function() {
    return {
      userId: null,
      accessToken: null
    };
  }
}
</script>

<style lang="scss">
@import '../stylesheets/variables.scss';

body {
  background-color: $lighter-grey;
}

.view {
  background-color: $lighter-grey;
}

.view-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
