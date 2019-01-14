<template>
  <div id="app">
    <keep-alive><router-view/></keep-alive>
    <Footer v-if="$route" v-show="$route.meta.isShow"/>
  </div>
</template>
<script>
import Footer from './components/footer/footer.vue'
export default {
  components: {
    Footer,
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
</style>
