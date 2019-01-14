<template>
  <div class="home-wrap">
      <div class="home-container">
        <!--头部导航-->
        <div class="home-header">
          <header class="home-head">
            <a href="/home" class="logo">
              <img src="../../assets/images/logo.png" alt="logo">
            </a>
            <div class="home-search">
              <i class="iconfont icon-search"></i>
              <span class="home-search-text">搜索商品,共13118款好物</span>
            </div>
          </header>
          <nav class="home-nav">
            <ul class="home-nav-ul" ref="navUl">
              <li v-for="(nav, index) in navArr" :key="index" class="nav-li" :class="{active: index===0}">
                <a href="javascript:;">{{nav}}</a>
              </li>
            </ul>
          </nav>
        </div>
        <!--轮播图-->
        <div class="home-swiper">
          <div class="swiper-container" v-if="homedata.focusList">
            <div class="swiper-wrapper">
              <ul class="swiper-slide"  v-for="(banner, index) in homedata.focusList" :key="banner.id">
                <li>
                  <a href="javascript:;">
                    <img v-lazy="banner.picUrl" alt="">
                  </a>
                </li>
              </ul>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <!--网易售后服务-->
        <div class="home-grow">
          <ul>
            <li class="grow-item">
              <a href="">
                <i class="iconfont icon-right"></i>
                <span class="item-text">网易自营品牌</span>
              </a>
            </li>
            <li class="grow-item">
              <a href="javascript:;">
                <i class="iconfont icon-right"></i>
                <span class="item-text">30天无忧退货</span>
              </a>
            </li>
            <li class="grow-item">
              <a href="javascript:;">
                <i class="iconfont icon-right"></i>
                <span class="item-text">48小时快速退款</span>
              </a>
            </li>
          </ul>
        </div>
        <!--品牌制造商直供-->
        <div class="home-brand clearFix">
          <header class="brand-head">
            <a href="javascript:;" class="brand-head-title">
              <span>品牌制造商直供</span>
              <i class="iconfont icon-more"></i>
            </a>
          </header>
          <div class="brand-container" v-if="homedata.tagList">
            <ul class="brand-info clearFix">
              <li class="brand-item" v-for="(brand, index) in homedata.tagList" :key="index" v-if="index<=3">
                <a href="javascript:;">
                  <div class="brand-item-info">
                    <h4 class="brand-item-name ellipsis">{{brand.name}}</h4>
                    <div class="brand-item-price">
                      <span class="price1">{{brand.floorPrice}}</span>
                      <span class="price2">元起</span>
                    </div>
                    <span class="brand-item-text" v-if="brand.newOnShelf">上新</span>
                  </div>
                  <img v-lazy="brand.picUrl" :alt="brand.name" class="brand-item-img">
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!--新品首发-->
        <div class="home-new-container">
          <header class="new-header">
            <a href="javascript:;" class="new-more">
              <span class="new-header-title">新品首发</span>
              <div class="new-header-more">
              <span class="new-header-text">
                <span>查看全部</span>
                <i class="iconfont icon-more"></i>
              </span>
              </div>
            </a>
          </header>
          <HomeNew :itemList="homedata.newItemList"/>
        </div>
        <!--人气好物推荐-->
        <div class="home-new-container">
          <header class="new-header popular">
            <a href="javascript:;" class="new-more popular">
              <span class="new-header-title">人气推荐 · 好物精选</span>
              <div class="new-header-more popular">
              <span class="new-header-text">
                <span>查看全部</span>
                <i class="iconfont icon-more"></i>
              </span>
              </div>
            </a>
          </header>
          <HomeNew :itemList="homedata.popularItemList"/>
        </div>
        <!--严选限时购-->
        <div class="home-limit-shop">
          <div class="limit-left">
            <div class="limit-title">严选限时购</div>
            <div class="limit-time">
              <span class="time" v-text="hours"></span>
              <span>:</span>
              <span class="time" v-text="minutes"></span>
              <span>:</span>
              <span class="time" v-text="seconds"></span>
            </div>
            <div class="limit-next"><span class="next-text">下一场14:00开始</span></div>
          </div>
          <div class="limit-right">
            <img src="../../assets/images/limit-sale.png" alt="sale" class="limit-shop-img">
            <div class="limit-price">
              <p class="limit-new-price">￥355</p>
              <p class="limit-old-price">￥499</p>
            </div>
          </div>
        </div>
        <!--福利社-->
        <div class="home-sale">
          <a href="#" class="sale-img"></a>
        </div>
        <!--专题精选-->
        <HomeTopic :topicList="homedata.topicList" v-if="homedata.topicList"/>
        <!--分类显示-->
        <HomeCate :cateList="homedata.cateList" v-if="homedata.cateList"/>
      </div>
      <footer class="home-footer">
        <div class="home-footer-container">
          <div class="footer-top clearFix">
            <a href="javascript:;">下载App</a>
            <a href="javascript:;">电脑版</a>
          </div>
          <p>网易公司版权所有 © 1997-2018</p>
          <p>食品经营许可证：JY13301080111719</p>
        </div>
      </footer>
    </div>
</template>
<script>
  import Scroll from 'better-scroll'
  import Swiper  from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  import HomeNew from './newItem/index.vue'
  import HomeCate from './cateList/index.vue'
  import HomeTopic from './topic/index.vue'
  export default {
    data() {
      return {
        hours: 11,
        minutes: '00',
        seconds: '00',
        navArr: ['推荐', '居家', '鞋包配饰', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色'],
      }
    },
    mounted () {
      this.$store.dispatch('getHomeData',()=>{
        this.$nextTick(()=>{
          this._initScroll()
          this._bannerScroll()
          this.getTime()
        })
      })
    },
    methods: {
      _bannerScroll () {
        new Swiper ('.swiper-container', {
          loop: true,
          autoplay: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
        })
      },
      _initScroll () {
        const length = this.navArr.length
        const liWidth = 120
        const space = 5
        this.$refs.navUl.style.width = (liWidth + space) * length - space + 'px'
        new Scroll('.home-nav', {
          scrollX: true,//水平滑动
          click: true
        })
      },
      getTime(){
        const end = Date.parse(new Date('2018-09-11 14:00:00'))
        const now = Date.parse(new Date())
        const disSec= end - now
        let hr = parseInt(disSec / 1000 / 60 / 60 % 24)
        let min = parseInt(disSec / 1000 / 60 % 60)
        let sec = parseInt(disSec / 1000 % 60)
        this.hours = hr > 9 ? hr : '0' + hr
        this.minutes = min > 9 ? min : '0' + min
        this.seconds = sec > 9 ? sec : '0' + sec
        const that = this
        setTimeout(function () {
          that.getTime()
        }, 1000)
      },
    },
    computed: {
      ...mapState(['homedata'])
    },
    components: {
      HomeNew,
      HomeCate,
      HomeTopic
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../assets/stylus/mixin.styl'
.home-wrap
  width 100%
  overflow hidden
  padding-bottom (98/$rem)
  background #fff
  .home-container
    position relative
    .home-header
      position fixed
      top 0
      left 0
      z-index 100
      background #fff
      .home-head
        width (750/$rem)
        height (88/$rem)
        padding (5/$rem)
        display flex
        align-items center
        justify-content center
        .logo
          height (40/$rem)
          flex 1
          padding (30/$rem)
          &>img
            width 100%
            height 100%
        .home-search
          flex 4
          height (56/$rem)
          text-align center
          line-height (24/$rem)
          background-color #ededed
          border-radius (20/$rem)
          margin-top (15/$rem)
          .iconfont
            font-size (28/$rem)
            margin-right (5/$rem)
            color #666
          .home-search-text
            font-size (28/$rem)
            color #666
      .home-nav
        //height (40/$rem)
        .home-nav-ul
          white-space nowrap
          overflow hidden
          .nav-li
            position relative
            display inline-block
            width (80/$rem)
            text-align center
            margin 0 (20/$rem)
            padding-bottom (20/$rem)
            font-size (24/$rem)
            text-align center
            &>a
              color #333
            &.active
              color $bgcolor
              &::after
                content ''
                position: absolute;
                left 0
                bottom 0
                width 100%
                height (3/$rem)
                background $bgcolor
    .home-swiper
      margin-top (200/$rem)
      background-color #fff
      .swiper-container
        background-color white
        width 100%
        height (400/$rem)
        .swiper-slide
          width 100%
          height 100%
          li
            width 100%
            height 100%
            >a
              width 100%
              height 100%
              img
                width 100%
        .swiper-pagination-bullet
          width (40/$rem)
          height (8/$rem)
          background pink
          opacity .4
          border-radius 0
        .swiper-pagination-bullet-active
          opacity 1
    .home-grow
      width 100%
      height (70/$rem)
      background-color #fff
      line-height (70/$rem)
      padding 0 (20/$rem)
      .grow-item
        float left
        width 33%
        font-size (24/$rem)
        &>a
          color #333
          .iconfont
            font-size (32/$rem)
            margin 0 (5/$rem)
            color $bgcolor
          .item-text
            font-size (24/$rem)

    .home-brand
      width 100%
      background #fff
      margin-bottom (20/$rem)
      .brand-head
        width 100%
        height (110/$rem)
        line-height (110/$rem)
        text-align center
        background #fff
        .brand-head-title
          width 100%
          display block
          color #333
          font-size (36/$rem)
          .iconfont
            font-size (34/$rem)
      .brand-container
        width 100%
        .brand-info
          width 100%
          margin (10/$rem)
          .brand-item
            float left
            width (355/$rem)
            height (230/$rem)
            margin (3/$rem)
            background #fff
            position relative
            &>a
              color #333
              font-size (33/$rem)
              .brand-item-info
                position absolute
                top 0
                left 0
                padding (20/$rem) 0 0 (20/$rem)
                z-index 4
                .brand-item-price
                  margin (15/$rem) 0
                  .price2
                    font-size (26/$rem)
                .brand-item-text
                  display block
                  font-size (24/$rem)
                  width (66/$rem)
                  height (32/$rem)
                  text-align center
                  line-height (32/$rem)
                  color #b4a078
                  border (2/$rem) solid #b4a078
                  border-radius (2/$rem)
              .brand-item-img
                width 100%
                height 100%
    .home-new-container
      margin-bottom (20/$rem)
      background #fff
      .new-header
        height (260/$rem)
        background-image url("../../assets/images/new-header-bg.png")
        background-repeat no-repeat
        background-size (750/$rem) (260/$rem);
        margin-bottom (32/$rem)
        &.popular
          background-image url("../../assets/images/popular-bg.png")
        .new-more
          display block
          color #8BA0B6
          text-align center
          font-size (40/$rem)
          padding-top (100/$rem)
          &.popular
            color #B4A078
          .new-header-more
            width (240/$rem)
            height (56/$rem)
            margin (16/$rem) auto 0
            font-size (30/$rem)
            line-height (56/$rem)
            background #D8E5F1
            &.popular
              background #F4E9CB
            .new-header-text
              display inline-block
              text-align left
              position relative
              .icon-more
                position absolute
                display inline-block
                font-size (20/$rem)
                top (3/$rem)
                left (128/$rem)
                width (9/$rem)
                height (22/$rem)

    .home-limit-shop
      width 100%
      height (380/$rem)
      background #fff
      padding (30/$rem) (40/$rem) (30/$rem) (56/$rem)
      margin-bottom (20/$rem)
      .limit-left
        float left
        width (334/$rem)
        height (320/$rem)
        margin-right (20/$rem)
        padding-top (80/$rem)
        font-size (36/$rem)
        color #333
        .limit-title
          line-height (36/$rem)
          margin-bottom (20/$rem)
          letter-spacing (10/$rem)
          margin-bottom (30/$rem)
        .limit-time
          font-size (40/$rem)
          line-height (56/$rem)
          margin-bottom (30/$rem)
          .time
            display inline-block
            width (62/$rem)
            height (56/$rem)
            background-color #444
            border-radius (10/$rem)
            text-align center
            color #fff

        .limit-next
          font-size (27/$rem)
      .limit-right
        position relative
        float left
        width (320/$rem)
        height (320/$rem)
        .limit-shop-img
          width 100%
          height 100%
        .limit-price
          position absolute
          bottom (40/$rem)
          right (30/$rem)
          width (96/$rem)
          height (96/$rem)
          border-radius 50%
          background-color rgba(244,143,24,.95)
          color #fff
          font-size (24/$rem)
          text-align center
          line-height (30/$rem)
          .limit-new-price
            margin-top (20/$rem)
          .limit-old-price
            text-decoration line-through
    .home-sale
      margin-bottom (20/$rem)
      background #fff
      .sale-img
        display block
        width 100%
        height (300/$rem)
        background-image url("../../assets/images/sale.jpg")
        background-size cover
        background-position center
        background-repeat no-repeat

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
              //margin-right (5/$rem)
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
  .home-footer
    top-border-1px(rgba(0,0,0,.15))
    width 100%
    height (243/$rem)
    background-color #414141
    box-sizing border-box
    .home-footer-container
      padding (54/$rem) (20/$rem) (28/$rem) (20/$rem)
      .footer-top
        padding (20/$rem) (40/$rem)
        font-size (30/$rem)
        width 80%
        text-align center
        & a
          display inline-block
          width (170/$rem)
          height (60/$rem)
          font-size (24/$rem)
          line-height (60/$rem)
          text-align center
          border 1px solid #999
          color #fff
          margin-left (20/$rem)
      & p
        font-size (27/$rem)
        line-height (30/$rem)
        text-align center
        color #999
  </style>
