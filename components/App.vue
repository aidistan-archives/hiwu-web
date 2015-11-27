<template lang="jade">
router-view
</template>

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
