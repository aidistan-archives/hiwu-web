<template lang="jade">
div#home.am-container.am-text-center
  img.am-center.am-img-responsive(src="/title.png", alt="个人博物馆")
  p 物的意义由人来完整，<br/>人的志趣由物来体现。
  p Wù『个人博物馆』是一个新型的博物馆，讲述个人与物品的情感故事。<br/>人们建立自己的博物馆，浏览他人的博物馆。从而感知自身与他人的成长，了解物背后丰富的情感故事。
  p 在这里，探索隐匿在时光里的珍贵物品，发现平凡中的感动，感受生活中的温热。
  //- div.page-corner
</template>

<style lang="scss">
@import '../variables.scss';

#home {
  max-width: 792px;

  img {
    margin-top: 162px;
    margin-bottom: 80px;
  }

  .page-corner {
    position: absolute;
    right: 0;
    top: 0;
    width: 45px;
    height: 45px;
    border-left: solid 45px transparent;
    border-top: solid 45px transparent;

    &:hover {
      border-left: solid 45px transparent;
      border-top: solid 45px $dark-grey;
      cursor: pointer;
    }
  }
}
</style>
