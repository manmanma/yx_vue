<template>
  <div class="topic-wrapper">
    <div class="topic-container">
      <!--头部-->
      <HomeHead/>
      <!--轮播图-->
      <div class="topic-swiper">
        <div class="swiper-container" v-if="topicdata.banner">
          <div class="swiper-wrapper">
            <div class="swiper-slide"  v-for="(banner,index) in topicdata.banner" :key="banner.id">
                <a href="javascript:;">
                  <img :src="banner.picUrl" alt="">
                </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <!--严选推荐文章-->
      <div class="topic-column-wrapper">
        <div class="column-container" ref="columnUl" >
          <div class="column-item" v-for="(column, index) in topicdata.column" :key="index">
                <div class="column-img">
                  <img :src="column.picUrl" :alt="column.title">
                </div>
                <div class="column-title">
                  <span>{{column.title}}</span>
                </div>
                <div class="column-content">
                  <span>{{column.articleCount}}</span>
                </div>
              </div>
        </div>
      </div>
      <!--为你推荐-->
      <Recommend :recList="topicdata.recommend"/>
      <!--十点一刻-->
      <div class="topic-tenfifteen-wrapper">
        <div class="tenfifteen-title"><h3>十点一刻</h3></div>
        <div class="tenfifteen-wrapper">
          <div class="tenfifteen-container" ref="tenUl">
            <div class="tenfifteen-item" v-for="(ten, index) in topicdata.tenfifteen" :key="index">
              <div class="tenfifteen-item-name"><span>今日话题</span></div>
              <div class="tenfifteen-item-title"><h3>{{ten.title}}</h3></div>
              <div class="tenfifteen-item-desc"><span>{{ten.desc}}</span></div>
              <div class="temfifteen-item-personinfo clearFix">
                <ul class="item-avatars clearFix" v-if="ten.participantAvatar">
                  <li class="item-avatar" v-for="(avatar, index) in ten.participantAvatar" :key="index">
                    <img src="../../assets/images/person.png" alt="avatar" v-if="avatar===null" >
                    <img :src="avatar" alt="avatar" v-else>
                  </li>
                </ul>
                <span class="item-count">ssss人参与话题</span>
              </div>
            </div>
            <div class="tenfifteen-item more ">
            <div class="item-more-content">
              <span class="item-more-text">查看全部话题</span>
              <i class="iconfont icon-more"></i>
            </div>

          </div>
          </div>
        </div>
      </div>
      <!--严选臻品-->
      <Recommend :recList="topicdata.zhen"/>
      <!--严选look-->
      <div class="topic-look-wrapper">
        <div class="topic-look-container" v-if="topicdata.yxLook">
          <div class="look-header">
            <h3>严选look</h3>
          </div>
          <div class="look-info">
            <div class="look-img">
              <img :src="topicdata.yxLook.picUrl" alt="look">
            </div>
            <div class="look-userinfo">
              <div class="look-user">
                <div class="look-avatar">
                  <img src="topicdata.yxLook.avatar" alt="">
                </div>
                <div class="look-username">{{topicdata.yxLook.nickname}}</div>
              </div>
              <div class="look-desc">
                {{topicdata.yxLook.content}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--更多精彩-->
      <MoreList :findMore="topicdata.findMore" v-if="topicdata.findMore"/>
    </div>
  </div>
</template>
<script>
  import Scroll from 'better-scroll'
  import Swiper  from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  import HomeHead from '../../components/header/header.vue'
  import Recommend from './recommend/index.vue'
  import MoreList from './moreList/index.vue'
  export default {
    mounted () {
      this.$store.dispatch('getTopicData',()=>{
        this.$nextTick(()=> {
          this._bannerScroll()
          this._initScroll ()
          this._tenScroll ()
        })
      })

    },
    methods: {
      _bannerScroll () {
        new Swiper ('.swiper-container', {
          loop : true,
          slidesPerView: 1.15,
          centeredSlides: true,
          //autoplay: true
        })
      },
      _initScroll () {
        const length = this.topicdata.column.length
        const liWidth = 174
        const space = 10
        this.$refs.columnUl.style.width = (liWidth + space) * length - space + 'px'
        new Scroll('.topic-column-wrapper', {
          scrollX: true,//水平滑动
          click: true
        })
      },
      _tenScroll () {
        const length = this.topicdata.tenfifteen.length+1
        const liWidth = 600
        const space = 30
        const width =  (liWidth + space) * length - space
        this.$refs.tenUl.style.width = width  + 'px'
        this.tenScroll = new Scroll('.tenfifteen-wrapper', {
          scrollX: true,//水平滑动
          click: true,
          probeType: 3,
        })
        this.tenScroll.on('scroll', ({x,y})=> {
          //console.log(x)
        })
      }
    },
    computed: {
      ...mapState(['topicdata'])
    },
    components: {
      HomeHead,
      Recommend,
      MoreList,
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/mixin.styl"
  .topic-wrapper
    width 100%
    height 100%
    padding-bottom (98/$rem)
    .topic-container
      background-color #fff
      width 100%
      height 100%

      .topic-swiper
        margin-top (88/$rem)
        padding (10/$rem) 0
        background-color #fff
        box-sizing border-box
        width 100%
        .swiper-container
          background-color transparent
          .swiper-wrapper
            .swiper-slide
              background-color #fff
              a
                display block
                width (690/$rem)
                padding 0 (20/$rem)
                img
                  width 100%
                  height (385/$rem)
                  border-radius (8/$rem)
      .topic-column-wrapper
        width 100%
        height (226/$rem)
        .column-container
          background-color #fff
          width 100%
          height 100%
          padding 0 (10/$rem)
          white-space nowrap
          overflow hidden
          .column-item
            position relative
            width (164/$rem)
            margin-right (24/$rem)
            display inline-block
            .column-img
              width (164/$rem)
              height (164/$rem)
              padding (10/$rem) 0
              &>img
                width 100%
                height 100%
                border-radius (10/$rem)
            .column-title
              width (164/$rem)
              font-size (24/$rem)
              line-height (30/$rem)
              color #333
              text-align center
            .column-content
              position absolute
              top (10/$rem)
              right 0
              font-size (20/$rem)
              line-height (32/$rem)
              text-align right
              color #fff
              background-color #999
              border-radius (5/$rem)
              &>span
                padding 0 (5/$rem)
      .topic-recommend-wrapper
        padding 0 (30/$rem) (40/$rem)
        width (690/$rem)
        .topic-recommend-container
          width 100%
          .recommend-header
            width 100%
            .rec-title
              background-color #fff
              width 100%
              height (120/$rem)
              font-size (32/$rem)
              text-align center
              line-height (120/$rem)
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
          .recommend-content
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




      .topic-tenfifteen-wrapper
        padding 0 (30/$rem) (40/$rem)
        width (690/$rem)
        background-color #fff
        .tenfifteen-title
          background-color #fff
          width 100%
          height (120/$rem)
          font-size (32/$rem)
          text-align center
          line-height (120/$rem)
        .tenfifteen-wrapper
          margin-top (10/$rem)
          width (690/$rem)
          height (570/$rem)
          .tenfifteen-container
            width (690/$rem)
            height (570/$rem)
            white-space nowrap
            overflow hidden
            .tenfifteen-item
              position relative
              display inline-block
              vertical-align top
              width (500/$rem)
              height (294/$rem)
              padding (38/$rem) (40/$rem) (79/$rem) (40/$rem)
              background-image url("../../assets/images/ten.png")
              background-repeat no-repeat
              margin-right (30/$rem)
              &.more
                text-align center
                .item-more-content
                  position absolute
                  top 30%
                  left 30%
                  .item-more-text
                    font-size (32/$rem)
                    line-height  (38/$rem)
                    margin-right (17/$rem)
                    color #7f7f7f
                  .icon-more
                    color #7f7f7f
                    font-size (30/$rem)
              .tenfifteen-item-name
                text-align center
                display flex
                align-items center
                justify-content center
                margin-bottom (40/$rem)
                &::before
                  content ''
                  display block
                  width (24/$rem)
                  height (1/$rem)
                  background-color #7f7f7f
                &::after
                  content ''
                  display block
                  width (24/$rem)
                  height (1/$rem)
                  background-color #7f7f7f
                &>span
                  color #7f7f7f
                  margin 0 (8/$rem)
                  font-size (28/$rem)
                  line-height  (30/$rem)
              .tenfifteen-item-title
                font-size (36/$rem)
                line-height (44/$rem)
                font-weight 700
                text-align center
                margin-bottom (14/$rem)
              .tenfifteen-item-desc
                font-size (28/$rem)
                line-height (40/$rem)
                text-align center
              .temfifteen-item-personinfo
                .item-avatars
                  float left
                  margin-left (30/$rem)
                  margin-right (16/$rem)
                  .item-avatar
                    width (48/$rem)
                    height  (48/$rem)
                    float left
                    border-radius 50%
                    border 1px solid #fff
                    &>img
                      width 100%
                      height 100%
                      border-radius 50%
                .item-count
                  float left
                  color #7f7f7f
                  font-size (24/$rem)
                  line-height  (100/$rem)

      .topic-look-wrapper
        width 100%
        .topic-look-container
          width 100%
          .look-header
            background-color #fff
            width 100%
            height (120/$rem)
            font-size (32/$rem)
            text-align center
            line-height (120/$rem)

          .look-info
            .look-img
              width (750/$rem)
              height (750/$rem)
              &>img
                width 100%
                height 100%
          .look-userinfo
            width (690/$rem)
            height (260/$rem)
            padding (24/$rem) (30/$rem) (45/$rem) (30/$rem)
            //box-sizing border-box
            .look-user
              width (690/$rem)
              height (46/$rem)
              margin-bottom (20/$rem)
              display flex
              align-items center
              .look-avatar
                width (48/$rem)
                height (48/$rem)
                margin-right (8/$rem)
                &>img
                  width 100%
                  height 100%
                  border-radius 50%
              .look-username
                color #333
                font-size (24/$rem)
                line-height  (28/$rem)
            .look-desc
              font-size (28/$rem)
              line-height (45/$rem)
              color #7f7f7f


</style>
