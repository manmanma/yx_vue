<template>
  <div class="topic-recommend-wrapper"  v-if="recList">
      <div class="recommend-header">
        <div class="rec-title">{{recList.name}}</div>
      </div>
      <div class="topic-recommend-container" v-if="recList.Item" v-for="(rec, index) in recList.Item">
        <div class="recommend-one" v-if="index===0">
          <div class="rec-img-info" v-if="rec">
            <div class="rec-img">
              <img :src="rec.picUrl" alt="img">
            </div>
            <div class="rec-desc">
              <span>{{rec.typeName}}</span>
            </div>
          </div>
          <div class="rec-info clearFix" v-if="rec">
            <div class="rec-info-top clearFix">
              <span class="rec-info-title">{{rec.title}}</span>
              <span class="rec-info-price">{{rec.priceInfo}}元起</span>
            </div>
            <div class="rec-info-bottom">
              <span class="rec-info-desc">{{rec.subTitle}}</span>
            </div>
          </div>
        </div>
        <div class="recommend-other clearFix" v-else>
          <div class="rec-left">
            <div class="rec-left-top clearFix">
              <div class="rec-avatar">
                <img :src="rec.avatar" alt="avatar">
              </div>
              <div class="rec-username ellipsis"><span>{{rec.nickname}}</span></div>
            </div>
            <div class="rec-left-title ellipsis"><span>{{rec.title}}</span></div>
            <div class="rec-left-desc ellipsis">
              <p>{{rec.subTitle}}</p>
            </div>
          </div>
          <div class="rec-right">
            <div class="rec-right-img">
              <img :src="rec.picUrl" alt="img">
            </div>
            <div class="rec-right-desc">
              <span>{{rec.typeName}}</span>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['recList']
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../assets/stylus/mixin.styl"
  .topic-recommend-wrapper
    padding 0 (30/$rem) (40/$rem)
    width (690/$rem)
    .recommend-header
      width 100%
      .rec-title
        background-color #fff
        width 100%
        height (120/$rem)
        font-size (32/$rem)
        text-align center
        line-height (120/$rem)
    .topic-recommend-container
      width 100%
      .recommend-one
        width 100%
        .rec-img-info
          position relative
          width 100%
          background-color #fff
          .rec-img
            width 100%
            height (386/$rem)
            &>img
              width 100%
              height 100%
          .rec-desc
            position absolute
            top (20/$rem)
            left (20/$rem)
            font-size (30/$rem)
        .rec-info
          background-color #fff
          height (85/$rem)
          font-size (30/$rem)
          padding (24/$rem) (20/$rem) (67/$rem)
          .rec-info-top
            font-size (30/$rem)
            line-height (60/$rem)
            .rec-info-title
              float left
            .rec-info-price
              float right
          .rec-info-bottom
            font-size (27/$rem)
            color #7f7f7f
      .recommend-other
        width 100%
        height (272/$rem)
        font-size (30/$rem)
        margin-bottom (30/$rem)
        .rec-left
          background-color #fff
          float left
          width (360/$rem)
          height (272/$rem)
          padding 0 (30/$rem) 0 (20/$rem)
          .rec-left-top
            margin-top (30/$rem)
            .rec-avatar
              width (46/$rem)
              height (46/$rem)
              float left
              margin-right (15/$rem)
              vertical-align middle
              &>img
                width 100%
                height 100%
                border-radius 50%
            .rec-username
              float left
              line-height  (40/$rem)
              font-size (20/$rem)
          .rec-left-title
            font-size (32/$rem)
            line-height  (38/$rem)
            margin (15/$rem) 0
          .rec-left-desc
            width (360/$rem)
            height (67/$rem)
            font-size (24/$rem)
            line-height  (36/$rem)
            color #7f7f7f
        .rec-right
          position relative
          float right
          width (280/$rem)
          height (272/$rem)
          .rec-right-img,img
            width 100%
            height 100%
          .rec-right-desc
            position absolute
            top (10/$rem)
            left (10/$rem)
            background-color #fff
            font-size (24/$rem)
            line-height (30/$rem)
            border-radius (20/$rem)
            &>span
              padding (10/$rem)




</style>
