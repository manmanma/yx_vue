<template>
  <footer class="footer-container">
    <router-link to="/home" class="footer-item" replace>
      <span class="footer-iconfont">
        <i class="iconfont icon-home"></i>
      </span>
      <span class="footer-title">首页</span>
    </router-link>
    <router-link to="/topic" class="footer-item" replace>
      <span class="footer-iconfont">
        <i class="iconfont icon-topic"></i>
      </span>
      <span class="footer-title">识物</span>
    </router-link>
    <router-link to="/catelist" class="footer-item" replace>
      <span class="footer-iconfont">
        <i class="iconfont icon-cate"></i>
      </span>
      <span class="footer-title">分类</span>
    </router-link>
    <router-link to="/cart" class="footer-item" replace>
      <span class="footer-iconfont">
        <i class="iconfont icon-cart"></i>
      </span>
      <span class="footer-title">购物车</span>
    </router-link>
    <router-link to="/login" class="footer-item" :class="{active: $router.path === '/login'}" replace>
      <span class="footer-iconfont">
        <i class="iconfont icon-ucenter"></i>
      </span>
      <span class="footer-title">个人</span>
    </router-link>
  </footer>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../assets/stylus/mixin.styl'
  .footer-container
    bottom-border-1px(#d9d9d9)
    position fixed
    bottom 0
    left 0
    width 100%
    height (98/$rem)
    display flex
    justify-content space-around
    background #fff
    margin-top (-98/$rem)
    .footer-item
      display flex
      flex 1
      flex-direction column
      align-items center
      justify-content space-around
      &.router-link-active
        color #b4282d
      .iconfont
        font-size (40/$rem)
      .footer-title
        font-size (24/$rem)
</style>
