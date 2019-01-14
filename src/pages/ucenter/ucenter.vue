<template>
  <div class="ucenter-wrapper">
    <div class="ucenter-container">
      <HomeHeader/>
      <div>
        个人中心
      </div>
    </div>
  </div>
</template>
<script>
  import HomeHeader from '../../components/header/header.vue'
  export default {
    components: {
      HomeHeader
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/mixin.styl"
  .ucenter-wrapper
    width 100%
    height 100%
    padding-bottom (98/$rem)
    .ucenter-container
      background-color #fff
      width 100%
      height 100%
</style>
