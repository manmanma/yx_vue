import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import VueLazyload from 'vue-lazyload'
import 'lib-flexible/flexible.js'

//引入loading图片
import loading from './assets/images/loadding.gif'
Vue.use(VueLazyload, {
  loading
})
//引入mock 随机数据
import './mock/mockServer'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  render: h=>h(App),
  router,
  store
})
