<template>
  <div class="home-topic">
    <header class="topic-header">
      <span class="topic-title">专题精选</span>
      <i class="iconfont icon-more"></i>
    </header>
    <div class="topic-wrapper" ref="topicWrapper">
      <ul class="topic-content clearFix" ref="topicUl">
        <li class="topic-item" v-for="(topic, index) in topicList" :key="index">
          <a href="javascript:;" class="topic-href">
            <img :src="topic.itemPicUrl" class="item-topic-img"/>
          </a>
          <div class="item-topic-info clearFix">
            <div class="item-left">
              <p class="item-name">{{topic.title}}</p>
              <p class="item-desc">{{topic.subtitle}}</p>
            </div>
            <div class="item-right">
              <span class="item-price">{{topic.priceInfo}}元起</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Scroll from 'better-scroll'
  export default {
    props: ['topicList'],
    mounted () {
      this.$nextTick(()=>{
        this._topicScroll()
      })
    },
    methods: {
      _topicScroll () {
        const length = this.topicList.length
        const liWidth = 575
        const space = 20
        this.$refs.topicUl.style.width = (liWidth + space) * length - space + 'px'
        new Scroll(this.$refs.topicWrapper, {
          scrollX: true,//水平滑动
          click: true
        })
      },
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../assets/stylus/mixin.styl"
  .home-topic
    margin-bottom (20/$rem)
    width 100%
    height (536/$rem)
    .topic-header
      background-color #fff
      width 100%
      height (110/$rem)
      font-size (36/$rem)
      line-height (110/$rem)
      text-align center
      color #333
      .iconfont
        font-size (30/$rem)


    .topic-wrapper
      padding (10/$rem)
      background-color #fff
      .topic-content
        white-space nowrap
        overflow hidden
        .topic-item
          display inline-block
          width (575/$rem)
          margin-right (20/$rem)
          background-color #fff
          .topic-href
            display block
            width (575/$rem)
            height (322/$rem)
            margin-bottom (16/$rem)
            border-radius (15/$rem)
            &>img
              width 100%
              height 100%
              border-radius (15/$rem)
          .item-topic-info
            font-size (34/$rem)
            line-height (40/$rem)
            color #333
            .item-left
              float left
              .item-desc
                color #7F7F7F
                font-size (26/$rem)
                line-height (30/$rem)
                margin (10/$rem) 0
            .item-right
              float right
              color #b4282d
</style>
