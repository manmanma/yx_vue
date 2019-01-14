<template>
  <div class="topic-more-wrapper" v-if="findMore">
    <div class="topic-more-container">
      <div class="topic-more-header">
        <h3>更多精彩</h3>
      </div>
    <div class="topic-more-content"
       v-for="(more, index) in findMore" :key="index">
    <div class="more-img">
      <img v-lazy="more.itemPicUrl">
    </div>
    <div class="more-title">
      <span>{{more.title}}</span>
    </div>
  </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['findMore'],
    data() {
      return {}
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../assets/stylus/mixin.styl"
  .topic-more-wrapper
    width 100%
    .topic-more-container
      padding 0 (30/$rem) (40/$rem)
      width (690/$rem)
      background-color #fff
      .topic-more-header
        background-color #fff
        width 100%
        height (120/$rem)
        font-size (32/$rem)
        text-align center
        line-height (120/$rem)
      .topic-more-content
        font-size (36/$rem)
        background-color #fff
        padding (24/$rem)
        margin-bottom (40/$rem)
        color #333
        .more-img
          width (642/$rem)
          height (360/$rem)
          &>img
            width 100%
            height 100%
        .more-title
          padding (29/$rem) 0 (28/$rem)
          font-size (28/$rem)
          line-height (34/$rem)
</style>
