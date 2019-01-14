<template>
  <div class="cate-wrapper">
    <div class="cate-header">
        <div class="cate-head-container">
          <i class="iconfont icon-search"></i>
          <span class="cate-search-text">搜索商品,共13118款好物</span>
        </div>
      </div>
    <div class="cate-container">
      <div class="cate-nav-wrapper" ref="cateWrap" >
        <ul class="cate-nav-container" v-if="catedata" ref="cateUl">
          <li class="nav-item" :class="{active: cateCurrentIndex===index}"
              v-for="(nav, index) in catedata" :key="index" @click="handleCurrent(index)" >
            <a href="javascript:;" class="nav-name">{{nav.name}}</a>
          </li>
        </ul>
      </div>
      <cateDetail />
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Scroll from 'better-scroll'
  import cateDetail from './cateDetail/index.vue'
  export default {
    mounted(){
        this.$store.dispatch('getCateData',()=>{
          this.$nextTick(()=>{
            this._initScroll()
            this.$store.dispatch('getCateDetail')
          })
      })
    },
    computed: {
      ...mapState(['catedata','cateDetail','cateCurrentIndex']),
    },
    methods: {
      handleCurrent (index) {
        this.$store.dispatch('setCurrentIndex',index)
        this.$store.dispatch('getCateDetail')
      },
      _initScroll () {
        const liLength = this.catedata.length;
        const liHeight = 100;
        this.$refs.cateUl.style.height = liLength * liHeight+'px';
        this.initscroll = new Scroll (this.$refs.cateWrap,{
          scrollY: true,
          click: true
        })
        //console.log(this.initscroll)
      },
    },
    components: {
      cateDetail,
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/mixin.styl"
  .cate-wrapper
    width 100%
    height 100%
    padding-bottom (98/$rem)
    .cate-header
      position fixed
      top 0
      left 0
      z-index 100
      padding (20/$rem)
      background-color #fff
      border (1/$rem) solid #999
      .cate-head-container
        width (690/$rem)
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
        .cate-search-text
          font-size (28/$rem)
          color #666
    .cate-container
      position relative
      margin-top (111/$rem)
      .cate-nav-wrapper
        position fixed
        top (111/$rem)
        left 0
        overflow hidden
        max-height (1104/$rem)
        width (163/$rem)
        border (1/$rem) solid #999
        z-index 10
        .cate-nav-container
          .nav-item
            position relative
            width (162/$rem)
            height (50/$rem)
            margin-top (40/$rem)
            text-align center
            .nav-name
              display block
              color #333
              font-size (28/$rem)
              line-height (50/$rem)
            &.active
              &::before
                content ''
                position absolute
                top 0
                left 0
                width (6/$rem)
                height (50/$rem)
                background-color #ab2b2b
              .nav-name
                color #ab2b2b
</style>
