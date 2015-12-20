<template lang="jade">
#home
  #home-slide-1.slide
    header
      img(src="../assets/home-title.png")
      .home-links.am-fr.am-hide-sm-only
        i.am-icon-apple.am-icon-sm.am-icon-grey
        span.am-margin-right-lg
        i.am-icon-android.am-icon-sm.am-icon-grey
        span.am-margin-right-lg
        i.am-icon-globe.am-icon-sm(v-link="{ name: 'today' }")
        span.am-margin-right-lg
        a(href="http://weibo.com/hiwuren", target="_blank")
          i.am-icon-weibo.am-icon-sm
        span.am-margin-right-lg
        i.am-icon-weixin.am-icon-sm
    .css5a577b1e423.am-text-center.am-margin-vertical-3xl
      span 很久很久以前，奇怪的生物在地球上出现，
      br
      span 他们可以制造物件，可以改变世界，他们被称为人类！
    img.am-img-responsive.am-margin-bottom-xl(src="../assets/home-slide-1.png")
  #home-slide-2.slide
    .css5a577b1e423.am-text-center.am-margin-vertical-3xl
      span 人类在地球的日子里， 发明了很多物件，
      br
      span 它们丰富生活， 改变生活， 也随着生活更新换代！
    img.am-img-responsive.am-margin-bottom-xl(src="../assets/home-slide-2.png")
  #home-slide-3.slide
    .css5a577b1e423.am-text-center.am-margin-vertical-3xl
      span 它们承载了往事，寄托了情怀，蕴藏了初心，
      br
      span 与人一同相伴，游历独一无二的时光！
    img.am-img-responsive.am-margin-bottom-xl(src="../assets/home-slide-3.png")
  #home-slide-4.slide
    .css5a577b1e423.am-text-center.am-margin-vertical-3xl
      span 物境未觉，与您一起发现时光里的珍物，
      br
      span 共建游历初心的物件文化
      br
      span 感受万物欢喜，体会万物动情！
    img.am-img-responsive.am-margin-bottom-xl(src="../assets/home-slide-4.png")
    .home-links.am-text-center
      i.am-icon-apple.am-icon-sm.am-icon-grey
      span.am-margin-right-lg
      i.am-icon-android.am-icon-sm.am-icon-grey
      span.am-margin-right-lg
      i.am-icon-globe.am-icon-sm(v-link="{ name: 'today' }")
      span.am-margin-right-lg
      a(href="http://weibo.com/hiwuren", target="_blank")
        i.am-icon-weibo.am-icon-sm
      span.am-margin-right-lg
      i.am-icon-weixin.am-icon-sm
    #today-apply.am-text-center.am-margin-vertical-xl(v-link="{ name: 'apply' }")
      span.am-padding.am-padding-horizontal-lg
        img.am-margin-right-xs(src="../assets/logo-black-48.png", alt="申请", width="32", height="32")
        span.am-padding-right-lg 申请建立我的博物馆
    .am-text-sm.am-text-center.am-margin-top-xl Copyright &copy; 物境未觉
</template>

<script>
export default {
  ready: function() {
    if ($('.slide').height() < $(window).height()) {
      $('.slide').height($(window).height());
    }
  },
  components: {
    topbar: require('../components/Topbar.vue'),
    gallery: require('../components/GalleryCard.vue')
  }
}
</script>

<style lang="scss">
@import '../variables.scss';

.am-margin-vertical-3xl {
  margin-top: 70px;
  margin-bottom: 70px;
}

#home {
  width: 100%;
  background-image: url('../assets/background.jpg');;

  .am-icon-apple,
  .am-icon-android {
    color: $grey-light;
  }

  .am-icon-globe,
  .am-icon-weibo,
  .am-icon-weixin {
    cursor: pointer;
    color: $grey-dark;
  }

  .slide { padding: 40px; }
  @media screen and (max-width: 640px) {
    .slide { padding: 20px; }
  }
}
</style>
