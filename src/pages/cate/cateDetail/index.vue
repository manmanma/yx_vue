<template>
  <div class="cate-list-wrapper" ref="listWrap">
    <div class="cate-list-container clearFix"  v-if="cateDetail">
      <div class="cate-list-header">
        <img v-lazy="cateDetail.bannerUrl" alt="">
      </div>
      <div class="cate-list-content">
        <div class="cate-item" v-for="(cate, index) in cateDetail.subCateList" :key="index">
          <div class="item-list-img">
            <img v-lazy="cate.bannerUrl" alt="">
          </div>
          <div class="item-title">
            <span>{{cate.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Scroll from 'better-scroll'
  export default {
    methods: {
      _initScroll() {
        this.scroll = new Scroll (this.$refs.listWrap, {
          scrollY: true,
          click: true,
        })
      }
    },
    computed: {
      ...mapState(['cateDetail'])
    },
    watch: {
      cateDetail () {
        this.$nextTick(()=>{
          this._initScroll()
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../assets/stylus/mixin.styl"
  .cate-list-wrapper
    margin-left (165/$rem)
    padding (30/$rem) (30/$rem) (21/$rem) (30/$rem)
    overflow hidden
    max-height (1104/$rem)
    .cate-list-container
      width (528/$rem)
      .cate-list-header
        width (528/$rem)
        height (192/$rem)
        &>img
          width 100%
          height 100%
      .cate-list-content
        width (528/$rem)
        .cate-item
          width (144/$rem)
          height (216/$rem)
          float left
          margin-right (25/$rem)
          .item-list-img
            width (144/$rem)
            height (144/$rem)
            &>img
              width 100%
              height 100%
              border-radius 50%
          .item-title
            width (144/$rem)
            font-size (24/$rem)
            text-align center
            line-height (36/$rem)
</style>
