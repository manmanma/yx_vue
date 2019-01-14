<template>
  <div class="login-wrapper">
    <div class="login-container">
      <HomeHeader/>
      <div class="login-img">
        <img src="../../assets/images/yx.png" alt="">
      </div>
      <div class="toggle-login" v-if="isShow === 1">
        <button class="iphone-btn" @click="toggleLogin(2)">手机号登录</button>
        <button class="email-btn" @click="toggleLogin(3)">邮箱账号登录</button>
      </div>
      <div class="login_content" v-if="isShow===2">
          <section class="login_msg_mobile">
            <input type="text"  placeholder="手机号" maxlength="11" v-model="phone">
            <button :disabled="!isRightPhone || computeTime > 0" class="get_code" :class="{on: isRightPhone && computeTime ===0}" @click.prevent="getCode">
              {{computeTime > 0  ? `已发送(${computeTime}s)` : '获取验证码'}}
            </button>
          </section>
          <section class="login_msg_code">
            <input type="text"  v-model="code" placeholder="验证码" >
          </section>
          <section class="login_hint">
            <a href="javascript:;">忘记密码？</a>
          </section>
          <button class="submit_login login-btn" @click="login">登录</button>
          <button class="toggle-btn login-btn" @click="toggleLogin(1)">切换登录方式</button>
      </div>
      <div  class="login_content" v-if="isShow===3">
        <section class="login_msg_username">
          <input type="text"  v-model="name" placeholder="邮箱">
        </section>
        <section class="login_msg_pwd">
          <input :type="isShowPwd ? 'text': 'password' "  v-model="pwd" placeholder="密码" >
          <div class="switch_button" :class="isShowPwd ? 'on': 'off'" @click="isShowPwd=!isShowPwd">
            <div class="switch_circle" :class="isShowPwd ? 'right': ''"></div>
            <span class="switch_text">{{isShowPwd ? 'abc': ''}}</span>
          </div>
        </section>
        <section class="login_msg_captcha">
          <input type="text" v-model="captcha" placeholder="验证码" maxlength="6">
          <img src="http://localhost:4000/captcha" alt="验证码" class="get_captcha" @click="getCaptcha">
        </section>
        <button class="submit_login login-btn" @click="login">登录</button>
        <button class="toggle-btn login-btn" @click="toggleLogin(1)">切换登录方式</button>
      </div>
    </div>
  </div>
</template>
<script>
  import {Toast, MessageBox} from 'mint-ui'
  import {reqSendCode, reqPwdLogin} from  '../../api/index'
  import HomeHeader from '../../components/header/header.vue'
  export default {
    data() {
      return {
        isShow: 1, // 2 手机登录 3 邮箱登录
        phone: '',
        code: '',
        name: '',
        pwd: '',
        captcha: '',
        isShowPwd: false,
        computeTime: 0,//发送短信倒计时
      }
    },
    methods: {
      toggleLogin (isShow) {
        this.isShow = isShow
      },
      //弹出框
      showAlert(alertText) {
        MessageBox.alert(alertText,'提示')
      },
      //获取短信验证码
      async getCode () {
        if(this.isRightPhone){
          this.computeTime = 30
          this.interValId = setInterval(()=>{
            if(this.computeTime<= 0){
              this.computeTime = 0
              clearInterval(this.interValId)
              return
            }
            this.computeTime--
          },1000)
          //发送短信验证码
          const data = await reqSendCode(this.phone)
          if(data.code===0){
            console.log('发送成功')
            console.log(data.data)
          }else{
            console.log(data.msg)
            this.computeTime = 0
          }
        }
      },
      //登录
      async login () {
        let result
        if(this.isShow === 2) {//手机登录
          const {isRightPhone, phone, code} = this
          if(!isRightPhone){
            Toast('请填写正确的手机号')
            return false
          }else if(!/^\d{6}$/.test(code)) {
            this.showAlert('验证码输入错误')
            return false
          }
          result = await reqSmsLogin({phone, code})
        }else if( this.isShow === 3) {
          const {name, pwd, captcha} = this
          const reg = /^([a-zA-Z0-9_\-\.]+\@[a-zA-Z0-9_\-\.]+\.[a-zA-Z]{2,8})$/
          if(!name){
            this.showAlert('邮箱不能为空')
            return false
          }else if(!reg.test(name)){
            this.showAlert('邮箱格式错误')
            return false
          }else if(!pwd) {
            console.log('密码不能为空')
            return false
          }else if(!captcha){
            this.showAlert('验证码输入错误')
            return false
          }
          result = await reqPwdLogin({name, pwd, captcha})
        }
        console.log(result)
        //停止倒计时
        this.computeTime = 0
        if(result.code===0){
          //登录成功
          Toast('登录成功')
          //将用户登录信息保存到state中
          const user = result.data
          this.$store.dispatch('saveUserInfo',user)
          //跳转到首页
          this.$router.replace('/home')
        }else{
          //登录失败
          Toast(result.msg)
        }
      },
      //获取图形验证码
      getCaptcha () {
        event.target.src = 'http://localhost:4000/captcha?time='+Date.now()
      }
    },
    computed: {
      isRightPhone () {
        return /^1\d{10}$/.test(this.phone)
      }
    },
    components: {
      HomeHeader
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/mixin.styl"
  .mint-toast
    font-size (36/$rem)
    padding (20/$rem)
  .mint-msgbox
    font-size (36/$rem)
    line-height (80/$rem)
  .login-wrapper
    width 100%
    height 100%
    padding-bottom (98/$rem)
    .login-container
      background-color #fff
      width 100%
      height 100%
      .login-img
        margin (200/$rem) 0
        box-sizing border-box
        padding 0 (200/$rem)
        background-color #fff
        text-align center
        &>img
          width (268/$rem)
          height (90/$rem)
      .toggle-login
        padding 0 (40/$rem)
        margin-top (100/$rem)
        text-align center
        button
          width (666/$rem)
          height (99/$rem)
          display block
          border-radius (10/$rem)
          border 1px solid #b4282d
          font-size (30/$rem)
          text-align center
          margin-bottom (30/$rem)
        .iphone-btn
          background-color #b4282d
          color #fff
        .email-btn
          background-color #fff
          color #b4282d
      .login_content
        padding 0 (30/$rem)
        section
          position relative
          height (100/$rem)
          margin-top (20/$rem)
          .get_code,.get_captcha
            position absolute
            right (20/$rem)
            top 50%
            transform translateY(-50%)
            color #ccc
            font-size (36/$rem)
            border 0
            background transparent
            &.on
              color #000
          &>input
            width 100%
            height 100%
            padding-left (20/$rem)
            box-sizing border-box
            border-radius (8/$rem)
            font 400 (28/$rem) Arial
            outline 0
            &:focus
              border (1/$rem) solid $topicC
          .switch_button
            position absolute
            right (20/$rem)
            top 50%
            transform translateY(-50%)
            font-size (24/$rem)
            width (60/$rem)
            height (32/$rem)
            line-height (32/$rem)
            border-radius (8/$rem)
            border (1/$rem) solid #ddd
            padding 0 (6/$rem)
            transition background .3s border-color .3s
            &.off
              background white
            .switch_text
              color #ddd
            &.on
              background $topicC
            .switch_circle
              position absolute
              top (-1/$rem)
              left (-1/$rem)
              width (32/$rem)
              height (32/$rem)
              line-height (32/$rem)
              background white
              border-radius 50%
              border (1/$rem)solid #ddd
              box-shadow 0 (4/$rem) (4/$rem) 0 rgba(0, 0, 0, .1)
              &.right
                transform translateX((32/$rem))
          &.login_hint
            margin-top (24/$rem)
            color #999
            font-size (24/$rem)
            line-height (48/$rem)
            >a
              font-size (24/$rem)
        .login-btn
          width (666/$rem)
          height (99/$rem)
          display block
          border-radius (10/$rem)
          border 1px solid #b4282d
          font-size (30/$rem)
          text-align center
          margin-bottom (30/$rem)
        .submit_login
          background-color #b4282d
          color #fff
        .toggle-btn
          background-color #fff
          color #b4282d
</style>
