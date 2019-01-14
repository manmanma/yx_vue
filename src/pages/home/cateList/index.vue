<template>
  <div>
    <div class="home-cate-wrapper" v-for="(cate, index) in cateList" :key="index" v-if="cateList">
      <div class="home-cate-content">
        <h3 class="cate-header">{{cate.name}}</h3>
        <div class="cate-wrapper">
          <ul class="cate-content clearFix" v-if="cate.itemList">
            <li class="cate-item" v-for="(item, index) in cate.itemList" v-if="index<=6">
              <a href="javascript:;" class="cate-href">
                <div class="cate-img">
                  <img :src="item.listPicUrl" alt="cateImg">
                </div>
                <div class="cate-title ellipsis">
                  <span>{{item.simpleDesc}}</span>
                </div>
                <div class="cate-sale" v-if="item.promTag">
                  <span>{{item.promTag}}</span>
                </div>
                <div class="cate-name ellipsis"><span>{{item.name}}</span></div>
                <div class="cate-price"><span>{{item.couponPrice}}</span></div>
              </a>
            </li>
            <li class="cate-item more">
              <a href="javascript:;" class="cate-href">
                <div class="item-more">
                  <p class="item-more-text">更多{{cate.name}}好物</p>
                  <i class="iconfont icon-more"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    props: ['cateList'],
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../assets/stylus/mixin.styl"
  .home-cate-wrapper
    width 100%
    height 100%
    background-color #fff
    .home-cate-content
      width 100%
      height 100%
      .cate-header
        height (110/$rem)
        background-color #fff
        font-size (40/$rem)
        text-align center
        line-height (110/$rem)
      .cate-wrapper
        width 100%
        height 100%
        .cate-content
          padding (10/$rem)
          .cate-item
            float left
            width (330/$rem)
            height (560/$rem)
            padding 0 (20/$rem) (33/$rem) (10/$rem)
            position relative
            &.more
              height (345/$rem)
            .cate-href
              display block
              .item-more
                padding (128/$rem) 0
                font-size (36/$rem)
                color #666
                text-align center
                .item-more-text
                  margin-bottom (60/$rem)
                  color #333
                .iconfont
                  font-size (66/$rem)
              .cate-img
                width (345/$rem)
                height (345/$rem)
                &>img
                  width 100%
                  height 100%
              .cate-title
                width 100%
                line-height (29/$rem)
                font-size (29/$rem)
                color #9F8A60
                background-color #F1ECE2
                padding (20/$rem) (10/$rem)
              .cate-sale
                font-size (24/$rem)
                margin-top (20/$rem)
                &>span
                  background-color #f48f18
                  color #fff
                  padding (5/$rem) (16/$rem)
              .cate-name
                font-size (30/$rem)
                margin (10/$rem) 0
              .cate-price
                font-size (36/$rem)
                color #b4282d
</style>
