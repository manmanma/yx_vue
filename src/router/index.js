import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/home.vue'
import Topic from '../pages/topic/topic.vue'
import Cate from '../pages/cate/cate.vue'
import Cart from '../pages/cart/cart.vue'
import Ucenter from '../pages/ucenter/ucenter.vue'
import Login from '../pages/login/login.vue'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta:{
        isShow:true
      },
    },
    {
      path: '/topic',
      component: Topic,
      meta:{
        isShow:true
      },
    },
    {
      path: '/catelist',
      component: Cate,
      meta:{
        isShow:true
      },
    },
    {
      path: '/cart',
      component: Cart,
      meta:{
        isShow:true
      },
    },
    {
      path: '/ucenter',
      component: Ucenter,
      meta:{
        isShow:true
      },
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home',
    },
  ]
})
