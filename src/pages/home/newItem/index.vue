<template>
  <div class="home-new-warpper" ref="newWarpper">
    <ul class="home-new-content" ref="newUl">
      <li class="home-new-item" v-for="(news, index) in itemList" :key="index">
        <div class="new-item-img">
          <span class="item-text" v-if="news.productPlace">{{news.productPlace}}</span>
          <img v-lazy="news.listPicUrl" alt="img">
        </div>
        <div class="new-item-content">
          <div class="status-tag" v-if="news.itemTagList">
            <p :class="classes[tag.type]" v-for="(tag,index) in news.itemTagList" :key="index">{{tag.name}}</p>
          </div>
          <p class="item-name ellipsis">{{news.name}}</p>
          <p class="item-desc ellipsis">{{news.simpleDesc}}</p>
          <p class="item-price">￥{{news.retailPrice}}</p>
        </div>
      </li>
      <li class="home-new-item more">
        <div  class="item-more">
          <span>查看全部</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Scroll from 'better-scroll'
  export default {
    props:['itemList'],
    data () {
      return {
        classes: ['status-gradientPrice','status-anniversary','status-anniversary']
      }
    },
    watch:{
      itemList (val) {
        this.$nextTick(()=> {
          this._newItemScroll()
        })
      }
    },
    methods: {
      _newItemScroll () {
        const length = this.itemList.length+1
        const liWidth = 280
        const space = 30
        this.$refs.newUl.style.width = (liWidth + space) * length - space + 'px'
        new Scroll(this.$refs.newWarpper, {
          scrollX: true,//水平滑动
          click: true
        })
      },
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../assets/stylus/mixin.styl"
  .home-new-warpper
    height (480/$rem)
    .home-new-content
      margin (10/$rem)
      white-space nowrap
      overflow hidden
      .home-new-item
        display inline-block
        width (280/$rem)
        margin-left (30/$rem)
        position relative
        &.more
          height (280/$rem)
        .item-more
          position absolute
          margin auto
          font-size (30/$rem)
          color #666
        .new-item-img
          position relative
          width (280/$rem)
          height (280/$rem)
          & img
            background #ffff
            width 100%
            height 100%
          .item-text
            position absolute
            top 0
            left 0
            padding (12/$rem) 0
            margin-left (10/$rem)
            margin-top (10/$rem)
            color #b4a078
            font-size (20/$rem)
            width (20/$rem)
            text-align center
            border (2/$rem) solid #b4a078
            border-radius (2/$rem)
        .new-item-content
          width 100%
          font-size (33/$rem)
          line-height (31/$rem)
          color #333
          margin-top (15/$rem)
          p
            padding 0 (10/$rem)
          .item-name
            margin (20/$rem) 0
          .item-desc
            font-size (30/$rem)
            margin (10/$rem) 0  (14/$rem)
            color #7f7f7f
          .item-price
            color #b4282d
          .status-tag
            width 100%
            height (30/$rem)
            font-size (26/$rem)
            color #fff
            margin 0 0 (16/$rem)
            p
              display inline-block
              padding (1/$rem) (15/$rem)
            .status-anniversary
              background-color #e5686d
            .status-gradientPrice
              background-color #f48f18
</style>
