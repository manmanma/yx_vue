<template>
  <header class="header">
    <div class="header-item">
      <a href="/#/home" class="home"><i class="iconfont icon-home"></i></a>
    </div>
    <div class="header-item">
      <a href="/home" class="logo"><img src="../../assets/images/logo.png" alt="logo"></a>
    </div>
    <div class="header-item home-right">
      <a href="/home" class="search"><i class="iconfont icon-search"></i></a>
      <a href="/#/cart" class="cart"><i class="iconfont icon-cart"></i></a>
    </div>
  </header>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/mixin.styl"
  .header
    position fixed
    top 0
    left 0
    z-index 100
    width 100%
    height (88/$rem)
    background-color #fff
    display flex
    align-items center
    justify-content space-between
    padding 0 (16/$rem) 0 (24/$rem)
    .header-item
      flex 1
      a
        display block
        .iconfont
          font-size (64/$rem)
      &.home-right
        display flex
        justify-content center
</style>
