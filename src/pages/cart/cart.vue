<template>
  <div class="cart-wrapper">
    <div class="cart-container">
      <header class="cart-header">
        <a href="javascript:;" class="cart-title">购物车</a>
        <a href="javascript:;" class="cart-coupon">领券</a>
      </header>
      <nav class="home-grow">
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
      </nav>
      <div class="cart-content">
        <div class="cart-img">
        </div>
        <div class="cart-text">添加点什么吧</div>
        <button class="cart-btn" @click="goLogin()">登录</button>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      goLogin () {
        this.$router.replace('/login')
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/mixin.styl"
  .cart-wrapper
    padding-bottom (98/$rem)
    .cart-container
      position relative
      .cart-header
        width 100%
        height (89/$rem)
        padding 0 (30/$rem)
        margin-bottom (20/$rem)
        display flex
        align-items center
        a
          display block
          text-align center
          &.cart-title
            flex 4
            font-size (36/$rem)
            color #333
          &.cart-coupon
            flex 1
            color #B4282D
            font-size (30/$rem)

      .home-grow
        height (70/$rem)
        background-color #fff
        line-height (70/$rem)
        padding 0 (30/$rem)
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

      .cart-content
        position absolute
        top 50%
        left 50%
        transform translate( -50%, -50%)
        background-color #fff
        margin (500/$rem) 0
        height (300/$rem)
        .cart-img
          display inline-block
          margin-left (124/$rem)
          background-image url('../../assets/images/cart-bg.png')
          background-repeat no-repeat
          background-position center center
          width (248/$rem)
          height (248/$rem)
          margin-bottom (20/$rem)
        .cart-text
          font-size (24/$rem)
          color #999
          text-align center
          line-height (1/$rem)
          margin-bottom (20/$rem)
        .cart-btn
          width (480/$rem)
          height (92/$rem)
          line-height (92/$rem)
          background-color $bgcolor
          font-size (30/$rem)
          color #fff
</style>
